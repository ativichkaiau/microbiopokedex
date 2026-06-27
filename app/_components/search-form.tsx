"use client";

import { useRouter } from "next/navigation";

// Client-side search box. Submitting navigates with the Next router instead of
// a native GET form post, so the root layout (and the Intro splash) stays
// mounted rather than reloading the whole document on every search.
export default function SearchForm({
  listPath,
  hidden,
  placeholder,
  query,
}: {
  listPath: string;
  hidden: { name: string; value: string }[];
  placeholder: string;
  query: string;
}) {
  const router = useRouter();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = new URLSearchParams();
    for (const { name, value } of hidden) params.set(name, value);
    const q = String(data.get("q") ?? "").trim();
    if (q) params.set("q", q);
    const qs = params.toString();
    router.push(qs ? `${listPath}?${qs}` : listPath);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center gap-2 rounded-2xl border border-glass-border bg-white/55 px-4 py-3 transition-colors focus-within:border-accent dark:bg-white/5"
    >
      <input
        // Reset to the server-provided value when it changes (e.g. after Reset).
        key={query}
        type="search"
        name="q"
        defaultValue={query}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
      />
      <button
        type="submit"
        className="rounded-full bg-foreground px-4 py-1.5 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
      >
        Search
      </button>
    </form>
  );
}
