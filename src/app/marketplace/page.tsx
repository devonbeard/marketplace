import { Footer } from "@/components/Footer";
import { MarketplaceStats } from "@/components/marketplace/MarketplaceStats";
import { MarketplaceListing } from "@/components/marketplace/MarketplaceListing";
import { RevealStagger } from "@/components/RevealStagger";
import { getMarketplaceTotals } from "@/lib/data";

export const metadata = {
  title: "Marketplace | Atelier",
  description: "Browse curated NFT collections, floor prices, and market activity.",
};

export default function MarketplacePage() {
  const totals = getMarketplaceTotals();

  return (
    <>
      <main className="px-4 pb-24 pt-24">
        <div className="mx-auto max-w-7xl">
          <RevealStagger>
            <h1 className="display-section text-balance text-3xl text-text-primary md:text-4xl">
              Marketplace
            </h1>
            <p className="body-md mt-3 max-w-lg">
              Floor prices, volume, and top offers across every collection on
              Atelier.
            </p>
            <MarketplaceStats totals={totals} className="mt-8" />
          </RevealStagger>

          <section className="mt-10">
            <RevealStagger delay={0.05}>
              <h2 className="display-section text-xl text-text-primary md:text-2xl">
                Collections
              </h2>
            </RevealStagger>
            <div className="mt-6">
              <MarketplaceListing />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
