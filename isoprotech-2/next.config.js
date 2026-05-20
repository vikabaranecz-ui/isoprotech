/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      // ── Security headers on every response ─────────────────────────────
      {
        source: "/(.*)",
        headers: [
          // Prevent click-jacking
          { key: "X-Frame-Options",        value: "DENY" },
          // Prevent MIME sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Limit referrer leakage
          { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
          // Basic XSS protection for older browsers
          { key: "X-XSS-Protection",       value: "1; mode=block" },
          // Permissions Policy — disable unused browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // HSTS — enforce HTTPS for 1 year (enable once HTTPS is confirmed)
          // { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },

      // ── API routes — tighten further ───────────────────────────────────
      {
        source: "/api/(.*)",
        headers: [
          { key: "Cache-Control",           value: "no-store, no-cache, must-revalidate" },
          { key: "Pragma",                  value: "no-cache" },
          { key: "X-Content-Type-Options",  value: "nosniff" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
