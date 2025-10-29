/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Vercel Hobby最適化
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

module.exports = nextConfig
