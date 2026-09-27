/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mobile-app-website',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig