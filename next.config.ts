import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 768, 1024, 1440, 1920],
    qualities: [75, 88, 90, 92],
  },
  poweredByHeader: false,
};

export default nextConfig;
