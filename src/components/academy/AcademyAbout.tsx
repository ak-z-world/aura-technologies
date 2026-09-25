import { BookOpen, Code2, BarChart2 } from 'lucide-react'

const ABOUT_PRINCIPLES = [
  {
    step: '01. LEARN',
    desc: 'Understand the concepts and foundations behind the technology.',
    icon: BookOpen,
  },
  {
    step: '02. BUILD',
    desc: 'Apply the concepts through exercises and projects.',
    icon: Code2,
  },
  {
    step: '03. DEVELOP',
    desc: 'Build practical technical capability through continued learning and practice.',
    icon: BarChart2,
  },
]

export default function AcademyAbout() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              ABOUT CRACKLEAP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15] mb-5">
              Technology education
              <br />
              with a practical focus.
            </h2>
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed max-w-md">
              CrackLeap is an education initiative by Vertex Loop Pvt Ltd focused on skill
              development, digital learning, technical training and practical technology
              education.
            </p>
          </div>

          {/* Right Column: 3 Educational Principles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 sm:divide-x divide-gray-100">
            {ABOUT_PRINCIPLES.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className={`flex flex-col items-start ${idx > 0 ? 'sm:pl-6' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#faf9f5] border border-[#1a2333]/8 flex items-center justify-center text-[#111827] mb-4 shadow-xs">
                    <Icon size={18} className="stroke-[1.75]" />
                  </div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-[#111827] uppercase mb-2">
                    {item.step}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#6b7280] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
