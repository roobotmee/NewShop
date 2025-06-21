/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['placeholder.svg', 'blob.v0.dev'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable compression
  compress: true,
  // Enable static optimization
  trailingSlash: false,
  // Optimize fonts
  // optimizeFonts: true, // O'chirildi yoki kommentariyaga olindi
  // Enable SWC minification
  // swcMinify: true, // O'chirildi yoki kommentariyaga olindi
}

export default nextConfig;
