import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { siteConfig } from '@/config/site'
import JsonLd from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: {
    default: 'Vertex Loop — Global AI & Enterprise Software Technology Ecosystem',
    template: '%s | Vertex Loop',
  },
  description:
    'Vertex Loop is a global technology company and ecosystem building custom AI solutions, enterprise software engineering, cloud architecture, technology education, and proprietary business applications including ERP, HRMS, Invoicing, and SCRIPTen.',
  keywords: [
    'Vertex Loop',
    'AI Development Company',
    'Custom Software Engineering',
    'Enterprise AI Solutions',
    'Generative AI Development',
    'Cloud Architecture Services',
    'ERP Software System',
    'HRMS Software Platform',
    'Digital Invoicing Software',
    'SCRIPTen Creator Tool',
    'Software Academy Bootcamp',
    'Technical SEO Agency',
    'AI Agents Development',
  ],
  authors: [{ name: 'Vertex Loop Engineering', url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Vertex Loop — Global AI & Enterprise Software Technology Ecosystem',
    description:
      'Vertex Loop builds custom AI solutions, enterprise software engineering, cloud architectures, proprietary products (ERP, HRMS, Invoicing, SCRIPTen), and technology education.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vertex Loop Technology Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex Loop — Global AI & Enterprise Software Technology Ecosystem',
    description:
      'Vertex Loop builds custom AI solutions, enterprise software engineering, cloud architectures, proprietary products (ERP, HRMS, Invoicing, SCRIPTen), and technology education.',
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
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.links.github,
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Generative AI',
    'Custom Software Development',
    'Enterprise Resource Planning (ERP)',
    'Human Resource Management Systems (HRMS)',
    'Digital Invoicing Platforms',
    'Cloud Architecture',
    'DevOps',
    'Technical SEO',
  ],
  areaServed: ['Worldwide', 'India', 'United States', 'United Arab Emirates', 'Singapore', 'United Kingdom'],
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

import { Suspense } from 'react'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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