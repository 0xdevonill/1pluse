import { OFFICIAL_TOKEN } from "@/lib/constants";
import { emptyOfficialTokenStats, type OfficialTokenStats } from "@/lib/token-stats";

const GECKO_TOKEN_URL =
  "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x125c9166fde8ba901f33eacedf780d55a79d2e15";

type GeckoTokenResponse = {
  data?: {
    attributes?: {
      price_usd?: string | null;
      fdv_usd?: string | null;
      market_cap_usd?: string | null;
      volume_usd?: { h24?: string | null };
    };
  };
};

function toNumber(value: string | number | null | undefined): number | null {
  if (value == null || value === "") return null;
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

export async function fetchOfficialTokenStats(): Promise<OfficialTokenStats> {
  const response = await fetch(GECKO_TOKEN_URL, {
    headers: { Accept: "application/json" },
    next: { revalidate: 20 },
  });

  if (!response.ok) {
    throw new Error(`Token stats request failed (${response.status})`);
  }

  const json = (await response.json()) as GeckoTokenResponse;
  const attributes = json.data?.attributes;
  const priceUsd = toNumber(attributes?.price_usd);
  const marketCapUsd = toNumber(attributes?.market_cap_usd) ?? toNumber(attributes?.fdv_usd);
  const volumeUsd = toNumber(attributes?.volume_usd?.h24);
  const creatorCommissionUsd =
    volumeUsd == null ? null : volumeUsd * OFFICIAL_TOKEN.poolFee * OFFICIAL_TOKEN.creatorShare;

  return {
    marketCapUsd,
    volumeUsd,
    creatorCommissionUsd,
    priceUsd,
    updatedAt: new Date().toISOString(),
  };
}

export { emptyOfficialTokenStats };
