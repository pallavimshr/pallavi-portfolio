import { ImageResponse } from "next/og";
import { getCaseStudy } from "@/lib/wordpress";

export const runtime = "edge";
export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug);
  const title = caseStudy?.title ?? "Northline Studio";
  const client = caseStudy?.client ?? "";

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
        <div style={{ display: "flex", fontSize: 20, letterSpacing: 4, color: "#1E4C8A" }}>
          NORTHLINE STUDIO — CASE STUDY
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 600,
            color: "#1B1F23",
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#565F66", letterSpacing: 2 }}>
          {client.toUpperCase()}
        </div>
      </div>
    ),
    { ...size },
  );
}
