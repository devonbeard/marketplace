import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atelier | Curated NFT Auctions",
  description:
    "A premium auction house for digital art. Discover, bid, and collect exceptional NFTs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="min-h-full text-text-primary">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`}
        </Script>
        <ThemeProvider>
          <div className="page-shell">
            <Nav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
