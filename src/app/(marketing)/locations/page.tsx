import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { MapPin, Globe, ArrowRight, CheckCircle2, Building2, Phone, Mail, Sparkles } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import Breadcrumb from '@/components/seo/Breadcrumb'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'
import { GEO_LOCATIONS } from '@/lib/geoData'

export const metadata: Metadata = {
  title: 'Global Service Locations & Delivery Hubs',
  description:
    'Vertex Loop Pvt Ltd operates from its single registered headquarters in Ambattur, Chennai, delivering custom AI, enterprise software, cloud DevOps, and tech training across India, US, UK, Canada, Australia, UAE, and Singapore.',
  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
  openGraph: {
    title: 'Global Service Locations & Delivery Hubs | Vertex Loop',
    description:
      'Explore Vertex Loop Pvt Ltd’s global service reach. Single headquarters in Ambattur, Chennai with remote engineering delivery worldwide.',
    url: `${siteConfig.url}/locations`,
  },
}

const locationsDirectorySchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vertex Loop Pvt Ltd Global Service Locations & Regional Coverage',
  description:
    'Directory of operational regions and global service delivery markets served by Vertex Loop Pvt Ltd from its Ambattur, Chennai headquarters.',
  itemListElement: GEO_LOCATIONS.map((loc, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: `${loc.name} — ${loc.headline}`,
    url: `${siteConfig.url}/locations/${loc.slugPath.join('/')}`,
  })),
}

export default function LocationsDirectoryPage() {
  const hqEntity = GEO_LOCATIONS.find((l) => l.isPhysicalHQ && l.slug === 'chennai') || GEO_LOCATIONS[2]
  const regionalLocations = GEO_LOCATIONS.filter((l) => l.slug !== 'chennai')

  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink min-h-screen">
      <JsonLd data={locationsDirectorySchema} id="locations-directory-jsonld" />
      <Navbar />

      {/* Hero */}
      <PageHero
        label="Global Operations & Service Areas"
        labelAccent="mint"
        headline={
          <>
            Global Technology Reach,
            <br />
            <span className="italic font-normal text-[#3d8c7a]">One Dedicated Headquarters.</span>
          </>
        }
        subline="Vertex Loop Pvt Ltd operates from its verified physical headquarters in Ambattur, Chennai, deploying enterprise AI, custom software engineering, and technical academy training to organizations worldwide."
        gradient={{
          orb1: 'rgba(193,226,219,0.5)',
          orb2: 'rgba(193,218,240,0.4)',
          orb3: 'rgba(216,210,236,0.35)',
          base: '#f0f6f4',
        }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#hq-section" className="btn-primary text-sm">
            Operational Headquarters <ArrowRight size={14} />
          </Link>
          <Link href="#regions-grid" className="btn-ghost text-sm">
            View Service Areas
          </Link>
        </div>
      </PageHero>

      {/* Breadcrumb Container */}
      <div className="section-padding py-4 max-w-7xl mx-auto">
        <Breadcrumb items={[{ name: 'Global Locations', url: '/locations' }]} />
      </div>

      {/* AEO Direct Overview Capsule */}
      <section className="relative py-6 section-padding max-w-5xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 border border-white/80 shadow-glass-lg">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#3d8c7a] mb-2 flex items-center gap-1.5">
            <Sparkles size={14} /> Direct Summary — Vertex Loop Pvt Ltd Geographic Structure
          </div>
          <p className="text-slate-mid text-base leading-relaxed font-light mb-4">
            <strong>Vertex Loop Pvt Ltd</strong> maintains exactly <strong>one verified operational headquarters</strong> at <strong>G2, Venkatapuram, Ambattur, Chennai - 600053, Tamil Nadu, India</strong>. We do not claim fabricated local offices or virtual branches. All international engagements (United States, United Kingdom, Canada, Australia, UAE, Singapore) and domestic regional clients (Karnataka, Telangana, Maharashtra, and Tamil Nadu) are served through our proven <strong>remote engineering delivery model</strong> and scheduled on-site architectural consultations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 text-xs font-mono text-slate-dim">
            <div>📍 <strong>HQ:</strong> Ambattur, Chennai (600053)</div>
            <div>📞 <strong>Phone:</strong> +91 94457 70160</div>
            <div>✉️ <strong>Email:</strong> hello@vertexloop.in</div>
          </div>
        </div>
      </section>

      {/* Physical Headquarters Spotlight */}
      <section id="hq-section" className="relative py-16 section-padding max-w-7xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 md:p-12 border border-[#3d8c7a]/20 bg-gradient-to-br from-white/90 via-mint-soft/20 to-white/80 shadow-glass-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3d8c7a]/15 text-[#3d8c7a] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Building2 size={13} /> Official Physical Headquarters
              </div>
              <h2 className="text-display font-semibold text-slate-ink text-3xl md:text-4xl tracking-tight mb-4">
                Ambattur, Chennai, Tamil Nadu
              </h2>
              <p className="text-slate-mid text-base leading-relaxed font-light mb-6">
                Our central engineering command center is located in Ambattur, Chennai. This single facility houses our core AI research group, full-stack software architects, cloud DevOps engineers, and Crack Leap education faculty.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-slate-ink">
                  <MapPin size={18} className="text-[#3d8c7a] flex-shrink-0 mt-0.5" />
                  <span><strong>Registered Address:</strong> G2, Venkatapuram, Ambattur, Chennai - 600053, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-ink">
                  <Phone size={18} className="text-[#3d8c7a] flex-shrink-0" />
                  <span><strong>Telephone:</strong> <a href="tel:+919445770160" className="hover:text-[#3d8c7a]">+91 94457 70160</a></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-ink">
                  <Mail size={18} className="text-[#3d8c7a] flex-shrink-0" />
                  <span><strong>Corporate Email:</strong> <a href="mailto:hello@vertexloop.in" className="hover:text-[#3d8c7a]">hello@vertexloop.in</a></span>
                </div>
              </div>

              <Link href={`/locations/${hqEntity.slugPath.join('/')}`} className="btn-primary text-xs py-3 px-6 inline-flex items-center gap-2">
                <span>View Chennai HQ Hub Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="w-full lg:w-96 rounded-2xl bg-white/70 border border-white/90 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-ink text-sm mb-4 font-mono uppercase tracking-wider text-[#3d8c7a]">
                HQ Operational Scope
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-mid">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#3d8c7a]" /> Custom AI R&D & Model Fine-Tuning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#3d8c7a]" /> High-Concurrency Enterprise Software
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#3d8c7a]" /> 24/7 Managed Cloud & NOC Operations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#3d8c7a]" /> Crack Leap Tech Academy Training Labs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#3d8c7a]" /> College Campus Bootcamps & Workshops
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regional & International Service Areas Grid */}
      <section id="regions-grid" className="relative py-16 section-padding max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel accent="mint" className="mb-4 mx-auto w-fit">
            Global Service Areas
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-3xl md:text-5xl leading-tight tracking-tight">
            Serving Enterprises Across <span className="italic font-normal text-[#3d8c7a]">Global Corridors</span>
          </h2>
          <p className="text-slate-mid text-base max-w-2xl mx-auto font-light mt-3">
            Every location below is served through dedicated remote engineering teams, synchronized time zones, and transparent milestone tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionalLocations.map((loc) => (
            <div
              key={loc.slug}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {loc.level.toUpperCase()} · {loc.countryCode}
                  </span>
                  <Globe size={16} className="text-[#3d8c7a] group-hover:rotate-12 transition-transform" />
                </div>

                <h3 className="text-display text-2xl font-bold text-slate-ink mb-2">{loc.name}</h3>
                <p className="text-slate-dim text-xs font-mono mb-4">{loc.deliveryModel}</p>
                <p className="text-slate-mid text-sm leading-relaxed font-light mb-6 line-clamp-3">
                  {loc.metaDescription}
                </p>

                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-mono text-slate-dim uppercase tracking-wider font-semibold">Key Focus:</div>
                  {loc.keyServices.slice(0, 2).map((s) => (
                    <div key={s} className="flex items-center gap-2 text-xs text-slate-mid">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3d8c7a]" />
                      <span className="truncate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/locations/${loc.slugPath.join('/')}`}
                className="btn-ghost w-full text-xs py-2.5 justify-center group-hover:bg-slate-900 group-hover:text-white transition-all flex items-center gap-1.5"
              >
                <span>Explore {loc.name} Capabilities</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Global Consultation CTA */}
      <section className="relative py-24 section-padding max-w-5xl mx-auto text-center">
        <div className="glass-card-strong rounded-3xl p-12 bg-gradient-to-br from-[#dde9f4] via-[#e8e4f3] to-[#d8ede8] border border-white/80 shadow-glass-lg">
          <SectionLabel accent="mint" className="mb-4 mx-auto w-fit">
            Connect With Our Engineering Team
          </SectionLabel>
          <h3 className="text-display text-3xl sm:text-4xl font-semibold text-slate-ink mb-4">
            Discuss Your AI or Enterprise Project
          </h3>
          <p className="text-slate-mid text-base max-w-2xl mx-auto font-light mb-8">
            Whether you are located in India, the US, Europe, or APAC, our senior software architects at Vertex Loop Pvt Ltd are ready to structure your technical roadmap.
          </p>
          <Link href="/contact" className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
            <span>Schedule Discovery Session</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
