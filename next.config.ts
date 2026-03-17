import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const Analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// export const Anlayz = Analyzer(nextConfig);

export default Analyzer(nextConfig);
