// apps/admin/next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  experimental: {
    turbo: false
  }
};

export default nextConfig;
