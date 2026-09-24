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
  title: 'Software Products & AI Solutions | Vertex Loop Pvt Ltd',
  description:
    'Vertex Loop Pvt Ltd designs and develops software products, web and mobile applications, SaaS, PaaS and cloud-based solutions, including systems that use AI, machine learning, data analytics and automation.',
  keywords: [
    'Vertex Loop Software',
    'Software Products',
    'Web Applications',
    'Mobile Applications',
    'SaaS Development',
    'PaaS Architecture',
    'AI Solutions',
    'Machine Learning Systems',
    'Data Analytics',
    'Workflow Automation',
    'Cloud Architecture',
    'Enterprise Software Engineering',
  ],
  alternates: {
    canonical: `${siteConfig.url}/software`,
  },
  openGraph: {
    title: 'Software Products & AI Solutions | Vertex Loop Pvt Ltd',
    description:
      'Vertex Loop Pvt Ltd designs and develops software products, web and mobile applications, SaaS, PaaS and cloud-based solutions, including systems that use AI, machine learning, data analytics and automation.',
    url: `${siteConfig.url}/software`,
  },
}

const softwarePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Software Engineering & AI Solutions',
  serviceType: 'Software Development & Intelligent Systems',
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
  },
  description:
    'Vertex Loop Pvt Ltd designs and develops software products, web and mobile applications, SaaS, PaaS and cloud-based solutions, including systems that use AI, machine learning, data analytics and automation.',
  areaServed: 'Worldwide',
}

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#111827] overflow-x-hidden">
      <JsonLd data={softwarePageSchema} id="software-page-jsonld" />

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
