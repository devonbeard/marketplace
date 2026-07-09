import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { NftCard } from "@/components/NftCard";
import { ArtworkDisplay } from "@/components/nft/ArtworkDisplay";
import { BidPanel } from "@/components/nft/BidPanel";
import { BidHistory } from "@/components/nft/BidHistory";
import { ProvenanceTimeline } from "@/components/nft/ProvenanceTimeline";
import { AttributeChips } from "@/components/nft/AttributeChips";
import { MobileBidBar } from "@/components/nft/MobileBidBar";
import {
  getArtist,
  getCollection,
  getNft,
  getNftsByCollection,
  nfts,
} from "@/lib/data";
import { formatSol } from "@/lib/utils";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return nfts.map((nft) => ({ id: nft.id }));
}

export default async function NftDetailPage({ params }: PageProps) {
  const { id } = await params;
  const nft = getNft(id);

  if (!nft) {
    notFound();
  }

  const artist = getArtist(nft.artistId);
  const collection = getCollection(nft.collectionId);
  const related = getNftsByCollection(nft.collectionId, nft.id).slice(0, 4);
  const isLive = nft.auction && nft.auction.endsAt > new Date();

  return (
    <>
      <main className="pb-28 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 pt-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:col-span-3 lg:self-start">
              <ArtworkDisplay src={nft.image} alt={nft.title} />

              <div className="mx-auto mt-8 max-w-2xl">
                <h2 className="title-md mb-4">Attributes</h2>
                <AttributeChips attributes={nft.attributes} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <p className="caption">
                    <Link
                      href={`/collection/${nft.collectionId}`}
                      className="transition-colors hover:text-primary"
                    >
                      {collection?.name}
                    </Link>
                  </p>
                  <h1 className="display-section mt-2 text-balance text-3xl text-text-primary md:text-4xl">
                    {nft.title}
                  </h1>
                  <p className="body-md mt-2">
                    by{" "}
                    <Link
                      href="/#artists"
                      className="text-text-primary underline-offset-4 hover:underline"
                    >
                      {artist?.name}
                    </Link>
                  </p>
                </div>

                {isLive && nft.auction ? (
                  <BidPanel auction={nft.auction} />
                ) : nft.lastSalePrice ? (
                  <div className="card-feature">
                    <p className="caption">Last sale</p>
                    <p className="number-display mt-1 text-2xl text-text-primary">
                      {formatSol(nft.lastSalePrice)} SOL
                    </p>
                  </div>
                ) : null}

                <div>
                  <h2 className="title-md">Description</h2>
                  <p className="body-md mt-3">{nft.description}</p>
                </div>

                {nft.bids.length > 0 && (
                  <div>
                    <h2 className="title-md mb-4">Bid history</h2>
                    <BidHistory bids={nft.bids} />
                  </div>
                )}

                <div>
                  <h2 className="title-md mb-4">Provenance</h2>
                  <ProvenanceTimeline events={nft.provenance} />
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-24 border-t border-[var(--hairline)] pt-24">
              <h2 className="display-section text-xl text-text-primary md:text-2xl">
                More from {collection?.name}
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                {related.map((item, i) => (
                  <NftCard key={item.id} nft={item} index={i} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {isLive && nft.auction && <MobileBidBar auction={nft.auction} />}
      <Footer />
    </>
  );
}
