import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  distDir: isDevelopment ? ".next-dev" : ".next",
  reactStrictMode: true,
  experimental: {
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
