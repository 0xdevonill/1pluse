"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { Container } from "@/components/ui";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">FAQ</p>
        <h2 className="mt-4 font-serif text-4xl md:text-6xl">Questions, answered plainly.</h2>
        <div className="mt-10 divide-y divide-white/8 border-y border-white/8">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl md:text-2xl">{item.q}</span>
                  <ChevronDown
                    className={`shrink-0 text-nivo-gold transition ${isOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 max-w-3xl text-sm leading-7 text-white/55">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
