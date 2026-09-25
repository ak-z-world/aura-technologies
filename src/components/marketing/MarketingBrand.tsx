import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Megaphone,
  MessageSquare,
  ShieldCheck,
  FileText,
  Sparkles,
} from 'lucide-react'

const BRAND_CAPABILITIES = [
  {
    title: 'Brand Strategy',
    desc: 'Positioning and messaging',
    icon: Megaphone,
  },
  {
    title: 'Digital Communication',
    desc: 'Cross-channel consistency',
    icon: MessageSquare,
  },
  {
    title: 'Online Reputation Management',
    desc: 'Clear and relevant brand presence',
    icon: ShieldCheck,
  },
  {
    title: 'Content Direction',
    desc: 'Clear and relevant communication',
    icon: FileText,
  },
  {
    title: 'Digital Presence',
    desc: 'A unified digital experience',
    icon: Sparkles,
  },
]

export default function MarketingBrand() {
  return (
    <section id="brand" className="py-20 md:py-24 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              06 / BRAND
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15] mb-5">
              Consistency
              <br />
              builds recognition.
            </h2>
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed mb-7 max-w-sm">
              Brand strategy connects positioning, communication and digital presence into a more
              consistent experience across channels.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#111827] hover:text-[#2563eb] transition-colors group"
            >
              <span>Explore brand strategy</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Middle Column: Capabilities list */}
          <div className="lg:col-span-4 space-y-4">
            {BRAND_CAPABILITIES.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex items-start gap-3.5 group">
                  <div className="w-7 h-7 rounded-lg bg-blue-50/90 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Icon size={14} className="stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Editorial Image */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#1a2333]/8 bg-white shadow-sm aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3]">
              <Image
                src="/images/marketing-brand-strategy-hd.webp"
                alt="Brand strategy presentation book mockup"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
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
