import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { siteConfig } from '@/config/site'
import JsonLd from '@/components/seo/JsonLd'
import { Suspense } from 'react'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

export const metadata: Metadata = {
  title: {
    default: 'Global Technology & Software Solutions | Vertex Loop',
    template: '%s | Vertex Loop',
  },
  description:
    'Vertex Loop Pvt Ltd is an enterprise technology company and software ecosystem providing custom AI development, autonomous agents, RAG systems, bespoke software engineering, cloud DevOps, digital marketing, and Crack Leap technology academy.',
  keywords: [
    'Vertex Loop Pvt Ltd',
    'Vertex Loop',
    'AI Development Company',
    'Custom Software Engineering',
    'Enterprise AI Solutions',
    'Autonomous AI Agents',
    'RAG LLM Applications',
    'Generative AI Development',
    'Cloud Architecture AWS DevOps',
    'WordPress Development',
    'ERP Software System',
    'HRMS Software Platform',
    'Digital Invoicing Software',
    'SCRIPTen Creator Tool',
    'Crack Leap Tech Academy',
    'Python Training Chennai',
    'AI Training Bootcamps',
    'College Campus Training Tamil Nadu',
    'Corporate Software Training India',
    'Technical SEO AEO GEO Agency',
  ],
  authors: [{ name: 'Vertex Loop Pvt Ltd Engineering', url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Global Technology & Software Solutions | Vertex Loop',
    description:
      'Vertex Loop Pvt Ltd builds custom AI solutions, autonomous multi-agents, enterprise software engineering, cloud architectures, proprietary products (ERP, HRMS, Invoicing, SCRIPTen), and Crack Leap technology academy.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vertex Loop Pvt Ltd Technology Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Technology & Software Solutions | Vertex Loop',
    description:
      'Vertex Loop Pvt Ltd builds custom AI solutions, autonomous multi-agents, enterprise software engineering, cloud architectures, proprietary products (ERP, HRMS, Invoicing, SCRIPTen), and Crack Leap technology academy.',
    creator: '@LoopVertex99532',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: siteConfig.logo,
  image: siteConfig.ogImage,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.telephone,
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
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.telephone,
    contactType: 'Customer Service & Architectural Inquiries',
    email: siteConfig.email,
    areaServed: ['Worldwide', 'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates', 'Singapore'],
    availableLanguage: ['English', 'Tamil'],
  },
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.links.github,
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Generative AI Development',
    'Autonomous Multi-Agent Networks',
    'RAG / Vector Database Applications',
    'Custom Software Engineering',
    'Enterprise Resource Planning (ERP)',
    'Human Resource Management Systems (HRMS)',
    'Digital Invoicing Platforms',
    'Cloud Architecture & AWS DevOps',
    'Technical SEO, AEO & GEO Optimization',
    'Python & Software Development Academy Training',
  ],
  areaServed: [
    { '@type': 'Place', name: 'Worldwide (Remote Delivery)' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Singapore' },
  ],
  subOrganization: {
    '@type': 'EducationalOrganization',
    name: 'Crack Leap',
    url: siteConfig.academyUrl,
    description: 'Vertex Loop Pvt Ltd’s dedicated technology education ecosystem for developer upskilling and corporate training.',
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
  inLanguage: 'en-US',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <JsonLd data={organizationSchema} id="org-jsonld" />
        <JsonLd data={webSiteSchema} id="website-jsonld" />
      </head>
      <body className="antialiased font-sans bg-slate-50 text-slate-900">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
}