/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,
  },
  // Allow these origins to request dev resources when using the network IP
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://172.16.0.2:3000",
  ],
};

module.exports = nextConfig;
