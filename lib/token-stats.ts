export type OfficialTokenStats = {
  marketCapUsd: number | null;
  volumeUsd: number | null;
  creatorCommissionUsd: number | null;
  priceUsd: number | null;
  updatedAt: string;
};

export function emptyOfficialTokenStats(): OfficialTokenStats {
  return {
    marketCapUsd: null,
    volumeUsd: null,
    creatorCommissionUsd: null,
    priceUsd: null,
    updatedAt: new Date().toISOString(),
  };
}

export function formatUsd(value: number | null): string {
  if (value == null || !Number.isFinite(value)) return "—";
  const abs = Math.abs(value);
  if (abs >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (abs >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  if (abs >= 10_000) {
    return `$${(value / 1_000).toFixed(2)}K`;
  }
  if (abs >= 1_000) {
    return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  }
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function shortenCa(ca: string): string {
  return `${ca.slice(0, 6)}…${ca.slice(-4)}`;
}
