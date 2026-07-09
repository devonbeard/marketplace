"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealItem } from "@/components/RevealStagger";
import type { Collection } from "@/lib/data";
import { getArtist } from "@/lib/data";
import { formatPercent, formatSol } from "@/lib/utils";

type CollectionListingRowProps = {
  collection: Collection;
  index: number;
  rank: number;
};

export function CollectionListingRow({
  collection,
  index,
  rank,
}: CollectionListingRowProps) {
  const artist = getArtist(collection.artistId);
  const changePositive = collection.floorChange7d >= 0;

  return (
    <RevealItem index={index}>
      <Link href={`/collection/${collection.id}`} className="asset-row group">
        <div className="flex items-center gap-4">
          <span className="hidden w-6 number-display text-sm text-text-subtle md:block">
            {rank}
          </span>
          <div className="asset-icon relative">
            <Image
              src={collection.image}
              alt={collection.name}
              fill
              className="image-outline object-cover"
              sizes="48px"
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="title-md truncate">{collection.name}</p>
          <p className="caption mt-0.5 truncate">
            {artist?.name}
            <span className="text-text-subtle"> · </span>
            {collection.itemCount.toLocaleString("en-US")} items
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 md:hidden">
            <Metric label="Floor" value={`${formatSol(collection.floorPrice)} SOL`} />
            <Metric
              label="7d"
              value={formatPercent(collection.floorChange7d)}
              positive={changePositive}
              negative={!changePositive}
            />
          </div>
        </div>

        <div className="col-span-2 hidden items-center gap-8 md:col-span-1 md:flex md:justify-end">
          <Metric
            label="Floor"
            value={`${formatSol(collection.floorPrice)}`}
            suffix="SOL"
            large
          />
          <Metric
            label="Top offer"
            value={`${formatSol(collection.topOffer)}`}
            suffix="SOL"
          />
          <Metric
            label="24h vol"
            value={`${formatSol(collection.volume24h)}`}
            suffix="SOL"
          />
          <Metric
            label="7d"
            value={formatPercent(collection.floorChange7d)}
            positive={changePositive}
            negative={!changePositive}
          />
        </div>
      </Link>
    </RevealItem>
  );
}

function Metric({
  label,
  value,
  suffix,
  large,
  positive,
  negative,
}: {
  label: string;
  value: string;
  suffix?: string;
  large?: boolean;
  positive?: boolean;
  negative?: boolean;
}) {
  return (
    <div className="text-right">
      <p className="caption">{label}</p>
      <p
        className={`number-display mt-0.5 ${
          large ? "text-base" : "text-sm"
        } ${
          positive
            ? "text-semantic-up"
            : negative
              ? "text-semantic-down"
              : "text-text-primary"
        }`}
      >
        {value}
        {suffix && (
          <span className="ml-1 text-[10px] text-text-subtle">{suffix}</span>
        )}
      </p>
    </div>
  );
}
