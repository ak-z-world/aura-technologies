import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Layers, FileText, Users, Video, ExternalLink, CheckCircle2 } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Proprietary Software & SaaS Platforms',
  description:
    'Discover Vertex Loop Pvt Ltd’s proprietary software product ecosystem: SCRIPTen AI for creators, Enterprise ERP, Digital Invoicing Software, and HRMS platform.',
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
  openGraph: {
    title: 'Proprietary Software & SaaS Platforms | Vertex Loop',
    description:
      'Vertex Loop Pvt Ltd’s in-house software products: SCRIPTen, Cloud ERP, HRMS, and Digital Invoicing.',
    url: `${siteConfig.url}/products`,
  },
}

const productsHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vertex Loop Pvt Ltd Proprietary Software Products',
  description: 'Software products and SaaS platforms developed by Vertex Loop Pvt Ltd',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'SCRIPTen Content Creator Platform',
      url: 'https://scripten.arivuon.in/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Vertex Loop Cloud ERP',
      url: `${siteConfig.url}/products/erp`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Digital Invoicing Software',
      url: `${siteConfig.url}/products/invoicing`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Enterprise HRMS Platform',
      url: `${siteConfig.url}/products/hrms`,
    },
  ],
}

const PRODUCTS = [
  {
    slug: 'scripten',
    icon: Video,
    title: 'SCRIPTen',
    badge: 'Creator Tech / Live App',
    tagline: 'AI Content Creation & Script Workflow Platform',
    description:
      'Proprietary AI platform designed specifically for video creators, copywriters, and digital media teams to streamline scripting, production planning, and creator workflows.',
    features: ['AI Script Outline Generation', 'Title & Hook Engagement Optimizer', 'Shot-List & Production Planner', 'Creator Workflow Dashboard'],
    accent: '#7c6fad',
    isExternal: true,
    link: 'https://scripten.arivuon.in/',
  },
  {
    slug: 'erp',
    icon: Layers,
    title: 'Vertex Loop ERP',
    badge: 'Enterprise Software',
    tagline: 'Unified Cloud Business Operating System',
    description:
      'Modular cloud ERP software integrating inventory control, procurement, financial accounting, operations, and business analytics for growing SMEs and enterprise organizations.',
    features: ['Real-Time Inventory Management', 'Multi-Entity Financial Accounting', 'Procurement & Vendor Portal', 'Custom Analytics & Reports'],
    accent: '#4a7fa5',
    isExternal: false,
    link: '/products/erp',
  },
  {
    slug: 'invoicing',
    icon: FileText,
    title: 'Digital Invoicing Platform',
    badge: 'SaaS Platform',
    tagline: 'Automated Business Billing & Financial Accounting',
    description:
      'Cloud invoicing and billing software enabling recurring payment automation, tax compliance, multi-currency invoicing, and streamlined client payment tracking.',
    features: ['Automated Recurring Invoicing', 'Multi-Currency & Tax Calculation', 'Custom Branded Invoice Templates', 'Real-Time Payment Tracking'],
    accent: '#3d8c7a',
    isExternal: false,
    link: '/products/invoicing',
  },
  {
    slug: 'hrms',
    icon: Users,
    title: 'Enterprise HRMS',
    badge: 'Enterprise Platform',
    tagline: 'Modern Workforce & Employee Management System',
    description:
      'Human Resource Management System providing employee lifecycle management, attendance tracking, leave workflows, self-service portals, and workforce analytics.',
    features: ['Employee Self-Service Portal', 'Biometric & Remote Attendance', 'Leave & Shift Management', 'HR Analytics & Compliance'],
    accent: '#a07830',
    isExternal: false,
    link: '/products/hrms',
  },
]

export default function ProductsOverviewPage() {
  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink min-h-screen">
      <JsonLd data={productsHubSchema} id="products-hub-jsonld" />
      <Navbar />

      {/* Hero Section */}
      <PageHero
        label="Proprietary SaaS & Platforms"
        labelAccent="lavender"
        headline={
          <>
            Software Products Built for
            <br />
            <span className="italic font-normal text-[#7c6fad]">Modern Businesses & Creators.</span>
          </>
        }
        subline="Vertex Loop develops proprietary software products alongside custom engineering services. Each product is engineered with scalable cloud architectures and AI workflow integration."
        gradient={{
          orb1: 'rgba(216,210,236,0.55)',
          orb2: 'rgba(193,218,240,0.45)',
          orb3: 'rgba(193,226,219,0.3)',
          base: '#f4f1f9',
        }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#products-grid" className="btn-primary text-sm">
            View Product Portfolio <ArrowRight size={14} />
          </Link>
          <Link href="/contact" className="btn-ghost text-sm">
            Request Product Demo
          </Link>
        </div>
      </PageHero>

      {/* AEO Answer Box */}
      <section className="relative py-8 section-padding max-w-5xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 border border-white/80 shadow-glass-lg">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7c6fad] mb-2">
            Direct Summary — Vertex Loop Software Portfolio
          </div>
          <p className="text-slate-mid text-base leading-relaxed font-light">
            Vertex Loop develops four flagship software products: <strong>SCRIPTen</strong> (AI content creation platform at <code>https://scripten.arivuon.in/</code>), <strong>Vertex Loop ERP</strong> (cloud inventory and operations platform), <strong>Digital Invoicing Platform</strong> (automated multi-currency billing SaaS), and <strong>Enterprise HRMS</strong> (workforce management and payroll solution).
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-grid" className="relative py-20 section-padding max-w-7xl mx-auto">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <SectionLabel accent="lavender" className="mb-4 mx-auto w-fit">
            Proprietary Products
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
            Interconnected Platforms Within the <span className="italic font-normal text-[#7c6fad]">Vertex Loop Ecosystem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.slug}
                className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-glass transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `${p.accent}14`,
                        border: `1px solid ${p.accent}30`,
                      }}>
                      <Icon size={28} style={{ color: p.accent }} />
                    </div>
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/60 border border-slate-200 text-slate-700">
                      {p.badge}
                    </span>
                  </div>

                  <div className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: p.accent }}>
                    {p.tagline}
                  </div>
                  <h3 className="text-display text-3xl font-bold text-slate-ink mb-4">{p.title}</h3>
                  <p className="text-slate-mid text-sm leading-relaxed font-light mb-6">{p.description}</p>

                  <div className="space-y-2.5 mb-8">
                    {p.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-mid font-medium">
                        <CheckCircle2 size={15} style={{ color: p.accent }} className="flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {p.isExternal ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-xs py-3.5 justify-center">
                      <span>Launch SCRIPTen App (scripten.arivuon.in)</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      href={p.link}
                      className="btn-ghost w-full text-xs py-3.5 justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <span>Explore {p.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Enterprise Demo CTA */}
      <section className="relative py-24 section-padding max-w-5xl mx-auto text-center">
        <div className="glass-card-strong rounded-3xl p-12 bg-gradient-to-br from-[#dde9f4] via-[#e8e4f3] to-[#d8ede8] border border-white/80 shadow-glass-lg">
          <SectionLabel accent="lavender" className="mb-4 mx-auto w-fit">
            Product Demonstration
          </SectionLabel>
          <h3 className="text-display text-3xl sm:text-4xl font-semibold text-slate-ink mb-4">
            Interested in Enterprise Deployment or Custom SaaS Modules?
          </h3>
          <p className="text-slate-mid text-base max-w-2xl mx-auto font-light mb-8">
            Contact our engineering and product teams to request a custom live demo of Vertex Loop ERP, Invoicing, or HRMS.
          </p>
          <Link href="/contact" className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
            <span>Request Live Product Demo</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
