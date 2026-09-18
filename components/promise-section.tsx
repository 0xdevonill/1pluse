import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function PromiseSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,163,106,0.12),transparent_60%)]" />
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
            The NIVO FAMILY Promise
          </p>
          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] md:text-6xl">
            We don&apos;t want to hide the person behind the meme.
          </h2>
          <p className="mt-8 font-serif text-3xl text-nivo-gold-bright md:text-5xl">
            We want you to know who launched it.
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            NIVO FAMILY is being built to make meme-token launches more transparent, understandable and
            creator-driven.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
