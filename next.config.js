/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'data-foundry-services-bucket.s3.ap-southeast-2.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
