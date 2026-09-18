import Link from "next/link";
import { NivoLogo } from "@/components/nivo-logo";
import type { ReactNode } from "react";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="px-5 pt-32 pb-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <NivoLogo showTagline />
        <h1 className="mt-10 font-serif text-4xl md:text-5xl">{title}</h1>
        <div className="mt-8 space-y-5 text-sm leading-7 text-white/60">{children}</div>
        <Link href="/" className="mt-12 inline-block text-nivo-gold">
          ← Back to NIVO FAMILY
        </Link>
      </div>
    </main>
  );
}
