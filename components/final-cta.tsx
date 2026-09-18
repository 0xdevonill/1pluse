"use client";

import { motion } from "framer-motion";
import { NivoMark } from "@/components/nivo-logo";
import { Container } from "@/components/ui";
import { BRAND } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <Container>
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl font-serif text-4xl leading-[1.08] md:text-6xl"
          >
            The next generation of meme launches starts with identity.
          </motion.h2>
          <p className="mt-8 font-serif text-4xl tracking-[0.18em] md:text-5xl">
            {BRAND.name}
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-nivo-gold">
            {BRAND.tagline}
          </p>
          <p className="mt-4 text-white/55">Coming Soon.</p>
          <div className="mx-auto mt-10 w-fit animate-float-y">
            <NivoMark size={72} />
          </div>
        </div>
      </Container>
    </section>
  );
}
