import type { NextConfig } from "next";

// Strict content rules (security list, decision 386 a): everything comes from this site; nothing loads from other hosts.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "Content-Security-Policy", value: csp },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "no-referrer" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
      ],
    }];
  },
  async redirects() {
    return [
      { source: "/products", destination: "/iris", permanent: true },
      { source: "/data-coop", destination: "/", permanent: false },
      { source: "/press", destination: "/connect#contact", permanent: true },
      { source: "/account", destination: "/", permanent: false },
      { source: "/:page(index|iris|mission|origins|connect|transparency|hai-standard|methodology).html", destination: "/:page", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/iris/code", destination: "https://igitit-4bty.onrender.com/iris/code" },
      { source: "/iris/code/:path*", destination: "https://igitit-4bty.onrender.com/iris/code/:path*" },
    ];
  },
};

export default nextConfig;
