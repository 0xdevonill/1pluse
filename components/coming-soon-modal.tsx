"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { LINKS } from "@/lib/constants";
import { useComingSoon } from "@/components/coming-soon-context";
import { NivoMark } from "@/components/nivo-logo";

export function ComingSoonModal() {
  const { open, setOpen } = useComingSoon();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            aria-label="Close dialog"
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-nivo-gold/20 bg-[#0c0e14] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
          >
            <div className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-nivo-gold/15 blur-3xl" />
            <div className="flex items-start justify-between gap-4">
              <NivoMark size={40} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-nivo-gold/40 hover:text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-nivo-gold">
              Coming Soon
            </p>
            <h2 id="coming-soon-title" className="mt-3 font-serif text-3xl text-[#f7f1e6]">
              NIVO is not live yet.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/60">
              We&apos;re building the launch infrastructure.
              <br />
              Join the early community to receive launch updates.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={LINKS.x}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-nivo-gold/40 bg-nivo-gold/10 px-4 py-3 text-xs font-medium tracking-[0.18em] text-nivo-gold-bright transition hover:bg-nivo-gold/20"
              >
                Follow on X
              </a>
              <a
                href={LINKS.community}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/12 px-4 py-3 text-xs font-medium tracking-[0.18em] text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
