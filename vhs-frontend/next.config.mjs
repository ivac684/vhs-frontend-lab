/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3002/:path*' // Ensure this points to the correct URL of your API
      }
    ];
  },
};

export default nextConfig;
