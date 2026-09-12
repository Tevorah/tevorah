import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Tevorah: Build your tech team. Without the offshore uncertainty.";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#090B10",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(69,221,245,0.16) 0%, rgba(124,92,255,0.08) 40%, transparent 70%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 22px",
            borderRadius: 999,
            border: "1px solid rgba(124,92,255,0.4)",
            backgroundColor: "rgba(124,92,255,0.1)",
            color: "#7C5CFF",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Tevorah
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 980,
            padding: "0 40px",
          }}
        >
          <span>Build your tech team.</span>
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #7C5CFF, #45DDF5)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Without the offshore uncertainty.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 28,
            color: "#A6ADBB",
          }}
        >
          AI-matched · Human-verified · Talent from Sri Lanka
        </div>
      </div>
    ),
    { ...size }
  );
}
