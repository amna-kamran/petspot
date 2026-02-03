/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // enable app router
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
