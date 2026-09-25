import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AcademyHero from '@/components/academy/AcademyHero'
import AcademyAbout from '@/components/academy/AcademyAbout'
import AcademyLearningAreas from '@/components/academy/AcademyLearningAreas'
import AcademyLearningStructure from '@/components/academy/AcademyLearningStructure'
import AcademyApproach from '@/components/academy/AcademyApproach'
import AcademyTechnologies from '@/components/academy/AcademyTechnologies'
import AcademyFormatsAndAudience from '@/components/academy/AcademyFormatsAndAudience'
import AcademyFinalCta from '@/components/academy/AcademyFinalCta'

export const metadata: Metadata = {
  title: 'CrackLeap | Technology Training Academy by Vertex Loop Pvt Ltd',
  description:
    'CrackLeap is a technology training initiative by Vertex Loop Pvt Ltd focused on practical learning across software development, AI, data, cloud and modern digital technologies.',
  alternates: {
    canonical: `${siteConfig.url}/academy`,
  },
  openGraph: {
    title: 'CrackLeap | Technology Training Academy by Vertex Loop Pvt Ltd',
    description:
      'CrackLeap is a technology training initiative by Vertex Loop Pvt Ltd focused on practical learning across software development, AI, data, cloud and modern digital technologies.',
    url: `${siteConfig.url}/academy`,
    siteName: 'Vertex Loop Pvt Ltd',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'CrackLeap Technology Academy - Vertex Loop Pvt Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrackLeap | Technology Training Academy by Vertex Loop Pvt Ltd',
    description:
      'CrackLeap is a technology training initiative by Vertex Loop Pvt Ltd focused on practical learning across software development, AI, data, cloud and modern digital technologies.',
  },
}

const academySchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'CrackLeap',
  url: `${siteConfig.url}/academy`,
  parentOrganization: {
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
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
    'CrackLeap is a technology training initiative by Vertex Loop Pvt Ltd focused on practical learning across software development, AI, data, cloud and modern digital technologies.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CrackLeap Learning Areas',
    itemListElement: [
      {
        '@type': 'Course',
        name: 'Python & Django Application Development',
        description: 'Python, web development, APIs, backend development and application development.',
        provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
      },
      {
        '@type': 'Course',
        name: 'React & Next.js Modern Frontend Engineering',
        description: 'Modern frontend development, application interfaces and web application development.',
        provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
      },
      {
        '@type': 'Course',
        name: 'AWS Cloud Fundamentals & DevOps Engineering',
        description: 'Cloud fundamentals, AWS concepts, CI/CD, DevOps practices and infrastructure concepts.',
        provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
      },
      {
        '@type': 'Course',
        name: 'AI & Practical Machine Learning Systems',
        description: 'Artificial intelligence, machine learning, generative AI and practical AI development.',
        provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
      },
      {
        '@type': 'Course',
        name: 'Data Science & Workflows',
        description: 'Data analysis, machine learning, data workflows and practical data-driven development.',
        provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
      },
    ],
  },
}

export default function AcademyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(academySchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-white text-[#111827]">
        {/* Academy Hero */}
        <AcademyHero />

        {/* About CrackLeap */}
        <AcademyAbout />

        {/* Learning Areas */}
        <AcademyLearningAreas />

        {/* Learning Structure */}
        <AcademyLearningStructure />

        {/* Learning Approach */}
        <AcademyApproach />

        {/* Technologies */}
        <AcademyTechnologies />

        {/* Learning Formats + Who It's For */}
        <AcademyFormatsAndAudience />

        {/* Final CTA */}
        <AcademyFinalCta />
      </main>
      <Footer />
    </>
  )
}
