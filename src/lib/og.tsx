export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function ogImageJsx(heading: string, tagline: string) {
  return (
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
          fontSize: 64,
          fontWeight: 700,
          color: "white",
          textAlign: "center",
          lineHeight: 1.15,
          maxWidth: 980,
          padding: "0 40px",
        }}
      >
        {heading}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 32,
          fontSize: 28,
          color: "#A6ADBB",
          textAlign: "center",
          maxWidth: 900,
          padding: "0 40px",
        }}
      >
        {tagline}
      </div>
    </div>
  );
}
