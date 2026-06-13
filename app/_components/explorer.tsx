import Link from "next/link";
import type { FacetGroup } from "@/lib/db";
import {
  SECTIONS,
  type GenericRecord,
  type SectionKey,
} from "@/lib/sections";
import FacetSelect from "./facet-select";
import SectionNav from "./section-nav";
import { TIER_META, type Tier } from "@/lib/tiers";

// Facets with more distinct values than this render as a compact dropdown
// instead of a chip wall.
const CHIP_LIMIT = 16;

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
  const activeFilters = Object.entries(active).filter(([, value]) =>
    Boolean(value),
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-8 sm:px-6 sm:pt-10">
      <section className="glass rounded-2xl p-5 sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-border bg-surface-2 px-3 py-1 text-sm font-semibold text-foreground">
              {section.navLabel}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {section.navLabel} Pokédex
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
              {facets.total} medically relevant {section.navLabel.toLowerCase()}{" "}
              organized by {section.eyebrow.toLowerCase()}.
            </p>
          </div>

          <div className="w-full lg:max-w-sm">
            <form
              method="get"
              action={section.listPath}
              className="flex items-center gap-2 rounded-xl border border-border bg-field px-4 py-3 transition-colors focus-within:border-accent"
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
                placeholder={`Search ${section.navLabel.toLowerCase()}…`}
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                className="rounded-lg bg-foreground px-4 py-1.5 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4 text-tech text-[10px] text-muted">
          <span className="rounded-full bg-surface-2 px-3 py-1">
            {items.length} showing
          </span>
          <span className="rounded-full bg-surface-2 px-3 py-1">
            {section.facets.length} trait sets
          </span>
          <span className="rounded-full bg-surface-2 px-3 py-1">
            {activeFilters.length} active filters
          </span>
        </div>
      </section>

      {/* ----- Section tabs (full width) ----- */}
      <SectionNav active={sectionKey} />

      {/* ----- Filter panel ----- */}
      <section
        id="filter"
        className="glass-soft mt-6 scroll-mt-24 rounded-2xl p-4 sm:p-5"
      >
        <details open={hasFilters} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-1 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-3">
              <span className="font-bold text-foreground">Filters</span>
              {hasFilters ? (
                <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-ink">
                  {activeFilters.length}
                </span>
              ) : null}
            </span>
            <span className="text-sm text-muted transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>

        <div className="mt-4 space-y-1.5 rounded-xl border border-border bg-surface-2 p-3 sm:p-4">
          {facets.groups.map((group, idx) => {
            const activeValue = active[group.param];

            // High-cardinality facets → compact dropdown.
            if (group.counts.length > CHIP_LIMIT) {
              const allHref = buildHref(section.listPath, active, {
                [group.param]: undefined,
              });
              const options = group.counts.map(({ value, count }) => ({
                value,
                count,
                href: buildHref(section.listPath, active, {
                  [group.param]: value,
                }),
              }));
              const activeHref = activeValue
                ? buildHref(section.listPath, active, {
                    [group.param]: activeValue,
                  })
                : allHref;
              return (
                <FacetSelect
                  key={group.param}
                  label={group.label}
                  options={options}
                  allHref={allHref}
                  activeHref={activeHref}
                  total={group.counts.length}
                />
              );
            }

            // Keep the primary organizer open; collapse the rest unless one
            // holds an active filter (so deep-linked queries stay visible).
            const open = idx === 0 || Boolean(activeValue);
            return (
              <details
                key={group.param}
                open={open}
                className="group rounded-lg px-3 py-2 transition-colors open:bg-surface"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-2">
                    <span className="text-tech text-[10px] text-muted">
                      {group.label}
                    </span>
                    {activeValue ? (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-medium text-accent-ink">
                        {activeValue}
                      </span>
                    ) : (
                      <span className="text-tech text-[10px] text-muted/50">
                        {group.counts.length}
                      </span>
                    )}
                  </span>
                  <span
                    aria-hidden
                    className="text-xs text-muted transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <div className="mt-3 flex flex-wrap gap-1.5">
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
                        className={`rounded-full border px-3 py-1 text-[13px] font-medium transition-colors ${
                          isActive
                            ? "border-accent bg-accent text-accent-ink"
                            : "border-border bg-surface text-foreground hover:border-accent/60"
                        }`}
                      >
                        {value}
                        <span
                          className={`ml-1.5 font-mono text-[10px] ${
                            isActive ? "opacity-70" : "text-muted"
                          }`}
                        >
                          {count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>

        {hasFilters && (
          <div className="mt-4 flex justify-end">
            <Link
              href={section.listPath}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
            >
              Clear filters
            </Link>
          </div>
        )}
        </details>
      </section>

      {/* ----- Result grid ----- */}
      <div id="grid" className="mt-8 scroll-mt-24">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-tech text-[10px] text-muted">Results</p>
            <h2 className="text-xl font-bold text-foreground">
              {items.length} {section.navLabel.toLowerCase()}
            </h2>
          </div>
          {hasFilters ? (
            <Link
              href={section.listPath}
              className="text-sm font-medium text-accent hover:underline"
            >
              Reset
            </Link>
          ) : null}
        </div>
        {items.length === 0 ? (
          <p className="text-tech py-20 text-center text-xs text-muted">
            No {section.navLabel.toLowerCase()} match these filters.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const badge = section.primaryBadge(item);
              const tier = String(item.tier) as Tier;
              const tierMeta = TIER_META[tier];
              return (
                <li key={item.slug}>
                  <Link
                    href={`${section.detailPath}/${item.slug}`}
                    className="glass-soft group flex h-full flex-col rounded-xl p-4 transition-colors hover:border-accent/40"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-foreground">
                          {item.name}
                        </h3>
                        <p className="font-mono text-xs italic text-muted">
                          {item.scientific_name}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        {tierMeta ? (
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${tierMeta.className}`}
                          >
                            {tierMeta.short}
                          </span>
                        ) : null}
                        <span className="font-mono text-xs font-semibold text-accent">
                          #{String(item.id).padStart(3, "0")}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                      {section.tags(item).slice(0, 2).map((tag) => (
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
