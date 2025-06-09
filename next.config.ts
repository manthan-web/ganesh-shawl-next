import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio-wgg8os0ks4og8gog0wgosckk.snext.in',
        port: '',
        pathname: '/generic-images/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.29.93',
        port: '9000',
        pathname: '/shawls-images/**',
      },
    ],
  },
};

export default nextConfig;
