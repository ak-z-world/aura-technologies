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
import JsonLd from '@/components/seo/JsonLd'
import FaqSection from '@/components/seo/FaqSection'

export const metadata: Metadata = {
  title: {
    absolute: 'Digital Marketing Services | SEO & Growth | Vertex Loop',
  },
  description:
    'Digital marketing services from Chennai, India, delivered worldwide: SEO, AEO and GEO for AI search, SEM, content, social media, performance marketing, analytics, automation and brand strategy. Custom quote — no fixed packages.',
  keywords: [
    'Digital Marketing Services',
    'Search Engine Optimisation',
    'SEO Services',
    'Search Engine Marketing',
    'SEM Services',
    'Content Marketing',
    'Social Media Marketing',
    'Social Media Management',
    'Performance Marketing',
    'Programmatic Advertising',
    'Influencer Marketing',
    'Affiliate Marketing',
    'Marketing Automation',
    'Brand Strategy',
    'Online Reputation Management',
    'Web and App Analytics',
    'Digital Marketing Consulting',
  ],
  alternates: {
    canonical: `${siteConfig.url}/marketing`,
  },
  openGraph: {
    title: 'Digital Marketing Services | SEO & Growth | Vertex Loop',
    description:
      'Digital marketing services from Chennai, India, delivered worldwide: SEO, AEO and GEO for AI search, SEM, content, social media, performance marketing, analytics, automation and brand strategy. Custom quote — no fixed packages.',
    url: `${siteConfig.url}/marketing`,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vertex Loop Pvt Ltd - Digital Marketing Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | Vertex Loop',
    description:
      'Digital marketing services from Chennai, India, delivered worldwide: SEO, AEO and GEO for AI search, SEM, content, social media, performance marketing, analytics, automation and brand strategy. Custom quote — no fixed packages.',
    images: [siteConfig.ogImage],
  },
}


const marketingFaqs = [
  {
    q: 'What digital marketing services does Vertex Loop provide?',
    a: 'Vertex Loop provides digital marketing across six areas: search (SEO and SEM), content marketing, social media management, performance marketing, analytics, and marketing automation with brand strategy — delivered as one connected system rather than disconnected activities.',
  },
  {
    q: 'Do you optimise for AI search, such as Google AI Overviews and ChatGPT?',
    a: 'Yes. Alongside traditional SEO, we structure content and brand information so a business can be found and cited in AI answers — Google AI Overviews, ChatGPT, Perplexity and Gemini. This is commonly called AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation), and it is built on accurate, verifiable information about your business, not shortcuts.',
  },
  {
    q: 'How are your digital marketing services priced?',
    a: 'There are no fixed public packages. After understanding your goals and your current digital presence, we provide a custom quote for the work involved. Contact us at hello@vertexloop.in to start that conversation.',
  },
  {
    q: 'Who pays for advertising spend?',
    a: 'You do — directly from your own advertising accounts. Vertex Loop plans and manages campaigns, but advertising budgets are never routed through us, so you always keep full visibility and control of your spend.',
  },
  {
    q: 'Do you work with businesses outside Chennai?',
    a: 'Yes. Vertex Loop is based in Chennai, India and delivers digital marketing services to businesses across India and worldwide.',
  },
]

const marketingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteConfig.url}/marketing/#service`,
  name: 'Digital Marketing Services',
  serviceType: 'Digital Marketing, Search Engine Optimisation & Performance Marketing',
  provider: {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
  },
  description:
    'Vertex Loop Pvt Ltd provides digital marketing services across search, content, social media, performance marketing, analytics, automation and brand strategy.',
  areaServed: [
    { '@type': 'Place', name: 'Worldwide (International Delivery)' },
    { '@type': 'Country', name: 'India' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Capabilities',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Search Engine Optimisation & Marketing (SEO/SEM)',
          description: 'Search visibility, technical SEO and search engine marketing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Content Marketing & Systems',
          description: 'Content planning, development, email marketing and content distribution.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Marketing & Management',
          description: 'Social channel management, creative content and influencer collaborations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Performance Marketing & Advertising',
          description: 'Digital acquisition, programmatic advertising and performance monitoring.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web & App Analytics',
          description: 'Digital activity measurement, user behaviour analytics and conversion analysis.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Automation',
          description: 'Workflow automation, digital workflows and AI-enabled tools.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Brand Strategy & Reputation',
          description: 'Positioning, cross-channel consistency and online reputation management.',
        },
      },
    ],
  },
}

const marketingBreadcrumbSchema = {
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
      name: 'Marketing',
      item: `${siteConfig.url}/marketing`,
    },
  ],
}

export default function MarketingPage() {
  return (
    <>
      <JsonLd data={marketingServiceSchema} id="marketing-service-jsonld" />
      <JsonLd data={marketingBreadcrumbSchema} id="marketing-breadcrumb-jsonld" />
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

        {/* FAQ */}
        <FaqSection
          id="faq"
          label="Digital Marketing — Frequently Asked Questions"
          heading="Marketing, answered."
          faqs={marketingFaqs}
          schemaId={`${siteConfig.url}/marketing/#faq`}
          tone="cream"
        />

        {/* Final CTA */}
        <MarketingFinalCta />
      </main>
      <Footer />
    </>
  )
}
