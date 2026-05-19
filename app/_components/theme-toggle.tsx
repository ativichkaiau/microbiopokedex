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
      className="shadow-soft flex items-center gap-0.5 rounded-full border border-border bg-surface p-1"
    >
      {MODES.map((m) => {
        const active = mode === m.id;
        return (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => pick(m.id)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "bg-foreground text-surface"
                : "text-muted hover:text-foreground"
            }`}
          >
            <span aria-hidden className="text-[0.95em] leading-none">
              {m.icon}
            </span>
            {m.label}
          </button>
        );
      })}
    </div>
  );
}
