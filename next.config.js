/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: { url: process.env.URL },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
