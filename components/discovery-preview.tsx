"use client";

import { useMemo, useState } from "react";
import { PLACEHOLDER_TOKENS } from "@/lib/constants";
import { Container, PreviewBadge } from "@/components/ui";

const FILTERS = ["ALL", "SOLANA", "ROBINHOOD CHAIN", "NEW", "TRENDING", "VERIFIED CREATOR"] as const;

export function DiscoveryPreview() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");

  const tokens = useMemo(() => {
    return PLACEHOLDER_TOKENS.filter((token) => {
      if (filter === "ALL" || filter === "NEW" || filter === "TRENDING") return true;
      if (filter === "SOLANA") return token.chain === "Solana";
      if (filter === "ROBINHOOD CHAIN") return token.chain === "Robinhood Chain";
      if (filter === "VERIFIED CREATOR") return token.verified;
      return true;
    });
  }, [filter]);

  return (
    <section className="py-24 md:py-32">
      <Container wide>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
              Discover
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">Discover What People Are Launching.</h2>
          </div>
          <PreviewBadge />
        </div>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.16em] ${
                filter === item
                  ? "border-nivo-gold/40 bg-nivo-gold/10 text-nivo-gold-bright"
                  : "border-white/10 text-white/45"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {tokens.map((token) => (
            <article
              key={token.id}
              className="w-[280px] shrink-0 rounded-3xl border border-white/8 bg-white/[0.025] p-5 transition hover:border-nivo-gold/25 md:w-auto"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 font-serif text-lg">
                  {token.name.slice(0, 1)}
                </span>
                <div>
                  <p className="font-serif text-xl">{token.name}</p>
                  <p className="text-xs text-white/45">{token.ticker}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-white/50">
                <span className="rounded-full border border-white/10 px-2 py-1">{token.chain}</span>
                <span className="rounded-full border border-white/10 px-2 py-1">{token.creator}</span>
                <span className="rounded-full border border-white/10 px-2 py-1">
                  {token.verified ? "Verified creator" : "Unverified"}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/55">{token.story}</p>
              <p className="mt-4 font-mono text-[10px] tracking-[0.16em] text-white/30">
                Launch date · {token.launched}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/35">
          Product preview. Fictional placeholder tokens. No prices. No live markets.
        </p>
      </Container>
    </section>
  );
}
