import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact Our Engineering Team',
  description:
    'Connect with Vertex Loop Pvt Ltd at our Ambattur, Chennai headquarters (G2, Venkatapuram, 600053). Phone: +91 94457 70160. Email: hello@vertexloop.in. Inquiries for AI, software, cloud & training.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact Our Engineering Team | Vertex Loop',
    description:
      'Connect with Vertex Loop Pvt Ltd at our Ambattur, Chennai headquarters. Direct phone: +91 94457 70160. Email: hello@vertexloop.in.',
    url: `${siteConfig.url}/contact`,
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${siteConfig.url}/contact/#webpage`,
  url: `${siteConfig.url}/contact`,
  name: 'Contact Vertex Loop Pvt Ltd',
  description: 'Official contact and headquarters information for Vertex Loop Pvt Ltd.',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} id="contact-page-jsonld" />
      <ContactPageClient />
    </>
  )
}