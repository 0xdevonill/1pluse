import { ImageResponse } from "next/og";

export const alt = "NIVO — Verified Meme Launch Network";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(180deg, #0c0e14 0%, #06070a 100%)",
          color: "#f4efe6",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 8, color: "#c9a36a" }}>
          VERIFIED MEME LAUNCH NETWORK
        </div>
        <div style={{ fontSize: 84, marginTop: 24, fontStyle: "italic" }}>
          Memes deserve an identity.
        </div>
        <div style={{ fontSize: 32, marginTop: 28, color: "#ead7b3" }}>NIVO · Coming Soon</div>
      </div>
    ),
    size,
  );
}
