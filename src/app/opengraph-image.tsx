import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pallavi Mishra — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#F7F5F1",
          backgroundImage:
            "linear-gradient(rgba(30,76,138,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,76,138,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#1E4C8A" }}>
          PALLAVI MISHRA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            color: "#1B1F23",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          I build production web apps that ship, not just demos.
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#565F66", letterSpacing: 2 }}>
          FULL-STACK DEVELOPER — REACT — NEXT.JS — NODE.JS — TYPESCRIPT
        </div>
      </div>
    ),
    { ...size },
  );
}
