/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // enable app router
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

module.exports = nextConfig;
