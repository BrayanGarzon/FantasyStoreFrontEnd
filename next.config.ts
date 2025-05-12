import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.12',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
