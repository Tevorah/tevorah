import type { NextConfig } from "next";

const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  async headers() {
    if (IS_PRODUCTION) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
