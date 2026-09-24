import { Search, PenTool, Code2, CheckCircle2, Rocket, RefreshCw } from 'lucide-react'

const BUILD_STEPS = [
  {
    step: '01',
    title: 'Understand',
    description: 'Define the problem, users, requirements and intended outcome.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Design',
    description: 'Shape the product experience, system architecture and technical direction.',
    icon: PenTool,
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Build the software, integrations and intelligent capabilities.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Test',
    description: 'Validate functionality, reliability and intended behaviour.',
    icon: CheckCircle2,
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Prepare the product or system for its intended environment.',
    icon: Rocket,
  },
  {
    step: '06',
    title: 'Evolve',
    description: 'Maintain, improve and extend the software as requirements develop.',
    icon: RefreshCw,
  },
]

export default function SoftwareHowWeBuild() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
            HOW WE BUILD
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight">
            From problem to product.
          </h2>
        </div>

        {/* 6 Steps Grid (Horizontal on Desktop / Vertical Timeline on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {BUILD_STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="relative bg-[#faf9f5] rounded-2xl p-5 border border-[#1a2333]/6 hover:border-[#1a2333]/15 transition-all flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#9ca3af]">
                      {step.step}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#1a2333]/8 flex items-center justify-center text-[#111827]">
                      <Icon size={13} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-[#111827] mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#4b5563] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow for desktop between steps */}
                {index < BUILD_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 text-gray-300 z-10 text-xs font-mono">
                    →
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
