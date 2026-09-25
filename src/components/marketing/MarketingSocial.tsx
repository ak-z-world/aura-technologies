import Link from 'next/link'
import { ArrowRight, Users, LayoutTemplate, Megaphone } from 'lucide-react'

const SOCIAL_COLUMNS = [
  {
    title: 'Social Media Management',
    icon: Users,
    iconBg: 'bg-blue-50/90 text-blue-600 border-blue-100',
    items: [
      'Content planning',
      'Publishing',
      'Channel management',
      'Audience communication',
    ],
  },
  {
    title: 'Social Content',
    icon: LayoutTemplate,
    iconBg: 'bg-amber-50/90 text-amber-600 border-amber-100',
    items: [
      'Creative content',
      'Campaign content',
      'Brand communication',
      'Platform-specific content',
    ],
  },
  {
    title: 'Influencer Marketing',
    icon: Megaphone,
    iconBg: 'bg-purple-50/90 text-purple-600 border-purple-100',
    items: [
      'Influencer collaborations',
      'Campaign coordination',
      'Audience-focused communication',
    ],
  },
]

export default function MarketingSocial() {
  return (
    <section id="social" className="py-20 md:py-24 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              02 / SOCIAL MEDIA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15] mb-5">
              Build a presence
              <br />
              people can recognise.
            </h2>
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed mb-7 max-w-sm">
              Social media marketing and management focused on consistent communication, content
              and audience engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#111827] hover:text-[#2563eb] transition-colors group"
            >
              <span>Explore social media</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: 3 Capability Columns / Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SOCIAL_COLUMNS.map((col) => {
              const Icon = col.icon
              return (
                <div
                  key={col.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#1a2333]/8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Icon + Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-8 h-8 rounded-lg ${col.iconBg} border flex items-center justify-center shrink-0`}
                      >
                        <Icon size={15} className="stroke-[2]" />
                      </div>
                      <h3 className="text-sm font-semibold text-[#111827] leading-snug">
                        {col.title}
                      </h3>
                    </div>

                    {/* Bullet Items */}
                    <ul className="space-y-3">
                      {col.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#4b5563] font-light leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#111827]/40 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
