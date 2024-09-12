/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.SUPABASE_HOSTNAME,
        port: '',
        pathname: process.env.SUPABASE_PATHNAME,
      },
    ],
  },
};

export default nextConfig;
