"use client";

import Link from "next/link";
import { RevealItem } from "@/components/RevealStagger";
import { RevealStagger } from "@/components/RevealStagger";
import type { Nft } from "@/lib/data";
import { getArtist } from "@/lib/data";
import { formatSol } from "@/lib/utils";

type RecentSalesProps = {
  sales: Nft[];
};

export function RecentSales({ sales }: RecentSalesProps) {
  const top = sales.slice(0, 5);

  return (
    <section className="band-soft px-4 py-8 my-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <RevealStagger>
            <h2 className="display-section text-xl text-text-primary md:text-2xl">
              Recent sales
            </h2>
          </RevealStagger>
          <Link
            href="/marketplace"
            className="shrink-0 text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            View all
          </Link>
        </div>

        <div className="mt-5">
          {top.map((nft, i) => {
            const artist = getArtist(nft.artistId);
            return (
              <RevealItem key={nft.id} index={i}>
                <Link
                  href={`/nft/${nft.id}`}
                  className="flex items-center justify-between gap-4 rounded-[var(--radius-lg)] px-4 py-4 transition-colors hover:bg-[var(--row-hover)]"
                >
                  <div className="min-w-0">
                    <p className="title-md truncate">{nft.title}</p>
                    <p className="caption mt-0.5 truncate">{artist?.name}</p>
                  </div>
                  <p className="number-display shrink-0 text-sm text-text-muted">
                    {formatSol(nft.lastSalePrice!)} SOL
                  </p>
                </Link>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
