import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Vertex Loop Pvt Ltd | Software, Marketing & Training',
  },
  description:
    'Contact Vertex Loop Pvt Ltd about software products, technology development, digital marketing services or CrackLeap training and education.',
  keywords: [
    'Contact Vertex Loop',
    'Vertex Loop Pvt Ltd Contact',
    'Software Inquiries',
    'Digital Marketing Inquiries',
    'CrackLeap Training Inquiries',
    'Technology Solutions Consultation',
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact Vertex Loop Pvt Ltd | Software, Marketing & Training',
    description:
      'Contact Vertex Loop Pvt Ltd about software products, technology development, digital marketing services or CrackLeap training and education.',
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Vertex Loop Pvt Ltd | Software, Marketing & Training',
    description:
      'Contact Vertex Loop Pvt Ltd about software products, technology development, digital marketing services or CrackLeap training and education.',
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${siteConfig.url}/contact/#webpage`,
  url: `${siteConfig.url}/contact`,
  name: 'Contact Vertex Loop Pvt Ltd',
  description: 'Official contact and business inquiry channel for Vertex Loop Pvt Ltd.',
  mainEntity: {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
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
  },
}

const contactBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Contact',
      item: `${siteConfig.url}/contact`,
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} id="contact-page-jsonld" />
      <JsonLd data={contactBreadcrumbSchema} id="contact-breadcrumb-jsonld" />
      <ContactPageClient />
    </>
  )
}