"use client";

import Image from "next/image";
import type { Bid } from "@/lib/data";
import { formatRelativeTime, formatSol } from "@/lib/utils";

type BidHistoryProps = {
  bids: Bid[];
};

export function BidHistory({ bids }: BidHistoryProps) {
  if (bids.length === 0) {
    return (
      <div className="card-feature text-center">
        <p className="body-md">No bids yet. Be the first.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {bids.map((bid, i) => (
        <div
          key={bid.id}
          className="flex items-center justify-between gap-3 rounded-xl px-2 py-2"
        >
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <Image
                src={bid.avatar}
                alt=""
                fill
                className="image-outline object-cover"
                sizes="32px"
              />
            </div>
            <div>
              <p className="font-mono text-xs text-text-muted">{bid.bidder}</p>
              <p className="text-[11px] text-text-subtle">
                {formatRelativeTime(bid.timestamp)}
              </p>
            </div>
          </div>
          <p
            className={`font-mono text-sm tabular-nums ${
              i === 0 ? "font-medium text-text-primary" : "text-text-muted"
            }`}
          >
            {formatSol(bid.amount)} SOL
          </p>
        </div>
      ))}
    </div>
  );
}
