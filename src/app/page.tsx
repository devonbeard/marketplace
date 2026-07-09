import { Footer } from "@/components/Footer";
import { HeroAuction } from "@/components/home/HeroAuction";
import { CollectionsShelf } from "@/components/home/CollectionsShelf";
import { LiveAuctionsBento } from "@/components/home/LiveAuctionsBento";
import { ArtistSpotlight } from "@/components/home/ArtistSpotlight";
import { RecentSales } from "@/components/home/RecentSales";
import {
  artists,
  collections,
  getFeaturedAuction,
  getLiveAuctions,
  getRecentSales,
} from "@/lib/data";

export default function HomePage() {
  const featured = getFeaturedAuction();
  const liveAuctions = getLiveAuctions().filter((nft) => nft.id !== featured.id);
  const recentSales = getRecentSales();
  const spotlightArtist = artists[0];

  return (
    <>
      <main>
        <HeroAuction nft={featured} />
        <CollectionsShelf collections={collections} />
        <LiveAuctionsBento auctions={liveAuctions} />
        <RecentSales sales={recentSales} />
        <ArtistSpotlight artist={spotlightArtist} />
      </main>
      <Footer />
    </>
  );
}
