import type { Metadata } from 'next'
import WhyUsPageClient from './WhyUsPageClient'

export const metadata: Metadata = {
  title: 'Why Vertex Loop — Our Standards & Differentiators',
  description:
    'Discover what sets Vertex Loop apart — frontier thinking, outcome accountability, architectural integrity, and elite cross-domain talent.',
}

export default function WhyUsPage() {
  return <WhyUsPageClient />
}