/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/dakisolatie-antwerpen",
        destination: "/diensten/dakisolatie",
        statusCode: 301,
      },
      {
        source: "/gevelisolatie-antwerpen",
        destination: "/diensten/gevelisolatie",
        statusCode: 301,
      },
    ];
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
