"use client";

import { BidForm } from "@/components/nft/BidForm";
import { Countdown } from "@/components/Countdown";
import type { Auction } from "@/lib/data";
import { formatSol } from "@/lib/utils";

type MobileBidBarProps = {
  auction: Auction;
};

export function MobileBidBar({ auction }: MobileBidBarProps) {
  const minBid = auction.currentBid + 0.5;

  return (
    <div className="mobile-bid-bar p-4 md:hidden">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div>
          <p className="caption">Current bid</p>
          <p className="number-display text-lg text-text-primary">
            {formatSol(auction.currentBid)} SOL
          </p>
        </div>
        <Countdown endsAt={auction.endsAt} className="caption text-right" />
      </div>
      <BidForm minBid={minBid} compact />
    </div>
  );
}
