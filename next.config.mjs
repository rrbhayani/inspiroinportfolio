/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Placeholder host — swap for your CDN / asset domain.
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
