import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Layers } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'

export interface ServicePageData {
  slug: string
  title: string
  subtitle: string
  heroLabel: string
  heroAccent: 'blue' | 'lavender' | 'mint' | 'gold' | 'rose'
  heroDescription: string
  aeoAnswer: string
  accentColor: string
  capabilities: { title: string; desc: string }[]
  processSteps: { step: string; label: string; desc: string }[]
  technologies: string[]
  useCases: string[]
  faq: { q: string; a: string }[]
  jsonLdData: object
}

export default function ServicePageLayout({ service }: { service: ServicePageData }) {
  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink min-h-screen">
      <JsonLd data={service.jsonLdData} id={`${service.slug}-jsonld`} />
      <Navbar />

      {/* Hero */}
      <PageHero
        label={service.heroLabel}
        labelAccent={service.heroAccent}
        headline={
          <>
            {service.title.split(' ')[0]}{' '}
            <span className="italic font-normal" style={{ color: service.accentColor }}>
              {service.title.split(' ').slice(1).join(' ')}
            </span>
          </>
        }
        subline={service.heroDescription}
        gradient={{
          orb1: 'rgba(216,210,236,0.5)',
          orb2: 'rgba(193,218,240,0.4)',
          orb3: 'rgba(193,226,219,0.3)',
          base: '#f4f1f9',
        }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/contact" className="btn-primary text-sm">
            Consult Architect <ArrowRight size={14} />
          </Link>
          <Link href="/services" className="btn-ghost text-sm">
            All Engineering Services
          </Link>
        </div>
      </PageHero>

      {/* AEO Summary Box */}
      <section className="relative py-8 section-padding max-w-5xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 border border-white/80 shadow-glass-lg">
          <div className="text-xs font-mono font-bold uppercase tracking-wider mb-2" style={{ color: service.accentColor }}>
            Direct Overview — {service.title}
          </div>
          <p className="text-slate-mid text-base leading-relaxed font-light">{service.aeoAnswer}</p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="relative py-20 section-padding max-w-7xl mx-auto">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <SectionLabel accent={service.heroAccent} className="mb-4 mx-auto w-fit">
            Technical Capabilities
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
            Enterprise Solutions & <span className="italic font-normal" style={{ color: service.accentColor }}>Architectural Rigor</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.capabilities.map((cap) => (
            <div
              key={cap.title}
              className="glass-card rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${service.accentColor}14`,
                  border: `1px solid ${service.accentColor}30`,
                }}>
                <CheckCircle2 size={20} style={{ color: service.accentColor }} />
              </div>
              <h3 className="text-display text-xl font-bold text-slate-ink mb-3">{cap.title}</h3>
              <p className="text-slate-mid text-sm leading-relaxed font-light">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process / Methodology */}
      <section className="relative py-20 section-padding max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-10">
          <div className="mb-10">
            <SectionLabel accent={service.heroAccent} className="mb-3">
              Delivery Process
            </SectionLabel>
            <h3 className="text-display font-semibold text-slate-ink text-3xl md:text-4xl">How We Architect & Deploy</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white/60 border border-white/80 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-display font-semibold block mb-3 opacity-40" style={{ color: service.accentColor }}>
                    {step.step}
                  </span>
                  <h4 className="font-semibold text-slate-ink text-base mb-2">{step.label}</h4>
                  <p className="text-slate-mid text-xs leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Use Cases */}
      <section className="relative py-20 section-padding max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-3xl p-8">
          <h3 className="font-semibold text-slate-ink text-lg mb-6 flex items-center gap-2">
            <Layers size={18} style={{ color: service.accentColor }} /> Core Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech) => (
              <span key={tech} className="tag-pill text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <h3 className="font-semibold text-slate-ink text-lg mb-6 flex items-center gap-2">
            <ChevronRight size={18} style={{ color: service.accentColor }} /> Target Use Cases
          </h3>
          <ul className="space-y-3">
            {service.useCases.map((uc) => (
              <li key={uc} className="flex items-center gap-3 text-xs text-slate-mid font-light">
                <div className="w-2 h-2 rounded-full" style={{ background: service.accentColor }} />
                <span>{uc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 section-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel accent={service.heroAccent} className="mb-3 mx-auto w-fit">
            Frequently Asked Questions
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-3xl md:text-4xl">Engineering FAQ</h2>
        </div>

        <div className="space-y-4">
          {service.faq.map((item) => (
            <div key={item.q} className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-slate-ink text-base mb-2 flex items-start gap-3">
                <HelpCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} />
                <span>{item.q}</span>
              </h3>
              <p className="text-slate-mid text-sm leading-relaxed font-light pl-7">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 section-padding max-w-5xl mx-auto text-center">
        <div className="glass-card-strong rounded-3xl p-12 bg-gradient-to-br from-[#dde9f4] via-[#e8e4f3] to-[#d8ede8] border border-white/80 shadow-glass-lg">
          <h3 className="text-display text-3xl sm:text-4xl font-semibold text-slate-ink mb-4">
            Accelerate Your {service.title} Strategy
          </h3>
          <p className="text-slate-mid text-base max-w-2xl mx-auto font-light mb-8">
            Partner with Vertex Loop's dedicated engineering team for production-grade execution.
          </p>
          <Link href="/contact" className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
            <span>Start Engineering Discovery</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
