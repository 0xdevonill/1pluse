import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function ChainSection() {
  return (
    <section className="py-24 md:py-32">
      <Container wide>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
            Built for supported public blockchain networks
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            Two ecosystems. One identity layer.
          </h2>
        </Reveal>
        <div className="mt-12 grid overflow-hidden rounded-[28px] border border-white/10 md:grid-cols-2">
          <Reveal className="border-b border-white/10 bg-gradient-to-br from-[#12151e] to-[#0a0c11] p-8 md:border-b-0 md:border-r md:p-12">
            <p className="font-mono text-[10px] tracking-[0.24em] text-nivo-gold">COMING SOON</p>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl">ROBINHOOD CHAIN</h3>
            <p className="mt-4 text-white/55">EVM-native token infrastructure</p>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              Robinhood Chain is an Ethereum-compatible Layer-2 built with Arbitrum technology and
              uses ETH for gas. NIVO plans to support token launches on this network.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="bg-gradient-to-bl from-[#10201e] to-[#0a0c11] p-8 md:p-12">
            <p className="font-mono text-[10px] tracking-[0.24em] text-nivo-teal">COMING SOON</p>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl">SOLANA</h3>
            <p className="mt-4 text-white/55">High-performance token ecosystem</p>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              Planned support for Solana token launches, with creator identity, story and public
              profile presented in the same NIVO format.
            </p>
          </Reveal>
        </div>
        <p className="mt-6 text-xs leading-6 text-white/35">
          NIVO is an independent project and is not affiliated with or endorsed by Robinhood or
          Solana.
        </p>
      </Container>
    </section>
  );
}
