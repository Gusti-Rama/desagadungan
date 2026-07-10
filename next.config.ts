import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages deployment
  output: "export",

  // Required for static export — Next.js image optimization needs a server
  images: {
    unoptimized: true,
  },

  // Trailing slashes for cleaner URLs on static hosts
  trailingSlash: true,
};

export default nextConfig;
