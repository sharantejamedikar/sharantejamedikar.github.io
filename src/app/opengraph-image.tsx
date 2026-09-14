import { ImageResponse } from "next/og";

export const alt = "Sharan Teja Medikar — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#f2f0e9", color: "#11110f", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "64px 72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #11110f", paddingBottom: "24px", fontSize: 22, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        <span>STM<span style={{ color: "#769700" }}>.</span></span>
        <span>AI Engineer · London, UK</span>
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 86, lineHeight: 0.92, letterSpacing: "-0.055em", fontWeight: 700 }}>SHARAN TEJA</div>
        <div style={{ fontSize: 86, lineHeight: 0.92, letterSpacing: "-0.045em", fontStyle: "italic", color: "#f2f0e9", WebkitTextStroke: "2px #11110f" }}>MEDIKAR</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid #11110f", paddingTop: "24px" }}>
        <span style={{ fontSize: 28, letterSpacing: "-0.02em" }}>Reliable AI systems,<br />from models to deployment.</span>
        <span style={{ fontSize: 18, letterSpacing: "0.06em", textAlign: "right" }}>LLM SYSTEMS · MACHINE LEARNING<br />MULTIMODAL AI · AGENTS</span>
      </div>
      <div style={{ position: "absolute", right: 72, top: 190, width: 18, height: 18, background: "#d8ff32", borderRadius: 9 }} />
    </div>,
    size,
  );
}
