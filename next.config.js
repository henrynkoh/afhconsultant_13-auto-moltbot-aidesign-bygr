/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allow production build to complete even with ESLint errors (e.g. unescaped quotes in JSX)
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}
module.exports = nextConfig
