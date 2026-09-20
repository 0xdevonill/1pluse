"use client";

import { useEffect, useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { OFFICIAL_TOKEN } from "@/lib/constants";
import {
  emptyOfficialTokenStats,
  formatUsd,
  shortenCa,
  type OfficialTokenStats,
} from "@/lib/token-stats";

const STATS = [
  { key: "marketCapUsd", label: "Market Cap" },
  { key: "volumeUsd", label: "Volume" },
  { key: "creatorCommissionUsd", label: "Total Creator Commission" },
] as const;

export function OfficialToken() {
  const [stats, setStats] = useState<OfficialTokenStats>(emptyOfficialTokenStats());
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch("/api/token-stats", { cache: "no-store" });
        if (!response.ok) return;
        const next = (await response.json()) as OfficialTokenStats;
        if (!cancelled) {
          setStats(next);
          setLoaded(true);
        }
      } catch {
        if (!cancelled) setLoaded(true);
      }
    };

    load();
    const interval = window.setInterval(load, 30_000);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyCa = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_TOKEN.ca);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="official-token" className="pb-8 md:pb-10">
      <Container>
        <Reveal>
          <article className="overflow-hidden rounded-[28px] border border-nivo-gold/25 bg-[radial-gradient(circle_at_top_left,rgba(240,197,109,0.16),transparent_46%),#0a1020]">
            <div className="flex flex-col gap-6 border-b border-white/8 px-5 py-6 md:flex-row md:items-end md:justify-between md:px-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
                  Official Token
                </p>
                <h2 className="mt-3 font-serif text-3xl md:text-5xl">
                  {OFFICIAL_TOKEN.ticker}
                  <span className="ml-3 align-middle font-sans text-base tracking-normal text-white/45 md:text-lg">
                    {OFFICIAL_TOKEN.chain}
                  </span>
                </h2>
                <p className="mt-3 text-sm text-white/55">Official CA</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <code className="max-w-full break-all font-mono text-[12px] text-nivo-gold-bright sm:text-sm">
                    <span className="sm:hidden">{shortenCa(OFFICIAL_TOKEN.ca)}</span>
                    <span className="hidden sm:inline">{OFFICIAL_TOKEN.ca}</span>
                  </code>
                  <button
                    type="button"
                    onClick={copyCa}
                    className="inline-flex items-center gap-1.5 rounded-full border border-nivo-gold/35 bg-nivo-gold/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-nivo-gold-bright transition hover:bg-nivo-gold/20"
                    aria-label={copied ? "Contract address copied" : "Copy official contract address"}
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? "COPIED" : "COPY"}
                  </button>
                  <a
                    href={OFFICIAL_TOKEN.explorer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-white/70 transition hover:border-white/25 hover:text-white"
                  >
                    EXPLORER
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-white/35 uppercase">
                {loaded ? "Live market data" : "Loading market data"}
              </p>
            </div>
            <div className="grid gap-px bg-white/8 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.key} className="bg-[#0a1020] px-5 py-6 md:px-8">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    {stat.label}
                  </p>
                  <p
                    className={`mt-3 font-serif text-3xl md:text-4xl ${loaded ? "" : "shimmer rounded-md"}`}
                  >
                    {loaded ? formatUsd(stats[stat.key]) : "\u00a0"}
                  </p>
                </div>
              ))}
            </div>
            <p className="px-5 py-4 text-xs leading-5 text-white/35 md:px-8">
              Live figures from public market data. Total creator commission is estimated from
              trading volume using a 1% pool fee and a 70% creator share. Not financial advice.
            </p>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
