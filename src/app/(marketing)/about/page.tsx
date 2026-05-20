import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About Us — Vertex Loop',
  description:
    'Learn who we are — the people, principles, and philosophy behind the Vertex Loop technology ecosystem.',
}

export default function AboutPage() {
  return <AboutPageClient />
}