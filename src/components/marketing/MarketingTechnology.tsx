import {
  TrendingUp,
  Code2,
  Database,
  Sparkles,
  Cpu,
} from 'lucide-react'

const EQUATION_NODES = [
  {
    name: 'Marketing',
    icon: TrendingUp,
    color: 'bg-rose-50 text-rose-600 border-rose-200',
  },
  {
    name: 'Software',
    icon: Code2,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
  },
  {
    name: 'Data',
    icon: Database,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
  },
  {
    name: 'AI',
    icon: Sparkles,
    color: 'bg-purple-50 text-purple-600 border-purple-200',
  },
  {
    name: 'Digital Systems',
    icon: Cpu,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    isResult: true,
  },
]

export default function MarketingTechnology() {
  return (
    <section id="technology" className="py-20 md:py-24 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              MARKETING + TECHNOLOGY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-4">
              Marketing supported
              <br />
              by technology.
            </h2>
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed max-w-md">
              Vertex Loop combines digital marketing capabilities with software, AI, data and
              automation expertise, creating room for technology-enabled marketing tools and
              workflows.
            </p>
          </div>

          {/* Right Column: Visual Equation */}
          <div className="lg:col-span-7 flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4 md:gap-5">
            {/* Node 1: Marketing */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shadow-xs">
                <TrendingUp size={18} className="stroke-[2]" />
              </div>
              <span className="text-xs font-medium text-[#111827] mt-2">Marketing</span>
            </div>

            <span className="text-lg font-light text-[#9ca3af] self-center mb-5">+</span>

            {/* Node 2: Software */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-xs">
                <Code2 size={18} className="stroke-[2]" />
              </div>
              <span className="text-xs font-medium text-[#111827] mt-2">Software</span>
            </div>

            <span className="text-lg font-light text-[#9ca3af] self-center mb-5">+</span>

            {/* Node 3: Data */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shadow-xs">
                <Database size={18} className="stroke-[2]" />
              </div>
              <span className="text-xs font-medium text-[#111827] mt-2">Data</span>
            </div>

            <span className="text-lg font-light text-[#9ca3af] self-center mb-5">+</span>

            {/* Node 4: AI */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shadow-xs">
                <Sparkles size={18} className="stroke-[2]" />
              </div>
              <span className="text-xs font-medium text-[#111827] mt-2">AI</span>
            </div>

            <span className="text-lg font-light text-[#9ca3af] self-center mb-5">=</span>

            {/* Node 5: Digital Systems */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shadow-xs">
                <Cpu size={18} className="stroke-[2]" />
              </div>
              <span className="text-xs font-medium text-[#111827] mt-2 font-semibold">
                Digital Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
