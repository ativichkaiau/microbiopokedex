"use client";

import { useEffect, useState } from "react";

type Phase = "visible" | "closing" | "done";

// Glassy splash that appears on every full page load / reload, then auto-fades.
// Click or any key skips it. It is intentionally not persisted, so it returns
// on reload (soft client navigations keep the layout mounted and skip it).
export default function Intro() {
  const [phase, setPhase] = useState<Phase>("visible");

  // Auto-dismiss after a beat.
  useEffect(() => {
    const t = setTimeout(() => setPhase((p) => (p === "visible" ? "closing" : p)), 2100);
    return () => clearTimeout(t);
  }, []);

  // Unmount after the fade-out finishes.
  useEffect(() => {
    if (phase !== "closing") return;
    const t = setTimeout(() => setPhase("done"), 700);
    return () => clearTimeout(t);
  }, [phase]);

  // Skip on any key press.
  useEffect(() => {
    const onKey = () => setPhase((p) => (p === "visible" ? "closing" : p));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome to VESTRIPPN Pokédex"
      onClick={() => setPhase((p) => (p === "visible" ? "closing" : p))}
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-white/30 backdrop-blur-2xl transition-opacity duration-700 dark:bg-black/50 ${
        phase === "closing" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="glass animate-float-in mx-6 flex max-w-md flex-col items-center rounded-3xl px-10 py-12 text-center">
        <p className="text-tech text-[11px] text-muted">
          VESTRIPPN3.0 {"//"} System Online
        </p>

        <h1 className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-4xl font-extrabold tracking-tight text-foreground">
          <span className="rounded-2xl bg-foreground px-3.5 py-1.5 italic text-surface">
            {"///MICROBE"}
          </span>
          <span>Pokédex</span>
        </h1>

        <p className="mt-4 text-sm text-muted">
          A screening matrix of bacteria, viruses &amp; fungi.
        </p>

        {/* scanning bar */}
        <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-foreground/10">
          <div className="h-full w-1/3 rounded-full bg-accent [animation:intro-scan_1.2s_ease-in-out_infinite]" />
        </div>

        <button
          type="button"
          onClick={() => setPhase((p) => (p === "visible" ? "closing" : p))}
          className="text-tech mt-8 rounded-full bg-accent px-6 py-2 text-[11px] text-accent-ink shadow-soft transition-opacity hover:opacity-90"
        >
          Enter
        </button>
        <p className="text-tech mt-3 text-[9px] text-muted">
          tap anywhere to continue
        </p>
      </div>
    </div>
  );
}
