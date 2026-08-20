import { site } from "@/data/site";

export function renderShareImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0a0a0a",
        backgroundImage:
          "linear-gradient(135deg, rgba(157, 230, 0,0.16) 0%, rgba(6,9,10,0) 40%), linear-gradient(315deg, rgba(255, 194, 12,0.14) 0%, rgba(6,9,10,0) 40%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#9de600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontWeight: 800,
            color: "#0a0a0a",
          }}
        >
          Z
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#ffffff", letterSpacing: 2 }}>
          {site.brand}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: 60 }}>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#ffffff", lineHeight: 1.15 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#ffc20c", lineHeight: 1.15 }}>
          {site.role}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#b7c2b4", marginTop: 24, maxWidth: 820 }}>
          {site.tagline}
        </div>
      </div>
    </div>
  );
}
