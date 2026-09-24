import { Globe, Smartphone, Cloud, Layers, Database, Box } from 'lucide-react'

const PRODUCTS = [
  {
    step: '01',
    title: 'Web Applications',
    description: 'Web-based software designed around specific workflows and user needs.',
    icon: Globe,
  },
  {
    step: '02',
    title: 'Mobile Applications',
    description: 'Mobile applications designed to provide accessible digital experiences.',
    icon: Smartphone,
  },
  {
    step: '03',
    title: 'SaaS',
    description: 'Software delivered as a service, supporting scalable workflows and applications.',
    icon: Cloud,
  },
  {
    step: '04',
    title: 'PaaS',
    description: 'Platform-oriented environments for application development and delivery.',
    icon: Layers,
  },
  {
    step: '05',
    title: 'Cloud Solutions',
    description: 'Cloud-based applications and systems designed around modern digital infrastructure.',
    icon: Database,
  },
  {
    step: '06',
    title: 'Software Products',
    description: 'Proprietary software products, tools and platforms developed for practical use cases.',
    icon: Box,
  },
]

export default function SoftwareProductsGrid() {
  return (
    <section id="products" className="py-20 md:py-28 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              SOFTWARE PRODUCTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight">
              From applications to platforms.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-sm md:text-base text-[#4b5563] font-light leading-relaxed">
              Our software scope spans applications, platforms and cloud-based systems designed for
              business, institutional and consumer use.
            </p>
          </div>
        </div>

        {/* 6-Column Grid on Desktop, 3 on Tablet, 1-2 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {PRODUCTS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 border border-[#1a2333]/8 shadow-[0_2px_8px_rgba(26,35,51,0.02)] hover:shadow-[0_8px_24px_rgba(26,35,51,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  {/* Top: Icon container */}
                  <div className="w-9 h-9 rounded-xl bg-[#faf9f5] border border-[#1a2333]/6 flex items-center justify-center text-[#111827] mb-6">
                    <Icon size={16} />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-[#111827] mb-2 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#4b5563] font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Step indicator */}
                <span className="text-[10px] font-mono text-[#9ca3af] pt-4 block border-t border-gray-100">
                  SCOPE {card.step}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
