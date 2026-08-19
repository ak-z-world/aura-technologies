import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { GraduationCap, ExternalLink, CheckCircle2, Cpu, Code2, Server, Users, ArrowRight } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'CrackLeap — Technology Education Ecosystem | Vertex Loop',
  description:
    'CrackLeap is Vertex Loop’s dedicated technology education ecosystem, offering intensive developer upskilling programs in Artificial Intelligence, Full-Stack Development, Cloud Architecture, and DevOps.',
  keywords: [
    'CrackLeap',
    'CrackLeap tech academy',
    'CrackLeap education ecosystem',
    'software engineering training',
    'AI developer upskilling',
    'cloud devops bootcamp',
    'Vertex Loop education',
  ],
  alternates: {
    canonical: `${siteConfig.url}/academy`,
  },
  openGraph: {
    title: 'CrackLeap — Technology Education Ecosystem | Vertex Loop',
    description:
      'CrackLeap is Vertex Loop’s technology education ecosystem for developer bootcamps and corporate upskilling.',
    url: `${siteConfig.url}/academy`,
  },
}

const academyOverviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'CrackLeap',
  url: 'https://crackleap.vertexloop.in',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Vertex Loop',
    url: siteConfig.url,
  },
  description:
    'Dedicated technology education ecosystem powered by Vertex Loop, providing developer upskilling in AI, Full-Stack, and Cloud DevOps.',
}

const faqData = [
  {
    q: 'What is CrackLeap?',
    a: 'CrackLeap is the dedicated technology education ecosystem within the Vertex Loop ecosystem. It delivers hands-on, industry-aligned training programs for software engineers, AI developers, and enterprise technical teams.',
  },
  {
    q: 'What is the relationship between Vertex Loop and CrackLeap?',
    a: 'CrackLeap operates as the technology education arm of Vertex Loop. While Vertex Loop provides enterprise AI, software engineering, and SaaS products, CrackLeap trains developers and upskills corporate engineering teams.',
  },
  {
    q: 'Where can I view the full CrackLeap course catalog and enroll?',
    a: 'The full course catalog, program schedules, and enrollment details are hosted on the official CrackLeap website at https://crackleap.vertexloop.in.',
  },
  {
    q: 'Does CrackLeap offer corporate upskilling for tech teams?',
    a: 'Yes, CrackLeap designs custom enterprise training programs to upskill software development and IT teams in generative AI, cloud migration, modern web frameworks, and DevOps practices.',
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
  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink min-h-screen">
      <JsonLd data={academyOverviewSchema} id="crackleap-org-jsonld" />
      <JsonLd data={faqSchema} id="crackleap-faq-jsonld" />
      <Navbar />

      {/* Hero Section */}
      <PageHero
        label="Technology Education Ecosystem"
        labelAccent="blue"
        headline={
          <>
            CrackLeap — Technology
            <br />
            <span className="italic font-normal text-[#4a7fa5]">Education Ecosystem.</span>
          </>
        }
        subline="CrackLeap is Vertex Loop’s dedicated technology education brand and ecosystem, delivering intensive engineering bootcamps and corporate tech upskilling in AI, Full-Stack Architecture, and Cloud Native DevOps."
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
            <span>Visit Official CrackLeap Site</span>
            <ExternalLink size={16} />
          </a>
          <Link href="#education-tracks" className="btn-ghost text-sm py-3 px-6">
            Explore Programs
          </Link>
        </div>
      </PageHero>

      {/* AEO Summary Box */}
      <section className="relative py-8 section-padding max-w-5xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 border border-white/80 shadow-glass-lg">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#4a7fa5] mb-2">
            Direct Summary — CrackLeap Ecosystem
          </div>
          <p className="text-slate-mid text-base leading-relaxed font-light">
            CrackLeap is Vertex Loop's dedicated technology education platform. Hosted at <code>https://crackleap.vertexloop.in</code>, CrackLeap delivers hands-on bootcamps in AI engineering, full-stack web development, and cloud DevOps for both individual engineers and corporate enterprises.
          </p>
        </div>
      </section>

      {/* Education Tracks */}
      <section id="education-tracks" className="relative py-20 section-padding max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel accent="blue" className="mb-4 mx-auto w-fit">
            CrackLeap Programs
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
            Developer & Corporate <span className="italic font-normal text-[#4a7fa5]">Upskilling Tracks</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Cpu,
              title: 'Applied AI & ML Engineering',
              desc: 'Deep hands-on training in LLM fine-tuning, RAG vector retrieval, PyTorch, and autonomous AI agent deployment.',
              accent: '#7c6fad',
            },
            {
              icon: Code2,
              title: 'Full-Stack Web Architecture',
              desc: 'Production web development with Next.js, React, TypeScript, PostgreSQL, microservices, and clean software patterns.',
              accent: '#a07830',
            },
            {
              icon: Server,
              title: 'Cloud Native & DevOps',
              desc: 'Cloud infrastructure engineering covering Docker, Kubernetes, Terraform, AWS multi-region setups, and CI/CD pipelines.',
              accent: '#3d8c7a',
            },
            {
              icon: Users,
              title: 'Corporate Team Upskilling',
              desc: 'Customized technology modernizations and AI adoption workshops designed for enterprise engineering teams.',
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
