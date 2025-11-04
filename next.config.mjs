/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com', // ✅ simplified
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // ✅ Google Drive’s CDN
      },
    ],
  },
};

export default nextConfig;
