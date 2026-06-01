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

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function todayLabel(): string {
  const d = new Date();
  return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

const BULLETS = ["Auto-synced", "In-browser DB", "Typed filters", "Deep links"];

function Stat({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="glass-soft rounded-2xl p-4">
      <p className="text-tech text-[10px] text-muted">{label}</p>
      <p
        className={`mt-2 text-lg font-bold ${valueClass ?? "text-foreground"}`}
      >
        {value}
      </p>
    </div>
  );
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
      <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        {/* ----- Hero ----- */}
        <div className="lg:col-span-7">
          <span className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-foreground">
            <span aria-hidden>📍</span> {section.navLabel} Grid
          </span>

          <div className="relative mt-6">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 top-1/2 -z-10 h-24 w-72 max-w-full -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              <span className="shadow-card rounded-2xl bg-foreground px-3.5 py-1.5 italic text-surface">
                {"///MICROBE"}
              </span>
              <span>Pokedex</span>
            </div>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Screen {section.navLabel.toLowerCase()} at the pace of your{" "}
            <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
              protocol
            </span>
            .
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base">
            A curated pokédex of medically notable {section.navLabel.toLowerCase()},
            indexed by {section.eyebrow.toLowerCase()}. Filter the matrix,
            search by name, and deep-link any query — all served from an
            in-browser Postgres.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="#filter"
              className="text-tech inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[11px] text-surface shadow-card transition-opacity hover:opacity-90"
            >
              Start Scanning
            </Link>
            <Link
              href="#grid"
              className="text-tech glass-soft inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] text-foreground transition-colors hover:border-accent/50"
            >
              View Index <span aria-hidden>↗</span>
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-tech text-[10px] text-muted">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="text-accent">•</span> {b}
              </li>
            ))}
          </ul>
        </div>

        {/* ----- Info card (Operator Dashboard) ----- */}
        <aside className="glass rounded-3xl p-6 lg:col-span-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-tech text-[10px] text-muted">
                Live Operations
              </p>
              <h2 className="mt-1 text-lg font-bold text-foreground">
                Operator Dashboard
              </h2>
            </div>
            <span className="text-tech rounded-full bg-blue-soft px-2.5 py-1 text-[10px] text-blue">
              Day_Cycle
            </span>
          </div>

          <div className="glass-inset mt-5 rounded-2xl p-5">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span aria-hidden>🎯</span>
                <span className="font-bold text-foreground">
                  Active Protocol
                </span>
              </div>
              <span className="text-tech text-[10px] text-muted">
                {todayLabel()}
              </span>
            </div>
            <p className="mt-2 text-sm italic text-muted">
              Tracking {section.facets.length} facet groups · Auto-synced.
            </p>

            <form
              method="get"
              action={section.listPath}
              className="mt-4 flex items-center gap-2 rounded-xl border border-glass-border bg-white/55 px-3 py-2 transition-colors focus-within:border-accent dark:bg-white/5"
            >
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
                placeholder="Deploy new query…"
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                aria-label="Search"
                className="leading-none text-accent text-xl font-light transition-transform hover:scale-110"
              >
                +
              </button>
            </form>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <Stat label="Total" value={String(facets.total)} />
            <Stat label="Categories" value={String(section.facets.length)} />
            <Stat label="Status" value="• Nominal" valueClass="text-accent" />
          </div>
        </aside>
      </section>

      {/* ----- Section tabs (full width) ----- */}
      <nav className="mt-12 flex justify-center">
        <div className="glass-soft flex items-center gap-0.5 rounded-full p-1">
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
        </div>
      </nav>

      {/* ----- Filter panel ----- */}
      <section
        id="filter"
        className="glass mt-8 scroll-mt-24 rounded-3xl p-6 sm:p-8"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-blue shadow-[0_0_12px_2px_var(--blue)]" />
          <h2 className="text-lg font-bold text-foreground">Filter Stream</h2>
          <span className="text-tech rounded-full bg-blue-soft px-2.5 py-1 text-[10px] text-blue">
            Live DB
          </span>
          {active.q ? (
            <span className="text-tech ml-auto text-[10px] text-muted">
              q = &ldquo;{active.q}&rdquo;
            </span>
          ) : null}
        </div>

        <div className="glass-inset space-y-7 rounded-2xl p-5 sm:p-6">
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
                          ? "border-accent bg-accent text-accent-ink shadow-[0_4px_16px_-4px_var(--accent)]"
                          : "border-glass-border bg-glass text-foreground hover:border-accent/60"
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
              className="glass-soft rounded-xl px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
            >
              Clear filters
            </Link>
          </div>
        )}
      </section>

      {/* ----- Result grid ----- */}
      <div id="grid" className="mt-10 scroll-mt-24">
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
                    className="glass-soft hover:shadow-card group flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
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
                          className="text-tech rounded-full border border-glass-border px-2.5 py-0.5 text-[10px] text-muted"
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
