"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type CountdownProps = {
  endsAt: Date;
  className?: string;
  size?: "sm" | "lg";
};

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function getTimeLeft(endsAt: Date): TimeLeft {
  const diff = Math.max(0, endsAt.getTime() - Date.now());
  const hours = Math.floor(diff / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { hours, minutes, seconds, expired: diff === 0 };
}

const countdownClass = (size: "sm" | "lg", className?: string) =>
  cn(
    "font-mono tabular-nums tracking-tight text-text-primary",
    size === "lg" ? "text-2xl md:text-3xl" : "text-sm",
    className,
  );

export function Countdown({ endsAt, className, size = "sm" }: CountdownProps) {
  const reduce = useReducedMotion();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTime(getTimeLeft(endsAt));

    if (reduce) {
      queueMicrotask(update);
      return;
    }

    const id = window.setInterval(update, 1000);
    queueMicrotask(update);
    return () => window.clearInterval(id);
  }, [endsAt, reduce]);

  if (time === null) {
    return (
      <span className={countdownClass(size, className)} aria-hidden>
        00:00:00
      </span>
    );
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  if (time.expired) {
    return (
      <span
        className={cn(
          "font-mono tabular-nums text-text-muted",
          size === "lg" ? "text-2xl" : "text-sm",
          className,
        )}
      >
        Ended
      </span>
    );
  }

  return (
    <span
      className={countdownClass(size, className)}
      aria-live="polite"
      suppressHydrationWarning
    >
      {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
    </span>
  );
}
