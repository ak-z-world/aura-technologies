import { ArrowRight } from 'lucide-react'

const STRUCTURE_STEPS = [
  {
    step: '01',
    title: 'Foundations',
    description: 'Build the core concepts and understanding.',
  },
  {
    step: '02',
    title: 'Practice',
    description: 'Work through guided exercises and examples.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Apply knowledge through practical projects.',
  },
  {
    step: '04',
    title: 'Demonstrate',
    description:
      'Bring the learning together through a completed project or practical outcome.',
  },
]

export default function AcademyLearningStructure() {
  return (
    <section id="structure" className="py-20 md:py-24 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              LEARNING STRUCTURE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15]">
              From fundamentals
              <br />
              to applied projects.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed max-w-lg">
              Our learning structure is designed to take learners from core concepts to practical
              projects with continuous practice and feedback.
            </p>
          </div>
        </div>

        {/* 4-Step Process Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {STRUCTURE_STEPS.map((item, idx) => (
            <div key={item.step} className="relative flex flex-col items-start">
              {/* Step Number & Connector Line (Desktop) */}
              <div className="flex items-center gap-3 w-full mb-4">
                <div className="w-10 h-10 rounded-full bg-[#faf9f5] border border-[#1a2333]/15 flex items-center justify-center text-xs font-mono font-bold text-[#111827] shrink-0 shadow-2xs">
                  {item.step}
                </div>
                {idx < STRUCTURE_STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center flex-1 pr-2">
                    <div className="h-[1px] bg-gray-200 flex-1" />
                    <ArrowRight size={12} className="text-gray-400 shrink-0 ml-1" />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold text-[#111827] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#6b7280] font-light leading-relaxed max-w-[240px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
