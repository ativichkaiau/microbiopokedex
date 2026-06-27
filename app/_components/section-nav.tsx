import Link from "next/link";
import { SECTION_ORDER, SECTIONS, type SectionKey } from "@/lib/sections";

// Shared clay navigation across all section explorers plus the Cases trainer.
export default function SectionNav({
  active,
}: {
  active: SectionKey | "cases";
}) {
  const tabClass =
    "clay-tab flex w-full items-center justify-center gap-2 px-3.5 py-2 text-sm font-semibold lg:w-auto";

  return (
    <nav aria-label="Pokédex sections" className="mt-7 flex justify-center">
      <div className="clay-tabs grid w-full max-w-3xl grid-cols-2 gap-2 p-2 sm:grid-cols-3 lg:flex lg:w-auto lg:max-w-none">
        {SECTION_ORDER.map((key) => {
          const s = SECTIONS[key];
          const isActive = key === active;
          return (
            <Link
              key={key}
              href={s.listPath}
              aria-current={isActive ? "page" : undefined}
              data-active={isActive}
              data-tone={key}
              className={tabClass}
            >
              <span aria-hidden className="clay-tab-icon">
                {s.emoji}
              </span>
              {s.navLabel}
            </Link>
          );
        })}
        <Link
          href="/cases"
          aria-current={active === "cases" ? "page" : undefined}
          data-active={active === "cases"}
          data-tone="cases"
          className={tabClass}
        >
          <span aria-hidden className="clay-tab-icon">
            🩺
          </span>
          Cases
        </Link>
      </div>
    </nav>
  );
}
