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
import JsonLd from '@/components/seo/JsonLd'
import FaqSection from '@/components/seo/FaqSection'

export const metadata: Metadata = {
  title: {
    absolute: 'CrackLeap | Technology Training & Education by Vertex Loop',
  },
  description:
    'CrackLeap Academy by Vertex Loop: live, mentor-led software training in Python, Agentic AI, AWS & DevOps, React and full-stack development — taught by working engineers, open worldwide, with college partnerships in India.',
  keywords: [
    'CrackLeap',
    'Technology Training',
    'Technology Education',
    'Software Development Training',
    'Coding Training',
    'Python Training',
    'Django Training',
    'React Training',
    'Next.js Training',
    'AWS Training',
    'DevOps Training',
    'AI Training',
    'Machine Learning Training',
    'Data Science Training',
    'Vertex Loop Education',
  ],
  alternates: {
    canonical: `${siteConfig.url}/academy`,
  },
  openGraph: {
    title: 'CrackLeap | Technology Training & Education by Vertex Loop',
    description:
      'CrackLeap Academy by Vertex Loop: live, mentor-led software training in Python, Agentic AI, AWS & DevOps, React and full-stack development — taught by working engineers, open worldwide, with college partnerships in India.',
    url: `${siteConfig.url}/academy`,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'CrackLeap Technology Academy - Vertex Loop Pvt Ltd',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrackLeap | Technology Training by Vertex Loop',
    description:
      'CrackLeap Academy by Vertex Loop: live, mentor-led software training in Python, Agentic AI, AWS & DevOps, React and full-stack development — taught by working engineers, open worldwide, with college partnerships in India.',
    images: [siteConfig.ogImage],
  },
}


const academyFaqs = [
  {
    q: 'What is CrackLeap Academy?',
    a: 'CrackLeap Academy is the education initiative of Vertex Loop Pvt Ltd: live, mentor-led software training focused on practical, project-based learning — building real skills and a portfolio, not only certificates.',
  },
  {
    q: 'Who teaches at CrackLeap?',
    a: 'CrackLeap sessions are taught by Vertex Loop engineers — working developers who build and ship software products — rather than full-time career trainers. Trainers are fluent in English and teach learners worldwide.',
  },
  {
    q: 'Are CrackLeap classes live or pre-recorded?',
    a: 'Live. Every program is mentor-led and taught live, with mentorship, doubt support and project work. CrackLeap does not sell pre-recorded-only courses. Programs and workshops also run on campus in partnership with colleges in India.',
  },
  {
    q: 'Which programs does CrackLeap offer?',
    a: 'The flagship program is Python + Agentic AI + AWS. The catalog also includes Python Django Development, Python Full Stack, React JS, and AWS & DevOps Engineering, for students, graduates, professionals and career switchers.',
  },
  {
    q: 'Do you guarantee placements?',
    a: 'No. CrackLeap is honest about this: there is no placement guarantee or provision. We help learners prepare — with real projects, a verifiable certificate and skill report, and career-preparation guidance — but we do not promise jobs or interviews.',
  },
  {
    q: 'How much do CrackLeap courses cost?',
    a: 'Course fees are not published as a fixed public list, because they are shared for the current cohort when you enquire. College partnership pricing is customised to the college and the package it chooses. Contact hello@vertexloop.in or call +91 94457 70160 for the current details.',
  },
  {
    q: 'Can a college partner with CrackLeap?',
    a: 'Yes. Colleges can partner with CrackLeap for training programs and workshops for their students. Partnership terms and pricing are customised per college and package, and are discussed directly — write to hello@vertexloop.in.',
  },
]

const academySchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${siteConfig.url}/academy/#organization`,
  name: 'CrackLeap',
  url: `${siteConfig.url}/academy`,
  parentOrganization: {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
  },
  description:
    'CrackLeap is an education initiative of Vertex Loop Pvt Ltd focused on practical learning across software development, AI, data, cloud and modern digital technologies.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CrackLeap Learning Areas',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Python & Django Application Development',
          description: 'Python, web development, APIs, backend development and application development.',
          provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'React & Next.js Modern Frontend Engineering',
          description: 'Modern frontend development, application interfaces and web application development.',
          provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'AWS Cloud Fundamentals & DevOps Engineering',
          description: 'Cloud fundamentals, AWS concepts, CI/CD, DevOps practices and infrastructure concepts.',
          provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'AI & Practical Machine Learning Systems',
          description: 'Artificial intelligence, machine learning, generative AI and practical AI development.',
          provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Data Science & Workflows',
          description: 'Data analysis, machine learning, data workflows and practical data-driven development.',
          provider: { '@type': 'EducationalOrganization', name: 'CrackLeap' },
        },
      },
    ],
  },
}

const academyBreadcrumbSchema = {
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
      name: 'Academy',
      item: `${siteConfig.url}/academy`,
    },
  ],
}

export default function AcademyPage() {
  return (
    <>
      <JsonLd data={academySchema} id="academy-schema-jsonld" />
      <JsonLd data={academyBreadcrumbSchema} id="academy-breadcrumb-jsonld" />
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

        {/* FAQ */}
        <FaqSection
          id="faq"
          label="CrackLeap — Frequently Asked Questions"
          heading="Training, answered honestly."
          faqs={academyFaqs}
          schemaId={`${siteConfig.url}/academy/#faq`}
          tone="cream"
        />

        {/* Final CTA */}
        <AcademyFinalCta />
      </main>
      <Footer />
    </>
  )
}
