import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Cpu, Code2, Server, TrendingUp, GraduationCap, ExternalLink, CheckCircle2 } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Engineering Services & Technology Ecosystem | Vertex Loop',
  description:
    'Vertex Loop provides custom AI development, enterprise software engineering, cloud architecture, digital marketing & SEO, and technology education through CrackLeap.',
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: 'Engineering Services & Technology Ecosystem | Vertex Loop',
    description:
      'Vertex Loop provides custom AI solutions, bespoke software development, cloud DevOps, digital growth, and CrackLeap tech education.',
    url: `${siteConfig.url}/services`,
  },
}

const servicesHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vertex Loop Core Engineering Services & Education Ecosystem',
  description: 'Services and offerings provided by Vertex Loop and its ecosystem properties',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'AI Development & Autonomous Agents',
      url: `${siteConfig.url}/services/ai-development`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Custom Software Development & Architecture',
      url: `${siteConfig.url}/services/custom-software-development`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Cloud Architecture & DevOps Services',
      url: `${siteConfig.url}/services/cloud-architecture`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Digital Marketing & AI Search Optimization (AEO/GEO)',
      url: `${siteConfig.url}/services/digital-marketing`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'CrackLeap — Technology Education Ecosystem',
      url: 'https://crackleap.vertexloop.in',
    },
  ],
}

const CORE_SERVICES = [
  {
    slug: 'ai-development',
    icon: Cpu,
    title: 'AI Development & Autonomous Agents',
    tagline: 'Enterprise AI & Generative Intelligence',
    description:
      'Custom LLM fine-tuning, retrieval-augmented generation (RAG), autonomous AI agent networks, and scalable AI platform engineering for enterprise operations.',
    capabilities: ['LLM Fine-Tuning & Quantization', 'RAG & Vector Knowledge Base Systems', 'Autonomous Agent Workflows', 'Computer Vision & Multimodal AI'],
    accent: '#7c6fad',
    isExternal: false,
    link: '/services/ai-development',
  },
  {
    slug: 'custom-software-development',
    icon: Code2,
    title: 'Custom Software Engineering',
    tagline: 'Bespoke Scalable Architecture',
    description:
      'End-to-end custom software development, distributed microservices, REST/GraphQL APIs, enterprise web applications, and database optimization.',
    capabilities: ['Enterprise Microservices & APIs', 'Scalable SaaS Web Applications', 'PostgreSQL & Distributed Storage', 'High-Concurrency Backend Systems'],
    accent: '#a07830',
    isExternal: false,
    link: '/services/custom-software-development',
  },
  {
    slug: 'cloud-architecture',
    icon: Server,
    title: 'Cloud Architecture & DevOps',
    tagline: '24/7 Managed Infrastructure',
    description:
      'AWS, GCP, and Azure cloud infrastructure design, Kubernetes container orchestration, Infrastructure as Code (Terraform), and zero-downtime CI/CD pipelines.',
    capabilities: ['Kubernetes & Docker Orchestration', 'Infrastructure as Code (Terraform)', 'Zero-Downtime CI/CD Pipelines', '24/7 Cloud Security & NOC'],
    accent: '#3d8c7a',
    isExternal: false,
    link: '/services/cloud-architecture',
  },
  {
    slug: 'digital-marketing',
    icon: TrendingUp,
    title: 'Digital Marketing & Tech SEO',
    tagline: 'AEO, GEO & Search Authority',
    description:
      'Deep technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO) for AI search engines, and data-driven performance marketing.',
    capabilities: ['Deep Technical SEO & Core Web Vitals', 'AEO & GEO AI Search Visibility', 'Topical Content Architecture', 'Performance Marketing & PPC'],
    accent: '#b04a4a',
    isExternal: false,
    link: '/services/digital-marketing',
  },
  {
    slug: 'crackleap',
    icon: GraduationCap,
    title: 'CrackLeap — Technology Education',
    tagline: 'Dedicated Education Ecosystem',
    description:
      'CrackLeap is the technology education ecosystem within the Vertex Loop ecosystem, focused on software development, AI, cloud, DevOps, and technical upskilling.',
    capabilities: ['Applied AI & ML Immersion', 'Full-Stack Software Engineering', 'Cloud Native DevOps Programs', 'Enterprise Corporate Upskilling'],
    accent: '#4a7fa5',
    isExternal: true,
    link: 'https://crackleap.vertexloop.in',
  },
]

export default function ServicesOverviewPage() {
  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink">
      <JsonLd data={servicesHubSchema} id="services-hub-jsonld" />
      <Navbar />

      {/* Hero Section */}
      <PageHero
        label="Engineering Services & Ecosystem"
        labelAccent="lavender"
        headline={
          <>
            Technology Services Built for
            <br />
            <span className="italic font-normal text-[#7c6fad]">Intelligent Growth.</span>
          </>
        }
        subline="Vertex Loop delivers specialized technology engineering services across custom AI development, enterprise software architecture, managed cloud operations, search optimization, and technology education."
        gradient={{
          orb1: 'rgba(216,210,236,0.55)',
          orb2: 'rgba(193,218,240,0.45)',
          orb3: 'rgba(193,226,219,0.3)',
          base: '#f4f1f9',
        }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#services-grid" className="btn-primary text-sm">
            Explore Capabilities <ArrowRight size={14} />
          </Link>
          <Link href="/contact" className="btn-ghost text-sm">
            Consulting Inquiry
          </Link>
        </div>
      </PageHero>

      {/* AEO Summary Box */}
      <section className="relative py-8 section-padding max-w-5xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 border border-white/80 shadow-glass-lg relative overflow-hidden">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7c6fad] mb-2">
            Direct Summary — Vertex Loop Engineering Capabilities
          </div>
          <p className="text-slate-mid text-base leading-relaxed font-light">
            Vertex Loop operates five core engineering and technology divisions: <strong>AI Development</strong> (LLM fine-tuning, RAG, autonomous agents), <strong>Custom Software Engineering</strong> (microservices, high-concurrency systems), <strong>Cloud Architecture</strong> (AWS/GCP, Kubernetes, DevOps), <strong>Digital Marketing & Tech SEO</strong> (AEO, GEO, performance marketing), and <strong>CrackLeap</strong>—our dedicated technology education ecosystem.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="relative py-20 section-padding max-w-7xl mx-auto">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <SectionLabel accent="lavender" className="mb-4 mx-auto w-fit">
            Core Service Domains
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
            Engineering Excellence Across <span className="italic font-normal text-[#7c6fad]">Every Layer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.slug}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-glass transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `${service.accent}14`,
                        border: `1px solid ${service.accent}30`,
                      }}>
                      <Icon size={26} style={{ color: service.accent }} />
                    </div>
                    {service.isExternal && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                        External <ExternalLink size={10} />
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: service.accent }}>
                    {service.tagline}
                  </div>
                  <h3 className="text-display text-2xl font-bold text-slate-ink mb-3">{service.title}</h3>
                  <p className="text-slate-mid text-sm leading-relaxed font-light mb-6">{service.description}</p>

                  <div className="space-y-2 mb-8">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs text-slate-mid font-medium">
                        <CheckCircle2 size={13} style={{ color: service.accent }} className="flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {service.isExternal ? (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-xs py-3 justify-center">
                      <span>Visit CrackLeap Platform</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      href={service.link}
                      className="btn-ghost w-full text-xs py-3 justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <span>Explore {service.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Enterprise Consultation CTA */}
      <section className="relative py-24 section-padding max-w-5xl mx-auto text-center">
        <div className="glass-card-strong rounded-3xl p-12 bg-gradient-to-br from-[#dde9f4] via-[#e8e4f3] to-[#d8ede8] border border-white/80 shadow-glass-lg">
          <SectionLabel accent="lavender" className="mb-4 mx-auto w-fit">
            Custom Engineering Engagement
          </SectionLabel>
          <h3 className="text-display text-3xl sm:text-4xl font-semibold text-slate-ink mb-4">
            Need a Tailored AI or Enterprise Architecture?
          </h3>
          <p className="text-slate-mid text-base max-w-2xl mx-auto font-light mb-8">
            Speak directly with senior architects at Vertex Loop to design your custom technology roadmap.
          </p>
          <Link href="/contact" className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
            <span>Schedule Architectural Discovery</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}