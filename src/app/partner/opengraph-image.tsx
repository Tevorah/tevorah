import { ImageResponse } from "next/og";
import { ogImageJsx, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Become a Tevorah Partner | Referral, Technology & Talent Partnerships";

export default async function Image() {
  return new ImageResponse(
    ogImageJsx("Become a Partner", "Referral, technology & talent partnerships"),
    { ...size }
  );
}
