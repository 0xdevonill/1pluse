import { Check } from "lucide-react";
import { Container, PreviewBadge } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { NivoMark } from "@/components/nivo-logo";

export function CreatorProfile() {
  return (
    <section id="creators" className="py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
              Creator Profile
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">See the person behind the ticker.</h2>
            <p className="mt-5 max-w-xl text-white/55">
              The badge means NIVO verified that the creator controls the connected social account
              and wallet according to the platform&apos;s verification process. It is not government ID
              verification.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="relative overflow-hidden rounded-[28px] border border-nivo-gold/25 bg-[#0c0e14] p-7 shadow-[0_0_80px_rgba(201,163,106,0.08)]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-nivo-gold/10 blur-3xl" />
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <NivoMark size={52} />
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-nivo-teal text-[#081010]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.24em] text-nivo-gold">
                      NIVO CREATOR
                    </p>
                    <h3 className="mt-1 font-serif text-3xl">@creatorname</h3>
                  </div>
                </div>
                <PreviewBadge />
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["X Connected", "Wallet Connected"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-nivo-teal/30 bg-nivo-teal/10 px-3 py-1 text-xs text-nivo-teal"
                  >
                    <Check size={12} /> {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/8 pt-6">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-white/35">TOKENS CREATED</p>
                  <p className="mt-1 font-serif text-3xl">03</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-white/35">JOINED</p>
                  <p className="mt-1 font-serif text-3xl">2026</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="font-mono text-[10px] tracking-[0.18em] text-white/35">OFFICIAL LINKS</p>
                <div className="mt-3 flex gap-4 text-sm text-white/70">
                  <span>X</span>
                  <span>Website</span>
                  <span>Community</span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
