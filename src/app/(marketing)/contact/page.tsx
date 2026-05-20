import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Vertex Loop — Start a Partnership',
  description:
    'Get in touch with Vertex Loop. Whether you need one division or all five, a conversation starts here.',
}

export default function ContactPage() {
  return <ContactPageClient />
}