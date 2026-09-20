import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NIVO FAMILY — Verified Meme Launch Network",
  description:
    "NIVO FAMILY is building a meme-token launch network where every token has a verified creator, a real story, and transparent ownership. Coming soon on Robinhood Chain and Solana.",
  keywords: [
    "NIVO FAMILY",
    "NIVO",
    "meme token",
    "creator identity",
    "Solana",
    "Robinhood Chain",
    "token launch",
  ],
  openGraph: {
    title: "NIVO FAMILY — Verified Meme Launch Network",
    description:
      "Memes deserve an identity. Launch meme tokens with a verified creator, a real story, and transparent ownership.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIVO FAMILY — Verified Meme Launch Network",
    description: "Memes deserve an identity. Coming soon.",
    site: "@NivoFamily",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="noise-overlay" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
