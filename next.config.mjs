/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ✅ Quan trọng: để Vercel nhận đúng build Next.js
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
