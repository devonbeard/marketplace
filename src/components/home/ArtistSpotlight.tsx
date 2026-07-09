"use client";

import Image from "next/image";
import { RevealStagger } from "@/components/RevealStagger";
import type { Artist } from "@/lib/data";

type ArtistSpotlightProps = {
  artist: Artist;
};

export function ArtistSpotlight({ artist }: ArtistSpotlightProps) {
  return (
    <section id="artists" className="px-4 py-5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealStagger>
            <div className="card-xl mx-auto max-w-md overflow-hidden lg:mx-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={artist.portrait}
                  alt={artist.name}
                  fill
                  className="image-outline object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </RevealStagger>

          <RevealStagger delay={0.04}>
            <blockquote>
              <p
                className="display-section text-pretty text-xl text-text-primary md:text-2xl"
                style={{ textWrap: "pretty" }}
              >
                &ldquo;{artist.quote}&rdquo;
              </p>
              <footer className="mt-5">
                <p className="title-md">{artist.name}</p>
                <p className="caption mt-0.5">{artist.role}</p>
              </footer>
            </blockquote>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
