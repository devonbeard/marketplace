"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealStagger } from "@/components/RevealStagger";
import type { Collection } from "@/lib/data";
import { formatSol } from "@/lib/utils";

type CollectionsShelfProps = {
  collections: Collection[];
};

export function CollectionsShelf({ collections }: CollectionsShelfProps) {
  return (
    <section id="collections" className="py-5">
      <RevealStagger className="mx-auto max-w-7xl px-4">
        <h2 className="display-section text-xl text-text-primary md:text-2xl">
          Curated collections
        </h2>
      </RevealStagger>

      <RevealStagger className="mx-auto mt-3 max-w-7xl">
        <div className="tv-shelf">
        {collections.map((collection) => (
          <div key={collection.id} className="tv-shelf-item w-[168px] md:w-[200px]">
            <Link href={`/collection/${collection.id}`} className="media-focus block">
              <div className="media-poster relative aspect-2/3">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="image-outline object-cover"
                  sizes="200px"
                />
              </div>
              <div className="mt-3">
                <p className="title-md truncate text-base">{collection.name}</p>
                <p className="number-display mt-0.5 text-sm text-text-muted">
                  Floor {formatSol(collection.floorPrice)} SOL
                </p>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </RevealStagger>
    </section>
  );
}
