"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { applyTheme, type Theme } from "@/lib/theme";

const THEME_CHANGE_EVENT = "atelier-theme-change";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  const theme = document.documentElement.getAttribute("data-theme");
  return theme === "light" ? "light" : "dark";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
}

function notifyThemeChange() {
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark" as Theme);

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    notifyThemeChange();
  }, []);

  const toggleTheme = useCallback(() => {
    const next = readTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    notifyThemeChange();
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
