import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const CARDS = [
  {
    title: "Public Creator",
    body: "Show the account associated with the token.",
  },
  {
    title: "Public Token Data",
    body: "Display important token parameters.",
  },
  {
    title: "Contract Visibility",
    body: "Provide contract/explorer links when available.",
  },
  {
    title: "Authority Disclosure",
    body: "Clearly show relevant mint/freeze/admin permissions where technically applicable.",
  },
  {
    title: "Official Links",
    body: "Separate verified/connected links from arbitrary links.",
  },
  {
    title: "Creator History",
    body: "Allow users to see tokens previously associated with a creator.",
  },
];

export function SafetySection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Visibility"
            title="Built Around Visibility."
            description="Designed to make important information easier to verify. NIVO does not claim that tokens are rug-proof, scam-proof, guaranteed safe, or guaranteed legitimate."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <article className="h-full rounded-3xl border border-white/8 p-6 transition hover:border-nivo-gold/25">
                <h3 className="font-serif text-2xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
