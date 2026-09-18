"use client";

import { useState } from "react";
import { Container, PreviewBadge } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const TABS = ["TOKEN STORY", "CREATOR", "TOKEN DETAILS", "OFFICIAL LINKS"] as const;

export function TokenPreview() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("TOKEN STORY");

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
            Token Profile Preview
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">A public page for every launch.</h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-10">
          <article className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0a1020]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 px-6 py-5">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-nivo-gold/30 bg-nivo-gold/10 font-serif text-lg">
                    M
                  </span>
                  <div>
                    <p className="font-serif text-2xl">$MOONCAT</p>
                    <p className="text-sm text-white/50">MOONCAT · Solana</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/55">
                  Creator: <span className="text-nivo-gold-bright">@mooncat</span> · Creator Connected
                </p>
              </div>
              <PreviewBadge />
            </div>
            <div className="flex gap-2 overflow-x-auto border-b border-white/8 px-4 py-3">
              {TABS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTab(item)}
                  className={`shrink-0 rounded-full px-4 py-2 font-mono text-[10px] tracking-[0.16em] ${
                    tab === item
                      ? "bg-nivo-gold/15 text-nivo-gold-bright"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="p-6 md:p-8">
              {tab === "TOKEN STORY" && (
                <p className="max-w-2xl text-lg leading-8 text-white/70">
                  A short creator-written story. Mooncat began as a late-night sketch — a small animal
                  looking up, waiting for a signal. The creator wanted the meme to keep its origin
                  visible after launch.
                </p>
              )}
              {tab === "CREATOR" && (
                <div className="space-y-2 text-white/70">
                  <p>@mooncat</p>
                  <p className="font-mono text-sm text-white/50">Wallet: 7x...9Ab</p>
                </div>
              )}
              {tab === "TOKEN DETAILS" && (
                <dl className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Chain", "Solana"],
                    ["Supply", "1,000,000,000"],
                    ["Created", "Coming Soon"],
                    ["Contract", "Coming Soon"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-white/8 p-4">
                      <dt className="font-mono text-[10px] tracking-[0.18em] text-white/35">{k}</dt>
                      <dd className="mt-1 text-white/80">{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {tab === "OFFICIAL LINKS" && (
                <div className="flex flex-wrap gap-3 text-sm text-white/70">
                  {["X", "Website", "Community", "Explorer"].map((link) => (
                    <span
                      key={link}
                      className="rounded-full border border-white/10 px-4 py-2"
                    >
                      {link}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
