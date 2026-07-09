"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "@/components/ThemeProvider";

const iconTransition = {
  type: "spring" as const,
  duration: 0.3,
  bounce: 0,
};

const iconHidden = { opacity: 0, scale: 0.25, filter: "blur(4px)" };
const iconVisible = { opacity: 1, scale: 1, filter: "blur(0px)" };

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const isDark = theme === "dark";
  const transition = reduce ? { duration: 0 } : iconTransition;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className ?? "theme-toggle"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
    >
      <span className="theme-toggle-icon" aria-hidden>
        <motion.span
          className="theme-toggle-icon-layer"
          initial={false}
          animate={isDark ? iconVisible : iconHidden}
          transition={transition}
        >
          <Sun size={20} weight="light" />
        </motion.span>
        <motion.span
          className="theme-toggle-icon-layer"
          initial={false}
          animate={isDark ? iconHidden : iconVisible}
          transition={transition}
        >
          <Moon size={20} weight="light" />
        </motion.span>
      </span>
    </button>
  );
}
