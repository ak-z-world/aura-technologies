import type { Metadata } from 'next'
import EcosystemPageClient from './EcosystemPageClient'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Technology Ecosystem & Platforms',
  description:
    'Explore Vertex Loop Pvt Ltd’s five interconnected divisions: Crack Leap Tech Academy, AI Products, Cloud Architecture, Software Engineering, and Digital Marketing.',
  alternates: {
    canonical: `${siteConfig.url}/ecosystem`,
  },
  openGraph: {
    title: 'Technology Ecosystem & Platforms | Vertex Loop',
    description:
      'Explore Vertex Loop Pvt Ltd’s interconnected technology ecosystem spanning AI, cloud, software, academy, and SaaS products.',
    url: `${siteConfig.url}/ecosystem`,
  },
}

export default function EcosystemPage() {
  return <EcosystemPageClient />
}