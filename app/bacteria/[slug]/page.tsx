import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBacterium } from "@/lib/db";
import { gramStainClasses, gramStainLabel, titleCase } from "@/lib/labels";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = await getBacterium(slug);
  if (!b) return { title: "Not found // VESTRIPPN3.0" };
  return {
    title: `${b.scientific_name} // VESTRIPPN3.0`,
    description: b.description,
  };
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="shadow-soft rounded-2xl border border-border bg-surface p-5">
      <dt className="text-tech text-[10px] text-muted">{label}</dt>
      <dd className="mt-2 text-lg font-bold text-foreground">{value}</dd>
    </div>
  );
}

export default async function BacteriumPage({ params }: Props) {
  const { slug } = await params;
  const b = await getBacterium(slug);
  if (!b) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pb-20 pt-12">
      <Link
        href="/"
        className="shadow-soft inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/60"
      >
        ← Back to grid
      </Link>

      <section className="shadow-card mt-7 rounded-3xl border border-border bg-surface p-7 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-tech text-[11px]">
              <span className="text-muted">Specimen //</span>{" "}
              <span className="text-accent">Decoded</span>
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {b.name}
            </h1>
            <p className="mt-2 font-mono text-base italic text-muted">
              {b.scientific_name}
            </p>
          </div>
          <span className="font-mono text-sm font-bold text-accent">
            #{String(b.id).padStart(3, "0")}
          </span>
        </div>

        <div className="mt-5">
          <span
            className={`rounded-full border px-3.5 py-1 text-sm font-semibold ${gramStainClasses(
              b.gram_stain,
            )}`}
          >
            {gramStainLabel(b.gram_stain)}
          </span>
        </div>

        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat label="Gram stain" value={gramStainLabel(b.gram_stain)} />
          <Stat label="Shape" value={titleCase(b.shape)} />
          <Stat label="Arrangement" value={titleCase(b.arrangement)} />
        </dl>

        <div className="mt-8 rounded-2xl border border-border bg-surface-2 p-6">
          <h2 className="text-tech mb-3 text-[10px] text-muted">
            Pokédex entry
          </h2>
          <p className="text-base leading-7 text-foreground">
            {b.description}
          </p>
        </div>
      </section>
    </main>
  );
}
