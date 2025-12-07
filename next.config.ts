import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // Disable checks during build to save memory on Vercel free tier
  typescript: {
    ignoreBuildErrors: true,
  },
  //eslint: {
    //ignoreDuringBuilds: true,
  //} as any,
  // Disable source maps for lighter build
  productionBrowserSourceMaps: false,
};

export default config;