import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const SITE_NAME = "FreelanceCalc";
const SITE_DOMAIN = "freelancecalc.io";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? SITE_NAME;
  const desc = searchParams.get("desc") ?? "Free Freelance Tools";
  const tag = searchParams.get("tag") ?? "Free Calculator";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0f",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "56px 72px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(99,102,241,1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                💰
              </div>
              <span style={{ color: "#f8f8f8", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.3px" }}>
                {SITE_NAME}
              </span>
            </div>
            <div
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.4)",
                borderRadius: "20px",
                padding: "6px 16px",
                color: "#818cf8",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {tag}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
            <div
              style={{
                color: "#f8f8f8",
                fontSize: title.length > 40 ? "44px" : "54px",
                fontWeight: "800",
                lineHeight: "1.1",
                letterSpacing: "-1px",
              }}
            >
              {title}
            </div>
            <div style={{ color: "#71717a", fontSize: "22px", lineHeight: "1.5", fontWeight: "400" }}>
              {desc}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6366f1" }} />
            <span style={{ color: "#52525b", fontSize: "16px", fontWeight: "500" }}>
              {SITE_DOMAIN}
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
