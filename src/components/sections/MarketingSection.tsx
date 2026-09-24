import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Search,
  FileText,
  Share2,
  TrendingUp,
  BarChart2,
  Zap,
} from 'lucide-react'

const MARKETING_CAPABILITIES = [
  {
    title: 'Search',
    subtitle: 'SEO · SEM',
    icon: Search,
  },
  {
    title: 'Content',
    subtitle: 'Content · Email',
    icon: FileText,
  },
  {
    title: 'Social',
    subtitle: 'Social Media · Influencer',
    icon: Share2,
  },
  {
    title: 'Performance',
    subtitle: 'Performance · Programmatic',
    icon: TrendingUp,
  },
  {
    title: 'Analytics',
    subtitle: 'Web & App Analytics',
    icon: BarChart2,
  },
  {
    title: 'Automation',
    subtitle: 'Marketing Automation',
    icon: Zap,
  },
]

export default function MarketingSection() {
  return (
    <section id="marketing" className="py-20 md:py-28 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy & Capability Grid */}
          <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
            {/* Eyebrow */}
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              02 / DIGITAL MARKETING
            </span>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-5">
              Marketing grounded
              <br />
              in data, content and performance.
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm md:text-base text-[#4b5563] font-light leading-relaxed mb-8">
              Vertex Loop provides digital marketing services across search, content, social media,
              performance marketing, analytics, automation and brand strategy.
            </p>

            {/* 2x3 Capability Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {MARKETING_CAPABILITIES.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-white border border-[#1a2333]/8 hover:border-[#1a2333]/15 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#faf9f5] border border-[#1a2333]/6 flex items-center justify-center text-[#4b5563] group-hover:text-[#2563eb] transition-colors flex-shrink-0">
                        <Icon size={13} />
                      </div>
                      <span className="text-xs font-semibold text-[#111827]">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6b7280] font-normal pl-8">
                      {item.subtitle}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <Link
              href="/marketing"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-[#111827] hover:text-[#2563eb] transition-colors pt-2"
            >
              <span>Explore Marketing</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Marketing Analytics Dashboard / Monitor Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3.2] w-full rounded-2xl overflow-hidden border border-[#1a2333]/8 shadow-[0_8px_30px_rgba(26,35,51,0.06)] bg-white">
              <Image
                src="/images/marketing-monitor-hd.webp"
                alt="Vertex Loop Digital Marketing, Analytics, and Performance Growth"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
