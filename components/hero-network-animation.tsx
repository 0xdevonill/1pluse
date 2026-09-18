"use client";

import { motion } from "framer-motion";

const NODES = [
  { label: "CREATOR", x: 50, y: 12 },
  { label: "X ACCOUNT", x: 86, y: 32 },
  { label: "TOKEN", x: 86, y: 68 },
  { label: "STORY", x: 50, y: 88 },
  { label: "CHAIN", x: 14, y: 68 },
  { label: "LIQUIDITY", x: 14, y: 32 },
];

export function HeroNetworkAnimation() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="glow-orb absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2" />
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EAD7B3" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#C9A36A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C9A36A" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGold" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#EAD7B3" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#C9A36A" stopOpacity="0.85" />
            <stop offset="1" stopColor="#7EC8C0" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {NODES.map((node) => (
          <g key={node.label}>
            <line
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="url(#lineGold)"
              strokeWidth="0.28"
              className="animate-dash"
            />
          </g>
        ))}
        <circle cx="50" cy="50" r="16" fill="url(#coreGlow)" className="animate-pulse-soft" />
        <g className="origin-center animate-slow-spin" style={{ transformBox: "fill-box", transformOrigin: "50px 50px" }}>
          <polygon
            points="50,38 60,44 60,56 50,62 40,56 40,44"
            fill="rgba(8,9,12,0.7)"
            stroke="#EAD7B3"
            strokeWidth="0.5"
          />
        </g>
        <circle cx="50" cy="50" r="2.1" fill="#F4E6C8" />
        <path
          d="M45.5 50.2 L48.4 53 L55 45.8"
          fill="none"
          stroke="#F4E6C8"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        {NODES.map((node, i) => (
          <motion.g
            key={node.label}
            animate={{ y: [0, i % 2 === 0 ? -1.2 : 1.2, 0] }}
            transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx={node.x} cy={node.y} r="2.4" fill="#0b0d12" stroke="#C9A36A" strokeWidth="0.45" />
            <circle cx={node.x} cy={node.y} r="0.9" fill="#EAD7B3" />
            <text
              x={node.x}
              y={node.y + (node.y < 50 ? -4.5 : 6.2)}
              textAnchor="middle"
              fill="#EAD7B3"
              fontSize="2.3"
              letterSpacing="0.18"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
      <p className="absolute inset-x-0 bottom-2 text-center font-mono text-[9px] tracking-[0.22em] text-white/35 uppercase">
        Creator → Verification → Token → Community
      </p>
    </div>
  );
}
