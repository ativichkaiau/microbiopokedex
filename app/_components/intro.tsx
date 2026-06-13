"use client";

import { useEffect, useState } from "react";

type Phase = "visible" | "closing" | "done";

export default function Intro() {
  const [phase, setPhase] = useState<Phase>("visible");

  function close() {
    setPhase((p) => (p === "visible" ? "closing" : p));
  }

  useEffect(() => {
    const t = window.setTimeout(close, 7200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "closing") return;
    const t = window.setTimeout(() => setPhase("done"), 560);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter") close();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    const onNativeClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("[data-intro-close='true']")) close();
    };

    document.addEventListener("click", onNativeClick, true);
    return () => document.removeEventListener("click", onNativeClick, true);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome to VESTRIPPN3.0 Microbe Pokédex"
      className={`intro-shell fixed inset-0 z-[70] overflow-x-hidden overflow-y-auto bg-[#07080d] text-white transition-opacity duration-500 ${
        phase === "closing" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="intro-stage" />
      <div className="intro-grid" />

      <button
        type="button"
        data-intro-close="true"
        onClick={close}
        onPointerDown={close}
        className="text-tech absolute right-5 top-5 z-20 rounded-full border border-white/12 bg-white/[0.035] px-5 py-2.5 text-[11px] font-black text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:border-[#f2c566]/45 hover:text-[#f2c566] sm:right-8 sm:top-8"
      >
        Skip Intro
      </button>

      <section className="relative z-10 flex min-h-dvh items-center justify-center px-5 py-8">
        <div className="intro-card w-full max-w-[720px] rounded-[2rem] border border-white/10 bg-[#0d1518]/78 px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:px-8 sm:py-7">
          <div className="text-center">
            <p className="text-tech text-[11px] font-black text-[#c5a86a]">
              VESTRIPPN3.0 MICROBE + DRUG BENCH
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#f3f5ee] sm:text-5xl">
              Microbe <span className="text-[#f2c566]">Pokédex</span>
            </h1>
            <p className="mt-3 text-sm font-semibold text-[#aeb7b4] sm:text-base">
              Classify organisms, compare traits, and jump into therapeutics.
            </p>
          </div>

          <div className="mt-5 rounded-[1.35rem] border border-[#516069]/55 bg-[#071013]/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.03)] sm:p-4">
            <div className="relative aspect-[4/1] overflow-hidden rounded-2xl border border-white/[0.045] bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:20%_33%]">
              <svg
                aria-hidden
                viewBox="0 0 860 300"
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

                <circle cx="390" cy="145" r="96" className="intro-plate" />
                <circle cx="390" cy="145" r="72" className="intro-plate-ring" />
                <ellipse cx="390" cy="145" rx="126" ry="102" fill="url(#plate-glow)" opacity="0.26" />

                <g className="intro-colonies">
                  <circle cx="343" cy="117" r="12" />
                  <circle cx="418" cy="105" r="8" />
                  <circle cx="441" cy="159" r="14" />
                  <circle cx="367" cy="183" r="9" />
                  <circle cx="401" cy="151" r="6" />
                  <circle cx="326" cy="158" r="7" />
                </g>

                <g className="intro-bacilli">
                  <rect x="108" y="104" width="62" height="14" rx="7" transform="rotate(-18 139 111)" />
                  <rect x="130" y="139" width="58" height="14" rx="7" transform="rotate(16 159 146)" />
                  <rect x="90" y="170" width="48" height="13" rx="6.5" transform="rotate(-8 114 176.5)" />
                  <circle cx="156" cy="190" r="9" />
                  <circle cx="184" cy="193" r="9" />
                  <circle cx="212" cy="190" r="9" />
                </g>

                <g className="intro-virions">
                  <circle cx="580" cy="114" r="22" />
                  <circle cx="580" cy="114" r="8" fill="#071013" opacity="0.88" />
                  <path d="M580 84 V70 M580 158 V144 M550 114 H536 M624 114 H610 M559 93 L548 82 M601 135 L612 146 M601 93 L612 82 M559 135 L548 146" />
                  <circle cx="636" cy="164" r="16" />
                  <path d="M636 139 V127 M636 201 V189 M611 164 H599 M673 164 H661 M618 146 L609 137 M654 182 L663 191" />
                </g>

                <g className="intro-hyphae">
                  <path d="M68 226 C117 196 142 236 192 212 S270 207 293 244" />
                  <path d="M168 217 C167 191 185 172 214 160" />
                  <path d="M220 209 C236 186 261 182 288 190" />
                </g>

                <g className="intro-drugs">
                  <rect x="705" y="104" width="74" height="32" rx="16" transform="rotate(-18 742 120)" />
                  <path d="M707 130 L777 106" />
                  <rect x="706" y="158" width="68" height="30" rx="15" transform="rotate(15 740 173)" />
                  <path d="M710 163 L770 183" />
                  <circle cx="797" cy="138" r="13" />
                  <circle cx="800" cy="189" r="9" />
                  <path d="M697 215 C726 199 758 200 790 216" />
                </g>

                <path d="M286 77 H494" className="intro-scan-line" />
                <path d="M390 58 V238" className="intro-scan-line intro-scan-line-vertical" />

                <g filter="url(#intro-glow)">
                  <circle cx="390" cy="145" r="16" fill="#5ff3d0" />
                  <circle cx="390" cy="145" r="50" fill="#5ff3d0" opacity="0.11" />
                </g>

                <text x="74" y="82" className="intro-svg-label">
                  BACTERIA
                </text>
                <text x="532" y="78" className="intro-svg-label">
                  VIRUSES
                </text>
                <text x="68" y="262" className="intro-svg-label">
                  FUNGI
                </text>
                <text x="706" y="82" className="intro-svg-label">
                  DRUGS
                </text>
              </svg>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-[#f4f7f2] sm:text-[1.7rem]">
                Microbe and drug library loaded
              </h2>
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-[#aeb7b4] sm:text-base">
                Browse bacteria, viruses, fungi, parasites, and pharmacology
                cards from one bench.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-tech text-[10px] font-black text-[#c5a86a]">
                How to use
              </p>
              <ol className="mt-3 grid gap-2 text-sm font-semibold leading-5 text-[#d7dedb] sm:grid-cols-3 lg:grid-cols-1">
                <li className="rounded-xl bg-white/[0.045] px-3 py-2">
                  <span className="text-tech mr-2 text-[10px] text-[#f2c566]">
                    01
                  </span>
                  Pick a section.
                </li>
                <li className="rounded-xl bg-white/[0.045] px-3 py-2">
                  <span className="text-tech mr-2 text-[10px] text-[#f2c566]">
                    02
                  </span>
                  Filter by traits.
                </li>
                <li className="rounded-xl bg-white/[0.045] px-3 py-2">
                  <span className="text-tech mr-2 text-[10px] text-[#f2c566]">
                    03
                  </span>
                  Open an entry for drugs and details.
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
            <button
              type="button"
              data-intro-close="true"
              onClick={close}
              onPointerDown={close}
              className="rounded-full border border-[#ffd77a]/55 bg-[#f2c566] px-7 py-3 text-sm font-black text-[#16110a] shadow-[0_0_26px_rgba(242,197,102,0.28)] transition hover:bg-[#ffd47d]"
            >
              Begin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
