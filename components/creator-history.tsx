import { CREATOR_HISTORY } from "@/lib/constants";
import { Container, PreviewBadge } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function CreatorHistory() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
                Creator History
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl">One Creator. One Public History.</h2>
            </div>
            <PreviewBadge />
          </div>
        </Reveal>
        <Reveal className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
          <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.02] px-6 py-5">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/40">CREATOR</p>
              <p className="font-serif text-2xl">@creator</p>
            </div>
            <p className="text-sm text-white/45">Tokens · Planned</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="font-mono text-[10px] tracking-[0.16em] text-white/35">
                <tr>
                  {["Token", "Chain", "Launch date", "Contract", "Creator", "Status"].map((h) => (
                    <th key={h} className="px-6 py-4 font-normal">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CREATOR_HISTORY.map((row) => (
                  <tr key={row.ticker} className="border-t border-white/8">
                    <td className="px-6 py-4 text-nivo-gold-bright">{row.ticker}</td>
                    <td className="px-6 py-4 text-white/60">{row.chain}</td>
                    <td className="px-6 py-4 text-white/60">{row.date}</td>
                    <td className="px-6 py-4 text-white/60">{row.contract}</td>
                    <td className="px-6 py-4 text-white/60">{row.creator}</td>
                    <td className="px-6 py-4 text-white/60">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
