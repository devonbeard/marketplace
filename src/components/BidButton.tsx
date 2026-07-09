"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type BidButtonProps = {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "primary-lg";
};

function ButtonInner({ label }: { label: string }) {
  return (
    <>
      <span>{label}</span>
      <ArrowUpRight size={16} weight="bold" />
    </>
  );
}

export function BidButton({
  onClick,
  href,
  className,
  label = "Place bid",
  type = "button",
  disabled = false,
  variant = "primary",
}: BidButtonProps) {
  const styles = cn(
    variant === "secondary" ? "btn-secondary-dark" : "btn-primary",
    variant === "primary-lg" && "btn-primary-lg",
    "gap-2",
    disabled && "cursor-not-allowed opacity-50",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        <ButtonInner label={label} />
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      <ButtonInner label={label} />
    </button>
  );
}
