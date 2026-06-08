"use client";

import { useRouter } from "next/navigation";

export type FacetOption = { value: string; count: number; href: string };

// Compact dropdown for high-cardinality facets (drug class, target, virus
// family) where a chip wall would be unusable. Navigates on selection,
// preserving the other active filters via precomputed hrefs.
export default function FacetSelect({
  label,
  options,
  allHref,
  activeHref,
  total,
}: {
  label: string;
  options: FacetOption[];
  allHref: string;
  activeHref: string;
  total: number;
}) {
  const router = useRouter();
  return (
    <label className="flex items-center justify-between gap-3 rounded-xl px-3 py-2">
      <span className="text-tech text-[10px] text-muted">{label}</span>
      <select
        value={activeHref}
        onChange={(e) => router.push(e.target.value)}
        className="max-w-[60%] truncate rounded-lg border border-glass-border bg-glass px-2.5 py-1 text-[13px] text-foreground outline-none transition-colors focus:border-accent"
      >
        <option value={allHref}>All · {total}</option>
        {options.map((o) => (
          <option key={o.value} value={o.href}>
            {o.value} ({o.count})
          </option>
        ))}
      </select>
    </label>
  );
}
