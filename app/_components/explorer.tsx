import Link from "next/link";
import type { FacetGroup } from "@/lib/db";
import {
  SECTIONS,
  type GenericRecord,
  type SectionKey,
} from "@/lib/sections";
import FacetFilter from "./facet-filter";
import SearchForm from "./search-form";
import SectionNav from "./section-nav";
import { TIER_META, type Tier } from "@/lib/tiers";

// Facets with more distinct values than this get an inline text filter and a
// collapsed "+N more" expander so the chip row stays scannable.
const SEARCHABLE_LIMIT = 12;

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

  // Removable pills for the "Active" bar — each links to the same view with
  // that one filter dropped, so the current path is always visible and undoable.
  const activeFacetPills = facets.groups
    .filter((g) => active[g.param])
    .map((g) => ({
      param: g.param,
      label: g.label,
      value: active[g.param] as string,
      removeHref: buildHref(section.listPath, active, { [g.param]: undefined }),
    }));
  const searchPill = active.q
    ? {
        value: active.q,
        removeHref: buildHref(section.listPath, active, { q: undefined }),
      }
    : null;

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-8 sm:px-6 sm:pt-10">
      <section className="glass rounded-[2rem] p-5 sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-3 py-1 text-sm font-semibold text-foreground">
              <span aria-hidden>{section.emoji}</span>
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
            <SearchForm
              listPath={section.listPath}
              hidden={section.facets
                .filter((f) => active[f.param])
                .map((f) => ({
                  name: f.param,
                  value: active[f.param] as string,
                }))}
              placeholder={`Search ${section.navLabel.toLowerCase()}…`}
              query={active.q ?? ""}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-glass-border pt-4 text-tech text-[10px] text-muted">
          <span className="rounded-full bg-glass px-3 py-1">
            {items.length} showing
          </span>
          <span className="rounded-full bg-glass px-3 py-1">
            {section.facets.length} trait sets
          </span>
          <span className="rounded-full bg-glass px-3 py-1">
            {activeFilters.length} active filters
          </span>
        </div>
      </section>

      {/* ----- Section tabs (full width) ----- */}
      <SectionNav active={sectionKey} />

      {/* ----- Filter panel ----- */}
      <section
        id="filter"
        className="glass-soft mt-6 scroll-mt-24 rounded-3xl p-4 sm:p-5"
      >
        {/* Active filters — always visible, each pill removes itself. */}
        {searchPill || activeFacetPills.length > 0 ? (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-tech text-[10px] text-muted">Active</span>
            {searchPill ? (
              <Link
                href={searchPill.removeHref}
                aria-label={`Clear search ${searchPill.value}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[13px] font-medium text-accent-strong transition-colors hover:border-accent"
              >
                <span className="text-muted">Search:</span>
                {searchPill.value}
                <span aria-hidden className="text-[11px] opacity-70">
                  ✕
                </span>
              </Link>
            ) : null}
            {activeFacetPills.map((p) => (
              <Link
                key={p.param}
                href={p.removeHref}
                aria-label={`Remove ${p.label} filter: ${p.value}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[13px] font-medium text-accent-strong transition-colors hover:border-accent"
              >
                {p.value}
                <span aria-hidden className="text-[11px] opacity-70">
                  ✕
                </span>
              </Link>
            ))}
            <Link
              href={section.listPath}
              className="rounded-full border border-glass-border bg-glass px-3 py-1 text-[13px] font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
            >
              Clear all
            </Link>
          </div>
        ) : null}

        <details open className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-1 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_1px_var(--accent)]" />
              <span className="font-bold text-foreground">Filters</span>
              <span className="text-tech text-[10px] text-muted/70">
                {section.facets.length} trait sets
              </span>
            </span>
            <span className="text-sm text-muted transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {facets.groups.map((group) => {
              const allHref = buildHref(section.listPath, active, {
                [group.param]: undefined,
              });
              const chips = group.counts.map(({ value, count }) => {
                const isActive = active[group.param] === value;
                return {
                  value,
                  count,
                  active: isActive,
                  href: buildHref(section.listPath, active, {
                    [group.param]: isActive ? undefined : value,
                  }),
                };
              });
              return (
                <FacetFilter
                  key={group.param}
                  label={group.label}
                  chips={chips}
                  allHref={allHref}
                  searchable={group.counts.length > SEARCHABLE_LIMIT}
                />
              );
            })}
          </div>
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
            No {section.navLabel.toLowerCase()} grew on this plate.
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
                    className="glass-soft group flex h-full flex-col rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <span aria-hidden className="text-xl leading-none">
                          {section.entryEmoji(item)}
                        </span>
                        <div>
                          <h3 className="font-bold text-foreground">
                            {item.name}
                          </h3>
                          <p className="font-mono text-xs italic text-muted">
                            {item.scientific_name}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        {tierMeta ? (
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${tierMeta.className}`}
                          >
                            <span aria-hidden>{tierMeta.emoji}</span>
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
