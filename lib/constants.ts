export const LINKS = {
  x: "https://x.com/",
  community: "https://discord.com/",
} as const;

export const NAV_ITEMS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#creators", label: "Creators" },
  { href: "#transparency", label: "Transparency" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
] as const;

export const PLACEHOLDER_TOKENS = [
  {
    id: "mooncat",
    name: "MOONCAT",
    ticker: "$MOONCAT",
    chain: "Solana" as const,
    creator: "@mooncat",
    verified: true,
    launched: "Coming Soon",
    story:
      "A quiet night animal that became a signal. MOONCAT is a creator-written meme about curiosity after dark.",
  },
  {
    id: "voidfox",
    name: "VOIDFOX",
    ticker: "$VOIDFOX",
    chain: "Robinhood Chain" as const,
    creator: "@voidfox",
    verified: true,
    launched: "Coming Soon",
    story:
      "A fox at the edge of a blank canvas. VOIDFOX is about starting something before the crowd arrives.",
  },
  {
    id: "glasspepe",
    name: "GLASSPEPE",
    ticker: "$GLASSPEPE",
    chain: "Solana" as const,
    creator: "@glasspepe",
    verified: true,
    launched: "Coming Soon",
    story:
      "A familiar face, recast in glass. The idea is clarity: the meme should still show who made it.",
  },
  {
    id: "nightowl",
    name: "NIGHTOWL",
    ticker: "$NIGHTOWL",
    chain: "Solana" as const,
    creator: "@nightowl",
    verified: true,
    launched: "Coming Soon",
    story:
      "Built for people who stay up drafting jokes, sketches, and ticker names until the idea finally locks.",
  },
  {
    id: "signal",
    name: "SIGNAL",
    ticker: "$SIGNAL",
    chain: "Robinhood Chain" as const,
    creator: "@signal",
    verified: true,
    launched: "Coming Soon",
    story:
      "A simple mark meant to travel. SIGNAL is a meme about being findable in a noisy feed.",
  },
  {
    id: "paperplane",
    name: "PAPERPLANE",
    ticker: "$PAPERPLANE",
    chain: "Solana" as const,
    creator: "@paperplane",
    verified: false,
    launched: "Coming Soon",
    story:
      "Folded from a sketch on a desk. PAPERPLANE is a reminder that most memes begin as a small, handmade thing.",
  },
];

export const CREATOR_HISTORY = [
  {
    ticker: "$TOKEN01",
    chain: "Solana",
    date: "Coming Soon",
    contract: "Coming Soon",
    creator: "@creator",
    status: "Planned",
  },
  {
    ticker: "$TOKEN02",
    chain: "Robinhood Chain",
    date: "Coming Soon",
    contract: "Coming Soon",
    creator: "@creator",
    status: "Planned",
  },
  {
    ticker: "$TOKEN03",
    chain: "Solana",
    date: "Coming Soon",
    contract: "Coming Soon",
    creator: "@creator",
    status: "Planned",
  },
];

export const FAQS = [
  {
    q: "What is NIVO?",
    a: "NIVO is a planned meme-token launch and discovery platform focused on creator identity, transparent token information and community discovery.",
  },
  {
    q: "When will NIVO launch?",
    a: "NIVO is currently in development. The official launch date will be announced through official channels.",
  },
  {
    q: "Which blockchains will NIVO support?",
    a: "The initial concept is designed around Solana and Robinhood Chain.",
  },
  {
    q: "Do I need an X account?",
    a: "The planned creator experience uses X account connection as part of creator/social ownership verification.",
  },
  {
    q: "Does X verification prove someone's real-world identity?",
    a: "No. Social account ownership and real-world identity are different concepts.",
  },
  {
    q: "Can anyone launch a token?",
    a: "The final eligibility and moderation rules will be announced before launch.",
  },
  {
    q: "Does NIVO guarantee token safety?",
    a: "No. NIVO should not promise that a token is safe, profitable, legitimate, or free from risk.",
  },
  {
    q: "Is NIVO affiliated with Robinhood?",
    a: "No. NIVO is an independent project and is not affiliated with or endorsed by Robinhood.",
  },
  {
    q: "Is NIVO affiliated with Solana?",
    a: "No. NIVO is an independent project and is not affiliated with or endorsed by Solana.",
  },
];
