import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'About Vertex Loop Pvt Ltd — Leadership, Engineering Principles & Mission',
  description:
    'Discover Vertex Loop Pvt Ltd — an Indian technology ecosystem headquartered in Ambattur, Chennai. Learn about our leadership, engineering principles, AI innovations, and Crack Leap education mission.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: 'About Vertex Loop Pvt Ltd — Leadership, Engineering Principles & Mission',
    description:
      'Learn who we are — the leadership, principles, and philosophy behind Vertex Loop Pvt Ltd.',
    url: `${siteConfig.url}/about`,
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${siteConfig.url}/about/#webpage`,
  url: `${siteConfig.url}/about`,
  name: 'About Vertex Loop Pvt Ltd',
  description:
    'Overview of Vertex Loop Pvt Ltd, our leadership team, engineering philosophy, and global service architecture.',
  mainEntity: {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
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

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} id="about-page-jsonld" />
      <AboutPageClient />
    </>
  )
}