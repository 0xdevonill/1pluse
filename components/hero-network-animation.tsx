"use client";

import { useId } from "react";
import { motion } from "framer-motion";

const NODES = [
  { label: "CREATOR", x: 50, y: 14 },
  { label: "X ACCOUNT", x: 84, y: 32 },
  { label: "TOKEN", x: 84, y: 68 },
  { label: "STORY", x: 50, y: 86 },
  { label: "CHAIN", x: 16, y: 68 },
  { label: "LIQUIDITY", x: 16, y: 32 },
];

export function HeroNetworkAnimation() {
  const reactId = useId().replace(/:/g, "");
  const glowId = `coreGlow-${reactId}`;
  const lineId = `lineGold-${reactId}`;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      <div className="glow-orb absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <svg viewBox="-8 -8 116 116" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE9B8" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F0C56D" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={lineId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFE9B8" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#F0C56D" stopOpacity="0.9" />
            <stop offset="1" stopColor="#5EEAD4" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {NODES.map((node) => (
          <line
            key={`line-${node.label}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke={`url(#${lineId})`}
            strokeWidth="0.32"
            className="animate-dash"
          />
        ))}
        <circle cx="50" cy="50" r="16" fill={`url(#${glowId})`} className="animate-pulse-soft" />
        <polygon
          points="50,38.5 59.5,44 59.5,56 50,61.5 40.5,56 40.5,44"
          fill="rgba(4,7,17,0.72)"
          stroke="#FFE9B8"
          strokeWidth="0.5"
        />
        <circle cx="50" cy="50" r="2.1" fill="#FFE9B8" />
        <path
          d="M45.5 50.2 L48.4 53 L55 45.8"
          fill="none"
          stroke="#FFE9B8"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        {NODES.map((node, i) => (
          <motion.g
            key={node.label}
            animate={{ y: [0, i % 2 === 0 ? -0.8 : 0.8, 0] }}
            transition={{ duration: 6 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx={node.x} cy={node.y} r="2.4" fill="#040711" stroke="#5EEAD4" strokeWidth="0.45" />
            <circle cx={node.x} cy={node.y} r="0.9" fill="#F0C56D" />
            <text
              x={node.x}
              y={node.y + (node.y < 50 ? -5 : 6.8)}
              textAnchor="middle"
              fill="#E8F0FF"
              fontSize="2.4"
              letterSpacing="0.16"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
      <p className="pointer-events-none absolute inset-x-0 -bottom-1 text-center font-mono text-[9px] tracking-[0.18em] text-white/45 uppercase sm:bottom-1">
        Creator → Verification → Token → Community
      </p>
    </div>
  );
}
