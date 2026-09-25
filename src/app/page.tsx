import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ThreeDomainsSection from '@/components/sections/ThreeDomainsSection'
import SoftwareSection from '@/components/sections/SoftwareSection'
import MarketingSection from '@/components/sections/MarketingSection'
import AcademySection from '@/components/sections/AcademySection'
import HowWeWorkSection from '@/components/sections/HowWeWorkSection'
import OurApproachSection from '@/components/sections/OurApproachSection'
import CapabilitiesSection from '@/components/sections/CapabilitiesSection'
import FinalCtaSection from '@/components/sections/FinalCtaSection'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    absolute: 'Vertex Loop Pvt Ltd | Software, Digital Marketing & Technology Education',
  },
  description:
    'Vertex Loop Pvt Ltd develops software products and technology solutions, provides digital marketing services, and delivers technology education through CrackLeap in India and internationally.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Vertex Loop Pvt Ltd | Software, Digital Marketing & Technology Education',
    description:
      'Vertex Loop Pvt Ltd develops software products and technology solutions, provides digital marketing services, and delivers technology education through CrackLeap in India and internationally.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex Loop Pvt Ltd | Software, Digital Marketing & Technology Education',
    description:
      'Vertex Loop Pvt Ltd develops software products and technology solutions, provides digital marketing services, and delivers technology education through CrackLeap in India and internationally.',
  },
}

const homeWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: 'Vertex Loop Pvt Ltd | Software, Digital Marketing & Technology Education',
  description: siteConfig.description,
  isPartOf: {
    '@id': `${siteConfig.url}/#website`,
  },
  about: {
    '@id': `${siteConfig.url}/#organization`,
  },
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
}

export default function Home() {
  return (
    <>
      <JsonLd data={homeWebPageSchema} id="home-webpage-jsonld" />
      <main className="min-h-screen bg-[#faf9f5] text-[#111827] overflow-x-hidden">
        {/* 1. Header */}
        <Navbar />

        {/* 2. Hero */}
        <HeroSection />

        {/* 3. Three Domains */}
        <ThreeDomainsSection />

        {/* 4. 01 / Software */}
        <SoftwareSection />

        {/* 5. 02 / Digital Marketing */}
        <MarketingSection />

        {/* 6. 03 / Academy */}
        <AcademySection />

        {/* 7. How We Work */}
        <HowWeWorkSection />

        {/* 8. Our Approach */}
        <OurApproachSection />

        {/* 9. Capabilities */}
        <CapabilitiesSection />

        {/* 10. Final CTA */}
        <FinalCtaSection />

        {/* 11. Footer */}
        <Footer />
      </main>
    </>
  )
}