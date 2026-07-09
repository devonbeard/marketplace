"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type ArtworkDisplayProps = {
  src: string;
  alt: string;
};

export function ArtworkDisplay({ src, alt }: ArtworkDisplayProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-2xl"
    >
      <div className="card-xl overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="image-outline object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
}
