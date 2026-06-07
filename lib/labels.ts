// Presentation helpers shared by the list and detail pages.

export function titleCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// Gram-positive cells retain crystal violet (purple); gram-negative take the
// safranin counterstain (pink). Rendered as faint console-style chips so they
// sit with the rest of the matrix UI.
export function gramStainClasses(gramStain: string): string {
  switch (gramStain) {
    case "positive":
      return VIOLET;
    case "negative":
      return PINK;
    default:
      return AMBER;
  }
}

export function gramStainLabel(gramStain: string): string {
  if (gramStain === "variable") return "Gram-variable";
  return `Gram-${gramStain}`;
}

const VIOLET =
  "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-300";
const PINK =
  "border-pink-500/30 bg-pink-500/10 text-pink-700 dark:border-pink-400/30 dark:bg-pink-400/10 dark:text-pink-300";
const AMBER =
  "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300";
const BLUE =
  "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300";
const TEAL = "border-accent/40 bg-accent/10 text-accent-strong";
const ROSE =
  "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-300";
const CYAN =
  "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300";
const EMERALD =
  "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300";
const INDIGO =
  "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300";
const SKY =
  "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300";
const LIME =
  "border-lime-500/30 bg-lime-500/10 text-lime-700 dark:border-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300";
const FUCHSIA =
  "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-700 dark:border-fuchsia-400/30 dark:bg-fuchsia-400/10 dark:text-fuchsia-300";
const SLATE =
  "border-slate-500/30 bg-slate-500/10 text-slate-700 dark:border-slate-400/30 dark:bg-slate-400/10 dark:text-slate-300";

// DNA viruses vs RNA viruses.
export function virusGenomeClasses(genome: string): string {
  return genome === "DNA" ? BLUE : VIOLET;
}

// Fungal growth form.
export function fungiMorphologyClasses(morphology: string): string {
  switch (morphology) {
    case "yeast":
      return TEAL;
    case "mold":
      return BLUE;
    default:
      return AMBER;
  }
}

// Broad parasite group.
export function parasiteGroupClasses(group: string): string {
  switch (group) {
    case "Helminth":
      return AMBER;
    case "Ectoparasite":
      return PINK;
    default:
      return VIOLET;
  }
}

// Drug category.
export function drugCategoryClasses(category: string): string {
  switch (category) {
    case "Antiviral":
      return VIOLET;
    case "Antifungal":
      return TEAL;
    case "Antiparasitic":
      return AMBER;
    case "Autonomic":
      return INDIGO;
    case "Cardiovascular":
      return ROSE;
    case "Diuretic":
      return CYAN;
    case "Antineoplastic":
      return FUCHSIA;
    case "CNS":
      return SLATE;
    case "Respiratory":
      return SKY;
    case "Gastrointestinal":
      return LIME;
    case "Endocrine":
      return EMERALD;
    default:
      return BLUE;
  }
}
