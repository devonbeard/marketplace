"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const revealTransition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1] as const,
};

const revealViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -10% 0px",
} as const;

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealStagger({
  children,
  className,
  delay = 0,
}: RevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, revealViewport);

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={
        reduce || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
      }
      transition={{
        ...revealTransition,
        delay: reduce ? 0 : delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};

export function RevealItem({ children, className, index = 0 }: RevealItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, revealViewport);

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={
        reduce || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
      }
      transition={{
        ...revealTransition,
        delay: reduce ? 0 : index * 0.04,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
