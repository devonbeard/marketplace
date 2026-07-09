/**
 * Design tokens from design.md
 * Dark-first marketplace: Apple TV shelf browsing + institutional typography.
 */

export const colors = {
  primary: "#0052ff",
  primaryActive: "#003ecc",
  primaryDisabled: "#a8b8cc",
  canvas: "#0a0b0d",
  surfaceSoft: "#0f1014",
  surfaceStrong: "#16181c",
  surfaceDark: "#0a0b0d",
  surfaceDarkElevated: "#16181c",
  hairline: "rgba(255, 255, 255, 0.08)",
  ink: "#ffffff",
  body: "#a8acb3",
  muted: "#7c828a",
  mutedSoft: "#5b616e",
  onPrimary: "#ffffff",
  onDark: "#ffffff",
  onDarkSoft: "#a8acb3",
  semanticUp: "#05b169",
  semanticDown: "#cf202f",
} as const;

export const radius = {
  md: "12px",
  lg: "16px",
  xl: "24px",
  pill: "100px",
  full: "9999px",
} as const;

export const spacing = {
  section: "96px",
} as const;
