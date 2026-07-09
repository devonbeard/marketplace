"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTheme } from "@/components/ThemeProvider";

const iconTransition = {
  type: "spring" as const,
  duration: 0.3,
  bounce: 0,
};

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className ?? "theme-toggle"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
    >
      <span className="theme-toggle-icon" aria-hidden>
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="sun"
              className="theme-toggle-icon-layer"
              initial={
                reduce ? false : { opacity: 0, scale: 0.25, filter: "blur(4px)" }
              }
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={
                reduce ? undefined : { opacity: 0, scale: 0.25, filter: "blur(4px)" }
              }
              transition={reduce ? { duration: 0 } : iconTransition}
            >
              <Sun size={20} weight="light" />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              className="theme-toggle-icon-layer"
              initial={
                reduce ? false : { opacity: 0, scale: 0.25, filter: "blur(4px)" }
              }
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={
                reduce ? undefined : { opacity: 0, scale: 0.25, filter: "blur(4px)" }
              }
              transition={reduce ? { duration: 0 } : iconTransition}
            >
              <Moon size={20} weight="light" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
}
