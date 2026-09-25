import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Vertex Loop Pvt Ltd | Software, Marketing & Academy',
  },
  description:
    'Contact Vertex Loop Pvt Ltd about software products, digital marketing, technology solutions, training and CrackLeap learning initiatives.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact Vertex Loop Pvt Ltd | Software, Marketing & Academy',
    description:
      'Contact Vertex Loop Pvt Ltd about software products, digital marketing, technology solutions, training and CrackLeap learning initiatives.',
    url: `${siteConfig.url}/contact`,
    siteName: 'Vertex Loop Pvt Ltd',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Vertex Loop Pvt Ltd | Software, Marketing & Academy',
    description:
      'Contact Vertex Loop Pvt Ltd about software products, digital marketing, technology solutions, training and CrackLeap learning initiatives.',
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