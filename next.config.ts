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
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ecosystem',
        destination: '/software',
        permanent: true,
      },
      {
        source: '/why-us',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/locations/:slug*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/software',
        permanent: true,
      },
      {
        source: '/products/:slug*',
        destination: '/software',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/software',
        permanent: true,
      },
      {
        source: '/services/digital-marketing',
        destination: '/marketing',
        permanent: true,
      },
      {
        source: '/services/:slug*',
        destination: '/software',
        permanent: true,
      },
      {
        source: '/digital-marketing',
        destination: '/marketing',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms-conditions',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-conditions',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/ai-products',
        destination: '/software',
        permanent: true,
      },
      {
        source: '/it-services',
        destination: '/software',
        permanent: true,
      },
      {
        source: '/software-engineering',
        destination: '/software',
        permanent: true,
      },
    ]
  },
}

export default nextConfig