"use client";

import { Tooltip } from "@/components/ui/Tooltip";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip label={theme === "light" ? "switch to dark mode" : "switch to light mode"}>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-700 hover:bg-black/5 dark:text-neutral-200 dark:hover:bg-white/10"
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </Tooltip>
  );
}
