import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center py-16">
      <Container className="text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          404 — Not Found
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Halaman Tidak Ditemukan / Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
          Rute yang Anda tuju tidak tersedia. Silakan kembali ke halaman utama portofolio.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/id"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Beranda (ID)</span>
          </Link>
          <Link
            href="/en"
            className="inline-flex items-center gap-2 rounded-lg border border-border-token bg-surface px-5 py-2.5 text-sm font-semibold text-navy hover:bg-surface-alt transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span>Home (EN)</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
