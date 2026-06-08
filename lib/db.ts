import { PGlite } from "@electric-sql/pglite";
import {
  SECTION_ORDER,
  SECTIONS,
  type GenericRecord,
  type SectionDef,
  type SectionKey,
} from "./sections";

// In-memory embedded Postgres, reseeded from the datasets on startup. This
// runs identically on a serverless host (read-only filesystem) and locally.
// Swap getDb() for a node-postgres pool to use a persistent server — the
// query helpers below speak standard SQL.
type GlobalWithPg = typeof globalThis & {
  __pglitePokedex?: Promise<PGlite>;
};
const globalForPg = globalThis as GlobalWithPg;

async function seedSection(db: PGlite, section: SectionDef): Promise<void> {
  const { table, columns, rows } = section;
  const colDefs = columns
    .map((c) => `${c} TEXT NOT NULL`)
    .join(",\n      ");
  await db.exec(`
    CREATE TABLE IF NOT EXISTS ${table} (
      id SERIAL PRIMARY KEY,
      ${colDefs},
      UNIQUE (slug)
    );
  `);

  const placeholders = columns.map((_, i) => `$${i + 1}`).join(", ");
  const updates = columns
    .filter((c) => c !== "slug")
    .map((c) => `${c} = EXCLUDED.${c}`)
    .join(", ");

  for (const row of rows) {
    await db.query(
      `INSERT INTO ${table} (${columns.join(", ")})
       VALUES (${placeholders})
       ON CONFLICT (slug) DO UPDATE SET ${updates};`,
      columns.map((c) => row[c]),
    );
  }
}

async function init(): Promise<PGlite> {
  const db = new PGlite();
  await db.waitReady;
  for (const key of SECTION_ORDER) {
    await seedSection(db, SECTIONS[key]);
  }
  return db;
}

function getDb(): Promise<PGlite> {
  globalForPg.__pglitePokedex ??= init();
  return globalForPg.__pglitePokedex;
}

export type Filter = Record<string, string | undefined> & { q?: string };

export async function listMicrobes(
  sectionKey: SectionKey,
  filter: Filter = {},
): Promise<GenericRecord[]> {
  const section = SECTIONS[sectionKey];
  const db = await getDb();
  const where: string[] = [];
  const params: unknown[] = [];

  for (const facet of section.facets) {
    const value = filter[facet.param];
    if (value) {
      params.push(value);
      where.push(`${facet.column} = $${params.length}`);
    }
  }
  if (filter.q) {
    params.push(`%${filter.q.toLowerCase()}%`);
    where.push(
      `(lower(name) LIKE $${params.length} OR lower(scientific_name) LIKE $${params.length})`,
    );
  }

  const res = await db.query<GenericRecord>(
    `SELECT * FROM ${section.table}
     ${where.length ? `WHERE ${where.join(" AND ")}` : ""}
     ORDER BY id`,
    params,
  );
  return res.rows;
}

export async function getMicrobe(
  sectionKey: SectionKey,
  slug: string,
): Promise<GenericRecord | null> {
  const section = SECTIONS[sectionKey];
  const db = await getDb();
  const res = await db.query<GenericRecord>(
    `SELECT * FROM ${section.table} WHERE slug = $1`,
    [slug],
  );
  return res.rows[0] ?? null;
}

export type FacetCount = { value: string; count: number };
export type FacetGroup = {
  param: string;
  label: string;
  counts: FacetCount[];
};

export async function getSectionFacets(sectionKey: SectionKey): Promise<{
  total: number;
  groups: FacetGroup[];
}> {
  const section = SECTIONS[sectionKey];
  const db = await getDb();

  const groups: FacetGroup[] = [];
  for (const facet of section.facets) {
    const res = await db.query<FacetCount>(
      `SELECT ${facet.column} AS value, COUNT(*)::int AS count
       FROM ${section.table}
       GROUP BY ${facet.column}
       ORDER BY count DESC, value`,
    );
    let counts = res.rows;
    // Tier reads best in pedagogical order, not by count.
    if (facet.param === "tier") {
      const order = ["High yield", "Medium yield", "Good to know", "Demigod"];
      counts = [...counts].sort(
        (a, b) => order.indexOf(a.value) - order.indexOf(b.value),
      );
    }
    groups.push({ param: facet.param, label: facet.label, counts });
  }

  const totalRes = await db.query<{ count: number }>(
    `SELECT COUNT(*)::int AS count FROM ${section.table}`,
  );

  return { total: totalRes.rows[0]?.count ?? 0, groups };
}
