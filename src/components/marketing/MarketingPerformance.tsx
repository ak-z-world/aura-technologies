import Link from 'next/link'
import { ArrowRight, TrendingUp, Cpu, Link as LinkIcon, ArrowDown } from 'lucide-react'

const PERFORMANCE_COLUMNS = [
  {
    title: 'Performance Marketing',
    icon: TrendingUp,
    iconBg: 'bg-rose-50/90 text-rose-600 border-rose-100',
    items: [
      'Campaign planning',
      'Digital acquisition',
      'Performance monitoring',
    ],
  },
  {
    title: 'Programmatic Advertising',
    icon: Cpu,
    iconBg: 'bg-blue-50/90 text-blue-600 border-blue-100',
    items: [
      'Digital advertising',
      'Audience-oriented campaign execution',
    ],
  },
  {
    title: 'Affiliate Marketing',
    icon: LinkIcon,
    iconBg: 'bg-amber-50/90 text-amber-600 border-amber-100',
    items: [
      'Affiliate-based promotion',
      'Partner-oriented acquisition',
    ],
  },
]

const FLOW_STEPS = [
  'Campaign',
  'Audience',
  'Action',
  'Data',
  'Analysis',
]

export default function MarketingPerformance() {
  return (
    <section id="performance" className="py-20 md:py-24 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              03 / PERFORMANCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15] mb-5">
              Measure activity.
              <br />
              Understand performance.
            </h2>
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed mb-7 max-w-sm">
              Performance marketing connects campaigns with measurable digital activity and provides
              a framework for evaluating what is happening across channels.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#111827] hover:text-[#2563eb] transition-colors group"
            >
              <span>Explore performance</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Middle Column: 3 Capabilities */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {PERFORMANCE_COLUMNS.map((col) => {
              const Icon = col.icon
              return (
                <div
                  key={col.title}
                  className="bg-[#faf9f5] rounded-xl p-5 border border-[#1a2333]/6 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-7 h-7 rounded-md ${col.iconBg} border flex items-center justify-center shrink-0`}
                    >
                      <Icon size={14} className="stroke-[2]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#111827]">
                      {col.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5 pl-10">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-[#6b7280] font-light list-disc leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Right Column: Conceptual Flow Diagram Card */}
          <div className="lg:col-span-3">
            <div className="bg-[#f7f6f0] rounded-2xl p-7 sm:p-8 border border-[#1a2333]/8 shadow-sm">
              <div className="relative flex flex-col space-y-5">
                {FLOW_STEPS.map((step, idx) => (
                  <div key={step} className="relative flex items-center gap-3.5">
                    {/* Node Dot / Line */}
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#111827]" />
                      {idx < FLOW_STEPS.length - 1 && (
                        <div className="w-[1px] h-5 bg-[#111827]/20 my-1" />
                      )}
                    </div>
                    {/* Step Name */}
                    <span className="text-xs font-semibold tracking-wide text-[#111827] uppercase font-mono">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
