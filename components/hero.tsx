"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HeroNetworkAnimation } from "@/components/hero-network-animation";
import { Container } from "@/components/ui";
import { LINKS } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <Container wide>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="rounded-full border border-nivo-gold/40 bg-nivo-gold/10 px-3 py-1 font-mono text-[10px] tracking-[0.22em] text-nivo-gold">
                NIVO FAMILY IS LIVE ON X
              </span>
              <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-white/70">
                ROBINHOOD CHAIN + SOLANA
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl font-serif text-5xl leading-[0.95] text-[#f4f7ff] md:text-7xl"
            >
              Memes deserve an identity.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="mt-6 max-w-lg text-lg leading-8 text-white/78 md:text-xl"
            >
              Launch meme tokens with a verified creator, a real story, and transparent ownership.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.8 }}
              className="mt-5 max-w-lg text-sm leading-7 text-white/62 md:text-base"
            >
              NIVO FAMILY is building a new way to launch and discover meme tokens across Robinhood
              Chain and Solana — connecting every token to the person behind it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center rounded-full px-7 py-3.5 font-mono text-[11px] tracking-[0.24em]"
              >
                FOLLOW ON X
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 px-7 py-3.5 font-mono text-[11px] tracking-[0.24em] text-white/80 transition hover:border-nivo-gold/40 hover:text-nivo-gold-bright"
              >
                HOW IT WORKS
                <ArrowDown size={14} />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.28, duration: 0.9 }}
            className="relative"
          >
            <HeroNetworkAnimation />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
