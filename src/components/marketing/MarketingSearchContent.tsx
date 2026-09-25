import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, FileText } from 'lucide-react'

const SEARCH_ITEMS = [
  {
    title: 'SEO',
    desc: 'Search Engine Optimisation',
  },
  {
    title: 'SEM',
    desc: 'Search Engine Marketing',
  },
  {
    title: 'Search Strategy',
    desc: 'Structured search visibility and acquisition activities',
  },
]

const CONTENT_ITEMS = [
  {
    title: 'Content Marketing',
    desc: 'Content planning and development',
  },
  {
    title: 'Email Marketing',
    desc: 'Direct digital communication',
  },
  {
    title: 'Content Systems',
    desc: 'Consistent content across relevant channels',
  },
]

export default function MarketingSearchContent() {
  return (
    <section id="search-content" className="py-20 md:py-24 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              01 / SEARCH + CONTENT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15] mb-5">
              Be discoverable.
              <br />
              Be useful.
            </h2>
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed mb-7 max-w-sm">
              Search and content work together to help organisations communicate clearly and build
              a meaningful digital presence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#111827] hover:text-[#2563eb] transition-colors group"
            >
              <span>Explore search &amp; content</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Middle Column: Capabilities (Search & Content) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Search Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-7 h-7 rounded-md bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Search size={14} className="stroke-[2]" />
                </div>
                <h3 className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#111827]">
                  Search
                </h3>
              </div>
              <div className="space-y-6">
                {SEARCH_ITEMS.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-sm font-semibold text-[#111827] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-7 h-7 rounded-md bg-amber-50/80 border border-amber-100 flex items-center justify-center text-amber-600">
                  <FileText size={14} className="stroke-[2]" />
                </div>
                <h3 className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#111827]">
                  Content
                </h3>
              </div>
              <div className="space-y-6">
                {CONTENT_ITEMS.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-sm font-semibold text-[#111827] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Image */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden border border-[#1a2333]/8 bg-[#faf9f5] shadow-sm aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src="/images/marketing-search-content-hd.webp"
                alt="Search and Content strategy on workspace desk"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
