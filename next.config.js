/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
