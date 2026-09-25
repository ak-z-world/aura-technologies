import { Layout, Layers, Sparkles, Cog, Code2 } from 'lucide-react'

const STACK_COLUMNS = [
  {
    title: 'Applications',
    icon: Layout,
    items: [
      'Web Applications',
      'Mobile Applications',
      'User-facing Software',
      'Digital Platforms',
    ],
  },
  {
    title: 'Platforms',
    icon: Layers,
    items: [
      'SaaS',
      'PaaS',
      'Cloud Platforms',
      'Technology Systems',
    ],
  },
  {
    title: 'Intelligence',
    icon: Sparkles,
    items: [
      'AI',
      'Machine Learning',
      'Generative AI',
      'LLMs',
      'NLP',
      'Computer Vision',
    ],
  },
  {
    title: 'Automation',
    icon: Cog,
    items: [
      'Workflow Automation',
      'Intelligent Automation',
      'AI-enabled Processes',
    ],
  },
  {
    title: 'Engineering',
    icon: Code2,
    items: [
      'Software Development',
      'System Integration',
      'Technical Implementation',
      'Maintenance & Support',
    ],
  },
]

export default function SoftwareCapabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              CAPABILITIES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight">
              Technology across the software stack.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-sm md:text-base text-[#4b5563] font-light leading-relaxed">
              We work across the full software stack to design, develop, integrate and maintain
              technology products and systems.
            </p>
          </div>
        </div>

        {/* 6-Column Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 lg:divide-x divide-gray-200">
          {STACK_COLUMNS.map((col, index) => {
            const Icon = col.icon
            return (
              <div
                key={col.title}
                className={`flex flex-col items-start ${
                  index > 0 ? 'lg:pl-5' : ''
                } ${index < STACK_COLUMNS.length - 1 ? 'lg:pr-3' : ''}`}
              >
                {/* Column header with icon */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200/80 w-full">
                  <div className="w-6 h-6 rounded-md bg-white border border-[#1a2333]/8 flex items-center justify-center text-[#111827] flex-shrink-0">
                    <Icon size={13} />
                  </div>
                  <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-[#111827]">
                    {col.title}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-2 w-full">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-[#4b5563] font-light leading-snug hover:text-[#111827] transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
