import Link from 'next/link'
import { ArrowRight, Code2, Layers, Cloud, Sparkles, Database } from 'lucide-react'

const LEARNING_AREAS = [
  {
    title: 'Python & Django',
    description:
      'Python, web development, APIs, backend development and application development.',
    icon: Code2,
    iconColor: 'text-amber-600 bg-amber-50/80 border-amber-200',
    href: '/contact?subject=Python%20and%20Django',
  },
  {
    title: 'React & Next.js',
    description:
      'Modern frontend development, application interfaces and web application development.',
    icon: Layers,
    iconColor: 'text-cyan-600 bg-cyan-50/80 border-cyan-200',
    href: '/contact?subject=React%20and%20Nextjs',
  },
  {
    title: 'AWS & DevOps',
    description:
      'Cloud fundamentals, AWS concepts, CI/CD, DevOps practices and infrastructure concepts.',
    icon: Cloud,
    iconColor: 'text-blue-600 bg-blue-50/80 border-blue-200',
    href: '/contact?subject=AWS%20and%20DevOps',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Artificial intelligence, machine learning, generative AI and practical AI development.',
    icon: Sparkles,
    iconColor: 'text-purple-600 bg-purple-50/80 border-purple-200',
    href: '/contact?subject=AI%20and%20Machine%20Learning',
  },
]

export default function AcademyLearningAreas() {
  return (
    <section id="courses" className="py-20 md:py-24 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              LEARNING AREAS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15]">
              Learn the technologies
              <br />
              behind modern software.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:pt-8">
            <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed mb-4 max-w-lg">
              Our learning areas cover core technology domains that power modern software, AI and
              digital systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#111827] hover:text-[#8b5cf6] transition-colors group"
            >
              <span>Explore all courses</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 5 Cards Grid (Responsive: 1 col on mobile, 2-3 on tablet, 5 on wide screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {LEARNING_AREAS.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="bg-white rounded-2xl p-6 border border-[#1a2333]/8 shadow-xs flex flex-col justify-between group hover:border-[#8b5cf6]/40 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  {/* Icon Badge */}
                  <div
                    className={`w-10 h-10 rounded-xl ${area.iconColor} border flex items-center justify-center mb-5 shadow-2xs`}
                  >
                    <Icon size={18} className="stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15px] font-semibold text-[#111827] mb-2 leading-snug">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#6b7280] font-light leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                {/* Bottom Link Arrow */}
                <Link
                  href={area.href}
                  className="inline-flex items-center text-xs font-medium text-[#111827] group-hover:text-[#8b5cf6] transition-colors"
                  aria-label={`Inquire about ${area.title}`}
                >
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
