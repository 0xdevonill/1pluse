"use client";

import { useId } from "react";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  showTagline?: boolean;
  size?: number;
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
          <stop stopColor="#F4E6C8" />
          <stop offset="0.5" stopColor="#C9A36A" />
          <stop offset="1" stopColor="#8D6A3A" />
        </linearGradient>
      </defs>
      <polygon
        points="32,5 55,18.5 55,45.5 32,59 9,45.5 9,18.5"
        stroke={`url(#${goldId})`}
        strokeWidth="1.5"
        fill="rgba(201,163,106,0.06)"
      />
      <circle cx="32" cy="32" r="13.5" stroke={`url(#${goldId})`} strokeWidth="1.2" />
      <circle cx="32" cy="32" r="3.2" fill={`url(#${goldId})`} />
      <circle cx="32" cy="8.5" r="2.1" fill="#EAD7B3" />
      <circle cx="51.5" cy="43.5" r="2.1" fill="#EAD7B3" />
      <circle cx="12.5" cy="43.5" r="2.1" fill="#EAD7B3" />
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
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <NivoMark size={size} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[1.35rem] tracking-[0.18em] text-[#f4efe6]">
            NIVO
          </span>
          {showTagline && (
            <span className="mt-1.5 font-mono text-[9px] tracking-[0.22em] text-nivo-gold/80 uppercase">
              Verified Meme Launch Network
            </span>
          )}
        </span>
      )}
    </span>
  );
}
