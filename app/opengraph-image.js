import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { renderShareImage } from "@/lib/shareImage";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(renderShareImage(), { ...size });
}
