"use client";

import { useState } from "react";
import type { MarketplaceSort } from "@/lib/data";
import { getMarketplaceCollections } from "@/lib/data";
import { CollectionListingRow } from "@/components/marketplace/CollectionListingRow";
import { cn } from "@/lib/utils";

const sortOptions: { id: MarketplaceSort; label: string }[] = [
  { id: "volume", label: "Volume" },
  { id: "floor", label: "Floor" },
  { id: "change", label: "7d change" },
];

export function MarketplaceListing() {
  const [sort, setSort] = useState<MarketplaceSort>("volume");
  const sorted = getMarketplaceCollections(sort);

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto scrollbar-hide">
        {sortOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setSort(option.id)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.96]",
              sort === option.id
                ? "bg-primary text-on-primary"
                : "bg-surface-elevated text-text-muted hover:text-text-primary",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="hidden grid-cols-[auto_1fr_auto] gap-8 px-3 pb-3 md:grid">
        <span className="w-6" />
        <span className="caption">Collection</span>
        <div className="flex gap-8">
          {["Floor", "Top offer", "24h vol", "7d"].map((label) => (
            <span key={label} className="caption w-20 text-right">
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-0.5">
        {sorted.map((collection, i) => (
          <CollectionListingRow
            key={collection.id}
            collection={collection}
            index={i}
            rank={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
