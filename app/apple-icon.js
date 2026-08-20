import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06090a",
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: 30,
            background: "#a3e635",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 80,
            fontWeight: 800,
            color: "#06090a",
          }}
        >
          Z
        </div>
      </div>
    ),
    { ...size }
  );
}
