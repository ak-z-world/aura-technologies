import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ExternalLink, HelpCircle, Layers, ShieldCheck, Sparkles } from 'lucide-react'
import Breadcrumb from '@/components/seo/Breadcrumb'
import JsonLd from '@/components/seo/JsonLd'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'

export interface ProductPageData {
  slug: string
  title: string
  subtitle: string
  badge: string
  heroLabel: string
  heroAccent: 'blue' | 'lavender' | 'mint' | 'gold' | 'rose'
  heroDescription: string
  aeoAnswer: string
  accentColor: string
  isExternal?: boolean
  externalUrl?: string
  capabilities: { title: string; desc: string }[]
  benefits: { title: string; desc: string }[]
  technologies: string[]
  useCases: string[]
  faq: { q: string; a: string }[]
  jsonLdData: Record<string, unknown> | Array<Record<string, unknown>>
}

export default function ProductPageLayout({ product }: { product: ProductPageData }) {
  const breadcrumbItems = [
    { name: 'Products', url: '/products' },
    { name: product.title, url: `/products/${product.slug}` },
  ]

  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink min-h-screen">
      <JsonLd data={product.jsonLdData} id={`${product.slug}-jsonld`} />
      <Navbar />

      {/* Hero */}
      <PageHero
        label={product.heroLabel}
        labelAccent={product.heroAccent}
        headline={
          <>
            {product.title.split(' ')[0]}{' '}
            <span className="italic font-normal" style={{ color: product.accentColor }}>
              {product.title.split(' ').slice(1).join(' ')}
            </span>
          </>
        }
        subline={product.heroDescription}
        gradient={{
          orb1: 'rgba(216,210,236,0.5)',
          orb2: 'rgba(193,218,240,0.4)',
          orb3: 'rgba(193,226,219,0.3)',
          base: '#f4f1f9',
        }}
      >
        <div className="flex flex-wrap items-center gap-4">
          {product.isExternal && product.externalUrl ? (
            <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              <span>Launch Live App ({new URL(product.externalUrl).hostname})</span>
              <ExternalLink size={14} />
            </a>
          ) : (
            <Link href="/contact" className="btn-primary text-sm">
              Request Live Demo <ArrowRight size={14} />
            </Link>
          )}
          <Link href="/products" className="btn-ghost text-sm">
            All Products
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
          <div className="text-xs font-mono font-bold uppercase tracking-wider mb-2" style={{ color: product.accentColor }}>
            Direct Product Overview — {product.title}
          </div>
          <p className="text-slate-mid text-base leading-relaxed font-light">{product.aeoAnswer}</p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="relative py-20 section-padding max-w-7xl mx-auto">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <SectionLabel accent={product.heroAccent} className="mb-4 mx-auto w-fit">
            Product Features
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
            Key Capabilities & <span className="italic font-normal" style={{ color: product.accentColor }}>Product Modules</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.capabilities.map((cap) => (
            <div
              key={cap.title}
              className="glass-card rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${product.accentColor}14`,
                  border: `1px solid ${product.accentColor}30`,
                }}>
                <CheckCircle2 size={20} style={{ color: product.accentColor }} />
              </div>
              <h3 className="text-display text-xl font-bold text-slate-ink mb-3">{cap.title}</h3>
              <p className="text-slate-mid text-sm leading-relaxed font-light">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-20 section-padding max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-10">
          <div className="mb-10">
            <SectionLabel accent={product.heroAccent} className="mb-3">
              Value Propositions
            </SectionLabel>
            <h3 className="text-display font-semibold text-slate-ink text-3xl md:text-4xl">Why Enterprises Choose {product.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-white/60 border border-white/80">
                <ShieldCheck size={24} className="mb-4" style={{ color: product.accentColor }} />
                <h4 className="font-semibold text-slate-ink text-base mb-2">{b.title}</h4>
                <p className="text-slate-mid text-xs leading-relaxed font-light">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack & Use Cases */}
      <section className="relative py-20 section-padding max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-3xl p-8">
          <h3 className="font-semibold text-slate-ink text-lg mb-6 flex items-center gap-2">
            <Layers size={18} style={{ color: product.accentColor }} /> Underlying Tech Stack & Security
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {product.technologies.map((tech) => (
              <span key={tech} className="tag-pill text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <h3 className="font-semibold text-slate-ink text-lg mb-6 flex items-center gap-2">
            <Sparkles size={18} style={{ color: product.accentColor }} /> Operational Use Cases
          </h3>
          <ul className="space-y-3">
            {product.useCases.map((uc) => (
              <li key={uc} className="flex items-center gap-3 text-xs text-slate-mid font-light">
                <div className="w-2 h-2 rounded-full" style={{ background: product.accentColor }} />
                <span>{uc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 section-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel accent={product.heroAccent} className="mb-3 mx-auto w-fit">
            Product FAQ
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-3xl md:text-4xl">Questions & Answers</h2>
        </div>

        <div className="space-y-4">
          {product.faq.map((item) => (
            <div key={item.q} className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-slate-ink text-base mb-2 flex items-start gap-3">
                <HelpCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: product.accentColor }} />
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
            Get Started with {product.title}
          </h3>
          <p className="text-slate-mid text-base max-w-2xl mx-auto font-light mb-8">
            Experience modern software built for speed, reliability, and enterprise scale.
          </p>
          {product.isExternal && product.externalUrl ? (
            <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
              <span>Open {product.title} App ({new URL(product.externalUrl).hostname})</span>
              <ExternalLink size={14} />
            </a>
          ) : (
            <Link href="/contact" className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
              <span>Schedule Live Demo</span>
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
