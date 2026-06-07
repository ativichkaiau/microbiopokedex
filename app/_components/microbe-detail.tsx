import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMicrobe } from "@/lib/db";
import {
  SECTION_ORDER,
  SECTIONS,
  type SectionKey,
} from "@/lib/sections";
import { DRUGS } from "@/lib/drug-data";
import {
  getMicrobesEffectiveFor,
  getPharmacologyFor,
} from "@/lib/pharmacology-data";
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

function drugBySlug(slug: string) {
  return DRUGS.find((d) => d.slug === slug);
}

function microbeBySectionSlug(section: SectionKey, slug: string) {
  return SECTIONS[section].rows.find((r) => r.slug === slug);
}

function DrugChip({
  slug,
  tone,
}: {
  slug: string;
  tone: "accent" | "warn";
}) {
  const drug = drugBySlug(slug);
  const label = drug?.name ?? titleCase(slug.replace(/-/g, " "));
  const toneClasses =
    tone === "accent"
      ? "border-accent/40 bg-accent/10 text-accent-strong hover:border-accent"
      : "border-pink-500/30 bg-pink-500/10 text-pink-700 hover:border-pink-500/60 dark:border-pink-400/30 dark:bg-pink-400/10 dark:text-pink-300";
  const className = `rounded-full border px-3 py-1 text-sm font-medium transition-colors ${toneClasses}`;
  if (drug) {
    return (
      <Link href={`/pharmacology/${drug.slug}`} className={className}>
        {label}
      </Link>
    );
  }
  return <span className={className}>{label}</span>;
}

function PharmaCard({
  label,
  items,
  tone,
}: {
  label: string;
  items?: string[];
  tone: "accent" | "warn";
}) {
  return (
    <div className="glass-soft rounded-2xl p-5">
      <h3 className="text-tech text-[10px] text-muted">{label}</h3>
      {!items || items.length === 0 ? (
        <p className="mt-3 text-sm italic text-muted">
          Not characterized in this pokédex.
        </p>
      ) : (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((s) => (
            <DrugChip key={s} slug={s} tone={tone} />
          ))}
        </div>
      )}
    </div>
  );
}

function MicrobeCoverage({ drugSlug }: { drugSlug: string }) {
  const matches = getMicrobesEffectiveFor(drugSlug);
  // Systemic (non-antimicrobial) drugs have no microbe map; skip the card
  // entirely rather than showing an empty panel.
  if (matches.length === 0) return null;
  return (
    <div className="glass-soft mt-6 rounded-2xl p-6">
      <h3 className="text-tech text-[10px] text-muted">Microbes covered</h3>
      {
        <div className="mt-4 space-y-5">
          {SECTION_ORDER.filter((k) => k !== "pharmacology").map((k) => {
            const inSection = matches.filter((m) => m.section === k);
            if (inSection.length === 0) return null;
            const sec = SECTIONS[k];
            return (
              <div key={k}>
                <p className="text-tech mb-2 text-[10px] text-accent">
                  {sec.navLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {inSection.map((m) => {
                    const r = microbeBySectionSlug(k, m.slug);
                    const label = (r?.name as string) ?? m.slug;
                    return (
                      <Link
                        key={m.slug}
                        href={`${sec.detailPath}/${m.slug}`}
                        className="rounded-full border border-glass-border bg-glass px-3 py-1 text-sm text-foreground transition-colors hover:border-accent/60"
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      }
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
  const pharma =
    sectionKey === "pharmacology"
      ? undefined
      : getPharmacologyFor(sectionKey, slug);

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
            <h1 className="mt-3 flex items-center gap-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              <span aria-hidden>{section.entryEmoji(item)}</span>
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

      {sectionKey === "pharmacology" ? (
        <MicrobeCoverage drugSlug={slug} />
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <PharmaCard
            label="Resistance Against"
            items={pharma?.resistance}
            tone="warn"
          />
          <PharmaCard
            label="Drug Effective"
            items={pharma?.effective}
            tone="accent"
          />
        </div>
      )}
    </main>
  );
}
