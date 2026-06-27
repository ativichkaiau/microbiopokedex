"use client";

import Link from "next/link";
import { useState } from "react";

export type FacetChip = {
  value: string;
  count: number;
  href: string;
  active: boolean;
};

const chipClass =
  "clay-chip inline-flex items-center justify-center px-3 py-1 text-[13px] font-semibold";

// One facet rendered as a flat, always-visible row of toggle chips. Long facets
// (drug class, virus family, …) get an inline text filter plus a show-more
// expander so the chip wall stays scannable instead of becoming a dropdown.
export default function FacetFilter({
  label,
  chips,
  allHref,
  searchable = false,
}: {
  label: string;
  chips: FacetChip[];
  allHref: string;
  searchable?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const anyActive = chips.some((c) => c.active);
  const q = query.trim().toLowerCase();
  const matched = q
    ? chips.filter((c) => c.value.toLowerCase().includes(q))
    : chips;

  const COLLAPSED = 12;
  const collapsed = searchable && !expanded && !q && matched.length > COLLAPSED;
  const visible = collapsed ? matched.slice(0, COLLAPSED) : matched;
  const hiddenCount = matched.length - visible.length;

  return (
    <div className="glass-inset rounded-2xl p-3.5">
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <span className="text-tech text-[10px] text-muted">{label}</span>
        {searchable ? (
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter…"
            aria-label={`Filter ${label} options`}
            className="w-24 rounded-full border border-glass-border bg-glass px-2.5 py-1 text-[11px] text-foreground outline-none transition-colors focus:border-accent sm:w-28"
          />
        ) : (
          <span className="text-tech text-[10px] text-muted/50">
            {chips.length}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        <Link
          href={allHref}
          aria-pressed={!anyActive}
          data-active={!anyActive}
          className={chipClass}
        >
          All
        </Link>
        {visible.map((c) => (
          <Link
            key={c.value}
            href={c.href}
            aria-pressed={c.active}
            data-active={c.active}
            className={chipClass}
          >
            {c.value}
            <span
              className={`ml-1.5 font-mono text-[10px] ${
                c.active ? "opacity-70" : "text-muted"
              }`}
            >
              {c.count}
            </span>
          </Link>
        ))}
        {collapsed && hiddenCount > 0 ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="clay-chip border-dashed px-3 py-1 text-[13px] font-semibold"
          >
            +{hiddenCount} more
          </button>
        ) : null}
        {q && matched.length === 0 ? (
          <span className="px-1 py-1 text-[13px] italic text-muted">
            No match for “{query}”.
          </span>
        ) : null}
      </div>

      {searchable && expanded && !q ? (
        <button
          type="button"
          onClick={() => setExpanded(false)}
          className="text-tech mt-2.5 text-[10px] text-accent hover:underline"
        >
          Show less
        </button>
      ) : null}
    </div>
  );
}
