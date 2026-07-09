"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { formatSol } from "@/lib/utils";
import type { Nft } from "@/lib/data";
import { getArtist } from "@/lib/data";

type NftCardProps = {
  nft: Nft;
  index?: number;
  aspect?: "square" | "portrait" | "widescreen";
};

export function NftCard({ nft, index = 0, aspect = "square" }: NftCardProps) {
  const reduce = useReducedMotion();
  const artist = getArtist(nft.artistId);
  const price = nft.auction?.currentBid ?? nft.lastSalePrice ?? 0;

  const aspectClass =
    aspect === "portrait"
      ? "aspect-[2/3]"
      : aspect === "widescreen"
        ? "aspect-[16/10]"
        : "aspect-square";

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/nft/${nft.id}`} className="media-focus group block">
        <div className={`media-poster relative ${aspectClass}`}>
          <Image
            src={nft.image}
            alt={nft.title}
            fill
            className="image-outline object-cover"
            sizes="(max-width: 768px) 80vw, 25vw"
          />
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="title-md truncate text-base">{nft.title}</h3>
            <p className="caption mt-0.5 truncate">{artist?.name}</p>
          </div>
          <p className="number-display shrink-0 text-sm text-text-muted">
            {formatSol(price)} SOL
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function NftCardSkeleton({
  aspect = "square",
}: {
  aspect?: "square" | "portrait" | "widescreen";
}) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[2/3]"
      : aspect === "widescreen"
        ? "aspect-[16/10]"
        : "aspect-square";

  return (
    <div className="animate-pulse">
      <div className={`media-poster bg-surface-elevated ${aspectClass}`} />
      <div className="mt-3 flex justify-between gap-3">
        <div className="flex-1 space-y-2">
          <div className="h-3.5 w-3/4 rounded bg-surface-elevated" />
          <div className="h-3 w-1/2 rounded bg-surface-elevated" />
        </div>
        <div className="h-3.5 w-16 rounded bg-surface-elevated" />
      </div>
    </div>
  );
}
