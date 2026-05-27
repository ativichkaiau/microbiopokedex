"use client";

import { useEffect, useMemo, useState } from "react";

type Phase = "visible" | "closing" | "done";

const STEPS = [
  {
    number: "01",
    label: "SCAN",
    title: "Prime the archive",
    description:
      "Load the bacteria, virus, and fungi banks before you begin screening morphology, genome, and clinical signatures.",
    tag: "TRI-DOMAIN INDEX",
  },
  {
    number: "02",
    label: "TRACE",
    title: "Follow the signal",
    description:
      "Track a specimen from source traits to classification. The stream highlights the clues that separate look-alikes.",
    tag: "CLASSIFICATION FLOW",
  },
  {
    number: "03",
    label: "MATCH",
    title: "Lock the identity",
    description:
      "Match the pattern to the right Pokédex entry, then jump into richer cards for the organism behind the signal.",
    tag: "POKÉDEX READY",
  },
] as const;

export default function Intro() {
  const [phase, setPhase] = useState<Phase>("visible");
  const [step, setStep] = useState(0);
  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  const statusText = useMemo(
    () => `${current.number} — ${current.label}`,
    [current.label, current.number],
  );

  function close() {
    setPhase((p) => (p === "visible" ? "closing" : p));
  }

  function next() {
    if (isLast) close();
    else setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  useEffect(() => {
    if (phase !== "closing") return;
    const t = window.setTimeout(() => setPhase("done"), 560);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight" || event.key === "Enter") next();
      if (event.key === "ArrowLeft") {
        setStep((s) => Math.max(s - 1, 0));
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (phase === "done") return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome to VESTRIPPN3.0 Microbe Pokédex"
      className={`fixed inset-0 z-[70] overflow-hidden bg-[#07080d] text-white transition-opacity duration-500 ${
        phase === "closing" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="intro-stage" />
      <div className="intro-grid" />

      <button
        type="button"
        onClick={close}
        className="text-tech absolute right-5 top-5 z-20 rounded-full border border-white/12 bg-white/[0.035] px-5 py-2.5 text-[11px] font-black text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:border-[#f2c566]/45 hover:text-[#f2c566] sm:right-8 sm:top-8"
      >
        Skip Intro
      </button>

      <section className="relative z-10 flex min-h-dvh items-center justify-center px-5 py-8">
        <div className="intro-card w-full max-w-[620px] rounded-[2rem] border border-white/10 bg-[#11131a]/78 px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:px-9 sm:py-8">
          <div className="text-center">
            <p className="text-tech text-[11px] font-black text-[#c5a86a]">
              VESTRIPPN3.0 MICROBE LAB
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#f3f5ee] sm:text-5xl">
              Microbe <span className="text-[#f2c566]">Pokédex</span>
            </h1>
            <p className="mt-3 text-sm font-semibold text-[#aeb7b4] sm:text-base">
              Scan traits. Compare domains. Identify the signal.
            </p>
          </div>

          <div className="mt-6 rounded-[1.35rem] border border-[#516069]/55 bg-[#071013]/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.03)] sm:p-5">
            <div className="relative aspect-[2.9/1] overflow-hidden rounded-2xl border border-white/[0.045] bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:20%_33%]">
              <svg
                aria-hidden
                viewBox="0 0 760 300"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="intro-glow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="16" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <marker
                    id="intro-arrow"
                    markerHeight="14"
                    markerWidth="14"
                    orient="auto"
                    refX="9"
                    refY="5"
                    viewBox="0 0 10 10"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#f2c566" />
                  </marker>
                </defs>

                <path
                  d="M145 145 C255 55 385 60 470 140 S610 220 690 125"
                  className="intro-path intro-path-shadow"
                />
                <path
                  d="M145 145 C255 55 385 60 470 140 S610 220 690 125"
                  className="intro-path intro-path-hot"
                  markerEnd="url(#intro-arrow)"
                />
                <path
                  d="M430 138 C500 188 600 215 682 130"
                  className="intro-path intro-path-dash"
                />

                <g className="intro-node" transform="translate(98 108)">
                  <circle cx="38" cy="38" r="36" fill="#2b2619" stroke="#b8954e" strokeWidth="3" />
                  <circle cx="38" cy="38" r="15" fill="#f2c566" />
                </g>

                <g className="intro-node intro-node-delay" transform="translate(628 108)">
                  <circle cx="38" cy="38" r="36" fill="#2b2619" stroke="#b8954e" strokeWidth="3" />
                  <circle cx="38" cy="38" r="15" fill="#f2c566" />
                </g>

                <g filter="url(#intro-glow)">
                  <circle cx="425" cy="148" r="18" fill="#ee6a49" />
                  <circle cx="425" cy="148" r="46" fill="#ee6a49" opacity="0.18" />
                </g>
                <path d="M425 170 L425 252" stroke="#9fb2b4" strokeDasharray="4 7" opacity="0.34" />

                <text x="97" y="222" className="intro-svg-label">
                  SOURCE
                </text>
                <text x="622" y="222" className="intro-svg-label">
                  MATCH
                </text>
                <rect x="346" y="246" width="158" height="30" rx="15" className="intro-chip" />
                <text x="425" y="266" textAnchor="middle" className="intro-chip-text">
                  {current.tag}
                </text>
              </svg>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-tech flex items-center gap-4 text-[11px] font-black text-[#c5a86a]">
              <span>{statusText}</span>
              <span className="h-px w-10 bg-[#c5a86a]/55" />
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#f4f7f2] sm:text-[1.7rem]">
              {current.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-[#aeb7b4] sm:text-base">
              {current.description}
            </p>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3" aria-label="Intro progress">
                {STEPS.map((s, index) => (
                  <button
                    key={s.number}
                    type="button"
                    aria-label={`Go to intro step ${index + 1}`}
                    onClick={() => setStep(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === step
                        ? "w-14 bg-[#f2c566] shadow-[0_0_20px_rgba(242,197,102,0.55)]"
                        : index < step
                          ? "w-9 bg-[#b99956]"
                          : "w-9 bg-[#2c353d]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(s - 1, 0))}
                  disabled={step === 0}
                  className="rounded-full border border-white/12 bg-white/[0.025] px-6 py-3 text-sm font-black text-white/70 transition hover:border-white/24 hover:text-white disabled:opacity-35"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-[#ffd77a]/55 bg-[#f2c566] px-7 py-3 text-sm font-black text-[#16110a] shadow-[0_0_26px_rgba(242,197,102,0.28)] transition hover:bg-[#ffd47d]"
                >
                  {isLast ? "Begin" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
