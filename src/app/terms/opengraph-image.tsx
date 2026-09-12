import { ImageResponse } from "next/og";
import { ogImageJsx, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Terms of Service | Tevorah";

export default async function Image() {
  return new ImageResponse(
    ogImageJsx("Terms of Service", "Terms governing use of Tevorah"),
    { ...size }
  );
}
