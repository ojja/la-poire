/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
      },
    ],
  },
};

module.exports = nextConfig;
