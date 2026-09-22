/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // /dakisolatie has no page — redirect to the main landing page
      { source: "/dakisolatie", destination: "/dakisolatie-antwerpen", permanent: true },
      // Old paths Google may still have cached
      { source: "/gevelisolatie", destination: "/gevelisolatie-antwerpen", permanent: true },
      { source: "/contact-antwerpen", destination: "/contact", permanent: true },
      { source: "/offerte", destination: "/contact", permanent: true },
      { source: "/diensten/dakisolatie-antwerpen", destination: "/dakisolatie-antwerpen", permanent: true },
      { source: "/diensten/gevelisolatie-antwerpen", destination: "/gevelisolatie-antwerpen", permanent: true },
      // English /services/* → Dutch /diensten/*
      { source: "/services/:slug*", destination: "/diensten/:slug*", permanent: true },
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
