import {
  Search,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Cpu,
  Building2,
  Landmark,
  Shield,
  ShoppingBag,
} from 'lucide-react'

const ECOSYSTEM_SATELLITES = [
  { label: 'Search', icon: Search, color: 'text-blue-600 bg-blue-50 border-blue-200', x: '50%', y: '12%' },
  { label: 'Content', icon: FileText, color: 'text-amber-600 bg-amber-50 border-amber-200', x: '85%', y: '28%' },
  { label: 'Performance', icon: TrendingUp, color: 'text-rose-600 bg-rose-50 border-rose-200', x: '85%', y: '72%' },
  { label: 'Automation', icon: Cpu, color: 'text-cyan-600 bg-cyan-50 border-cyan-200', x: '50%', y: '88%' },
  { label: 'Data', icon: Clock, color: 'text-indigo-600 bg-indigo-50 border-indigo-200', x: '15%', y: '72%' },
  { label: 'Social', icon: Users, color: 'text-purple-600 bg-purple-50 border-purple-200', x: '15%', y: '28%' },
]

const APPLICATION_CATEGORIES = [
  {
    title: 'Businesses',
    desc: 'Business operations and digital workflows.',
    icon: Building2,
  },
  {
    title: 'Institutions',
    desc: 'Institutional communication and digital requirements.',
    icon: Landmark,
  },
  {
    title: 'Government Bodies',
    desc: 'Applicable digital communication requirements.',
    icon: Shield,
  },
  {
    title: 'Individual / Consumer Brands',
    desc: 'Consumer-oriented applications and products.',
    icon: ShoppingBag,
  },
]

export default function MarketingEcosystemApplication() {
  return (
    <section id="ecosystem-application" className="py-20 md:py-24 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: MARKETING ECOSYSTEM */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pr-6">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
                MARKETING ECOSYSTEM
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-4">
                A connected marketing ecosystem.
              </h2>
              <p className="text-sm text-[#4b5563] font-light leading-relaxed mb-8 max-w-lg">
                Search, content, social, performance, data and automation work together to support
                a structured digital presence.
              </p>
            </div>

            {/* Ecosystem SVG / Node Diagram */}
            <div className="relative w-full max-w-[420px] mx-auto aspect-square rounded-2xl bg-[#faf9f5] border border-[#1a2333]/8 p-4 flex items-center justify-center">
              {/* Connector lines SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
              >
                {/* Orbit Circles */}
                <circle cx="200" cy="200" r="140" stroke="#111827" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="90" stroke="#111827" strokeOpacity="0.06" strokeWidth="1" />
                {/* Spoke Lines from Center (200, 200) */}
                <line x1="200" y1="200" x2="200" y2="60" stroke="#111827" strokeOpacity="0.12" strokeWidth="1" />
                <line x1="200" y1="200" x2="330" y2="120" stroke="#111827" strokeOpacity="0.12" strokeWidth="1" />
                <line x1="200" y1="200" x2="330" y2="280" stroke="#111827" strokeOpacity="0.12" strokeWidth="1" />
                <line x1="200" y1="200" x2="200" y2="340" stroke="#111827" strokeOpacity="0.12" strokeWidth="1" />
                <line x1="200" y1="200" x2="70" y2="280" stroke="#111827" strokeOpacity="0.12" strokeWidth="1" />
                <line x1="200" y1="200" x2="70" y2="120" stroke="#111827" strokeOpacity="0.12" strokeWidth="1" />
              </svg>

              {/* Central BRAND node */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-white border border-[#1a2333]/15 shadow-sm flex flex-col items-center justify-center">
                <span className="text-xs font-semibold tracking-wider text-[#111827] uppercase font-mono">
                  Brand
                </span>
              </div>

              {/* Satellite Orbit Nodes */}
              {ECOSYSTEM_SATELLITES.map((node) => {
                const Icon = node.icon
                return (
                  <div
                    key={node.label}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-default"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div
                      className={`w-9 h-9 rounded-full ${node.color} border flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 duration-200`}
                    >
                      <Icon size={14} className="stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-medium text-[#111827] mt-1 bg-white/90 px-1.5 py-0.5 rounded shadow-xs border border-[#1a2333]/5">
                      {node.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: APPLICATION */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pl-6 lg:border-l border-gray-200">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
                APPLICATION
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-4">
                Digital marketing across
                <br />
                different contexts.
              </h2>
              <p className="text-sm text-[#4b5563] font-light leading-relaxed mb-8 max-w-lg">
                Our digital marketing capabilities can be applied across businesses, institutions,
                government bodies and consumer-focused products and services.
              </p>
            </div>

            {/* 4 Application Categories 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {APPLICATION_CATEGORIES.map((cat) => {
                const Icon = cat.icon
                return (
                  <div
                    key={cat.title}
                    className="bg-[#faf9f5] rounded-xl p-5 border border-[#1a2333]/6 flex flex-col justify-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#1a2333]/8 flex items-center justify-center text-[#111827] mb-3">
                      <Icon size={16} className="stroke-[1.75]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
