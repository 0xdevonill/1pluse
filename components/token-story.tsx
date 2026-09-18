import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const CHAPTERS = [
  {
    title: "The Idea",
    body: "Why was this meme created?",
  },
  {
    title: "The Creator",
    body: "Who launched it?",
  },
  {
    title: "The Origin",
    body: "Where did the meme/concept come from?",
  },
  {
    title: "The Community",
    body: "What does the community represent?",
  },
  {
    title: "The Vision",
    body: "What does the creator intend to build?",
  },
];

export function TokenStory() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Token Story System"
            title="Every Token Has a Story."
            description="Every token launched through NIVO should have a creator-written story — so the idea is not lost behind a ticker."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {CHAPTERS.map((chapter, i) => (
            <Reveal key={chapter.title} delay={i * 0.06} className="h-full">
              <article className="flex h-full min-h-[180px] flex-col justify-between rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent p-5">
                <p className="font-mono text-[10px] tracking-[0.22em] text-nivo-gold">0{i + 1}</p>
                <div>
                  <h3 className="font-serif text-2xl">{chapter.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{chapter.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="max-w-3xl rounded-2xl border border-white/8 bg-white/[0.02] p-5 text-sm leading-7 text-white/50">
            Creator statements are creator-provided information and are not guarantees of future
            performance.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
