/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 90, 95],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/products", destination: "/services", permanent: true },
      { source: "/careers", destination: "/contact", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/case-studies/:slug", destination: "/work/:slug", permanent: true },
      { source: "/packages", destination: "/services", permanent: true },
      {
        source: "/apps-for-shopify-privacy-policy",
        destination: "/privacy/shopify-apps",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
