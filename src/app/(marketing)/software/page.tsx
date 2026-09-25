import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SoftwareHero from '@/components/software/SoftwareHero'
import SoftwareFocus from '@/components/software/SoftwareFocus'
import SoftwareProductsGrid from '@/components/software/SoftwareProductsGrid'
import SoftwareAiData from '@/components/software/SoftwareAiData'
import SoftwareCapabilities from '@/components/software/SoftwareCapabilities'
import SoftwareHowWeBuild from '@/components/software/SoftwareHowWeBuild'
import SoftwareArchitecture from '@/components/software/SoftwareArchitecture'
import SoftwareEcosystemApplication from '@/components/software/SoftwareEcosystemApplication'
import SoftwareCrossDomain from '@/components/software/SoftwareCrossDomain'
import SoftwareFinalCta from '@/components/software/SoftwareFinalCta'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    absolute: 'Software Development & AI Solutions | Vertex Loop Pvt Ltd',
  },
  description:
    'Vertex Loop Pvt Ltd develops software products, web and mobile applications, SaaS, cloud solutions and AI-enabled systems for organisations and users.',
  keywords: [
    'Software Development',
    'Software Products',
    'AI Software Development',
    'Web Application Development',
    'Mobile Application Development',
    'SaaS Development',
    'PaaS Solutions',
    'Cloud Software Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Generative AI',
    'Large Language Models',
    'Natural Language Processing',
    'Data Analytics',
    'Workflow Automation',
    'Software Platforms',
    'Custom Software Development',
  ],
  alternates: {
    canonical: `${siteConfig.url}/software`,
  },
  openGraph: {
    title: 'Software Development & AI Solutions | Vertex Loop Pvt Ltd',
    description:
      'Vertex Loop Pvt Ltd develops software products, web and mobile applications, SaaS, cloud solutions and AI-enabled systems for organisations and users.',
    url: `${siteConfig.url}/software`,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vertex Loop Pvt Ltd - Software Products & AI Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development & AI Solutions | Vertex Loop Pvt Ltd',
    description:
      'Vertex Loop Pvt Ltd develops software products, web and mobile applications, SaaS, cloud solutions and AI-enabled systems for organisations and users.',
    images: [siteConfig.ogImage],
  },
}

const softwareServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteConfig.url}/software/#service`,
  name: 'Software Development & AI Solutions',
  serviceType: 'Software Engineering, Cloud Applications & Artificial Intelligence Systems',
  provider: {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
  },
  description:
    'Vertex Loop Pvt Ltd develops software products, web and mobile applications, SaaS, cloud solutions and AI-enabled systems for organisations and users worldwide.',
  areaServed: [
    { '@type': 'Place', name: 'Worldwide (International Delivery)' },
    { '@type': 'Country', name: 'India' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software & Technology Capabilities',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Application Development',
          description: 'Web-based software designed around specific workflows and user needs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile Application Development',
          description: 'Mobile applications designed to provide accessible digital experiences.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SaaS & PaaS Engineering',
          description: 'Software delivered as a service and platform-oriented environments.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI & Machine Learning Development',
          description: 'Intelligent systems, generative AI, LLM workflows and automated processing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software Products & Tools',
          description: 'Proprietary software products and tools developed for practical use cases.',
        },
      },
    ],
  },
}

const softwareBreadcrumbSchema = {
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
      name: 'Software',
      item: `${siteConfig.url}/software`,
    },
  ],
}

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#111827] overflow-x-hidden">
      <JsonLd data={softwareServiceSchema} id="software-service-jsonld" />
      <JsonLd data={softwareBreadcrumbSchema} id="software-breadcrumb-jsonld" />

      {/* 1. Header */}
      <Navbar />

      {/* 2. Software Hero */}
      <SoftwareHero />

      {/* 3. Our Focus */}
      <SoftwareFocus />

      {/* 4. Software Products */}
      <SoftwareProductsGrid />

      {/* 5. AI / Data / Automation */}
      <SoftwareAiData />

      {/* 6. Capabilities */}
      <SoftwareCapabilities />

      {/* 7. How We Build */}
      <SoftwareHowWeBuild />

      {/* 8. Product Architecture + R&D + Intellectual Property */}
      <SoftwareArchitecture />

      {/* 9. Product Ecosystem + Application */}
      <SoftwareEcosystemApplication />

      {/* 10. Software Does Not Exist in Isolation */}
      <SoftwareCrossDomain />

      {/* 11. Final CTA */}
      <SoftwareFinalCta />

      {/* 12. Footer */}
      <Footer />
    </main>
  )
}
