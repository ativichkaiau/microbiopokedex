import Link from "next/link";
import { getFacetCounts, listBacteria, type FacetCount } from "@/lib/db";
import { gramStainClasses, gramStainLabel, titleCase } from "@/lib/labels";

type SearchParams = { [key: string]: string | string[] | undefined };

const FILTER_KEYS = ["gramStain", "shape", "arrangement", "q"] as const;

function one(value: string | string[] | undefined): string | undefined {
  const v = Array.isArray(value) ? value[0] : value;
  return v && v.length > 0 ? v : undefined;
}

function buildHref(
  active: Record<string, string | undefined>,
  patch: Record<string, string | undefined>,
): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries({ ...active, ...patch })) {
    if (value) params.set(key, value);
  }
  const qs = params.toString();
  return qs ? `/?${qs}` : "/";
}

function FacetGroup({
  title,
  paramKey,
  counts,
  active,
}: {
  title: string;
  paramKey: "gramStain" | "shape" | "arrangement";
  counts: FacetCount[];
  active: Record<string, string | undefined>;
}) {
  return (
    <div>
      <h3 className="text-tech mb-3 text-[10px] text-muted">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {counts.map(({ value, count }) => {
          const isActive = active[paramKey] === value;
          const href = buildHref(active, {
            [paramKey]: isActive ? undefined : value,
          });
          const label =
            paramKey === "gramStain" ? gramStainLabel(value) : titleCase(value);
          return (
            <Link
              key={value}
              href={href}
              aria-pressed={isActive}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "shadow-soft border-accent bg-accent text-accent-ink"
                  : "border-border bg-surface text-foreground hover:border-accent/60"
              }`}
            >
              {label}
              <span
                className={`ml-1.5 font-mono text-[11px] ${
                  isActive ? "opacity-70" : "text-muted"
                }`}
              >
                {count}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const active = {
    gramStain: one(sp.gramStain),
    shape: one(sp.shape),
    arrangement: one(sp.arrangement),
    q: one(sp.q),
  };

  const [bacteria, facets] = await Promise.all([
    listBacteria(active),
    getFacetCounts(),
  ]);

  const hasFilters = FILTER_KEYS.some((k) => active[k]);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
      <section className="flex flex-col items-center text-center">
        <span className="shadow-soft inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-semibold text-foreground">
          <span aria-hidden>📍</span> Specimen Grid
        </span>

        <h1 className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          <span className="rounded-2xl bg-foreground px-4 py-2 italic text-surface">
            {"///GRAM"}
          </span>
          <span>Screening Matrix</span>
        </h1>

        <p className="text-tech mt-6 text-xs sm:text-sm">
          <span className="text-muted">Specimen_Index //</span>{" "}
          <span className="text-accent">Morphology Protocol Engaged</span>
        </p>

        <span className="shadow-soft mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-semibold text-accent">
          <span aria-hidden>⚡</span> Database Synced ·{" "}
          <span className="font-mono">
            {String(facets.total).padStart(2, "0")}
          </span>{" "}
          specimens
        </span>
      </section>

      <section className="shadow-card mt-12 rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-blue" />
          <h2 className="text-lg font-bold text-foreground">Filter Stream</h2>
          <span className="text-tech rounded-full bg-blue-soft px-2.5 py-1 text-[10px] text-blue">
            Live DB
          </span>
        </div>

        <div className="space-y-7 rounded-2xl border border-border bg-surface-2 p-5 sm:p-6">
          <form method="get" className="flex gap-2.5">
            {active.gramStain && (
              <input type="hidden" name="gramStain" value={active.gramStain} />
            )}
            {active.shape && (
              <input type="hidden" name="shape" value={active.shape} />
            )}
            {active.arrangement && (
              <input
                type="hidden"
                name="arrangement"
                value={active.arrangement}
              />
            )}
            <input
              type="search"
              name="q"
              defaultValue={active.q ?? ""}
              placeholder="Search specimens…"
              className="w-full rounded-xl border border-border bg-field px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-xl bg-accent px-6 py-2.5 text-sm font-bold text-accent-ink transition-colors hover:bg-accent-strong"
            >
              Scan
            </button>
          </form>

          <FacetGroup
            title="Gram stain"
            paramKey="gramStain"
            counts={facets.gramStain}
            active={active}
          />
          <FacetGroup
            title="Shape"
            paramKey="shape"
            counts={facets.shape}
            active={active}
          />
          <FacetGroup
            title="Arrangement"
            paramKey="arrangement"
            counts={facets.arrangement}
            active={active}
          />
        </div>

        {hasFilters && (
          <div className="mt-5 flex justify-end">
            <Link
              href="/"
              className="rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              Clear filters
            </Link>
          </div>
        )}
      </section>

      <div className="mt-10">
        {bacteria.length === 0 ? (
          <p className="text-tech py-20 text-center text-xs text-muted">
            No specimens match these filters.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bacteria.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/bacteria/${b.slug}`}
                  className="shadow-soft hover:shadow-card group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-foreground">{b.name}</h3>
                      <p className="font-mono text-xs italic text-muted">
                        {b.scientific_name}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-semibold text-accent">
                      #{String(b.id).padStart(3, "0")}
                    </span>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${gramStainClasses(
                        b.gram_stain,
                      )}`}
                    >
                      {gramStainLabel(b.gram_stain)}
                    </span>
                    <span className="text-tech rounded-full border border-border px-2.5 py-0.5 text-[10px] text-muted">
                      {b.shape}
                    </span>
                    <span className="text-tech rounded-full border border-border px-2.5 py-0.5 text-[10px] text-muted">
                      {b.arrangement}
                    </span>
                  </div>
                  <p className="line-clamp-3 text-sm leading-6 text-muted">
                    {b.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
