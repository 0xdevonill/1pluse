"use client";

import { useState } from "react";
import { Check, Wallet } from "lucide-react";
import { Container, PreviewBadge } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    id: "01",
    title: "CONNECT",
    headline: "Connect your identity.",
    copy: "Before launching a token, the creator establishes a public identity through their connected social profile and wallet.",
  },
  {
    id: "02",
    title: "CREATE",
    headline: "Turn an idea into a token.",
    copy: "Name it, write the story, choose the chain, and review the public profile that will travel with the token.",
  },
  {
    id: "03",
    title: "VERIFY",
    headline: "Make the creator visible.",
    copy: "Every launched token should have a public creator profile that makes creator, wallet, social account and token data easy to understand.",
  },
];

export function ThreeStepExperience() {
  const [active, setActive] = useState(0);
  const [chain, setChain] = useState<"Solana" | "Robinhood Chain">("Solana");

  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <Container wide>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
            The 3-Step Product Experience
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl text-[#f7f1e6] md:text-6xl">
            Connect. Create. Verify.
          </h2>
          <p className="mt-5 max-w-2xl text-white/55">
            A future creator flow — shown here as a product teaser, not a live launch console.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
            {STEPS.map((step, i) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActive(i)}
                className={`min-w-[220px] rounded-2xl border px-5 py-5 text-left transition ${
                  active === i
                    ? "border-nivo-gold/40 bg-nivo-gold/10"
                    : "border-white/8 bg-white/[0.02] hover:border-white/16"
                }`}
              >
                <p className="font-mono text-[11px] tracking-[0.24em] text-nivo-gold">{step.id}</p>
                <p className="mt-2 font-serif text-2xl">{step.title}</p>
                <p className="mt-2 text-sm text-white/50">{step.headline}</p>
              </button>
            ))}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0b0d13] p-5 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] tracking-[0.24em] text-nivo-gold">
                  {STEPS[active].id} — {STEPS[active].title}
                </p>
                <h3 className="mt-2 font-serif text-3xl">{STEPS[active].headline}</h3>
              </div>
              <PreviewBadge>SIMULATED — COMING SOON</PreviewBadge>
            </div>
            <p className="mb-8 max-w-2xl text-sm leading-7 text-white/55">{STEPS[active].copy}</p>

            {active === 0 && <ConnectMock />}
            {active === 1 && <CreateMock chain={chain} setChain={setChain} />}
            {active === 2 && <VerifyMock />}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ConnectMock() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        { label: "CONNECT X", status: "Ready", detail: "Public social account" },
        { label: "CONNECT WALLET", status: "Ready", detail: "Supported wallet" },
        { label: "VERIFY CREATOR", status: "Planned", detail: "Ownership confirmation" },
      ].map((card) => (
        <div key={card.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/40">{card.status}</p>
          <p className="mt-6 font-serif text-xl">{card.label}</p>
          <p className="mt-2 text-sm text-white/45">{card.detail}</p>
          <div className="mt-6 h-10 rounded-full border border-nivo-gold/30 text-center font-mono text-[10px] leading-10 tracking-[0.18em] text-nivo-gold">
            SIMULATED
          </div>
        </div>
      ))}
      <p className="md:col-span-3 mt-2 rounded-2xl border border-white/8 bg-white/[0.02] p-5 text-sm leading-7 text-white/55">
        Social ownership verification confirms control of the connected account. It does not
        independently verify a person&apos;s legal identity.
      </p>
    </div>
  );
}

function CreateMock({
  chain,
  setChain,
}: {
  chain: "Solana" | "Robinhood Chain";
  setChain: (value: "Solana" | "Robinhood Chain") => void;
}) {
  const fields = [
    ["TOKEN NAME", "MOONCAT"],
    ["TICKER", "$MOONCAT"],
    ["DESCRIPTION", "A night-signal meme with a public creator."],
    ["MEME / LOGO", "Upload placeholder"],
    ["TOTAL SUPPLY", "1,000,000,000"],
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-3">
        {fields.map(([label, value]) => (
          <label key={label} className="block">
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">{label}</span>
            <div className="mt-1.5 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80">
              {value}
            </div>
          </label>
        ))}
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/35">CHAIN</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {(["Robinhood Chain", "Solana"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setChain(option)}
                className={`rounded-xl border px-3 py-3 text-xs tracking-[0.12em] ${
                  chain === option
                    ? "border-nivo-gold/50 bg-nivo-gold/10 text-nivo-gold-bright"
                    : "border-white/10 text-white/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p className="font-mono text-[10px] tracking-[0.2em] text-nivo-gold">PUBLIC PROFILE PREVIEW</p>
        <ul className="mt-5 space-y-3 text-sm text-white/65">
          <li>CREATOR PROFILE</li>
          <li>OFFICIAL X ACCOUNT</li>
          <li>TOKEN STORY</li>
          <li>TOKEN INFORMATION</li>
          <li>Chain: {chain}</li>
        </ul>
        <p className="mt-6 text-xs leading-6 text-white/40">
          This interface is a visual demonstration of the future launch flow. It cannot deploy a
          token.
        </p>
      </div>
    </div>
  );
}

function VerifyMock() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="font-serif text-4xl">$MEME</p>
        <p className="mt-4 text-sm text-white/50">Created by</p>
        <p className="font-serif text-2xl">@CreatorName</p>
        <div className="mt-6 space-y-2 text-sm">
          {[
            "X ACCOUNT CONNECTED",
            "WALLET VERIFIED",
            "CREATOR PROFILE",
          ].map((item) => (
            <p key={item} className="flex items-center gap-2 text-nivo-teal">
              <Check size={14} /> {item} ✓
            </p>
          ))}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Creator X account", "@CreatorName"],
          ["Creator wallet", "7x…9Ab"],
          ["Token creation date", "Coming Soon"],
          ["Blockchain", "Solana"],
          ["Contract address", "Coming Soon"],
          ["Token supply", "1,000,000,000"],
          ["Official links", "X · Website · Community"],
          ["Token story", "Creator-written origin"],
          ["Authorities / settings", "To be disclosed at launch"],
          ["Community links", "Placeholder"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
            <p className="font-mono text-[9px] tracking-[0.18em] text-white/35 uppercase">{k}</p>
            <p className="mt-1 text-sm text-white/80">{v}</p>
          </div>
        ))}
        <p className="sm:col-span-2 flex items-center gap-2 text-xs text-white/40">
          <Wallet size={14} />
          Creator → Token → Wallet → Social Account
        </p>
      </div>
    </div>
  );
}
