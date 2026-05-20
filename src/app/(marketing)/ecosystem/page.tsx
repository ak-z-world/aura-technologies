import type { Metadata } from 'next'
import EcosystemPageClient from './EcosystemPageClient'

export const metadata: Metadata = {
  title: 'Our Ecosystem — Vertex Loop',
  description:
    'Explore Vertex Loop\'s five interconnected divisions: Tech Academy, AI Products, IT Services, Software Engineering, and Digital Marketing.',
}

export default function EcosystemPage() {
  return <EcosystemPageClient />
}