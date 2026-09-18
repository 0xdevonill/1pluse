"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useComingSoon } from "@/components/coming-soon-context";
import { HeroNetworkAnimation } from "@/components/hero-network-animation";
import { Container } from "@/components/ui";

export function Hero() {
  const { setOpen } = useComingSoon();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <Container wide>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="rounded-full border border-nivo-gold/35 bg-nivo-gold/10 px-3 py-1 font-mono text-[10px] tracking-[0.22em] text-nivo-gold">
                NIVO IS BUILDING
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-white/55">
                ROBINHOOD CHAIN + SOLANA
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl font-serif text-5xl leading-[0.95] text-[#f7f1e6] md:text-7xl"
            >
              Memes deserve an identity.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-6 max-w-lg text-lg leading-8 text-white/70 md:text-xl"
            >
              Launch meme tokens with a verified creator, a real story, and transparent ownership.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.55, duration: 0.8 }}
              className="mt-5 max-w-lg text-sm leading-7 text-white/48 md:text-base"
            >
              NIVO is building a new way to launch and discover meme tokens across Robinhood Chain
              and Solana — connecting every token to the person behind it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-full bg-gradient-to-b from-[#ead7b3] to-[#c9a36a] px-7 py-3.5 font-mono text-[11px] tracking-[0.24em] text-[#1a140c] shadow-[0_0_32px_rgba(201,163,106,0.28)] transition hover:brightness-110"
              >
                COMING SOON
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-7 py-3.5 font-mono text-[11px] tracking-[0.24em] text-white/75 transition hover:border-nivo-gold/40 hover:text-nivo-gold-bright"
              >
                HOW IT WORKS
                <ArrowDown size={14} />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.35, duration: 1 }}
            className="relative"
          >
            <HeroNetworkAnimation />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
