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

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="clay-tabs flex items-center gap-1.5 p-1.5"
    >
      {MODES.map((m) => {
        const active = mode === m.id;
        return (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={m.label}
            title={m.label}
            onClick={() => pick(m.id)}
            data-active={active}
            data-tone={m.id}
            className="clay-tab flex min-w-10 items-center justify-center gap-1.5 px-2.5 py-1.5 text-sm font-semibold sm:px-3"
          >
            <span aria-hidden className="clay-tab-icon text-[0.95em] leading-none">
              {m.icon}
            </span>
            <span className="hidden sm:inline">{m.label}</span>
          </button>
        );
      })}
    </div>
  );
}
