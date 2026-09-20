import Link from "next/link";
import { NivoLogo } from "@/components/nivo-logo";
import { LINKS, OFFICIAL_TOKEN } from "@/lib/constants";

const GROUPS = [
  {
    title: "Product",
    links: [
      { href: "#how-it-works", label: "How It Works" },
      { href: "#creators", label: "Creators" },
      { href: "#roadmap", label: "Roadmap" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: LINKS.x, label: "X", external: true },
      { href: LINKS.community, label: "Community", external: true },
      { href: "#waitlist", label: "Waitlist" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal", label: "Legal" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <NivoLogo showTagline size={36} />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
            NIVO FAMILY is an independent project and is not affiliated with Robinhood or Solana.
          </p>
          <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-white/40 uppercase">
            Official CA
          </p>
          <a
            href={OFFICIAL_TOKEN.explorer}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block break-all font-mono text-[11px] text-nivo-gold-bright/80 transition hover:text-nivo-gold-bright"
          >
            {OFFICIAL_TOKEN.ca}
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6 text-sm">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link href={link.href} className="text-white/65 transition hover:text-nivo-gold-bright">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/65 transition hover:text-nivo-gold-bright"
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs leading-6 text-white/35 md:px-8">
        All token launches involve risk. Information displayed by NIVO FAMILY is intended to improve
        transparency and does not constitute financial advice or a guarantee of value or
        performance.
      </p>
    </footer>
  );
}
