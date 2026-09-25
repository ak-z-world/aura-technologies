import { Box, Code2, Layers } from 'lucide-react'

const APPROACH_ITEMS = [
  {
    title: 'Concepts',
    desc: 'Clear explanations of core ideas.',
    icon: Box,
    iconColor: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    title: 'Practice',
    desc: 'Hands-on exercises and implementation.',
    icon: Code2,
    iconColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    title: 'Projects',
    desc: 'Apply learning through real development projects.',
    icon: Layers,
    iconColor: 'bg-purple-50 text-purple-600 border-purple-100',
  },
]

export default function AcademyApproach() {
  return (
    <section id="approach" className="py-20 md:py-24 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              LEARNING APPROACH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15] mb-5">
              Less passive learning.
              <br />
              More building.
            </h2>
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed max-w-md">
              CrackLeap focuses on learning through concepts, practice, implementation and projects
              so that learners can work with technology rather than only study it.
            </p>
          </div>

          {/* Right Column: 3 Approach Cards */}
          <div className="lg:col-span-7 space-y-4">
            {APPROACH_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#1a2333]/8 shadow-2xs flex items-start gap-4 transition-transform hover:-translate-y-0.5 duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${item.iconColor} border flex items-center justify-center shrink-0 mt-0.5 shadow-2xs`}
                  >
                    <Icon size={18} className="stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#111827] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6b7280] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
