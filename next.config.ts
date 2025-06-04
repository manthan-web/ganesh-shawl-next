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
    ],
  },
};

export default nextConfig;
