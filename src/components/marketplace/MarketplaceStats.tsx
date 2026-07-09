import { formatSol } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Totals = {
  volume24h: number;
  volume7d: number;
  collections: number;
  items: number;
};

type MarketplaceStatsProps = {
  totals: Totals;
  className?: string;
};

export function MarketplaceStats({ totals, className }: MarketplaceStatsProps) {
  const stats = [
    { label: "24h vol", value: `${formatSol(totals.volume24h)} SOL` },
    { label: "7d vol", value: `${formatSol(totals.volume7d)} SOL` },
    { label: "Collections", value: totals.collections.toString() },
    { label: "Items", value: totals.items.toLocaleString("en-US") },
  ];

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[var(--hairline)] pb-5",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-baseline gap-2">
          <span className="caption">{stat.label}</span>
          <span className="number-display text-sm text-text-muted">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
