import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mandarine.com.vn",
      },
    ],
  },
};

export default nextConfig;
