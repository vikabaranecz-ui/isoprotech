/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // External images from isoprotech.be CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "impro.usercontent.one",
      },
    ],
    // Disable Next.js image optimization proxy for external images
    // This prevents 500 errors when the proxy can't reach the source
    unoptimized: true,
  },
  // Generate sitemap and robots.txt
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
