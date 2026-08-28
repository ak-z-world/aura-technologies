import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, HelpCircle, Layers, GraduationCap, ShieldCheck } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import Breadcrumb from '@/components/seo/Breadcrumb'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/config/site'
import { getLocationBySlugPath, getAllIndexableLocations } from '@/lib/geoData'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  const locations = getAllIndexableLocations()
  return locations.map((loc) => ({
    slug: loc.slugPath,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlugPath(slug)

  if (!location) {
    return {
      title: 'Location Not Found | Vertex Loop Pvt Ltd',
    }
  }

  const canonicalUrl = `${siteConfig.url}/locations/${location.slugPath.join('/')}`

  return {
    title: `${location.headline} | Vertex Loop Pvt Ltd`,
    description: location.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${location.headline} | Vertex Loop Pvt Ltd`,
      description: location.metaDescription,
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${location.headline} | Vertex Loop Pvt Ltd`,
      description: location.metaDescription,
    },
  }
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params
  const location = getLocationBySlugPath(slug)

  if (!location) {
    notFound()
  }

  const canonicalUrl = `${siteConfig.url}/locations/${location.slugPath.join('/')}`

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Global Locations', url: '/locations' },
    ...location.slugPath.map((seg, idx) => {
      const subPath = location.slugPath.slice(0, idx + 1)
      const matchedLoc = getLocationBySlugPath(subPath)
      return {
        name: matchedLoc ? matchedLoc.name : seg,
        url: `/locations/${subPath.join('/')}`,
      }
    }),
  ]

  // Schema.org Structured Data
  const locationServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: `Custom AI & Software Engineering Services for ${location.name}`,
    description: location.metaDescription,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      telephone: siteConfig.telephone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
    },
    areaServed: {
      '@type': location.level === 'country' ? 'Country' : location.level === 'state' ? 'AdministrativeArea' : 'City',
      name: location.name,
    },
    serviceType: location.keyServices,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink min-h-screen">
      <JsonLd data={locationServiceSchema} id={`location-service-${location.slug}-jsonld`} />
      <JsonLd data={faqSchema} id={`location-faq-${location.slug}-jsonld`} />
      <Navbar />

      {/* Hero */}
      <PageHero
        label={`${location.continent} · ${location.name}`}
        labelAccent="mint"
        headline={
          <>
            {location.name}:{' '}
            <span className="italic font-normal text-[#3d8c7a]">
              {location.headline.split(' in ')[0] || 'Enterprise AI & Software Engineering'}
            </span>
          </>
        }
        subline={location.businessContext}
        gradient={{
          orb1: 'rgba(193,226,219,0.5)',
          orb2: 'rgba(193,218,240,0.4)',
          orb3: 'rgba(216,210,236,0.35)',
          base: '#f0f6f4',
        }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/contact" className="btn-primary text-sm">
            Consult Architect <ArrowRight size={14} />
          </Link>
          <Link href="/locations" className="btn-ghost text-sm">
            All Service Areas
          </Link>
        </div>
      </PageHero>

      {/* Breadcrumb Container */}
      <div className="section-padding py-4 max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* AEO Direct Overview Capsule */}
      <section className="relative py-6 section-padding max-w-5xl mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 border border-white/80 shadow-glass-lg">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#3d8c7a] mb-2 flex items-center gap-2">
            <ShieldCheck size={16} /> Direct Overview — {location.name} Service Delivery
          </div>
          <p className="text-slate-mid text-base leading-relaxed font-light mb-4">
            {location.isPhysicalHQ ? (
              <>
                <strong>Vertex Loop Pvt Ltd</strong> maintains its primary registered operational headquarters in{' '}
                <strong>Ambattur, Chennai (G2, Venkatapuram, 600053, Tamil Nadu, India)</strong>. Organizations in {location.name} have direct access to our core engineering teams for in-person architectural consultations, on-site campus workshops, and high-velocity production deployments.
              </>
            ) : (
              <>
                <strong>Vertex Loop Pvt Ltd</strong> delivers enterprise software engineering, custom AI agents, cloud DevOps, and tech education to clients in <strong>{location.name}</strong> through our <strong>{location.deliveryModel}</strong>. All engineering execution is orchestrated from our central headquarters in Ambattur, Chennai with dedicated time-zone overlap ({location.timeZone}).
              </>
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 text-xs font-mono text-slate-dim">
            <div>📍 <strong>HQ Address:</strong> Ambattur, Chennai - 600053</div>
            <div>⏰ <strong>Operating Time Zone:</strong> {location.timeZone}</div>
            <div>💱 <strong>Commercial Currency:</strong> {location.currency}</div>
          </div>
        </div>
      </section>

      {/* Key Services & Regional Capabilities */}
      <section className="relative py-16 section-padding max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <SectionLabel accent="mint" className="mb-4 mx-auto w-fit">
            Regional Capabilities
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-3xl md:text-5xl leading-tight tracking-tight">
            Engineering Solutions for <span className="italic font-normal text-[#3d8c7a]">{location.name}</span>
          </h2>
          <p className="text-slate-mid text-base max-w-2xl mx-auto font-light mt-3">
            Tailored software architecture, autonomous AI agents, and enterprise infrastructure designed for regional business scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {location.keyServices.map((svc) => (
            <div key={svc} className="glass-card rounded-3xl p-7 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-mint-soft flex items-center justify-center mb-4 text-[#3d8c7a]">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-display font-bold text-slate-ink text-lg mb-2">{svc}</h3>
                <p className="text-slate-mid text-xs leading-relaxed font-light">
                  Production-grade implementation delivered by Vertex Loop Pvt Ltd with rigorous code quality, enterprise security, and 24/7 reliability.
                </p>
              </div>
              <Link href="/services" className="text-xs font-semibold text-[#3d8c7a] hover:underline pt-4 mt-4 border-t border-slate-100 flex items-center gap-1">
                <span>View Service Details</span>
                <ArrowRight size={11} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Target Industries & Crack Leap Academy */}
      <section className="relative py-16 section-padding max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Target Industries */}
        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-display font-semibold text-slate-ink text-2xl mb-6 flex items-center gap-2">
            <Layers size={22} className="text-[#3d8c7a]" /> Relevant Industry Verticals
          </h3>
          <p className="text-slate-mid text-sm font-light mb-6">
            We adapt our engineering frameworks to the specific operational and regulatory demands of {location.name}:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {location.targetIndustries.map((ind) => (
              <div key={ind} className="p-3.5 rounded-xl bg-white/60 border border-white/80 text-xs font-medium text-slate-ink flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3d8c7a]" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academy Offerings */}
        <div className="glass-card rounded-3xl p-8">
          <h3 className="text-display font-semibold text-slate-ink text-2xl mb-6 flex items-center gap-2">
            <GraduationCap size={22} className="text-[#4a7fa5]" /> Crack Leap Academy Programs
          </h3>
          <p className="text-slate-mid text-sm font-light mb-6">
            Technical education and corporate upskilling programs available for colleges, engineering students, and enterprise teams in {location.name}:
          </p>
          <div className="space-y-3">
            {location.academyOfferings.map((acad) => (
              <div key={acad} className="p-3.5 rounded-xl bg-white/60 border border-white/80 text-xs font-medium text-slate-ink flex items-center justify-between">
                <span>{acad}</span>
                <span className="text-[10px] font-mono text-[#4a7fa5] font-semibold uppercase">Crack Leap Track</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200/60">
            <a
              href="https://crackleap.vertexloop.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#4a7fa5] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore full curriculum on Crack Leap</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Regional FAQ Section */}
      <section className="relative py-16 section-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel accent="mint" className="mb-3 mx-auto w-fit">
            Location FAQs
          </SectionLabel>
          <h2 className="text-display font-semibold text-slate-ink text-3xl md:text-4xl">
            Frequently Asked Questions — {location.name}
          </h2>
        </div>

        <div className="space-y-4">
          {location.faqs.map((faq) => (
            <div key={faq.q} className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-slate-ink text-base mb-2 flex items-start gap-3">
                <HelpCircle size={18} className="text-[#3d8c7a] flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-mid text-sm leading-relaxed font-light pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 section-padding max-w-5xl mx-auto text-center">
        <div className="glass-card-strong rounded-3xl p-12 bg-gradient-to-br from-[#dde9f4] via-[#e8e4f3] to-[#d8ede8] border border-white/80 shadow-glass-lg">
          <h3 className="text-display text-3xl sm:text-4xl font-semibold text-slate-ink mb-4">
            Start Your Engagement in {location.name}
          </h3>
          <p className="text-slate-mid text-base max-w-2xl mx-auto font-light mb-8">
            Speak directly with senior software architects at Vertex Loop Pvt Ltd to scope your AI, software, or training requirements.
          </p>
          <Link href="/contact" className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
            <span>Contact Vertex Loop</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
