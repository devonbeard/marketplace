"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealStagger } from "@/components/RevealStagger";
import type { Nft } from "@/lib/data";
import { getArtist } from "@/lib/data";
import { formatSol } from "@/lib/utils";
import { Countdown } from "@/components/Countdown";

type LiveAuctionsBentoProps = {
  auctions: Nft[];
};

export function LiveAuctionsBento({ auctions }: LiveAuctionsBentoProps) {
  if (auctions.length === 0) return null;

  return (
    <section id="auctions" className="py-5">
      <RevealStagger className="mx-auto max-w-7xl px-4">
        <h2 className="display-section text-xl text-text-primary md:text-2xl">
          Live auctions
        </h2>
      </RevealStagger>

      <RevealStagger className="mx-auto mt-3 max-w-7xl">
        <div className="tv-shelf">
          {auctions.map((nft) => {
            const artist = getArtist(nft.artistId);
            return (
              <div key={nft.id} className="tv-shelf-item w-[220px] md:w-[260px]">
                <Link href={`/nft/${nft.id}`} className="media-focus block">
                  <div className="media-poster relative aspect-[16/10]">
                    <Image
                      src={nft.image}
                      alt={nft.title}
                      fill
                      className="image-outline object-cover"
                      sizes="260px"
                    />
                  </div>
                  <div className="mt-3 mb-2">
                    <p className="title-md truncate text-base">{nft.title}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                    <p className="caption -mb-1 truncate">Price:</p>
                    <p className="number-display mt-0.5 text-sm text-text-muted">
                      {formatSol(nft.auction!.currentBid)} SOL
                    </p>
                    </div>
                    <div className="flex flex-col">
                    <p className="caption -mb-1 truncate">Ends in</p>
                    <Countdown
                      endsAt={nft.auction!.endsAt}
                      className="caption mt-0.5 block"
                    />
                  </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </RevealStagger>
    </section>
  );
}
