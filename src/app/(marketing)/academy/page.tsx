import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { GraduationCap, ExternalLink, CheckCircle2, Cpu, Code2, Server, Users, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/seo/Breadcrumb'
import JsonLd from '@/components/seo/JsonLd'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Crack Leap — Technology Education Ecosystem | Vertex Loop Pvt Ltd',
  description:
    'Crack Leap is Vertex Loop Pvt Ltd’s technology education ecosystem, delivering intensive developer upskilling, college campus bootcamps, and corporate training in Python, AI, AWS Cloud, and DevOps.',
  keywords: [
    'Crack Leap',
    'Crack Leap tech academy',
    'Vertex Loop Pvt Ltd education',
    'Python training Chennai',
    'AI developer upskilling',
    'cloud devops bootcamp',
    'college campus training Tamil Nadu',
    'corporate software training India',
    'Agentic AI courses',
  ],
  alternates: {
    canonical: `${siteConfig.url}/academy`,
  },
  openGraph: {
    title: 'Crack Leap — Technology Education Ecosystem | Vertex Loop Pvt Ltd',
    description:
      'Crack Leap is Vertex Loop Pvt Ltd’s technology education ecosystem for developer bootcamps, college campus workshops, and corporate upskilling.',
    url: `${siteConfig.url}/academy`,
  },
}

const academyOverviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Crack Leap',
  url: siteConfig.academyUrl,
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
    'Dedicated technology education ecosystem powered by Vertex Loop Pvt Ltd, providing developer upskilling, campus bootcamps, and corporate training in Python, AI, Full-Stack, and Cloud DevOps.',
}

const coursesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Crack Leap Technology Training Programs',
  itemListElement: [
    {
      '@type': 'Course',
      position: 1,
      name: 'Applied Artificial Intelligence & Agentic AI Engineering',
      description: 'Master LLM fine-tuning, RAG vector search, multi-agent frameworks, and production AI deployment.',
      provider: { '@type': 'EducationalOrganization', name: 'Crack Leap', url: siteConfig.academyUrl },
    },
    {
      '@type': 'Course',
      position: 2,
      name: 'Python for Data Engineering & Intelligent Systems',
      description: 'Comprehensive Python programming from foundations to asynchronous systems, FastAPI, and data engineering.',
      provider: { '@type': 'EducationalOrganization', name: 'Crack Leap', url: siteConfig.academyUrl },
    },
    {
      '@type': 'Course',
      position: 3,
      name: 'AWS Cloud Architecture & Production DevOps',
      description: 'Hands-on enterprise cloud architecture, Terraform IaC, Docker, Kubernetes, and CI/CD pipelines.',
      provider: { '@type': 'EducationalOrganization', name: 'Crack Leap', url: siteConfig.academyUrl },
    },
    {
      '@type': 'Course',
      position: 4,
      name: 'Full-Stack Software Architecture & Next.js Systems',
      description: 'Modern full-stack engineering with Next.js, React, TypeScript, PostgreSQL, and scalable microservices.',
      provider: { '@type': 'EducationalOrganization', name: 'Crack Leap', url: siteConfig.academyUrl },
    },
  ],
}

const faqData = [
  {
    q: 'What is Crack Leap and how does it relate to Vertex Loop Pvt Ltd?',
    a: 'Crack Leap is Vertex Loop Pvt Ltd’s dedicated technology education ecosystem. It translates production engineering practices from Vertex Loop’s custom AI and enterprise software operations into intensive training programs for developers, engineering students, and enterprise tech teams.',
  },
  {
    q: 'What domains are covered in Crack Leap programs?',
    a: 'Crack Leap delivers immersive curriculum in Python for data engineering, Applied Generative AI & Autonomous Agents (LangGraph/CrewAI), AWS Cloud Architecture & Managed DevOps (Terraform/Kubernetes), and Full-Stack Next.js platform engineering.',
  },
  {
    q: 'Does Crack Leap conduct on-campus training for engineering colleges?',
    a: 'Yes. Crack Leap partners with technical universities and engineering institutions across Tamil Nadu and pan-India to deliver high-impact placement preparation bootcamps, faculty development programs, and hackathon immersion workshops.',
  },
  {
    q: 'Does Crack Leap provide customized corporate software upskilling?',
    a: 'Yes. We design and deliver tailored corporate training cohorts for enterprise engineering teams transitioning to generative AI workflows, cloud-native microservices, or modern DevOps practices.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
}

export default function AcademyOverviewPage() {
  const breadcrumbItems = [
    { name: 'Crack Leap Tech Academy', url: '/academy' },
  ]

  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink min-h-screen">
      <JsonLd data={academyOverviewSchema} id="crackleap-org-jsonld" />
      <JsonLd data={coursesSchema} id="crackleap-courses-jsonld" />
      <JsonLd data={faqSchema} id="crackleap-faq-jsonld" />
      <Navbar />

      {/* Hero Section */}
      <PageHero
        label="Technology Education Ecosystem"
        labelAccent="blue"
        headline={
          <>
            Crack Leap — Technology
            <br />
            <span className="italic font-normal text-[#4a7fa5]">Education Ecosystem.</span>
          </>
        }
        subline="Crack Leap is Vertex Loop Pvt Ltd’s dedicated technology education ecosystem, delivering intensive engineering bootcamps, college campus training, and corporate tech upskilling in Python, AI, Full-Stack Architecture, and Cloud Native DevOps."
        gradient={{
          orb1: 'rgba(193,218,240,0.55)',
          orb2: 'rgba(216,210,236,0.45)',
          orb3: 'rgba(193,226,219,0.3)',
          base: '#f4f1f9',
        }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://crackleap.vertexloop.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-6 flex items-center gap-2">
            <span>Visit Official Crack Leap Site</span>
            <ExternalLink size={16} />
          </a>
          <Link href="#education-tracks" className="btn-ghost text-sm py-3 px-6">
            Explore Programs
          </Link>
        </div>
      </PageHero>

      {/* Breadcrumb Container */}
      <div className="section-padding py-4 max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* AEO Summary Box */}
      <section className="relative py-8 section-padding max-w-5xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 border border-white/80 shadow-glass-lg">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#4a7fa5] mb-2">
            Direct Summary — Crack Leap Tech Education Ecosystem
          </div>
          <p className="text-slate-mid text-base leading-relaxed font-light">
            Crack Leap is Vertex Loop Pvt Ltd’s specialized technology training ecosystem. Operating from our central headquarters at G2, Venkatapuram, Ambattur, Chennai - 600053, Crack Leap delivers intensive hands-on bootcamps in Python, Agentic AI, full-stack web architecture, and cloud DevOps for engineering students, universities, and corporate tech organizations globally. Hosted at <code>https://crackleap.vertexloop.in</code>.
          </p>
        </div>
      </section>

      {/* Education Tracks */}
      <section id="education-tracks" className="relative py-20 section-padding max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel accent="blue" className="mb-4 mx-auto w-fit">
            Crack Leap Programs
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
            Developer & Corporate <span className="italic font-normal text-[#4a7fa5]">Upskilling Tracks</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Cpu,
              title: 'Applied AI & Agentic AI Engineering',
              desc: 'Deep hands-on training in LLM fine-tuning, RAG vector retrieval, PyTorch, and autonomous AI agent deployment.',
              accent: '#7c6fad',
            },
            {
              icon: Code2,
              title: 'Full-Stack Web Architecture & Python',
              desc: 'Production web development with Next.js, React, TypeScript, Python FastAPI, PostgreSQL, microservices, and clean software patterns.',
              accent: '#a07830',
            },
            {
              icon: Server,
              title: 'Cloud Native & DevOps Engineering',
              desc: 'Cloud infrastructure engineering covering Docker, Kubernetes, Terraform, AWS multi-region setups, and CI/CD pipelines.',
              accent: '#3d8c7a',
            },
            {
              icon: Users,
              title: 'College Campus Bootcamps & Corporate Upskilling',
              desc: 'Customized campus workshops for engineering universities and AI adoption training designed for enterprise engineering teams.',
              accent: '#4a7fa5',
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="glass-card rounded-3xl p-8 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-glass"
                    style={{
                      background: `${item.accent}14`,
                      border: `1px solid ${item.accent}30`,
                    }}>
                    <Icon size={26} style={{ color: item.accent }} />
                  </div>
                  <h3 className="text-display text-2xl font-bold text-slate-ink mb-3">{item.title}</h3>
                  <p className="text-slate-mid text-sm leading-relaxed font-light mb-6">{item.desc}</p>
                </div>
                <a
                  href="https://crackleap.vertexloop.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4a7fa5] hover:text-slate-ink transition-colors pt-4 border-t border-slate-200">
                  <span>Learn details on CrackLeap</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 section-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel accent="blue" className="mb-3 mx-auto w-fit">
            CrackLeap FAQ
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-3xl md:text-4xl">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div key={faq.q} className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-slate-ink text-base mb-2 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#4a7fa5] flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-mid text-sm leading-relaxed font-light pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* External Redirect CTA */}
      <section className="relative py-24 section-padding max-w-5xl mx-auto text-center">
        <div className="glass-card-strong rounded-3xl p-12 bg-gradient-to-br from-[#dde9f4] via-[#e8e4f3] to-[#d8ede8] border border-white/80 shadow-glass-lg">
          <h3 className="text-display text-3xl sm:text-4xl font-semibold text-slate-ink mb-4">
            Explore CrackLeap Technology Education
          </h3>
          <p className="text-slate-mid text-base max-w-2xl mx-auto font-light mb-8">
            Visit the official CrackLeap platform to view upcoming cohorts, course syllabi, and admissions criteria.
          </p>
          <a
            href="https://crackleap.vertexloop.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
            <span>Visit CrackLeap (crackleap.vertexloop.in)</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
