import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pizzahouse.ua',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
