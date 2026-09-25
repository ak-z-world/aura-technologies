import Link from 'next/link'
import {
  ArrowRight,
  GitBranch,
  Send,
  Sparkles,
  LayoutDashboard,
  Database,
  RefreshCw,
} from 'lucide-react'

const AUTOMATION_ITEMS = [
  {
    title: 'Workflow Automation',
    icon: GitBranch,
    iconBg: 'bg-blue-50/90 text-blue-600 border-blue-100',
  },
  {
    title: 'Marketing Automation',
    icon: Send,
    iconBg: 'bg-indigo-50/90 text-indigo-600 border-indigo-100',
  },
  {
    title: 'AI-enabled Tools',
    icon: Sparkles,
    iconBg: 'bg-purple-50/90 text-purple-600 border-purple-100',
  },
  {
    title: 'Dashboards',
    icon: LayoutDashboard,
    iconBg: 'bg-cyan-50/90 text-cyan-600 border-cyan-100',
  },
  {
    title: 'Data Integration',
    icon: Database,
    iconBg: 'bg-amber-50/90 text-amber-600 border-amber-100',
  },
  {
    title: 'Digital Workflows',
    icon: RefreshCw,
    iconBg: 'bg-emerald-50/90 text-emerald-600 border-emerald-100',
  },
]

export default function MarketingAutomation() {
  return (
    <section id="automation" className="py-20 md:py-24 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              05 / AUTOMATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15] mb-5">
              Turn repetitive marketing
              <br />
              activity into structured systems.
            </h2>
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed mb-7 max-w-md">
              Marketing automation can connect content, communication, workflows and data to
              support more consistent digital operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#111827] hover:text-[#2563eb] transition-colors group"
            >
              <span>Explore automation</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: 6 Automation Icon Badges */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-start">
            {AUTOMATION_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center group transition-transform hover:-translate-y-1 duration-200"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${item.iconBg} border flex items-center justify-center mb-3 shadow-xs`}
                  >
                    <Icon size={18} className="stroke-[1.75]" />
                  </div>
                  <span className="text-xs font-medium text-[#111827] leading-snug max-w-[90px]">
                    {item.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
