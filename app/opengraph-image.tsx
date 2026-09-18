import { ImageResponse } from "next/og";

export const alt = "NIVO FAMILY — Verified Meme Launch Network";
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
          background: "linear-gradient(135deg, #0a1020 0%, #040711 55%, #0b1a22 100%)",
          color: "#f4f7ff",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 8, color: "#5eead4" }}>
          VERIFIED MEME LAUNCH NETWORK
        </div>
        <div style={{ fontSize: 76, marginTop: 24, fontStyle: "italic" }}>
          Memes deserve an identity.
        </div>
        <div style={{ fontSize: 32, marginTop: 28, color: "#f0c56d" }}>
          NIVO FAMILY · Coming Soon
        </div>
      </div>
    ),
    size,
  );
}
