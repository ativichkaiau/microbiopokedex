import Link from "next/link";
import { SECTION_ORDER, SECTIONS, type SectionKey } from "@/lib/sections";

// Shared pill nav across all section explorers plus the Cases trainer.
export default function SectionNav({
  active,
}: {
  active: SectionKey | "cases";
}) {
  const tabClass = (isActive: boolean) =>
    `flex items-center rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
      isActive
        ? "bg-foreground text-surface"
        : "text-muted hover:text-foreground"
    }`;

  return (
    <nav className="mt-6 flex justify-center">
      <div className="flex max-w-full flex-wrap items-center justify-center gap-1 rounded-xl border border-border bg-surface p-1">
        {SECTION_ORDER.map((key) => {
          const s = SECTIONS[key];
          const isActive = key === active;
          return (
            <Link
              key={key}
              href={s.listPath}
              aria-current={isActive ? "page" : undefined}
              className={tabClass(isActive)}
            >
              {s.navLabel}
            </Link>
          );
        })}
        <Link
          href="/cases"
          aria-current={active === "cases" ? "page" : undefined}
          className={tabClass(active === "cases")}
        >
          Cases
        </Link>
      </div>
    </nav>
  );
}
