"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { BidButton } from "@/components/BidButton";
import { Countdown } from "@/components/Countdown";
import { getArtist } from "@/lib/data";
import type { Nft } from "@/lib/data";
import { formatSol } from "@/lib/utils";

type HeroAuctionProps = {
  nft: Nft;
};

export function HeroAuction({ nft }: HeroAuctionProps) {
  const reduce = useReducedMotion();
  const artist = getArtist(nft.artistId);
  const auction = nft.auction;

  if (!auction) return null;
  
  return (
    <section className="px-4 pb-8 pt-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href={`/nft/${nft.id}`} className="media-focus block">
            <div className="media-poster relative h-[200px] sm:h-[260px] md:h-[320px]">
              <Image
                src={nft.image}
                alt={nft.title}
                fill
                priority
                className="image-outline object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="poster-scrim-hero" aria-hidden />
            </div>
          </Link>

          <div className="mt-4 max-w-xl">
            <p className="caption">Featured live auction</p>
            <h1 className="display-section mt-1 text-2xl text-text-primary md:text-3xl">
              {nft.title}
            </h1>
            <p className="body-md mt-2">
              {artist?.name}
              <span className="mx-2 text-text-subtle">|</span>
              <span className="number-display text-text-primary">
                {formatSol(auction.currentBid)} SOL
              </span>
              <span className="mx-2 text-text-subtle">|</span>
              <Countdown endsAt={auction.endsAt} className="inline" />
            </p>
            <div className="mt-4">
              <BidButton href={`/nft/${nft.id}`} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
