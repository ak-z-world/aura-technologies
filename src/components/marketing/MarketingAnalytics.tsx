import Link from 'next/link'
import { ArrowRight, Eye, Users, MousePointer, BarChart2 } from 'lucide-react'

const ANALYTICS_STAGES = [
  {
    title: 'Visibility',
    subtitle: 'Understand reach and visibility',
    icon: Eye,
    iconBg: 'bg-blue-50/90 text-blue-600 border-blue-100',
  },
  {
    title: 'Engagement',
    subtitle: 'Observe user engagement',
    icon: Users,
    iconBg: 'bg-amber-50/90 text-amber-600 border-amber-100',
  },
  {
    title: 'Activity',
    subtitle: 'Track digital activity',
    icon: MousePointer,
    iconBg: 'bg-indigo-50/90 text-indigo-600 border-indigo-100',
  },
  {
    title: 'Conversion',
    subtitle: 'Analyse meaningful actions',
    icon: BarChart2,
    iconBg: 'bg-purple-50/90 text-purple-600 border-purple-100',
  },
]

export default function MarketingAnalytics() {
  return (
    <section id="analytics" className="py-20 md:py-24 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              04 / ANALYTICS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15] mb-5">
              Marketing decisions
              <br />
              need context.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start lg:pt-8">
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed mb-6 max-w-xl">
              Web and app analytics provide visibility into digital activity, user behaviour and
              campaign performance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#111827] hover:text-[#2563eb] transition-colors group"
            >
              <span>Explore analytics</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 5-Stage Process Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
          {ANALYTICS_STAGES.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <div key={stage.title} className="relative flex flex-col items-center text-center">
                {/* Stage Icon Node */}
                <div
                  className={`w-12 h-12 rounded-full ${stage.iconBg} border flex items-center justify-center mb-4 shadow-sm`}
                >
                  <Icon size={18} className="stroke-[1.75]" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-[#111827] mb-1.5 tracking-tight">
                  {stage.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-[#6b7280] font-light max-w-[170px] leading-relaxed">
                  {stage.subtitle}
                </p>

                {/* Connector Arrow (Desktop only, between stages) */}
                {idx < ANALYTICS_STAGES.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-5 text-[#9ca3af] items-center pointer-events-none">
                    <ArrowRight size={14} className="stroke-[1.5]" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
