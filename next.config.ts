import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: false,
  },
  async redirects() {
    return [
      {
        source: '/ai-products',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/it-services',
        destination: '/services/cloud-architecture',
        permanent: true,
      },
      {
        source: '/software-engineering',
        destination: '/services/custom-software-development',
        permanent: true,
      },
      {
        source: '/digital-marketing',
        destination: '/services/digital-marketing',
        permanent: true,
      },
      {
        source: '/scripten',
        destination: '/products/scripten',
        permanent: true,
      },
      {
        source: '/erp',
        destination: '/products/erp',
        permanent: true,
      },
      {
        source: '/invoicing',
        destination: '/products/invoicing',
        permanent: true,
      },
      {
        source: '/hrms',
        destination: '/products/hrms',
        permanent: true,
      },
    ]
  },
}

export default nextConfig