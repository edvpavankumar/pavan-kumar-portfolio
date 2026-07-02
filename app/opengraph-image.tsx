import { ImageResponse } from "next/og";
import { personal } from "@/lib/data";

export const runtime = "edge";
export const alt = `${personal.name} — ${personal.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#050505",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            color: "#C9A227",
            textTransform: "uppercase",
            marginBottom: 28,
            display: "flex",
          }}
        >
          AI &amp; Software Developer
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.15,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Ede Dinesh Venkata</span>
          <span style={{ color: "#C9A227" }}>Pavan Kumar</span>
        </div>
        <div style={{ fontSize: 24, color: "#A1A1AA", marginTop: 32, display: "flex" }}>
          Hyderabad, Telangana, India
        </div>
      </div>
    ),
    { ...size }
  );
}
