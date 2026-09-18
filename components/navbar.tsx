"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NivoLogo } from "@/components/nivo-logo";
import { useComingSoon } from "@/components/coming-soon-context";
import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const { setOpen } = useComingSoon();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/8 bg-[#07080c]/72 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="relative z-10" aria-label="NIVO home">
            <NivoLogo size={30} />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] tracking-[0.16em] text-white/55 uppercase transition hover:text-nivo-gold-bright"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="hidden rounded-full border border-nivo-gold/40 bg-nivo-gold/10 px-4 py-2 font-mono text-[10px] tracking-[0.22em] text-nivo-gold-bright transition hover:bg-nivo-gold/20 sm:inline-flex"
            >
              COMING SOON
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#05060a]/96 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col justify-center px-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="border-b border-white/8 py-5 font-serif text-4xl text-[#f4efe6]"
                >
                  {item.label}
                </motion.a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setOpen(true);
                }}
                className="mt-8 w-full rounded-full border border-nivo-gold/40 py-4 font-mono text-xs tracking-[0.24em] text-nivo-gold"
              >
                COMING SOON
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
