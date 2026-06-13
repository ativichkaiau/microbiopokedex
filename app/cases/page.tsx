import type { Metadata } from "next";
import SectionNav from "@/app/_components/section-nav";
import CaseTrainer, { type CaseView } from "@/app/_components/case-trainer";
import { CASES } from "@/lib/case-data";
import { SECTIONS } from "@/lib/sections";

export const metadata: Metadata = {
  title: "Case Bench // VESTRIPPN3.0",
  description:
    "Case-based learning: solve clinical vignettes and reveal the organism or drug, with a link to its full pokédex entry.",
};

// Resolve each case's answer + distractor slugs to display names and detail
// links, then alphabetize so the correct option is not always first.
function buildView(c: (typeof CASES)[number]): CaseView {
  const section = SECTIONS[c.section];
  const bySlug = new Map(section.rows.map((r) => [r.slug, r.name]));
  const options = [c.answer, ...c.distractors].map((slug) => ({
    slug,
    name: bySlug.get(slug) ?? slug,
    href: `${section.detailPath}/${slug}`,
    correct: slug === c.answer,
  }));
  options.sort((a, b) => a.name.localeCompare(b.name));
  return {
    id: c.id,
    prompt: c.prompt,
    explanation: c.explanation,
    sectionLabel: section.navLabel,
    sectionEmoji: section.emoji,
    options,
  };
}

export default function CasesPage() {
  const views = CASES.map(buildView);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pb-20 pt-12">
      <section className="flex flex-col items-center text-center">
        <span className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-foreground">
          <span aria-hidden>🩺</span> Case Bench
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Read the chart, name the{" "}
          <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
            bug
          </span>
          .
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base">
          {CASES.length} clinical vignettes across bacteria, viruses, fungi,
          parasites, and pharmacology. Pick an answer, reveal the teaching
          point, and jump to the full entry.
        </p>
      </section>

      <SectionNav active="cases" />

      <CaseTrainer cases={views} />
    </main>
  );
}
