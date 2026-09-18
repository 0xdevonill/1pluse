import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const FEATURES = [
  {
    title: "Creator-First Launching",
    body: "The person behind the token is part of the product experience.",
  },
  {
    title: "Social Identity",
    body: "Connect the token to a public social account.",
  },
  {
    title: "Transparent Token Profiles",
    body: "Important token information is presented in one place.",
  },
  {
    title: "Token Stories",
    body: "Every project can explain its origin and purpose.",
  },
  {
    title: "Multi-Chain",
    body: "Designed for supported blockchain ecosystems.",
  },
  {
    title: "Public History",
    body: "Creators can build a visible launch history.",
  },
  {
    title: "Better Discovery",
    body: "Users discover tokens through creators, stories and transparent information.",
  },
  {
    title: "Built for Memes",
    body: "Keep meme culture fun while improving information quality.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
            What Makes NIVO FAMILY Different
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">Identity is the product.</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.04}>
              <article className="h-full rounded-3xl border border-white/8 p-6">
                <h3 className="font-serif text-2xl">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
