import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const columns = [
  {
    label: "The Work",
    links: [
      { href: "/marketplace", label: "Marketplace" },
      { href: "/#collections", label: "Collections" },
      { href: "/#auctions", label: "Live auctions" },
    ],
  },
  {
    label: "The House",
    links: [
      { href: "/#artists", label: "Artists" },
      { href: "#", label: "Manifesto" },
      { href: "#", label: "Curation" },
    ],
  },
  {
    label: "Elsewhere",
    links: [
      { href: "#", label: "X" },
      { href: "#", label: "Instagram" },
      { href: "#", label: "Discord" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-3 pb-3 pt-16 md:px-4 md:pb-4">
      <div className="footer-panel mx-auto max-w-7xl">
        <div className="px-7 pt-12 md:px-12 md:pt-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
            <div className="max-w-xs shrink-0">
              <p className="text-base font-semibold tracking-tight text-text-primary">
                {SITE_NAME}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Curated digital art auctions for collectors who value
                restraint.
              </p>
            </div>

            <div className="footer-columns w-full lg:max-w-2xl">
              {columns.map((column) => (
                <div key={column.label}>
                  <p className="footer-eyebrow">{column.label}</p>
                  <ul className="mt-4 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-text-muted transition-colors duration-300 ease-[var(--ease-ui)] hover:text-text-primary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-2 border-t border-[var(--hairline)] py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-text-subtle">
              © {new Date().getFullYear()} {SITE_NAME}
            </p>
          </div>
        </div>

        <div aria-hidden className="px-7 pt-6 md:px-12 md:pt-10">
          <p className="footer-wordmark">{SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
