"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  }

  return (
    <section id="waitlist" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-nivo-gold">
              Waitlist
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Get the NIVO launch update.</h2>
            {joined ? (
              <p className="mt-8 font-serif text-3xl text-nivo-gold-bright">You&apos;re on the list.</p>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="email">
                  Enter your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 flex-1 rounded-full border border-white/12 bg-white/[0.03] px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-nivo-gold/40"
                />
                <button
                  type="submit"
                  className="h-12 rounded-full bg-gradient-to-b from-[#ead7b3] to-[#c9a36a] px-6 font-mono text-[11px] tracking-[0.18em] text-[#1a140c]"
                >
                  JOIN WAITLIST
                </button>
              </form>
            )}
            <p className="mt-4 text-xs text-white/30">Simulated waitlist for this Coming Soon site.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
