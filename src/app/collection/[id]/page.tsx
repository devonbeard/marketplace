import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { NftCard } from "@/components/NftCard";
import {
  collections,
  getArtist,
  getCollection,
  getNftsByCollection,
} from "@/lib/data";
import { formatPercent, formatSol } from "@/lib/utils";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return collections.map((c) => ({ id: c.id }));
}

export default async function CollectionPage({ params }: PageProps) {
  const { id } = await params;
  const collection = getCollection(id);

  if (!collection) {
    notFound();
  }

  const artist = getArtist(collection.artistId);
  const items = getNftsByCollection(collection.id);
  const changePositive = collection.floorChange7d >= 0;

  return (
    <>
      <main className="px-4 pb-24 pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
            <div className="card-xl mx-auto w-full max-w-[280px] overflow-hidden lg:mx-0">
              <div className="relative aspect-square lg:aspect-auto lg:h-72">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  priority
                  className="image-outline object-cover"
                  sizes="(max-width: 1024px) 100vw, 280px"
                />
              </div>
            </div>

            <div>
              <Link
                href="/marketplace"
                className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
              >
                Marketplace
              </Link>
              <h1 className="display-section mt-3 text-balance text-3xl text-text-primary md:text-4xl">
                {collection.name}
              </h1>
              <p className="body-md mt-2">
                by{" "}
                <Link
                  href="/#artists"
                  className="text-text-primary underline-offset-4 hover:underline"
                >
                  {artist?.name}
                </Link>
                {" · "}
                {collection.itemCount.toLocaleString("en-US")} items
              </p>
              <p className="body-md mt-4 max-w-xl">{collection.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <Stat label="Floor" value={`${formatSol(collection.floorPrice)} SOL`} />
                <Stat label="Top offer" value={`${formatSol(collection.topOffer)} SOL`} />
                <Stat label="24h volume" value={`${formatSol(collection.volume24h)} SOL`} />
                <Stat
                  label="7d change"
                  value={formatPercent(collection.floorChange7d)}
                  positive={changePositive}
                  negative={!changePositive}
                />
              </div>
            </div>
          </div>

          <section className="mt-20 border-t border-[var(--hairline)] pt-20">
            <h2 className="display-section text-xl text-text-primary md:text-2xl">
              Available lots
            </h2>
            <p className="body-md mt-2">
              {items.length} pieces from this collection on Atelier
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {items.map((nft, i) => (
                <NftCard key={nft.id} nft={nft} index={i} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Stat({
  label,
  value,
  positive,
  negative,
}: {
  label: string;
  value: string;
  positive?: boolean;
  negative?: boolean;
}) {
  return (
    <div>
      <p className="caption">{label}</p>
      <p
        className={`number-display mt-1 text-sm md:text-base ${
          positive
            ? "text-semantic-up"
            : negative
              ? "text-semantic-down"
              : "text-text-primary"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
