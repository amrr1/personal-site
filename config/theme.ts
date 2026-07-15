import type { ThemeMode } from "@/types/theme";

export const DEFAULT_THEME: ThemeMode = "light";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const themeColors = {
  light: {
    background: "#bfe3f8",
    surface: "#ffffff",
    surfaceHeader: "#3a3a3a",
    accent: "#f5a623",
    text: "#1f1f1f",
  },
  dark: {
    background: "#0b1b2b",
    surface: "#12233a",
    surfaceHeader: "#000000",
    accent: "#7fd7f0",
    text: "#e8f4fb",
  },
} as const;
