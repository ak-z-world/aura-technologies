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
import FaqSection from '@/components/seo/FaqSection'

export const metadata: Metadata = {
  title: {
    absolute: 'Vertex Loop Pvt Ltd | Software, Marketing & Education',
  },
  description:
    'Chennai-based software, AI and digital marketing company delivering worldwide: custom software, AI agents, SaaS and web/mobile apps, marketing services, and CrackLeap training.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Vertex Loop Pvt Ltd | Software, Marketing & Education',
    description:
      'Chennai-based software, AI and digital marketing company delivering worldwide: custom software, AI agents, SaaS and web/mobile apps, marketing services, and CrackLeap training.',
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
      'Chennai-based software, AI and digital marketing company delivering worldwide: custom software, AI agents, SaaS and web/mobile apps, marketing services, and CrackLeap training.',
    images: [siteConfig.ogImage],
  },
}


const homeFaqs = [
  {
    q: 'What does Vertex Loop Pvt Ltd do?',
    a: 'Vertex Loop Pvt Ltd is a Chennai, India based technology company with three arms: software and AI development, digital marketing services, and technology education through CrackLeap Academy. It designs and builds custom software, web and mobile applications, SaaS products and AI-enabled systems; provides search, content, social, performance marketing, analytics and automation services; and runs live, mentor-led technology training.',
  },
  {
    q: 'Where is Vertex Loop based, and where do you deliver your services?',
    a: 'Vertex Loop is based in Ambattur, Chennai, Tamil Nadu, India (IST). The team works, WFH-first, and delivers services worldwide — clients and learners join online, so you can work with us from any city, state or country without visiting an office.',
  },
  {
    q: 'Can Vertex Loop build custom software or an AI agent for my business?',
    a: 'Yes. Vertex Loop builds custom software, web and mobile applications, SaaS products, AI agents, generative AI applications and workflow automation for startups, small and medium businesses and larger enterprises, across industries — from small projects to larger builds. Every engagement is scoped to the specific requirement.',
  },
  {
    q: 'How much do Vertex Loop services cost?',
    a: 'There is no fixed public price list. Pricing depends on the scope of the project or service, and every engagement is quoted individually after the requirement is understood. Contact us at hello@vertexloop.in or +91 94457 70160 to discuss your requirement and receive a custom quote.',
  },
  {
    q: 'What is CrackLeap Academy?',
    a: 'CrackLeap Academy is the education initiative of Vertex Loop Pvt Ltd. It offers live, mentor-led online software training — including Python with Agentic AI and AWS, Python Django, Python Full Stack, React JS, and AWS & DevOps — taught by Vertex Loop engineers who build software products. CrackLeap also runs training programs and workshops in partnership with colleges in India.',
  },
  {
    q: 'Which languages do you work and teach in?',
    a: 'We work in English, Tamil and Hindi. All trainers are fluent in English and teach learners worldwide, and they are working developers who ship real products — not only trainers.',
  },
]

const homeWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: 'Vertex Loop Pvt Ltd | Software, Marketing & Education',
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

        {/* 10. FAQ */}
        <FaqSection
          id="faq"
          label="Frequently Asked Questions"
          heading="Questions, answered."
          faqs={homeFaqs}
          schemaId={`${siteConfig.url}/#faq`}
          tone="white"
        />

        {/* 11. Final CTA */}
        <FinalCtaSection />

        {/* 11. Footer */}
        <Footer />
      </main>
    </>
  )
}