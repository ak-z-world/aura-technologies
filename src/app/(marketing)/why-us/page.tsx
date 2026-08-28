import type { Metadata } from 'next'
import WhyUsPageClient from './WhyUsPageClient'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Why Us — Engineering Standards & Delivery',
  description:
    'Discover what sets Vertex Loop Pvt Ltd apart — frontier-first AI innovation, outcome accountability, architectural depth, and elite cross-domain talent.',
  alternates: {
    canonical: `${siteConfig.url}/why-us`,
  },
  openGraph: {
    title: 'Why Us — Engineering Standards & Delivery | Vertex Loop',
    description:
      'Discover what sets Vertex Loop Pvt Ltd apart — frontier AI innovation, architectural depth, and outcome accountability.',
    url: `${siteConfig.url}/why-us`,
  },
}

export default function WhyUsPage() {
  return <WhyUsPageClient />
}