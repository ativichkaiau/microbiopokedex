export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
      <div className="flex flex-col items-center">
        <div className="h-9 w-40 animate-pulse rounded-full bg-surface-2" />
        <div className="mt-7 h-16 w-[28rem] max-w-full animate-pulse rounded-2xl bg-surface-2" />
        <div className="mt-6 h-4 w-72 animate-pulse rounded bg-surface-2" />
      </div>
      <div className="shadow-card mt-12 h-64 animate-pulse rounded-3xl border border-border bg-surface" />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="shadow-soft h-44 animate-pulse rounded-2xl border border-border bg-surface"
          />
        ))}
      </div>
    </main>
  );
}
