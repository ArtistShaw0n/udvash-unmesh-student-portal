"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Icon } from "../atoms/Icon";
import { cn } from "@/lib/cn";

const STORAGE_KEY = "udvash-theme";
const CHANGE_EVENT = "udvash-theme-change";

type Theme = "light" | "dark";

function getStoredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  html.classList.toggle("dark", theme === "dark");
  html.classList.toggle("light", theme === "light");
}

// SSR-safe theme source: returns "light" during server render,
// then reads localStorage on client. Subscribes to storage events from other
// tabs and our own dispatched `udvash-theme-change` so the icon stays in sync.
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

export type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    getStoredTheme,
    () => "light",
  );

  // Keep DOM class in sync whenever theme changes. Pure side-effect, no setState.
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      suppressHydrationWarning
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-sm border border-line-subtle bg-surface text-ink",
        "transition-colors hover:bg-surface-subtle",
        className,
      )}
    >
      <span suppressHydrationWarning>
        <Icon name={theme === "dark" ? "Sun" : "Moon"} size="md" />
      </span>
    </button>
  );
}
