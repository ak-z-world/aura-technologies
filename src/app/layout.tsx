import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { siteConfig } from '@/config/site'
import JsonLd from '@/components/seo/JsonLd'
import { Suspense } from 'react'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

export const metadata: Metadata = {
  title: {
    default: 'Vertex Loop Pvt Ltd | Software, Digital Marketing & Technology Education',
    template: '%s | Vertex Loop Pvt Ltd',
  },
  description:
    'Vertex Loop Pvt Ltd develops software products and technology solutions, provides digital marketing services, and delivers technology education through CrackLeap in India and internationally.',
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
    title: 'Vertex Loop Pvt Ltd | Software, Digital Marketing & Technology Education',
    description:
      'Vertex Loop Pvt Ltd develops software products and technology solutions, provides digital marketing services, and delivers technology education through CrackLeap in India and internationally.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vertex Loop Pvt Ltd - Software, Digital Marketing & Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex Loop Pvt Ltd | Software, Digital Marketing & Technology Education',
    description:
      'Vertex Loop Pvt Ltd develops software products and technology solutions, provides digital marketing services, and delivers technology education through CrackLeap in India and internationally.',
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
  description: siteConfig.fullDescription,
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
    areaServed: ['Worldwide', 'India'],
    availableLanguage: ['English', 'Tamil'],
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
    'Data Analytics',
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
    { '@type': 'Place', name: 'Worldwide (International Delivery)' },
    { '@type': 'Country', name: 'India' },
  ],
  subOrganization: {
    '@type': 'EducationalOrganization',
    name: 'CrackLeap',
    url: siteConfig.academyUrl,
    description:
      'CrackLeap is an education initiative of Vertex Loop Pvt Ltd focused on practical technology learning and software training.',
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
      <body className="antialiased font-body bg-[#faf9f5] text-[#111827] min-h-screen">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
}