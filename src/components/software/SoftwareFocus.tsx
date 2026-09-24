import { Droplet, Layers, RefreshCw } from 'lucide-react'

const FOCUS_PRINCIPLES = [
  {
    step: '01',
    title: 'Purpose',
    description: 'Software begins with a clear problem, requirement or opportunity.',
    icon: Droplet,
  },
  {
    step: '02',
    title: 'System',
    description: 'Products are built through thoughtful architecture, technology and integration.',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Evolution',
    description: 'Software can be maintained, improved and extended as requirements change.',
    icon: RefreshCw,
  },
]

export default function SoftwareFocus() {
  return (
    <section id="focus" className="py-20 md:py-24 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              OUR FOCUS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight">
              Software is more
              <br />
              than an interface.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-sm md:text-base text-[#4b5563] font-light leading-relaxed">
              We approach software as a product — something designed around a problem, developed as
              a system, and continuously improved as technology and requirements evolve.
            </p>
          </div>
        </div>

        {/* 3 Principles with Vertical Separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-gray-200">
          {FOCUS_PRINCIPLES.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`flex flex-col items-start ${
                  index > 0 ? 'md:pl-10' : ''
                } ${index < 2 ? 'md:pr-10' : ''}`}
              >
                {/* Number & Icon badge */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs font-mono font-semibold text-[#9ca3af]">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#faf9f5] border border-[#1a2333]/8 flex items-center justify-center text-[#111827]">
                    <Icon size={14} className="stroke-[1.75]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-[#111827] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
