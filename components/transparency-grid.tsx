import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const ITEMS = [
  { k: "CREATOR", q: "Who launched it?" },
  { k: "SOCIAL", q: "Which account is associated with the creator?" },
  { k: "WALLET", q: "Which wallet created/controls relevant launch functions?" },
  { k: "CHAIN", q: "Where does the token exist?" },
  { k: "SUPPLY", q: "What is the declared supply?" },
  { k: "AUTHORITIES", q: "What token permissions/authorities exist?" },
  { k: "STORY", q: "What does the creator say the token represents?" },
  { k: "LINKS", q: "Which websites/social profiles are official?" },
];

export function TransparencyGrid() {
  return (
    <section id="transparency" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Transparency"
            title="Know What You're Looking At."
            description="On-chain properties should be independently verifiable where applicable. NIVO is designed to present those signals in one place."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.k} delay={i * 0.04}>
              <article className="min-h-[150px] rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition hover:border-nivo-gold/25">
                <p className="font-mono text-[11px] tracking-[0.22em] text-nivo-gold">{item.k}</p>
                <p className="mt-4 text-sm leading-6 text-white/60">{item.q}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="font-serif text-2xl text-white/80 md:text-3xl">
            Know who launched it. Know the story. Know the chain. See the creator. Verify what can
            be verified. Then decide for yourself.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
