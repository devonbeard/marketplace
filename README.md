# Atelier

A premium NFT auction marketplace mockup built with Next.js, React, Tailwind CSS, and Motion. Designed as a cinematic, gallery-grade experience inspired by Apple TV and Sotheby's auction houses.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Motion** (animations)
- **Phosphor Icons** (light weight)
- **Geist** typography via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
| --- | --- |
| `/` | Home page with featured live auction, collections shelf, live auctions bento, artist spotlight, and recent sales |
| `/marketplace` | Collection listing with floor prices, volume, top offers, and 7d change |
| `/collection/[id]` | Collection detail with market stats and available lots |
| `/nft/[id]` | NFT detail page with artwork display, bid panel, bid history, provenance timeline, and related works |

## Mock Data

All artwork, prices, bids, and collector addresses are mock data defined in `src/lib/data.ts`. Generated artwork lives in `public/art/`. The "Place bid" flow simulates a transaction with loading and success states.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Design Notes

- Single locked dark theme with warm gold accent
- Floating glass pill navigation
- Double-bezel artwork framing
- Tabular-nums for all prices and countdowns
- Reduced motion support throughout
