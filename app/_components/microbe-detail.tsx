import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMicrobe } from "@/lib/db";
import { SECTIONS, type SectionKey } from "@/lib/sections";
import { titleCase } from "@/lib/labels";

export async function microbeMetadata(
  sectionKey: SectionKey,
  slug: string,
): Promise<Metadata> {
  const item = await getMicrobe(sectionKey, slug);
  if (!item) return { title: "Not found // VESTRIPPN3.0" };
  return {
    title: `${item.scientific_name} // VESTRIPPN3.0`,
    description: item.description,
  };
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-soft rounded-2xl p-5">
      <dt className="text-tech text-[10px] text-muted">{label}</dt>
      <dd className="mt-2 text-lg font-bold text-foreground">{value}</dd>
    </div>
  );
}

export default async function MicrobeDetail({
  sectionKey,
  slug,
}: {
  sectionKey: SectionKey;
  slug: string;
}) {
  const section = SECTIONS[sectionKey];
  const item = await getMicrobe(sectionKey, slug);
  if (!item) notFound();

  const badge = section.primaryBadge(item);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pb-20 pt-12">
      <Link
        href={section.listPath}
        className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/60"
      >
        ← Back to {section.navLabel.toLowerCase()}
      </Link>

      <section className="glass mt-7 rounded-3xl p-7 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-tech text-[11px]">
              <span className="text-muted">{section.navLabel} {"//"}</span>{" "}
              <span className="text-accent">Decoded</span>
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {item.name}
            </h1>
            <p className="mt-2 font-mono text-base italic text-muted">
              {item.scientific_name}
            </p>
          </div>
          <span className="font-mono text-sm font-bold text-accent">
            #{String(item.id).padStart(3, "0")}
          </span>
        </div>

        <div className="mt-5">
          <span
            className={`rounded-full border px-3.5 py-1 text-sm font-semibold ${badge.className}`}
          >
            {badge.label}
          </span>
        </div>

        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {section.facets.map((f) => (
            <Stat
              key={f.param}
              label={f.label}
              value={titleCase(String(item[f.column]))}
            />
          ))}
        </dl>

        <div className="glass-inset mt-8 rounded-2xl p-6">
          <h2 className="text-tech mb-3 text-[10px] text-muted">
            Pokédex entry
          </h2>
          <p className="text-base leading-7 text-foreground">
            {item.description}
          </p>
        </div>
      </section>
    </main>
  );
}
