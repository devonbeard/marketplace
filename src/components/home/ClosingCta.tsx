"use client";

import Link from "next/link";
import { RevealStagger } from "@/components/RevealStagger";

export function ClosingCta() {
  return (
    <section className="section-band border-t border-[var(--hairline)]">
      <RevealStagger className="mx-auto max-w-7xl px-4 text-center">
        <h2
          className="display-section mx-auto max-w-lg text-balance text-3xl text-text-primary md:text-4xl"
          style={{ textWrap: "balance" }}
        >
          Start collecting with intention
        </h2>
        <p className="body-md mx-auto mt-4 max-w-md">
          Every lot on Atelier is vetted by our curatorial team before it reaches auction.
        </p>
        <Link href="/marketplace" className="btn-primary btn-primary-lg mt-8 inline-flex">
          Browse marketplace
        </Link>
      </RevealStagger>
    </section>
  );
}
