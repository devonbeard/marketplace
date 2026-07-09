## Overview

Atelier reads like a curated auction house for digital art — quiet, editorially spaced, and restrained. The default experience is **dark-first** with an Apple TV–style browse rhythm: horizontal poster shelves, compact cinematic heroes, and asset-row listings. Light mode inverts to a white canvas with the same typographic calm.

The single brand voltage is **Atelier Blue** (`{colors.primary}` — #0052ff), used scarcely: primary CTA pills, inline emphasis links, and focus states. Beyond that one blue, the system is canvas + ink + soft elevation bands + deep near-black surfaces (`{colors.surface-dark}` — #0a0b0d) for full-bleed artwork.

Type pairs **Geist** display weight for headlines with **Geist Sans** for body, captions, and navigation. Display sits at **weight 400** — not the 700+ typical of trading platforms. The choice signals editorial calm and institutional trust rather than marketplace urgency.

**Key Characteristics:**
- Single accent color: `{colors.primary}` (#0052ff Atelier Blue) carries every primary CTA and inline brand link. Used scarcely.
- Modest display weights — Geist display at weight 400, never 700+.
- Editorial pill geometry: every CTA is `{rounded.pill}` (100px), every asset glyph is `{rounded.full}`, every card is `{rounded.xl}` (24px). Sharp corners absent.
- Horizontal **tv-shelf** rows for collections and live auctions — poster cards with snap scroll and focus-scale hover.
- Auction semantics: `{colors.semantic-up}` (#05b169) and `{colors.semantic-down}` (#cf202f) — text color only, never background fills.
- Generous section rhythm with compact home rows (`py-5` / `mt-3` between headline and shelf).

## Colors

### Brand & Accent
- **Atelier Blue** (`{colors.primary}` — #0052ff): The single brand color. Every primary CTA pill and inline brand links.
- **Atelier Blue Active** (`{colors.primary-active}` — #003ecc): Press-state darken on the primary pill.
- **Atelier Blue Disabled** (`{colors.primary-disabled}` — #a8b8cc): Faded-blue tint for disabled CTAs.

### Surface
- **Canvas** (`{colors.canvas}` — #0a0b0d dark / #ffffff light): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #0f1014 dark / #f7f7f7 light): Alternating band surface (e.g. recent sales).
- **Surface Strong** (`{colors.surface-strong}` — #16181c dark / #eef0f3 light): Secondary buttons, asset-icon plates.
- **Surface Dark** (`{colors.surface-dark}` — #0a0b0d): Deep near-black canvas for dark mode and elevated panels.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #16181c): Cards, bid panels, footer inset panel.

### Hairlines
- **Hairline** (`{colors.hairline}` — rgba white 8% dark / rgba ink 8% light): Default 1px divider.
- **Hairline Soft**: Lighter divider variant on light surfaces.

### Text
- **Ink / Text Primary** (`{colors.ink}` — #ffffff dark / #0a0b0d light): Display headings, primary nav, body emphasis.
- **Body** (`{colors.body}` — #a8acb3 dark / #5b616e light): Default running text.
- **Muted** (`{colors.muted}` — #7c828a): Sub-titles, captions, footer secondary.
- **Muted Soft** (`{colors.muted-soft}` — #5b616e dark / #a8acb3 light): Disabled link text.
- **On Primary** (`{colors.on-primary}` — #ffffff): White text on Atelier Blue CTAs.
- **On Dark** (`{colors.on-dark}` — #ffffff): White text on dark surfaces.
- **On Dark Soft** (`{colors.on-dark-soft}` — #a8acb3): Muted off-white for secondary text on dark.

### Auction Semantics
- **Semantic Up** (`{colors.semantic-up}` — #05b169): Positive price change, text color only.
- **Semantic Down** (`{colors.semantic-down}` — #cf202f): Negative price change, text color only.

## Typography

### Font Family
The system runs **Geist Sans** (display headlines, body, navigation, captions, buttons) and **Geist Mono** for tabular numerical data (prices, countdowns, SOL amounts). Icons use **Phosphor Light**.

The display/body split is functional: display weight 400 carries section headlines; Geist Sans 600 carries titles and buttons.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 80px | 400 | 1.0 | -2px | Marketing hero h1 |
| `{typography.display-xl}` | 64px | 400 | 1.0 | -1.6px | Subsidiary heroes |
| `{typography.display-lg}` | 52px | 400 | 1.0 | -1.3px | Section heads |
| `{typography.display-md}` | 44px | 400 | 1.09 | -1px | CTA-band headlines |
| `{typography.display-sm}` | 36px | 400 | 1.11 | -0.5px | Sub-section heads |
| `{typography.title-lg}` | 32px | 400 | 1.13 | -0.4px | Card group titles |
| `{typography.title-md}` | 18px | 600 | 1.33 | 0 | Component titles, asset row primary |
| `{typography.title-sm}` | 16px | 600 | 1.25 | 0 | List labels |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body |
| `{typography.body-strong}` | 16px | 700 | 1.5 | 0 | Emphasized body |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 13px | 400 | 1.5 | 0 | Photo captions, metadata |
| `{typography.caption-strong}` | 12px | 600 | 1.5 | 0 | Badge pill labels |
| `{typography.number-display}` | 18px | 500 | 1.4 | 0 | Prices, percent changes — Geist Mono |
| `{typography.button}` | 16px | 600 | 1.15 | 0 | Standard CTA pill |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
- **Display weight stays at 400.** Signals calm curation rather than marketplace urgency.
- **Negative letter-spacing on display only.** Display uses -1px to -2px tracking; body stays at 0.
- **Geist Mono on every number.** Prices, floor values, countdowns — anything tabular renders in Geist Mono with `tabular-nums`.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.base}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Home section padding:** `py-5` for shelf rows; `py-8` for recent sales band.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards.

### Grid & Container
- **Max content width:** 80rem (`max-w-7xl`) centered.
- **Home shelves:** Horizontal scroll rows inside the content container with `--shelf-inset: 16px` padding for hover ring clearance.
- **Marketplace:** Sortable asset-row listing under inline stats strip.
- **NFT detail:** Sticky artwork + attributes left; bid panel right; mobile bottom bid bar.

### Whitespace Philosophy
Generous editorial pacing without marketing-page bloat. Home rows stay tight; detail and marketplace pages breathe more. Density lives in listings, not in hero marketing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Most surfaces |
| Hairline border | 1px `{colors.hairline}` | Footer panel, nav divider |
| Poster shadow | Theme-aware `--poster-shadow` | Media poster cards on shelves |
| Focus ring | 2px Atelier Blue on hover/focus | `.media-focus` shelf cards |

### Decorative Depth
- **Poster scrims** — bottom gradients on live-auction cards for caption legibility; minimal hero scrim in light mode.
- **Footer wordmark** — oversized clipped “Atelier” at panel bottom.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Reserved (essentially unused) |
| `{rounded.xs}` | 4px | Inline tags |
| `{rounded.sm}` | 8px | Compact rows |
| `{rounded.md}` | 12px | Form inputs |
| `{rounded.lg}` | 16px | Mid-size cards, asset rows |
| `{rounded.xl}` | 24px | Feature cards, media posters |
| `{rounded.pill}` | 100px | All CTA buttons, theme toggle, badges |
| `{rounded.full}` | 9999px | Asset icon circles, avatars |

Pill for interactive, card-radius (24px) for containers, full circle for icons. Sharp corners absent.

## Components

### Top Navigation

**`top-nav`** — Fixed 64px bar. Background `--nav-scrim` with backdrop blur. Layout: Atelier wordmark left, horizontal menu (Marketplace / Auctions / Artists), theme toggle + Connect wallet + Browse CTAs right. Mobile: hamburger sheet overlay.

### Buttons

**`button-primary` / `.btn-primary`** — Atelier Blue pill. Background `{colors.primary}`, text `{colors.on-primary}`, 16px / 600, height 44px, min-width 9.5rem, rounded `{rounded.pill}`.

**`button-primary-active`** — Press state. Background `{colors.primary-active}`.

**`button-secondary-dark` / `.btn-secondary-dark`** — Elevated secondary pill. Background `{colors.surface-elevated}`, hover `--surface-elevated-hover`, same geometry as primary.

**`theme-toggle`** — 44×44px icon button with animated sun/moon crossfade.

### Home Page

**`hero-auction`** — Compact featured auction banner (~200–320px) with metadata below the artwork. No full-viewport hero.

**`tv-shelf`** — Horizontal scroll row for collections and live auctions. Snap scroll, hidden scrollbar, inset padding for hover scale.

**`media-poster`** — Rounded artwork surface with theme-aware shadow and optional scrim.

**`band-soft`** — Recent sales section on `--surface-soft`.

**`artist-spotlight`** — Split editorial block for featured artist.

### Marketplace & Detail

**`asset-row`** — Marketplace collection listing row. Circular asset icon, name/stats, chevron.

**`bid-panel`** — Inline bid form on NFT detail (no modal).

**`mobile-bid-bar`** — Fixed bottom bar on mobile NFT pages.

### CTA / Footer

**`footer-panel`** — Inset rounded panel with link columns and clipped wordmark.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (Atelier Blue) for primary CTAs and inline accent links.
- Set every CTA as `{rounded.pill}` (100px); every asset glyph as `{rounded.full}`.
- Keep display headlines at weight 400.
- Support light and dark themes via `[data-theme]` tokens.
- Render every numerical value in Geist Mono via `{typography.number-display}`.
- Use horizontal shelves for browse-heavy home sections.

### Don't
- Don't introduce a secondary brand color. Atelier Blue is the only action color; semantic green/red are text-only.
- Don't bold display copy — display sits at weight 400.
- Don't use sharp `{rounded.none}` (0px) on CTAs.
- Don't use semantic green/red as button backgrounds.
- Don't bleed shelf rows edge-to-edge if it clips hover rings on the first card.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Nav collapses to hamburger; mobile bid bar on NFT detail; shelves scroll horizontally. |
| Tablet | 640–1024px | Desktop CTAs appear (`sm:`); shelf card widths step up. |
| Desktop | 1024px+ | Full horizontal nav; NFT detail two-column sticky layout. |
| Wide | > 1280px | Content caps at 80rem; shelves stay within container. |

### Touch Targets
- Primary and secondary CTA pills at 44px height.
- Theme toggle and menu buttons at 44×44px.
- Larger hero CTA (`.btn-primary-lg`) at 56px where used.

### Collapsing Strategy
- Top nav switches to full-screen sheet below `lg`.
- Connect wallet and Browse move into mobile menu.
- NFT detail bid panel becomes fixed bottom bar below `md`.

## Iteration Guide

1. Focus on a single component at a time. Reference token keys in `globals.css` and `design-tokens.ts`.
2. New CTAs default to `{rounded.pill}`; new icon plates default to `{rounded.full}`. Cards use `{rounded.xl}`.
3. Use CSS custom properties — never hardcode hex in components when a token exists.
4. Theme-specific values belong in `[data-theme="light"]` / `[data-theme="dark"]` blocks.
5. Geist display 400 for headlines, Geist Sans 400/600 for body. Geist Mono on every number.
6. Atelier Blue stays scarce — one or two blue moments per band.

## Known Gaps

- Wallet connect is UI-only (no chain integration yet).
- Many collection detail pages have sparse NFT inventory in mock data.
- Animation timings documented in component code, not here.
- Form validation states beyond focus not fully specified.
