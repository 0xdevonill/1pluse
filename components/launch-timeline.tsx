import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    n: "01",
    title: "CONNECT X",
    body: "Creator connects the social account they want associated with the project.",
  },
  {
    n: "02",
    title: "CONNECT WALLET",
    body: "Creator connects a compatible wallet.",
  },
  {
    n: "03",
    title: "CREATE TOKEN",
    body: "Creator provides the token name, ticker, supply, logo, description and story.",
  },
  {
    n: "04",
    title: "SELECT CHAIN",
    body: "Choose the supported blockchain.",
  },
  {
    n: "05",
    title: "REVIEW",
    body: "Show all launch parameters before confirmation.",
  },
  {
    n: "06",
    title: "DEPLOY",
    body: "The future platform deploys the token using the selected chain's token infrastructure.",
  },
  {
    n: "07",
    title: "PUBLISH",
    body: "The token receives a public NIVO FAMILY profile.",
  },
  {
    n: "08",
    title: "COMMUNITY",
    body: "Users can discover the token and view its creator, story and public information.",
  },
];

export function LaunchTimeline() {
  return (
    <section className="py-24 md:py-32">
      <Container wide>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
            How Token Launching Will Work
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">From identity to public profile.</h2>
        </Reveal>
        <div className="mt-12 flex gap-4 overflow-x-auto pb-4 snap-x">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.04} className="snap-start">
              <article className="flex h-full w-[260px] shrink-0 flex-col rounded-3xl border border-white/8 bg-white/[0.025] p-6">
                <p className="font-mono text-[11px] tracking-[0.22em] text-nivo-gold">{step.n}</p>
                <h3 className="mt-6 font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
