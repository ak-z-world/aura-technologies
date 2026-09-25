import { Laptop, Users, Layers, User, UserCheck, Sparkles, Building } from 'lucide-react'

const FORMATS = [
  {
    title: 'Online',
    desc: 'Digital learning and virtual instruction.',
    icon: Laptop,
  },
  {
    title: 'Offline',
    desc: 'Instructor-led learning environments.',
    icon: Users,
  },
  {
    title: 'Hybrid',
    desc: 'A combination of digital and in-person learning.',
    icon: Layers,
  },
]

const AUDIENCES = [
  {
    title: 'Beginner',
    desc: 'For learners building foundational knowledge.',
    icon: User,
  },
  {
    title: 'Intermediate',
    desc: 'For learners looking to strengthen practical skills.',
    icon: UserCheck,
  },
  {
    title: 'Advanced',
    desc: 'For learners working with more specialised concepts.',
    icon: Sparkles,
  },
  {
    title: 'Professional / Team',
    desc: 'For focused learning around specific requirements.',
    icon: Building,
  },
]

export default function AcademyFormatsAndAudience() {
  return (
    <section id="formats-audience" className="py-20 md:py-24 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: LEARNING FORMATS */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pr-6">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
                LEARNING FORMATS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-4">
                Learning that can
                <br />
                adapt to different needs.
              </h2>
              <p className="text-sm text-[#4b5563] font-light leading-relaxed mb-8 max-w-lg">
                CrackLeap can support digital, offline and hybrid learning formats, including
                courses, training, virtual classrooms and technology-enabled learning experiences.
              </p>
            </div>

            {/* 3 Format Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {FORMATS.map((format) => {
                const Icon = format.icon
                return (
                  <div
                    key={format.title}
                    className="bg-white rounded-xl p-5 border border-[#1a2333]/8 shadow-2xs flex flex-col justify-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-3">
                      <Icon size={16} className="stroke-[1.75]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">
                      {format.title}
                    </h3>
                    <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                      {format.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: WHO IT'S FOR */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pl-6 lg:border-l border-gray-200">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
                WHO IT&apos;S FOR
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-4">
                Learning for different
                <br />
                starting points.
              </h2>
              <p className="text-sm text-[#4b5563] font-light leading-relaxed mb-8 max-w-lg">
                Our learning programs can be suitable for learners at different stages of their
                technology journey.
              </p>
            </div>

            {/* 4 Audience Cards 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AUDIENCES.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl p-5 border border-[#1a2333]/8 shadow-2xs flex flex-col justify-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#faf9f5] border border-[#1a2333]/8 flex items-center justify-center text-[#111827] mb-3">
                      <Icon size={16} className="stroke-[1.75]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                      {item.desc}
                    </p>
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
