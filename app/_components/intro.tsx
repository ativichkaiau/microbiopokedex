"use client";

import { useEffect, useMemo, useState } from "react";

type Phase = "visible" | "closing" | "done";

const STEPS = [
  {
    number: "01",
    label: "CULTURE",
    title: "Plate the library",
    description:
      "Wake the organism banks: bacteria, viruses, and fungi are staged like colonies on a diagnostic bench.",
    tag: "CULTURE READY",
  },
  {
    number: "02",
    label: "STAIN",
    title: "Read the traits",
    description:
      "Screen Gram pattern, morphology, genome, envelope, and fungal form without losing the specimen context.",
    tag: "TRAITS TAGGED",
  },
  {
    number: "03",
    label: "IDENTIFY",
    title: "Open the entry",
    description:
      "Resolve the isolate into a Pokédex card with its taxonomy, phenotype, and clinical fingerprint.",
    tag: "SPECIMEN LOCKED",
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
        <div className="intro-card w-full max-w-[620px] rounded-[2rem] border border-white/10 bg-[#0d1518]/78 px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:px-9 sm:py-8">
          <div className="text-center">
            <p className="text-tech text-[11px] font-black text-[#c5a86a]">
              VESTRIPPN3.0 MICROBIOLOGY BENCH
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#f3f5ee] sm:text-5xl">
              Microbe <span className="text-[#f2c566]">Pokédex</span>
            </h1>
            <p className="mt-3 text-sm font-semibold text-[#aeb7b4] sm:text-base">
              Culture, stain, and classify the organism.
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
                  <linearGradient id="plate-glow" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#6fffe4" stopOpacity="0.46" />
                    <stop offset="52%" stopColor="#6f9bff" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#d784ff" stopOpacity="0.28" />
                  </linearGradient>
                </defs>

                <circle cx="380" cy="145" r="96" className="intro-plate" />
                <circle cx="380" cy="145" r="72" className="intro-plate-ring" />
                <ellipse cx="380" cy="145" rx="126" ry="102" fill="url(#plate-glow)" opacity="0.26" />

                <g className="intro-colonies">
                  <circle cx="333" cy="117" r="12" />
                  <circle cx="408" cy="105" r="8" />
                  <circle cx="431" cy="159" r="14" />
                  <circle cx="357" cy="183" r="9" />
                  <circle cx="391" cy="151" r="6" />
                  <circle cx="316" cy="158" r="7" />
                </g>

                <g className="intro-bacilli">
                  <rect x="142" y="104" width="62" height="14" rx="7" transform="rotate(-18 173 111)" />
                  <rect x="164" y="139" width="58" height="14" rx="7" transform="rotate(16 193 146)" />
                  <rect x="124" y="170" width="48" height="13" rx="6.5" transform="rotate(-8 148 176.5)" />
                  <circle cx="190" cy="190" r="9" />
                  <circle cx="218" cy="193" r="9" />
                  <circle cx="246" cy="190" r="9" />
                </g>

                <g className="intro-virions">
                  <circle cx="590" cy="120" r="22" />
                  <circle cx="590" cy="120" r="8" fill="#071013" opacity="0.88" />
                  <path d="M590 90 V76 M590 164 V150 M560 120 H546 M634 120 H620 M569 99 L558 88 M611 141 L622 152 M611 99 L622 88 M569 141 L558 152" />
                  <circle cx="650" cy="176" r="16" />
                  <path d="M650 151 V139 M650 213 V201 M625 176 H613 M687 176 H675 M632 158 L623 149 M668 194 L677 203" />
                </g>

                <g className="intro-hyphae">
                  <path d="M86 220 C135 190 160 230 210 206 S288 201 311 238" />
                  <path d="M186 211 C185 185 203 166 232 154" />
                  <path d="M238 203 C254 180 279 176 306 184" />
                </g>

                <path d="M280 77 H480" className="intro-scan-line" />
                <path d="M380 58 V238" className="intro-scan-line intro-scan-line-vertical" />

                <g filter="url(#intro-glow)">
                  <circle cx="380" cy="145" r="16" fill="#5ff3d0" />
                  <circle cx="380" cy="145" r="50" fill="#5ff3d0" opacity="0.11" />
                </g>

                <text x="110" y="82" className="intro-svg-label">
                  BACTERIA
                </text>
                <text x="548" y="82" className="intro-svg-label">
                  VIRUSES
                </text>
                <text x="86" y="260" className="intro-svg-label">
                  FUNGI
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
