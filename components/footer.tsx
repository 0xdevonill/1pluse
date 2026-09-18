import Link from "next/link";
import { NivoLogo } from "@/components/nivo-logo";
import { LINKS } from "@/lib/constants";

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
      { href: LINKS.x, label: "X" },
      { href: LINKS.community, label: "Community" },
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
    <footer className="border-t border-white/8 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <NivoLogo showTagline size={36} />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
            NIVO is an independent project and is not affiliated with Robinhood or Solana.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 text-sm">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link href={link.href} className="text-white/60 transition hover:text-nivo-gold-bright">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-white/60 transition hover:text-nivo-gold-bright">
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
      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs leading-6 text-white/30 md:px-8">
        All token launches involve risk. Information displayed by NIVO is intended to improve
        transparency and does not constitute financial advice or a guarantee of value or
        performance.
      </p>
    </footer>
  );
}
