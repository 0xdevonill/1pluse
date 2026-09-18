"use client";

import { LINKS } from "@/lib/constants";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { useComingSoon } from "@/components/coming-soon-context";

export function CommunitySection() {
  const { setOpen } = useComingSoon();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-nivo-gold/25 bg-[radial-gradient(circle_at_top,rgba(240,197,109,0.18),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(94,234,212,0.1),transparent_45%),#0a1020] px-6 py-16 text-center md:px-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
              Early Access
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl">Be There Before the First Launch.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/68">
              NIVO FAMILY is currently being built. Follow the project to see the first creator
              tools, launch experiments and platform updates.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full rounded-full px-6 py-3.5 font-mono text-[11px] tracking-[0.2em] sm:w-auto"
              >
                FOLLOW ON X
              </a>
              <a
                href={LINKS.community}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-white/15 px-6 py-3.5 font-mono text-[11px] tracking-[0.2em] text-white/80 sm:w-auto"
              >
                JOIN COMMUNITY
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="w-full rounded-full border border-nivo-gold/35 px-6 py-3.5 font-mono text-[11px] tracking-[0.2em] text-nivo-gold sm:w-auto"
              >
                GET EARLY ACCESS
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
