"use client";

import { useId } from "react";
import { BRAND } from "@/lib/constants";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  showTagline?: boolean;
  size?: number;
  compact?: boolean;
};

export function NivoMark({
  className = "",
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  const reactId = useId().replace(/:/g, "");
  const goldId = `nivoGold-${reactId}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={goldId} x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE9B8" />
          <stop offset="0.45" stopColor="#F0C56D" />
          <stop offset="1" stopColor="#5EEAD4" />
        </linearGradient>
      </defs>
      <polygon
        points="32,5 55,18.5 55,45.5 32,59 9,45.5 9,18.5"
        stroke={`url(#${goldId})`}
        strokeWidth="1.5"
        fill="rgba(94,234,212,0.06)"
      />
      <circle cx="32" cy="32" r="13.5" stroke={`url(#${goldId})`} strokeWidth="1.2" />
      <circle cx="32" cy="32" r="3.2" fill={`url(#${goldId})`} />
      <circle cx="32" cy="8.5" r="2.1" fill="#FFE9B8" />
      <circle cx="51.5" cy="43.5" r="2.1" fill="#5EEAD4" />
      <circle cx="12.5" cy="43.5" r="2.1" fill="#8B7CFF" />
      <path
        d="M23.5 32.5L29.2 38.2L41 24.8"
        stroke={`url(#${goldId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NivoLogo({
  className = "",
  showWordmark = true,
  showTagline = false,
  size = 32,
  compact = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <NivoMark size={size} />
      {showWordmark && (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={`whitespace-nowrap font-serif tracking-[0.08em] text-[#f4f7ff] ${
              compact ? "text-[0.95rem] sm:text-[1.05rem]" : "text-[1.2rem] md:text-[1.35rem]"
            }`}
          >
            NIVO{" "}
            <span className="text-nivo-gold">FAMILY</span>
          </span>
          {showTagline && (
            <span className="mt-1.5 font-mono text-[9px] tracking-[0.18em] text-nivo-gold/90 uppercase">
              {BRAND.tagline}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
