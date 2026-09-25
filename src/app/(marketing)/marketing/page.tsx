import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MarketingHero from '@/components/marketing/MarketingHero'
import MarketingFocus from '@/components/marketing/MarketingFocus'
import MarketingSearchContent from '@/components/marketing/MarketingSearchContent'
import MarketingSocial from '@/components/marketing/MarketingSocial'
import MarketingPerformance from '@/components/marketing/MarketingPerformance'
import MarketingAnalytics from '@/components/marketing/MarketingAnalytics'
import MarketingAutomation from '@/components/marketing/MarketingAutomation'
import MarketingBrand from '@/components/marketing/MarketingBrand'
import MarketingEcosystemApplication from '@/components/marketing/MarketingEcosystemApplication'
import MarketingTechnology from '@/components/marketing/MarketingTechnology'
import MarketingFinalCta from '@/components/marketing/MarketingFinalCta'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Vertex Loop Pvt Ltd',
  description:
    'Vertex Loop Pvt Ltd provides digital marketing services across SEO, SEM, content, social media, performance marketing, analytics, automation and brand strategy.',
  alternates: {
    canonical: `${siteConfig.url}/marketing`,
  },
  openGraph: {
    title: 'Digital Marketing Services | Vertex Loop Pvt Ltd',
    description:
      'Vertex Loop Pvt Ltd provides digital marketing services across SEO, SEM, content, social media, performance marketing, analytics, automation and brand strategy.',
    url: `${siteConfig.url}/marketing`,
    siteName: 'Vertex Loop Pvt Ltd',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vertex Loop Pvt Ltd Digital Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | Vertex Loop Pvt Ltd',
    description:
      'Vertex Loop Pvt Ltd provides digital marketing services across SEO, SEM, content, social media, performance marketing, analytics, automation and brand strategy.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Services',
  provider: {
    '@type': 'Organization',
    name: 'Vertex Loop Pvt Ltd',
    url: siteConfig.url,
    logo: siteConfig.logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
  },
  description:
    'Comprehensive digital marketing services spanning SEO, SEM, content marketing, social media management, influencer collaborations, performance marketing, web & app analytics, automation, and brand strategy.',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Capabilities',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Search Engine Optimisation & Marketing (SEO/SEM)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Content Marketing & Systems',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Marketing & Management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Performance Marketing & Programmatic Advertising',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web & App Analytics',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Automation & Workflows',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Brand Strategy & Online Reputation Management',
        },
      },
    ],
  },
}

export default function MarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-white text-[#111827]">
        {/* Hero Section */}
        <MarketingHero />

        {/* Our Focus Section */}
        <MarketingFocus />

        {/* 01 / Search + Content */}
        <MarketingSearchContent />

        {/* 02 / Social Media */}
        <MarketingSocial />

        {/* 03 / Performance */}
        <MarketingPerformance />

        {/* 04 / Analytics */}
        <MarketingAnalytics />

        {/* 05 / Automation */}
        <MarketingAutomation />

        {/* 06 / Brand */}
        <MarketingBrand />

        {/* Marketing Ecosystem & Application */}
        <MarketingEcosystemApplication />

        {/* Marketing + Technology */}
        <MarketingTechnology />

        {/* Final CTA */}
        <MarketingFinalCta />
      </main>
      <Footer />
    </>
  )
}
