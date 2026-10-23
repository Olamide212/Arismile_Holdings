import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@arismile/ui", "@arismile/brand"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Preserve the WordPress URLs from arismile.com.ng.
    return [
      { source: "/9town-nigeria-limited", destination: "/subsidiaries/nine-town", permanent: true },
      { source: "/oceania-limited", destination: "/subsidiaries/oceania", permanent: true },
      { source: "/datu-kalinga", destination: "/subsidiaries/datu-kalinga", permanent: true },
      { source: "/mind-age", destination: "/subsidiaries/mind-age", permanent: true },
      { source: "/services", destination: "/#services", permanent: false },
    ];
  },
};

export default nextConfig;
