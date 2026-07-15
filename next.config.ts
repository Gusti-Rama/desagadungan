import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel natively supports Next.js, no need for static export
  // which breaks Keystatic API routes.

  // Required if using static export, but safe to keep for standard builds
  images: {
    unoptimized: true,
  },

  // Trailing slashes for cleaner URLs
  trailingSlash: true,
};

export default nextConfig;
