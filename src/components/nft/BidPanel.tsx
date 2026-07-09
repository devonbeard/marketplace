"use client";

import { BidForm } from "@/components/nft/BidForm";
import { Countdown } from "@/components/Countdown";
import type { Auction } from "@/lib/data";
import { formatSol } from "@/lib/utils";

type BidPanelProps = {
  auction: Auction;
};

export function BidPanel({ auction }: BidPanelProps) {
  const minBid = auction.currentBid + 0.5;

  return (
    <div className="card-feature">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="caption">Current bid</p>
          <p className="number-display mt-1 text-3xl text-text-primary">
            {formatSol(auction.currentBid)}{" "}
            <span className="text-base text-text-muted">SOL</span>
          </p>
        </div>
        <div className="text-right">
          <p className="caption">Ends in</p>
          <Countdown endsAt={auction.endsAt} size="lg" className="mt-1" />
        </div>
      </div>

      <div className="caption mt-4 flex items-center gap-4">
        <span>{auction.bidCount} bids</span>
        <span className="text-text-subtle">|</span>
        <span>Reserve {auction.reserveMet ? "met" : "not met"}</span>
      </div>

      <BidForm minBid={minBid} className="mt-6" />
    </div>
  );
}
