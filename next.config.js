/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'firebasestorage.googleapis.com',
        },
        {
          hostname: 'resource.logitech.com',
        },
        {
          hostname: 'm.media-amazon.com',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  