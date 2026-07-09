import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function CollectionNotFound() {
  return (
    <>
      <main className="flex min-h-[100dvh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-medium tracking-tight">Collection not found</h1>
        <p className="mt-3 text-sm text-text-muted">
          This collection may have been removed or the link is incorrect.
        </p>
        <Link href="/marketplace" className="btn-primary mt-8">
          Browse marketplace
        </Link>
      </main>
      <Footer />
    </>
  );
}
