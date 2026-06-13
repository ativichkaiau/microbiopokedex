"use client";

import Link from "next/link";
import { useState } from "react";

export type CaseOption = {
  slug: string;
  name: string;
  href: string;
  correct: boolean;
};

export type CaseView = {
  id: string;
  prompt: string;
  explanation: string;
  sectionLabel: string;
  options: CaseOption[];
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function CaseTrainer({ cases }: { cases: CaseView[] }) {
  // Identity order on first render keeps SSR and hydration in sync; the user
  // can shuffle afterward (event handler, client-only).
  const [order, setOrder] = useState(() => cases.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, answered: 0 });
  const [done, setDone] = useState(false);

  const current = cases[order[pos]];
  const revealed = picked !== null;

  function pick(slug: string, correct: boolean) {
    if (revealed) return;
    setPicked(slug);
    setScore((s) => ({
      correct: s.correct + (correct ? 1 : 0),
      answered: s.answered + 1,
    }));
  }

  function next() {
    if (pos + 1 >= order.length) {
      setDone(true);
      return;
    }
    setPos((p) => p + 1);
    setPicked(null);
  }

  function restart(reshuffle: boolean) {
    setOrder(reshuffle ? shuffle(cases.map((_, i) => i)) : cases.map((_, i) => i));
    setPos(0);
    setPicked(null);
    setScore({ correct: 0, answered: 0 });
    setDone(false);
  }

  if (done) {
    const pct = score.answered
      ? Math.round((score.correct / score.answered) * 100)
      : 0;
    return (
      <section className="glass shadow-card mt-8 rounded-2xl p-8 text-center sm:p-12">
        <p className="text-tech text-[11px] text-accent">{"// Deck complete"}</p>
        <p className="mt-4 text-5xl font-extrabold tracking-tight text-foreground">
          {score.correct}
          <span className="text-muted">/{score.answered}</span>
        </p>
        <p className="mt-2 text-sm text-muted">{pct}% correct</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => restart(true)}
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-bold text-accent-ink transition-colors hover:bg-accent-strong"
          >
            Shuffle &amp; restart
          </button>
          <button
            type="button"
            onClick={() => restart(false)}
            className="glass-soft rounded-lg px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
          >
            Replay in order
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="glass shadow-card mt-8 rounded-2xl p-6 sm:p-8">
      {/* header: progress + score + shuffle */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="text-tech text-[10px] text-muted">
          Case {pos + 1} / {order.length}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-tech text-[10px] text-muted">
            Score{" "}
            <span className="font-mono text-accent">{score.correct}</span>/
            <span className="font-mono">{score.answered}</span>
          </span>
          <button
            type="button"
            onClick={() => restart(true)}
            className="glass-soft text-tech rounded-lg px-3 py-1 text-[10px] text-foreground transition-colors hover:border-accent/50"
          >
            Shuffle
          </button>
        </div>
      </div>

      {/* section chip */}
      <span className="glass-soft inline-flex items-center rounded-lg px-3 py-1 text-[11px] font-semibold text-foreground">
        {current.sectionLabel}
      </span>

      {/* vignette */}
      <p className="mt-4 text-base leading-7 text-foreground">
        {current.prompt}
      </p>

      <p className="text-tech mt-6 mb-3 text-[10px] text-muted">
        Identify the organism / drug
      </p>

      {/* options */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {current.options.map((opt) => {
          let cls =
            "border-border bg-surface text-foreground hover:border-accent/60";
          if (revealed) {
            if (opt.correct)
              cls =
                "border-emerald-500/50 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300";
            else if (opt.slug === picked)
              cls =
                "border-rose-500/50 bg-rose-500/15 text-rose-700 dark:text-rose-300";
            else cls = "border-border bg-surface text-muted opacity-60";
          }
          return (
            <button
              key={opt.slug}
              type="button"
              disabled={revealed}
              onClick={() => pick(opt.slug, opt.correct)}
              className={`flex items-center justify-between gap-2 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${cls} ${
                revealed ? "cursor-default" : "cursor-pointer"
              }`}
            >
              {opt.name}
              {revealed && opt.correct ? <span aria-hidden>✓</span> : null}
              {revealed && !opt.correct && opt.slug === picked ? (
                <span aria-hidden>✕</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* reveal */}
      {revealed ? (
        <div className="glass-inset mt-5 rounded-xl p-5">
          <p className="text-base leading-7 text-foreground">
            {current.explanation}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            {(() => {
              const ans = current.options.find((o) => o.correct);
              return ans ? (
                <Link
                  href={ans.href}
                  className="text-tech text-[11px] text-accent underline-offset-4 hover:underline"
                >
                  View {ans.name} entry →
                </Link>
              ) : (
                <span />
              );
            })()}
            <button
              type="button"
              onClick={next}
              className="rounded-lg bg-accent px-6 py-2.5 text-sm font-bold text-accent-ink transition-colors hover:bg-accent-strong"
            >
              {pos + 1 >= order.length ? "Finish" : "Next case"}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
