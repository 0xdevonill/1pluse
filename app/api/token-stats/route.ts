import { emptyOfficialTokenStats, fetchOfficialTokenStats } from "@/lib/fetch-token-stats";

export const revalidate = 20;

export async function GET() {
  try {
    const stats = await fetchOfficialTokenStats();
    return Response.json(stats, {
      headers: {
        "Cache-Control": "public, s-maxage=20, stale-while-revalidate=60",
      },
    });
  } catch {
    return Response.json(emptyOfficialTokenStats(), { status: 200 });
  }
}
