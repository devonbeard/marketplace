"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const links = [
  { href: "/marketplace", label: "Marketplace" },
  { href: "/#auctions", label: "Auctions" },
  { href: "/#artists", label: "Artists" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={cn("top-nav", open && "top-nav-menu-open")}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-text-primary md:text-lg"
            >
              {SITE_NAME}
            </Link>

            <div className="nav-desktop-links">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-2 py-2 text-sm font-medium text-text-body transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button type="button" className="btn-secondary-dark">
              Connect wallet
            </button>
            <Link href="/marketplace" className="btn-primary nav-desktop-only">
              Browse
            </Link>
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="nav-menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? (
                <XIcon size={22} weight="light" />
              ) : (
                <ListIcon size={22} weight="light" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="nav-overlay"
          >
            <div className="nav-menu-panel">
              <div className="nav-menu-links">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduce ? 0 : 0.06 + i * 0.04,
                      duration: 0.4,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="nav-menu-link"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
