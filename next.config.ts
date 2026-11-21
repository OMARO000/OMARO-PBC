import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // IRIS replaced the separate product pages; the Data Co-op page is off until there's a plan behind it.
  async redirects() {
    return [
      { source: "/products", destination: "/iris", permanent: true },
      { source: "/data-coop", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
