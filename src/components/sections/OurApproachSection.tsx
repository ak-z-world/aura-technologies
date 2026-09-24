import { Box, Target, Users } from 'lucide-react'

const APPROACH_PILLARS = [
  {
    title: 'PRODUCT THINKING',
    description:
      'We approach software as products that need to be designed, built, maintained and improved.',
    icon: Box,
  },
  {
    title: 'PRACTICAL TECHNOLOGY',
    description:
      'We work across software, AI, data, automation and digital systems with an emphasis on practical application.',
    icon: Target,
  },
  {
    title: 'CONTINUOUS CAPABILITY',
    description:
      'Through education and training initiatives, we also focus on developing technical skills and learning experiences.',
    icon: Users,
  },
]

export default function OurApproachSection() {
  return (
    <section id="approach" className="py-20 md:py-28 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
            OUR APPROACH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight">
            Technology, growth and learning —
            <br className="hidden sm:inline" />
            {' '}connected by one company.
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {APPROACH_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className={`flex flex-col items-start ${
                  index > 0 ? 'pt-8 md:pt-0 md:pl-8' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#faf9f5] border border-[#1a2333]/8 flex items-center justify-center text-[#111827] mb-6 shadow-sm">
                  <Icon size={18} />
                </div>
                <h3 className="text-xs font-mono font-bold tracking-[0.14em] uppercase text-[#111827] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#4b5563] font-light leading-relaxed">
                  &ldquo;{pillar.description}&rdquo;
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
