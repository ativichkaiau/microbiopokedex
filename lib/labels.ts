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
    default:
      return BLUE;
  }
}
