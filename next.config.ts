import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const config: NextConfig = {
  reactStrictMode: true,
  // Disable heavy checks during build to save memory
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure we are using webpack as required by the PWA plugin
  webpack: (config) => {
    return config;
  }
};

const makePWA = withPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default makePWA(config);