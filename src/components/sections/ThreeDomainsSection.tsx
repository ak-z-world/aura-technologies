import Link from 'next/link'
import { ArrowRight, Code2, BarChart2, GraduationCap } from 'lucide-react'

const DOMAIN_CARDS = [
  {
    number: '01',
    label: 'SOFTWARE',
    title: 'Software & AI',
    description:
      'Software products, web and mobile applications, SaaS and PaaS solutions across modern software and AI technologies.',
    tags: 'AI · ML · GenAI · Automation · Cloud',
    ctaText: 'Explore Software',
    href: '/software',
    icon: Code2,
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    number: '02',
    label: 'MARKETING',
    title: 'Digital Marketing',
    description:
      'Digital marketing services spanning search, content, social media, performance, analytics, automation and brand strategy.',
    tags: 'SEO · SEM · Content · Social · Performance · Analytics',
    ctaText: 'Explore Marketing',
    href: '/marketing',
    icon: BarChart2,
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    number: '03',
    label: 'ACADEMY',
    title: 'Education & Academy',
    description:
      'Technology-enabled learning through digital courses, skill development, training, assessment and personalised learning solutions.',
    tags: 'Courses · Training · Assessment · AI Learning',
    ctaText: 'Explore Academy',
    href: '/academy',
    icon: GraduationCap,
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-100',
  },
]

export default function ThreeDomainsSection() {
  return (
    <section id="domains" className="py-20 md:py-28 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
            WHAT WE DO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-4">
            Three domains. One technology company.
          </h2>
          <p className="text-sm md:text-base text-[#4b5563] font-light leading-relaxed max-w-2xl mx-auto">
            Vertex Loop Pvt Ltd operates across software, digital marketing and education, bringing
            technology, growth and learning under one integrated company.
          </p>
        </div>

        {/* 3 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {DOMAIN_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.number}
                className="group relative bg-white rounded-2xl p-8 border border-[#1a2333]/8 shadow-[0_2px_12px_rgba(26,35,51,0.03)] hover:shadow-[0_12px_32px_rgba(26,35,51,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[380px]"
              >
                <div>
                  {/* Top row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-semibold text-[#64748b] flex items-center gap-1.5">
                      <span>{card.number}</span>
                      <span>→</span>
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${card.badgeBg}`}>
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Domain Label */}
                  <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#9ca3af] block mb-1.5">
                    {card.label}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-semibold text-[#111827] mb-3 group-hover:text-[#2563eb] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4b5563] font-light leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <p className="text-xs text-[#6b7280] font-normal tracking-wide mb-8">
                    {card.tags}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#111827] group-hover:text-[#2563eb] transition-colors"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
