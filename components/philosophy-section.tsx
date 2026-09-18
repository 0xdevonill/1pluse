"use client";

import { motion } from "framer-motion";
import { Container, Eyebrow } from "@/components/ui";

const PIECES = ["A creator", "An idea", "A community", "A social identity", "A launch history"];

export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,124,255,0.12),transparent_55%)]" />
      <Container>
        <Eyebrow>NIVO FAMILY Philosophy</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] text-[#f4f7ff] md:text-7xl"
        >
          Every token should have a story.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-white/70"
        >
          A meme is more than a ticker.
        </motion.p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {PIECES.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
            >
              {item}
            </motion.li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-base leading-8 text-white/50">
          NIVO FAMILY is designed to connect those pieces into one transparent token profile.
        </p>
      </Container>
    </section>
  );
}
