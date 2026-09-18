import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const PROBLEMS = [
  {
    title: "Anonymous Origins",
    body: "People often don't know who is actually behind a token.",
  },
  {
    title: "Missing Context",
    body: "A token may exist without clearly explaining the story or idea behind it.",
  },
  {
    title: "Fragmented Information",
    body: "Creator identity, social accounts, token details, and important links can be scattered across different places.",
  },
  {
    title: "Trust Is Hard to Verify",
    body: "Users need clearer signals about who created a project and what information is publicly verifiable.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Core Problem"
            title="Meme Tokens Have a Problem."
            description="Too many launches arrive without a clear creator, a coherent story, or a single place to inspect what can actually be verified."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {PROBLEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group surface-card h-full rounded-3xl p-7 transition duration-500 hover:border-nivo-gold/30">
                <p className="font-mono text-[10px] tracking-[0.24em] text-nivo-gold/80">
                  0{i + 1}
                </p>
                <h3 className="mt-5 font-serif text-2xl text-[#f4f7ff]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <p className="font-serif text-3xl text-nivo-gold-bright md:text-5xl">
            NIVO FAMILY is built around transparency.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
