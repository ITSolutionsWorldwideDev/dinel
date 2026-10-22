// apps/admin/next.config.ts
import { join } from "path";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/f/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
  },
  transpilePackages: ["@acme/matching", "@repo/ui", "@acme/ui"],
};

export default nextConfig;