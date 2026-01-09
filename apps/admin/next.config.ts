// apps/admin/next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;
