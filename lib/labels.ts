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
      return "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-300";
    case "negative":
      return "border-pink-500/30 bg-pink-500/10 text-pink-700 dark:border-pink-400/30 dark:bg-pink-400/10 dark:text-pink-300";
    default:
      return "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300";
  }
}

export function gramStainLabel(gramStain: string): string {
  if (gramStain === "variable") return "Gram-variable";
  return `Gram-${gramStain}`;
}
