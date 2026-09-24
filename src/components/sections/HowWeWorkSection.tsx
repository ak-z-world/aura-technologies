import { Search, PenTool, Layers, Settings } from 'lucide-react'

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'UNDERSTAND',
    description: 'Understand the problem, context and requirements.',
    icon: Search,
  },
  {
    step: '02',
    title: 'DESIGN',
    description: 'Design the product, system, learning experience or digital strategy.',
    icon: PenTool,
  },
  {
    step: '03',
    title: 'BUILD',
    description: 'Develop, integrate, test and refine the solution.',
    icon: Layers,
  },
  {
    step: '04',
    title: 'SUPPORT',
    description: 'Provide implementation, training, maintenance and ongoing support where required.',
    icon: Settings,
  },
]

export default function HowWeWorkSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
            HOW WE WORK
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight">
            From idea to implementation.
          </h2>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-7 border border-[#1a2333]/8 shadow-[0_2px_8px_rgba(26,35,51,0.02)] hover:shadow-[0_8px_24px_rgba(26,35,51,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-mono font-light text-[#9ca3af]">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#faf9f5] border border-[#1a2333]/6 flex items-center justify-center text-[#4b5563]">
                      <Icon size={14} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs font-mono font-bold tracking-[0.14em] uppercase text-[#111827] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
