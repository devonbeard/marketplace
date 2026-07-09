"use client";

import { useState } from "react";
import { BidButton } from "@/components/BidButton";
import { formatSol } from "@/lib/utils";
import { cn } from "@/lib/utils";

type BidFormProps = {
  minBid: number;
  className?: string;
  compact?: boolean;
};

type FormState = "idle" | "loading" | "success" | "error";

export function BidForm({
  minBid,
  className,
  compact = false,
}: BidFormProps) {
  const [amount, setAmount] = useState(minBid.toFixed(2));
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const inputId = compact ? "bid-amount-mobile" : "bid-amount";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseFloat(amount);
    if (isNaN(parsed) || parsed < minBid) {
      setError(`Minimum bid is ${formatSol(minBid)} SOL`);
      setState("error");
      return;
    }
    setState("loading");
    setError("");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className={cn("rounded-[var(--radius-lg)] bg-surface-strong px-4 py-3", className)}>
        <p className="body-md text-sm">
          Your bid of{" "}
          <span className="number-display text-text-primary">
            {formatSol(parseFloat(amount))} SOL
          </span>{" "}
          has been recorded. This is a mock transaction.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-2", className)}>
      <div className={cn("flex gap-3", compact ? "items-center" : "flex-col sm:flex-row sm:items-end")}>
        <div className={cn("flex min-w-0 flex-col gap-2", !compact && "flex-1")}>
          <label htmlFor={inputId} className={compact ? "sr-only" : "caption"}>
            Your bid (SOL)
          </label>
          <input
            id={inputId}
            type="number"
            step="0.01"
            min={minBid}
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setState("idle");
              setError("");
            }}
            className="h-11 w-full rounded-[var(--radius-pill)] border border-[var(--hairline)] bg-surface-strong px-4 font-mono text-sm tabular-nums text-text-primary outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
          />
        </div>
        <BidButton
          type="submit"
          label={state === "loading" ? "Confirming..." : "Place bid"}
          disabled={state === "loading"}
          className={cn("shrink-0", compact ? "h-11 px-5" : "w-full sm:w-auto")}
        />
      </div>
      {!compact && (
        <p className="caption">Min {formatSol(minBid)} SOL</p>
      )}
      {state === "error" && error && (
        <p className="text-xs text-semantic-down" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
