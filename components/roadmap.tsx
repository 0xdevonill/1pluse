import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const PHASES = [
  {
    n: "PHASE 01",
    title: "FOUNDATION",
    items: ["Brand", "Website", "Community", "Infrastructure"],
    status: "BUILDING",
  },
  {
    n: "PHASE 02",
    title: "CREATOR ACCESS",
    items: ["X connection", "Wallet connection", "Creator profiles", "Token creation interface"],
    status: "COMING SOON",
  },
  {
    n: "PHASE 03",
    title: "TOKEN LAUNCH",
    items: [
      "Supported blockchain deployment",
      "Token profiles",
      "Creator verification",
      "Public token pages",
    ],
    status: "COMING SOON",
  },
  {
    n: "PHASE 04",
    title: "DISCOVERY",
    items: ["Token discovery", "Creator history", "Community tools", "Analytics"],
    status: "COMING SOON",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">Roadmap</p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">Built in public, launched with care.</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.n} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-white/8 bg-white/[0.02] p-6">
                <p className="font-mono text-[10px] tracking-[0.22em] text-nivo-gold">{phase.n}</p>
                <h3 className="mt-4 font-serif text-2xl">{phase.title}</h3>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-white/55">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-nivo-gold-bright">
                  {phase.status}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
