import path from "node:path";
import { PGlite } from "@electric-sql/pglite";
import {
  BACTERIA,
  type Arrangement,
  type GramStain,
  type Shape,
} from "./bacteria-data";

// Embedded Postgres persisted to a local directory. Swap this for a real
// Postgres server later by replacing getDb() with a node-postgres pool — the
// query helpers below speak standard SQL.
const DATA_DIR = path.join(process.cwd(), ".pgdata");

type GlobalWithPg = typeof globalThis & {
  __pglitePokedex?: Promise<PGlite>;
};
const globalForPg = globalThis as GlobalWithPg;

async function init(): Promise<PGlite> {
  const db = new PGlite(DATA_DIR);
  await db.waitReady;

  await db.exec(`
    CREATE TABLE IF NOT EXISTS bacteria (
      id              SERIAL PRIMARY KEY,
      slug            TEXT NOT NULL UNIQUE,
      name            TEXT NOT NULL,
      scientific_name TEXT NOT NULL,
      gram_stain      TEXT NOT NULL,
      shape           TEXT NOT NULL,
      arrangement     TEXT NOT NULL,
      description     TEXT NOT NULL
    );
  `);

  // Idempotent sync: upsert every dataset entry by slug so editing
  // bacteria-data.ts and reloading re-syncs the database.
  for (const b of BACTERIA) {
    await db.query(
      `INSERT INTO bacteria
         (slug, name, scientific_name, gram_stain, shape, arrangement, description)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (slug) DO UPDATE SET
         name            = EXCLUDED.name,
         scientific_name = EXCLUDED.scientific_name,
         gram_stain      = EXCLUDED.gram_stain,
         shape           = EXCLUDED.shape,
         arrangement     = EXCLUDED.arrangement,
         description     = EXCLUDED.description;`,
      [
        b.slug,
        b.name,
        b.scientificName,
        b.gramStain,
        b.shape,
        b.arrangement,
        b.description,
      ],
    );
  }

  return db;
}

function getDb(): Promise<PGlite> {
  // Reuse a single connection across dev hot-reloads.
  globalForPg.__pglitePokedex ??= init();
  return globalForPg.__pglitePokedex;
}

export type BacteriumRecord = {
  id: number;
  slug: string;
  name: string;
  scientific_name: string;
  gram_stain: GramStain;
  shape: Shape;
  arrangement: Arrangement;
  description: string;
};

export type BacteriaFilter = {
  gramStain?: string;
  shape?: string;
  arrangement?: string;
  q?: string;
};

export async function listBacteria(
  filter: BacteriaFilter = {},
): Promise<BacteriumRecord[]> {
  const db = await getDb();
  const where: string[] = [];
  const params: unknown[] = [];

  if (filter.gramStain) {
    params.push(filter.gramStain);
    where.push(`gram_stain = $${params.length}`);
  }
  if (filter.shape) {
    params.push(filter.shape);
    where.push(`shape = $${params.length}`);
  }
  if (filter.arrangement) {
    params.push(filter.arrangement);
    where.push(`arrangement = $${params.length}`);
  }
  if (filter.q) {
    params.push(`%${filter.q.toLowerCase()}%`);
    where.push(
      `(lower(name) LIKE $${params.length} OR lower(scientific_name) LIKE $${params.length})`,
    );
  }

  const sql = `
    SELECT * FROM bacteria
    ${where.length ? `WHERE ${where.join(" AND ")}` : ""}
    ORDER BY id
  `;
  const res = await db.query<BacteriumRecord>(sql, params);
  return res.rows;
}

export async function getBacterium(
  slug: string,
): Promise<BacteriumRecord | null> {
  const db = await getDb();
  const res = await db.query<BacteriumRecord>(
    `SELECT * FROM bacteria WHERE slug = $1`,
    [slug],
  );
  return res.rows[0] ?? null;
}

export type FacetCount = { value: string; count: number };

// Counts per category value, used to label the filter controls.
export async function getFacetCounts(): Promise<{
  gramStain: FacetCount[];
  shape: FacetCount[];
  arrangement: FacetCount[];
  total: number;
}> {
  const db = await getDb();
  const facet = async (column: string) =>
    (
      await db.query<FacetCount>(
        `SELECT ${column} AS value, COUNT(*)::int AS count
         FROM bacteria GROUP BY ${column} ORDER BY count DESC, value`,
      )
    ).rows;

  const [gramStain, shape, arrangement, totalRes] = await Promise.all([
    facet("gram_stain"),
    facet("shape"),
    facet("arrangement"),
    db.query<{ count: number }>(`SELECT COUNT(*)::int AS count FROM bacteria`),
  ]);

  return {
    gramStain,
    shape,
    arrangement,
    total: totalRes.rows[0]?.count ?? 0,
  };
}
