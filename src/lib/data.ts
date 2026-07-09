export type Artist = {
  id: string;
  name: string;
  role: string;
  portrait: string;
  quote: string;
};

export type Collection = {
  id: string;
  name: string;
  floorPrice: number;
  image: string;
  itemCount: number;
  artistId: string;
  description: string;
  volume24h: number;
  volume7d: number;
  topOffer: number;
  floorChange7d: number;
  listed: number;
  sales24h: number;
};

export type NftAttribute = {
  trait: string;
  value: string;
};

export type ProvenanceEvent = {
  id: string;
  type: "mint" | "transfer" | "listing" | "sale";
  date: Date;
  from?: string;
  to?: string;
  price?: number;
};

export type Bid = {
  id: string;
  bidder: string;
  amount: number;
  timestamp: Date;
  avatar: string;
};

export type Auction = {
  endsAt: Date;
  currentBid: number;
  reserveMet: boolean;
  bidCount: number;
};

export type Nft = {
  id: string;
  title: string;
  artistId: string;
  collectionId: string;
  image: string;
  description: string;
  attributes: NftAttribute[];
  auction?: Auction;
  lastSalePrice?: number;
  provenance: ProvenanceEvent[];
  bids: Bid[];
};

const now = Date.now();
const hour = 3600000;
const day = 86400000;

export const artists: Artist[] = [
  {
    id: "elena-vasquez",
    name: "Elena Vasquez",
    role: "Generative Artist",
    portrait: "/art/artist-01.png",
    quote:
      "I treat the blockchain as a frame, not a gimmick. Each piece exists because the medium demands it.",
  },
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    role: "Digital Sculptor",
    portrait: "/art/artist-02.png",
    quote:
      "Light behaves differently in code. I chase the moment when pixels feel like stone.",
  },
  {
    id: "yuki-nakamura",
    name: "Yuki Nakamura",
    role: "Conceptual Artist",
    portrait: "/art/artist-03.png",
    quote:
      "Collectors who understand restraint are rare. That is who I make work for.",
  },
];

export const collections: Collection[] = [
  {
    id: "luminous-fractures",
    name: "Luminous Fractures",
    floorPrice: 14.78,
    image: "/art/nft-01.png",
    itemCount: 847,
    artistId: "elena-vasquez",
    description:
      "Crystalline generative studies in refracted light. Vasquez's flagship series and the highest floor on Atelier.",
    volume24h: 284.6,
    volume7d: 1423.8,
    topOffer: 13.2,
    floorChange7d: -4.2,
    listed: 47,
    sales24h: 19,
  },
  {
    id: "void-architecture",
    name: "Void Architecture",
    floorPrice: 8.42,
    image: "/art/nft-03.png",
    itemCount: 512,
    artistId: "marcus-chen",
    description:
      "Negative space as structural form. Chen's meditation on absence rendered in monochrome geometry.",
    volume24h: 156.3,
    volume7d: 891.4,
    topOffer: 7.85,
    floorChange7d: 6.8,
    listed: 31,
    sales24h: 12,
  },
  {
    id: "tidal-forms",
    name: "Tidal Forms",
    floorPrice: 5.91,
    image: "/art/nft-02.png",
    itemCount: 1203,
    artistId: "marcus-chen",
    description:
      "Fluid dynamics simulations with surgical precision. Organic curves against absolute black.",
    volume24h: 198.7,
    volume7d: 1102.5,
    topOffer: 5.4,
    floorChange7d: 2.1,
    listed: 68,
    sales24h: 24,
  },
  {
    id: "copper-dissolve",
    name: "Copper Dissolve",
    floorPrice: 3.27,
    image: "/art/nft-04.png",
    itemCount: 634,
    artistId: "yuki-nakamura",
    description:
      "Metallic surfaces in slow oxidation. Nakamura captures decay as a generative process.",
    volume24h: 72.4,
    volume7d: 418.9,
    topOffer: 3.1,
    floorChange7d: -8.3,
    listed: 52,
    sales24h: 15,
  },
  {
    id: "silver-ether",
    name: "Silver Ether",
    floorPrice: 6.15,
    image: "/art/nft-05.png",
    itemCount: 389,
    artistId: "yuki-nakamura",
    description:
      "Atmospheric gradients that shift with every viewing. Ethereal horizons in muted silver tones.",
    volume24h: 94.2,
    volume7d: 567.3,
    topOffer: 5.9,
    floorChange7d: 11.4,
    listed: 22,
    sales24h: 9,
  },
  {
    id: "construct-red",
    name: "Construct Red",
    floorPrice: 2.84,
    image: "/art/nft-06.png",
    itemCount: 976,
    artistId: "elena-vasquez",
    description:
      "Bold constructivist intervention on void canvases. Vasquez's most accessible entry point.",
    volume24h: 118.5,
    volume7d: 634.2,
    topOffer: 2.6,
    floorChange7d: -1.7,
    listed: 89,
    sales24h: 31,
  },
  {
    id: "chromatic-drift",
    name: "Chromatic Drift",
    floorPrice: 4.63,
    image: "/art/nft-07.png",
    itemCount: 721,
    artistId: "marcus-chen",
    description:
      "Slow color fields that migrate across the canvas. Chen's study in restrained spectral movement.",
    volume24h: 88.3,
    volume7d: 502.7,
    topOffer: 4.2,
    floorChange7d: 3.4,
    listed: 44,
    sales24h: 11,
  },
  {
    id: "basalt-index",
    name: "Basalt Index",
    floorPrice: 7.19,
    image: "/art/nft-08.png",
    itemCount: 458,
    artistId: "yuki-nakamura",
    description:
      "Volcanic texture studies rendered as indexical grids. Dense, mineral, and deliberately slow.",
    volume24h: 67.8,
    volume7d: 389.1,
    topOffer: 6.75,
    floorChange7d: -2.9,
    listed: 19,
    sales24h: 7,
  },
  {
    id: "pale-orbit",
    name: "Pale Orbit",
    floorPrice: 9.06,
    image: "/art/nft-09.png",
    itemCount: 312,
    artistId: "elena-vasquez",
    description:
      "Elliptical paths traced in near-white pigment. A quiet counterpoint to Luminous Fractures.",
    volume24h: 142.1,
    volume7d: 812.4,
    topOffer: 8.4,
    floorChange7d: 5.2,
    listed: 14,
    sales24h: 8,
  },
  {
    id: "filament-noir",
    name: "Filament Noir",
    floorPrice: 3.91,
    image: "/art/nft-10.png",
    itemCount: 1089,
    artistId: "marcus-chen",
    description:
      "Hairline vectors suspended in absolute black. High supply, low floor, steady turnover.",
    volume24h: 203.4,
    volume7d: 1187.6,
    topOffer: 3.55,
    floorChange7d: 1.8,
    listed: 112,
    sales24h: 38,
  },
  {
    id: "meridian-arc",
    name: "Meridian Arc",
    floorPrice: 11.34,
    image: "/art/nft-01.png",
    itemCount: 267,
    artistId: "yuki-nakamura",
    description:
      "Curved meridians intersecting at calibrated intervals. Nakamura's most architectural series.",
    volume24h: 176.9,
    volume7d: 934.2,
    topOffer: 10.8,
    floorChange7d: -6.1,
    listed: 11,
    sales24h: 6,
  },
  {
    id: "glass-tension",
    name: "Glass Tension",
    floorPrice: 5.48,
    image: "/art/nft-02.png",
    itemCount: 593,
    artistId: "elena-vasquez",
    description:
      "Transparent planes under simulated stress. Light fractures without breaking the surface.",
    volume24h: 91.7,
    volume7d: 478.3,
    topOffer: 5.1,
    floorChange7d: 4.7,
    listed: 36,
    sales24h: 14,
  },
  {
    id: "rust-horizon",
    name: "Rust Horizon",
    floorPrice: 2.17,
    image: "/art/nft-03.png",
    itemCount: 1342,
    artistId: "marcus-chen",
    description:
      "Oxidized horizons in wide aspect. Entry-level volume driver for the marketplace.",
    volume24h: 241.8,
    volume7d: 1456.2,
    topOffer: 1.95,
    floorChange7d: -3.8,
    listed: 156,
    sales24h: 47,
  },
  {
    id: "ion-cascade",
    name: "Ion Cascade",
    floorPrice: 6.72,
    image: "/art/nft-04.png",
    itemCount: 401,
    artistId: "yuki-nakamura",
    description:
      "Charged particles falling through layered fields. Electric blue against deep charcoal.",
    volume24h: 109.4,
    volume7d: 623.8,
    topOffer: 6.3,
    floorChange7d: 8.9,
    listed: 27,
    sales24h: 10,
  },
  {
    id: "static-bloom",
    name: "Static Bloom",
    floorPrice: 4.05,
    image: "/art/nft-05.png",
    itemCount: 867,
    artistId: "elena-vasquez",
    description:
      "Floral forms emerging from television static. Vasquez experiments with signal as medium.",
    volume24h: 64.2,
    volume7d: 371.5,
    topOffer: 3.8,
    floorChange7d: -0.4,
    listed: 58,
    sales24h: 13,
  },
  {
    id: "graphite-pulse",
    name: "Graphite Pulse",
    floorPrice: 3.58,
    image: "/art/nft-06.png",
    itemCount: 744,
    artistId: "marcus-chen",
    description:
      "Rhythmic graphite strokes on matte ground. Monochrome with a single warm undertone.",
    volume24h: 78.6,
    volume7d: 442.9,
    topOffer: 3.25,
    floorChange7d: 2.6,
    listed: 41,
    sales24h: 16,
  },
  {
    id: "amber-fracture",
    name: "Amber Fracture",
    floorPrice: 8.91,
    image: "/art/nft-07.png",
    itemCount: 356,
    artistId: "yuki-nakamura",
    description:
      "Warm resin tones cracked along generative fault lines. One of Nakamura's tighter editions.",
    volume24h: 128.3,
    volume7d: 701.7,
    topOffer: 8.2,
    floorChange7d: 7.3,
    listed: 18,
    sales24h: 9,
  },
  {
    id: "nether-grid",
    name: "Nether Grid",
    floorPrice: 1.94,
    image: "/art/nft-08.png",
    itemCount: 1587,
    artistId: "elena-vasquez",
    description:
      "Subterranean lattice structures at mass-market scale. High item count, active secondary market.",
    volume24h: 312.7,
    volume7d: 1823.4,
    topOffer: 1.75,
    floorChange7d: -5.6,
    listed: 201,
    sales24h: 62,
  },
  {
    id: "low-tide",
    name: "Low Tide",
    floorPrice: 5.27,
    image: "/art/nft-09.png",
    itemCount: 628,
    artistId: "marcus-chen",
    description:
      "Receding waterlines etched into digital sediment. Calm palette, steady collector base.",
    volume24h: 83.1,
    volume7d: 467.8,
    topOffer: 4.9,
    floorChange7d: 1.2,
    listed: 33,
    sales24h: 12,
  },
  {
    id: "white-noise",
    name: "White Noise",
    floorPrice: 7.44,
    image: "/art/nft-10.png",
    itemCount: 489,
    artistId: "yuki-nakamura",
    description:
      "Entropy fields rendered as fine-grain texture. Nakamura's meditation on signal and absence.",
    volume24h: 101.6,
    volume7d: 588.2,
    topOffer: 7.0,
    floorChange7d: -1.1,
    listed: 25,
    sales24h: 11,
  },
];

const sharedBids: Bid[] = [
  {
    id: "bid-1",
    bidder: "0x7f3a...c91e",
    amount: 47.2,
    timestamp: new Date(now - 12 * 60000),
    avatar: "https://picsum.photos/seed/collector-1/80/80",
  },
  {
    id: "bid-2",
    bidder: "0x2b8d...4f02",
    amount: 44.5,
    timestamp: new Date(now - 38 * 60000),
    avatar: "https://picsum.photos/seed/collector-2/80/80",
  },
  {
    id: "bid-3",
    bidder: "0x9e1c...8a73",
    amount: 41.0,
    timestamp: new Date(now - 2 * hour),
    avatar: "https://picsum.photos/seed/collector-3/80/80",
  },
  {
    id: "bid-4",
    bidder: "0x4d6f...1b29",
    amount: 38.75,
    timestamp: new Date(now - 5 * hour),
    avatar: "https://picsum.photos/seed/collector-4/80/80",
  },
  {
    id: "bid-5",
    bidder: "0x1a9e...7c44",
    amount: 35.0,
    timestamp: new Date(now - 11 * hour),
    avatar: "https://picsum.photos/seed/collector-5/80/80",
  },
];

export const nfts: Nft[] = [
  {
    id: "aurum-fragment-vii",
    title: "Aurum Fragment VII",
    artistId: "elena-vasquez",
    collectionId: "luminous-fractures",
    image: "/art/hero-auction.png",
    description:
      "The seventh in a series exploring gold as both material and metaphor. Vasquez generated 12,000 iterations before selecting this composition for on-chain permanence.",
    attributes: [
      { trait: "Series", value: "Luminous Fractures" },
      { trait: "Edition", value: "1 of 1" },
      { trait: "Medium", value: "Generative" },
      { trait: "Year", value: "2025" },
      { trait: "Palette", value: "Aurum" },
    ],
    auction: {
      endsAt: new Date(now + 4 * hour + 23 * 60000),
      currentBid: 47.2,
      reserveMet: true,
      bidCount: 23,
    },
    provenance: [
      {
        id: "p1",
        type: "mint",
        date: new Date(now - 45 * day),
        to: "elena-vasquez",
      },
      {
        id: "p2",
        type: "listing",
        date: new Date(now - 3 * day),
        from: "elena-vasquez",
        price: 32.0,
      },
    ],
    bids: sharedBids,
  },
  {
    id: "crystalline-no-12",
    title: "Crystalline No. 12",
    artistId: "elena-vasquez",
    collectionId: "luminous-fractures",
    image: "/art/nft-01.png",
    description:
      "A study in controlled chaos. Twelve facets of refracted light converge at a single vanishing point.",
    attributes: [
      { trait: "Series", value: "Luminous Fractures" },
      { trait: "Edition", value: "12 of 50" },
      { trait: "Medium", value: "Generative" },
      { trait: "Year", value: "2025" },
    ],
    auction: {
      endsAt: new Date(now + 2 * hour + 14 * 60000),
      currentBid: 18.4,
      reserveMet: true,
      bidCount: 11,
    },
    provenance: [
      {
        id: "p3",
        type: "mint",
        date: new Date(now - 30 * day),
        to: "elena-vasquez",
      },
    ],
    bids: [
      {
        id: "bid-6",
        bidder: "0x8c2f...9d17",
        amount: 18.4,
        timestamp: new Date(now - 8 * 60000),
        avatar: "https://picsum.photos/seed/collector-6/80/80",
      },
      {
        id: "bid-7",
        bidder: "0x5a1b...3e88",
        amount: 16.2,
        timestamp: new Date(now - 45 * 60000),
        avatar: "https://picsum.photos/seed/collector-7/80/80",
      },
    ],
  },
  {
    id: "tidal-resonance",
    title: "Tidal Resonance",
    artistId: "marcus-chen",
    collectionId: "tidal-forms",
    image: "/art/nft-02.png",
    description:
      "Organic curves rendered with surgical precision. Chen spent six months calibrating the fluid dynamics simulation.",
    attributes: [
      { trait: "Series", value: "Tidal Forms" },
      { trait: "Edition", value: "1 of 1" },
      { trait: "Medium", value: "3D Render" },
      { trait: "Year", value: "2024" },
    ],
    auction: {
      endsAt: new Date(now + 6 * hour + 41 * 60000),
      currentBid: 22.85,
      reserveMet: false,
      bidCount: 7,
    },
    provenance: [
      {
        id: "p4",
        type: "mint",
        date: new Date(now - 60 * day),
        to: "marcus-chen",
      },
      {
        id: "p5",
        type: "sale",
        date: new Date(now - 20 * day),
        from: "marcus-chen",
        to: "0x3f7a...2c11",
        price: 15.5,
      },
      {
        id: "p6",
        type: "listing",
        date: new Date(now - 2 * day),
        from: "0x3f7a...2c11",
        price: 20.0,
      },
    ],
    bids: [
      {
        id: "bid-8",
        bidder: "0x6e4d...1f90",
        amount: 22.85,
        timestamp: new Date(now - 22 * 60000),
        avatar: "https://picsum.photos/seed/collector-8/80/80",
      },
    ],
  },
  {
    id: "void-pillar-iii",
    title: "Void Pillar III",
    artistId: "marcus-chen",
    collectionId: "void-architecture",
    image: "/art/nft-03.png",
    description:
      "Negative space as structure. The third pillar in Chen's architectural meditation on absence.",
    attributes: [
      { trait: "Series", value: "Void Architecture" },
      { trait: "Edition", value: "3 of 24" },
      { trait: "Medium", value: "3D Render" },
      { trait: "Year", value: "2025" },
    ],
    auction: {
      endsAt: new Date(now + 1 * hour + 52 * 60000),
      currentBid: 11.3,
      reserveMet: true,
      bidCount: 9,
    },
    provenance: [
      {
        id: "p7",
        type: "mint",
        date: new Date(now - 15 * day),
        to: "marcus-chen",
      },
    ],
    bids: [],
  },
  {
    id: "copper-dissolve-ix",
    title: "Copper Dissolve IX",
    artistId: "yuki-nakamura",
    collectionId: "copper-dissolve",
    image: "/art/nft-04.png",
    description:
      "Metallic surfaces in slow decay. Nakamura captures the beauty of oxidation as a generative process.",
    attributes: [
      { trait: "Series", value: "Copper Dissolve" },
      { trait: "Edition", value: "9 of 100" },
      { trait: "Medium", value: "Generative" },
      { trait: "Year", value: "2024" },
    ],
    auction: {
      endsAt: new Date(now + 8 * hour + 7 * 60000),
      currentBid: 7.62,
      reserveMet: true,
      bidCount: 4,
    },
    provenance: [
      {
        id: "p8",
        type: "mint",
        date: new Date(now - 90 * day),
        to: "yuki-nakamura",
      },
    ],
    bids: [],
  },
  {
    id: "silver-ether-iv",
    title: "Silver Ether IV",
    artistId: "yuki-nakamura",
    collectionId: "silver-ether",
    image: "/art/nft-05.png",
    description:
      "Atmospheric gradients that refuse to settle. Each viewing reveals a different horizon line.",
    attributes: [
      { trait: "Series", value: "Silver Ether" },
      { trait: "Edition", value: "4 of 30" },
      { trait: "Medium", value: "Generative" },
      { trait: "Year", value: "2025" },
    ],
    auction: {
      endsAt: new Date(now + 3 * hour + 33 * 60000),
      currentBid: 9.14,
      reserveMet: true,
      bidCount: 6,
    },
    provenance: [
      {
        id: "p9",
        type: "mint",
        date: new Date(now - 25 * day),
        to: "yuki-nakamura",
      },
    ],
    bids: [],
  },
  {
    id: "construct-red-vii",
    title: "Construct Red VII",
    artistId: "elena-vasquez",
    collectionId: "construct-red",
    image: "/art/nft-06.png",
    description:
      "Bold geometric intervention on a void canvas. Part of Vasquez's constructivist period.",
    attributes: [
      { trait: "Series", value: "Construct Red" },
      { trait: "Edition", value: "7 of 75" },
      { trait: "Medium", value: "Generative" },
      { trait: "Year", value: "2024" },
    ],
    lastSalePrice: 4.82,
    provenance: [
      {
        id: "p10",
        type: "mint",
        date: new Date(now - 120 * day),
        to: "elena-vasquez",
      },
      {
        id: "p11",
        type: "sale",
        date: new Date(now - 4 * day),
        from: "0x2b8d...4f02",
        to: "0x9e1c...8a73",
        price: 4.82,
      },
    ],
    bids: [],
  },
  {
    id: "filigree-emerald",
    title: "Filigree Emerald",
    artistId: "marcus-chen",
    collectionId: "luminous-fractures",
    image: "/art/nft-07.png",
    description:
      "Gold filigree traced across an emerald void. Chen's most intricate single-edition work to date.",
    attributes: [
      { trait: "Series", value: "Luminous Fractures" },
      { trait: "Edition", value: "1 of 1" },
      { trait: "Medium", value: "3D Render" },
      { trait: "Year", value: "2025" },
    ],
    auction: {
      endsAt: new Date(now + 12 * hour),
      currentBid: 31.5,
      reserveMet: true,
      bidCount: 14,
    },
    provenance: [
      {
        id: "p12",
        type: "mint",
        date: new Date(now - 10 * day),
        to: "marcus-chen",
      },
    ],
    bids: [],
  },
  {
    id: "monolith-gold",
    title: "Monolith Gold",
    artistId: "yuki-nakamura",
    collectionId: "void-architecture",
    image: "/art/nft-08.png",
    description:
      "A single point of gold in infinite gray. Nakamura's meditation on focal attention.",
    attributes: [
      { trait: "Series", value: "Void Architecture" },
      { trait: "Edition", value: "1 of 1" },
      { trait: "Medium", value: "Generative" },
      { trait: "Year", value: "2025" },
    ],
    auction: {
      endsAt: new Date(now + 5 * hour + 18 * 60000),
      currentBid: 19.7,
      reserveMet: true,
      bidCount: 8,
    },
    provenance: [
      {
        id: "p13",
        type: "mint",
        date: new Date(now - 8 * day),
        to: "yuki-nakamura",
      },
    ],
    bids: [],
  },
  {
    id: "nebula-sequence",
    title: "Nebula Sequence",
    artistId: "elena-vasquez",
    collectionId: "silver-ether",
    image: "/art/nft-09.png",
    description:
      "Deep space rendered as intimate portrait. Particles drift with the patience of actual cosmology.",
    attributes: [
      { trait: "Series", value: "Silver Ether" },
      { trait: "Edition", value: "1 of 1" },
      { trait: "Medium", value: "Generative" },
      { trait: "Year", value: "2025" },
    ],
    lastSalePrice: 12.4,
    provenance: [
      {
        id: "p14",
        type: "mint",
        date: new Date(now - 50 * day),
        to: "elena-vasquez",
      },
      {
        id: "p15",
        type: "sale",
        date: new Date(now - 6 * day),
        from: "0x7f3a...c91e",
        to: "0x4d6f...1b29",
        price: 12.4,
      },
    ],
    bids: [],
  },
  {
    id: "amber-flow",
    title: "Amber Flow",
    artistId: "marcus-chen",
    collectionId: "tidal-forms",
    image: "/art/nft-10.png",
    description:
      "Warm currents against absolute black. Chen's fluid simulation at its most restrained.",
    attributes: [
      { trait: "Series", value: "Tidal Forms" },
      { trait: "Edition", value: "1 of 1" },
      { trait: "Medium", value: "3D Render" },
      { trait: "Year", value: "2024" },
    ],
    lastSalePrice: 8.91,
    provenance: [
      {
        id: "p16",
        type: "mint",
        date: new Date(now - 80 * day),
        to: "marcus-chen",
      },
      {
        id: "p17",
        type: "sale",
        date: new Date(now - 2 * day),
        from: "0x1a9e...7c44",
        to: "0x8c2f...9d17",
        price: 8.91,
      },
    ],
    bids: [],
  },
];

export function getArtist(id: string): Artist | undefined {
  return artists.find((a) => a.id === id);
}

export function getCollection(id: string): Collection | undefined {
  return collections.find((c) => c.id === id);
}

export function getNft(id: string): Nft | undefined {
  return nfts.find((n) => n.id === id);
}

export function getFeaturedAuction(): Nft {
  return nfts[0];
}

export function getLiveAuctions(): Nft[] {
  return nfts.filter((n) => n.auction && n.auction.endsAt > new Date());
}

export function getRecentSales(): Nft[] {
  return nfts
    .filter((n) => n.lastSalePrice)
    .sort((a, b) => {
      const aDate = a.provenance[a.provenance.length - 1]?.date.getTime() ?? 0;
      const bDate = b.provenance[b.provenance.length - 1]?.date.getTime() ?? 0;
      return bDate - aDate;
    });
}

export function getNftsByCollection(collectionId: string, excludeId?: string): Nft[] {
  return nfts.filter(
    (n) => n.collectionId === collectionId && n.id !== excludeId,
  );
}

export function getFirstNftInCollection(collectionId: string): Nft | undefined {
  return nfts.find((n) => n.collectionId === collectionId);
}

export type MarketplaceSort = "floor" | "volume" | "change";

export function getMarketplaceCollections(
  sort: MarketplaceSort = "volume",
  limit = 20,
): Collection[] {
  const sorted = [...collections];
  switch (sort) {
    case "floor":
      sorted.sort((a, b) => b.floorPrice - a.floorPrice);
      break;
    case "change":
      sorted.sort((a, b) => b.floorChange7d - a.floorChange7d);
      break;
    case "volume":
    default:
      sorted.sort((a, b) => b.volume24h - a.volume24h);
      break;
  }
  return sorted.slice(0, limit);
}

export function getMarketplaceTotals() {
  return collections.reduce(
    (acc, c) => ({
      volume24h: acc.volume24h + c.volume24h,
      volume7d: acc.volume7d + c.volume7d,
      collections: acc.collections + 1,
      items: acc.items + c.itemCount,
    }),
    { volume24h: 0, volume7d: 0, collections: 0, items: 0 },
  );
}
