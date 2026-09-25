import { Code2, Sparkles, BarChart2, GraduationCap } from 'lucide-react'

const CAPABILITY_COLUMNS = [
  {
    title: 'SOFTWARE',
    icon: Code2,
    items: [
      'Web Applications',
      'Mobile Applications',
      'SaaS',
      'PaaS',
      'Cloud',
      'APIs',
    ],
  },
  {
    title: 'AI & DATA',
    icon: Sparkles,
    items: [
      'Artificial Intelligence',
      'Machine Learning',
      'Generative AI',
      'LLMs',
      'NLP',
      'Computer Vision',
    ],
  },
  {
    title: 'MARKETING',
    icon: BarChart2,
    items: [
      'SEO',
      'SEM',
      'Content',
      'Social',
      'Performance',
      'Analytics',
      'Automation',
    ],
  },
  {
    title: 'EDUCATION',
    icon: GraduationCap,
    items: [
      'Digital Learning',
      'Courses',
      'Assessment',
      'Training',
      'Personalised Learning',
    ],
  },
]

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
            CAPABILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight">
            Capabilities across the digital stack.
          </h2>
        </div>

        {/* 4 Columns Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAPABILITY_COLUMNS.map((column) => {
            const Icon = column.icon
            return (
              <div
                key={column.title}
                className="bg-white rounded-2xl p-7 border border-[#1a2333]/8 shadow-[0_2px_8px_rgba(26,35,51,0.02)] flex flex-col items-start"
              >
                {/* Column Header with Icon */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 w-full">
                  <div className="w-8 h-8 rounded-lg bg-[#faf9f5] border border-[#1a2333]/6 flex items-center justify-center text-[#111827] flex-shrink-0">
                    <Icon size={15} />
                  </div>
                  <h3 className="text-xs font-mono font-bold tracking-[0.14em] uppercase text-[#111827]">
                    {column.title}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-2.5 w-full">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-sm text-[#4b5563] font-light hover:text-[#111827] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#9ca3af]" />
                      <span>{item}</span>
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
