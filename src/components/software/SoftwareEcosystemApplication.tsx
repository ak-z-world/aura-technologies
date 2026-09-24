import {
  Box,
  Layers,
  Wrench,
  Sliders,
  Building2,
  Landmark,
  ShieldCheck,
  Users,
} from 'lucide-react'

const ECOSYSTEM_ITEMS = [
  {
    title: 'Products',
    description: 'Proprietary software products designed around specific problems and use cases.',
    icon: Box,
  },
  {
    title: 'Platforms',
    description: 'Technology platforms that bring applications, data and workflows together.',
    icon: Layers,
  },
  {
    title: 'Tools',
    description: 'Focused software tools designed to support specific tasks or processes.',
    icon: Wrench,
  },
  {
    title: 'Systems',
    description: 'Integrated software systems connecting applications, data and technology.',
    icon: Sliders,
  },
]

const APPLICATION_USERS = [
  {
    title: 'Businesses',
    description: 'Software and technology solutions for business workflows and digital operations.',
    icon: Building2,
  },
  {
    title: 'Institutions',
    description: 'Technology systems and applications for institutional requirements.',
    icon: Landmark,
  },
  {
    title: 'Government Bodies',
    description: 'Software and technology solutions for applicable digital requirements.',
    icon: ShieldCheck,
  },
  {
    title: 'Individual Users',
    description: 'Consumer-oriented applications and digital products.',
    icon: Users,
  },
]

export default function SoftwareEcosystemApplication() {
  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {/* Left Column: Product Ecosystem */}
          <div className="lg:col-span-6 lg:pr-8">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              PRODUCT ECOSYSTEM
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-8">
              Software can take many forms.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ECOSYSTEM_ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-[#faf9f5] border border-[#1a2333]/6 hover:border-[#1a2333]/15 transition-all flex flex-col justify-between min-h-[160px]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#1a2333]/8 flex items-center justify-center text-[#111827] mb-3">
                      <Icon size={14} />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-[#111827] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#4b5563] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Application */}
          <div className="lg:col-span-6 pt-12 lg:pt-0 lg:pl-12">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              APPLICATION
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-8">
              Technology for different
              <br />
              kinds of users.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {APPLICATION_USERS.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-[#faf9f5] border border-[#1a2333]/6 hover:border-[#1a2333]/15 transition-all flex flex-col justify-between min-h-[160px]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#1a2333]/8 flex items-center justify-center text-[#111827] mb-3">
                      <Icon size={14} />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-[#111827] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#4b5563] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
