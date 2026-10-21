import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { siteConfig } from '@/config/site'
import JsonLd from '@/components/seo/JsonLd'
import { Suspense } from 'react'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

export const metadata: Metadata = {
  title: {
    default: 'Vertex Loop Pvt Ltd | Software, Marketing & Education',
    template: '%s | Vertex Loop Pvt Ltd',
  },
  description:
    'Chennai-based software, AI and digital marketing company delivering worldwide: custom software, AI agents, SaaS and web/mobile apps, marketing services, and CrackLeap training.',
  keywords: [
    'Vertex Loop Pvt Ltd',
    'Vertex Loop',
    'CrackLeap',
    'Software Development',
    'Software Products',
    'Web Application Development',
    'Mobile Application Development',
    'SaaS Development',
    'PaaS Solutions',
    'AI Software Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Generative AI',
    'Workflow Automation',
    'Cloud Software Solutions',
    'Digital Marketing Services',
    'Search Engine Optimisation',
    'SEO Services',
    'Social Media Marketing',
    'Performance Marketing',
    'Marketing Automation',
    'Brand Strategy',
    'Technology Training',
    'Technology Education',
    'Software Training',
  ],
  authors: [{ name: 'Vertex Loop Pvt Ltd', url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Vertex Loop Pvt Ltd | Software, Marketing & Education',
    description:
      'Vertex Loop Pvt Ltd develops software products, provides digital marketing services, and delivers practical technology education through CrackLeap.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vertex Loop Pvt Ltd',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex Loop | Software, Marketing & Education',
    description:
      'Vertex Loop Pvt Ltd develops software products, provides digital marketing services, and delivers practical technology education through CrackLeap.',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#faf9f5',
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
  foundingDate: siteConfig.foundingDate,
  slogan: 'Building software, growing products, and developing capability.',
  description: `${siteConfig.fullDescription} Vertex Loop Pvt Ltd is based in Chennai, India and delivers its services to clients and learners worldwide. It is not affiliated with Vertex Inc. or Vertex Customer Solutions.`,
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
    contactType: 'Customer Service & Business Inquiries',
    email: siteConfig.email,
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Tamil', 'Hindi'],
  },
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.links.github,
  ],
  knowsAbout: [
    'Computer Software',
    'Software Products',
    'Web Applications',
    'Mobile Applications',
    'SaaS',
    'PaaS',
    'Artificial Intelligence',
    'Machine Learning',
    'Natural Language Processing',
    'Generative AI',
    'Large Language Models',
    'Workflow Automation',
    'Cloud Software',
    'Digital Marketing Services',
    'Search Engine Optimisation (SEO)',
    'Search Engine Marketing (SEM)',
    'Social Media Marketing',
    'Performance Marketing',
    'Brand Strategy',
    'Technology Training',
    'CrackLeap Academy',
  ],
  areaServed: [
    { '@type': 'Place', name: 'Worldwide' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'City', name: 'Chennai' },
  ],
  subOrganization: {
    '@type': 'EducationalOrganization',
    '@id': `${siteConfig.academyUrl}/#organization`,
    name: 'CrackLeap Academy',
    alternateName: 'CrackLeap',
    url: siteConfig.academyUrl,
    description:
      'CrackLeap Academy is the education initiative of Vertex Loop Pvt Ltd: live, mentor-led online software training taught by working engineers, with college training partnerships in India.',
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
  inLanguage: 'en-IN',
}

import ChatbotWidget from '@/components/chatbot/ChatbotWidget'

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
      <body className="antialiased font-body bg-[#faf9f5] text-[#111827] min-h-screen">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <ChatbotWidget />
      </body>
    </html>
  )
}