"use client";

import { useSyncExternalStore } from "react";

type Mode = "day" | "auto" | "night";
const MODES: { id: Mode; label: string; icon: string }[] = [
  { id: "day", label: "Day", icon: "☀️" },
  { id: "auto", label: "Auto", icon: "🌗" },
  { id: "night", label: "Night", icon: "🌙" },
];

function resolve(mode: Mode): "day" | "night" {
  if (mode !== "auto") return mode;
  const h = new Date().getHours();
  return h >= 18 || h < 6 ? "night" : "day";
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Mode {
  const m = localStorage.getItem("theme-mode");
  return m === "day" || m === "night" || m === "auto" ? m : "auto";
}

function getServerSnapshot(): Mode {
  return "auto";
}

export default function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function pick(next: Mode) {
    localStorage.setItem("theme-mode", next);
    document.documentElement.setAttribute("data-theme", resolve(next));
    // The native storage event only fires in other tabs, so notify this one.
    window.dispatchEvent(new StorageEvent("storage", { key: "theme-mode" }));
  }

  const index = Math.max(
    0,
    MODES.findIndex((m) => m.id === mode),
  );
  const current = MODES[index];
  const next = MODES[(index + 1) % MODES.length];

  // One clay button that cycles day → auto → night and shows the current mode.
  return (
    <button
      type="button"
      onClick={() => pick(next.id)}
      data-tone={current.id}
      aria-label={`Theme: ${current.label}. Switch to ${next.label}.`}
      title={`Theme: ${current.label} — switch to ${next.label}`}
      className="clay-tab flex items-center gap-2 px-3.5 text-sm font-semibold text-foreground"
    >
      <span aria-hidden className="clay-tab-icon text-[1.05em] leading-none">
        {current.icon}
      </span>
      <span className="min-w-[2.6rem] text-left">{current.label}</span>
    </button>
  );
}
