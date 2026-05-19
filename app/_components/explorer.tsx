import Link from "next/link";
import type { FacetGroup } from "@/lib/db";
import {
  SECTION_ORDER,
  SECTIONS,
  type GenericRecord,
  type SectionKey,
} from "@/lib/sections";

function buildHref(
  listPath: string,
  active: Record<string, string | undefined>,
  patch: Record<string, string | undefined>,
): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries({ ...active, ...patch })) {
    if (value) params.set(key, value);
  }
  const qs = params.toString();
  return qs ? `${listPath}?${qs}` : listPath;
}

export default function Explorer({
  sectionKey,
  active,
  items,
  facets,
}: {
  sectionKey: SectionKey;
  active: Record<string, string | undefined>;
  items: GenericRecord[];
  facets: { total: number; groups: FacetGroup[] };
}) {
  const section = SECTIONS[sectionKey];
  const hasFilters = Object.values(active).some(Boolean);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
      <section className="flex flex-col items-center text-center">
        <span className="shadow-soft inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-semibold text-foreground">
          <span aria-hidden>📍</span> {section.navLabel} Grid
        </span>

        <h1 className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          <span className="rounded-2xl bg-foreground px-4 py-2 italic text-surface">
            {"///MICROBE"}
          </span>
          <span>Pokedex</span>
        </h1>

        <p className="text-tech mt-6 text-xs sm:text-sm">
          <span className="text-muted">{section.navLabel} {"//"}</span>{" "}
          <span className="text-accent">{section.eyebrow}</span>
        </p>

        <nav className="shadow-soft mt-7 flex items-center gap-0.5 rounded-full border border-border bg-surface p-1">
          {SECTION_ORDER.map((key) => {
            const s = SECTIONS[key];
            const isActive = key === sectionKey;
            return (
              <Link
                key={key}
                href={s.listPath}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-foreground text-surface"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {s.navLabel}
              </Link>
            );
          })}
        </nav>

        <span className="shadow-soft mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-semibold text-accent">
          <span aria-hidden>⚡</span> Database Synced ·{" "}
          <span className="font-mono">
            {String(facets.total).padStart(2, "0")}
          </span>{" "}
          {section.navLabel.toLowerCase()}
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
            {section.facets.map((f) =>
              active[f.param] ? (
                <input
                  key={f.param}
                  type="hidden"
                  name={f.param}
                  value={active[f.param]}
                />
              ) : null,
            )}
            <input
              type="search"
              name="q"
              defaultValue={active.q ?? ""}
              placeholder={section.searchPlaceholder}
              className="w-full rounded-xl border border-border bg-field px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-xl bg-accent px-6 py-2.5 text-sm font-bold text-accent-ink transition-colors hover:bg-accent-strong"
            >
              Scan
            </button>
          </form>

          {facets.groups.map((group) => (
            <div key={group.param}>
              <h3 className="text-tech mb-3 text-[10px] text-muted">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.counts.map(({ value, count }) => {
                  const isActive = active[group.param] === value;
                  const href = buildHref(section.listPath, active, {
                    [group.param]: isActive ? undefined : value,
                  });
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
                      {value}
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
          ))}
        </div>

        {hasFilters && (
          <div className="mt-5 flex justify-end">
            <Link
              href={section.listPath}
              className="rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              Clear filters
            </Link>
          </div>
        )}
      </section>

      <div className="mt-10">
        {items.length === 0 ? (
          <p className="text-tech py-20 text-center text-xs text-muted">
            No {section.navLabel.toLowerCase()} match these filters.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const badge = section.primaryBadge(item);
              return (
                <li key={item.slug}>
                  <Link
                    href={`${section.detailPath}/${item.slug}`}
                    className="shadow-soft hover:shadow-card group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-foreground">
                          {item.name}
                        </h3>
                        <p className="font-mono text-xs italic text-muted">
                          {item.scientific_name}
                        </p>
                      </div>
                      <span className="font-mono text-xs font-semibold text-accent">
                        #{String(item.id).padStart(3, "0")}
                      </span>
                    </div>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                      {section.tags(item).map((tag) => (
                        <span
                          key={tag}
                          className="text-tech rounded-full border border-border px-2.5 py-0.5 text-[10px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="line-clamp-3 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}

export function buildActive(
  sectionKey: SectionKey,
  sp: Record<string, string | string[] | undefined>,
): Record<string, string | undefined> {
  const one = (v: string | string[] | undefined) => {
    const x = Array.isArray(v) ? v[0] : v;
    return x && x.length > 0 ? x : undefined;
  };
  const active: Record<string, string | undefined> = { q: one(sp.q) };
  for (const f of SECTIONS[sectionKey].facets) {
    active[f.param] = one(sp[f.param]);
  }
  return active;
}
