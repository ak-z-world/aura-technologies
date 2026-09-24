import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Target,
  Award,
  ShieldCheck,
  LayoutDashboard,
  FileCheck,
  Compass,
  Sparkles,
} from 'lucide-react'

const ACADEMY_CAPABILITIES = [
  {
    title: 'Courses',
    subtitle: 'Digital courses',
    icon: BookOpen,
  },
  {
    title: 'Skill Development',
    subtitle: 'Practical skills',
    icon: Target,
  },
  {
    title: 'Training',
    subtitle: 'Structured learning',
    icon: Award,
  },
  {
    title: 'Certification',
    subtitle: 'Program-based recognition',
    icon: ShieldCheck,
  },
  {
    title: 'LMS',
    subtitle: 'Learning platforms',
    icon: LayoutDashboard,
  },
  {
    title: 'Assessment',
    subtitle: 'Evaluation tools',
    icon: FileCheck,
  },
  {
    title: 'Personalised Learning',
    subtitle: 'Adaptive learning',
    icon: Compass,
  },
  {
    title: 'AI-enabled Learning',
    subtitle: 'Technology-driven',
    icon: Sparkles,
  },
]

export default function AcademySection() {
  return (
    <section id="academy" className="py-20 md:py-28 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Academy Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3.2] w-full rounded-2xl overflow-hidden border border-[#1a2333]/8 shadow-[0_8px_30px_rgba(26,35,51,0.06)] bg-[#faf9f5]">
              <Image
                src="/images/academy-learning-hd.webp"
                alt="Vertex Loop CrackLeap Technology Education, Bootcamps, and Developer Upskilling"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy & Capability Grid */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              03 / ACADEMY
            </span>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-5">
              Learning built around
              <br />
              practical technology.
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm md:text-base text-[#4b5563] font-light leading-relaxed mb-8">
              Vertex Loop&apos;s education initiatives focus on digital learning, skill development,
              training, assessment and technology-enabled learning experiences.
            </p>

            {/* 2x4 Capability Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full mb-8">
              {ACADEMY_CAPABILITIES.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="p-3 rounded-xl bg-[#faf9f5] border border-[#1a2333]/6 hover:border-[#1a2333]/15 transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded-md bg-white border border-[#1a2333]/8 flex items-center justify-center text-[#4b5563] group-hover:text-[#9333ea] transition-colors flex-shrink-0">
                        <Icon size={12} />
                      </div>
                      <span className="text-xs font-semibold text-[#111827]">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#6b7280] font-normal pl-7">
                      {item.subtitle}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Initiative Callout & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 pt-2 border-t border-gray-100">
              <Link
                href="/academy"
                className="group inline-flex items-center gap-2 text-xs font-semibold text-[#111827] hover:text-[#9333ea] transition-colors"
              >
                <span>Explore Academy</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-[11px] text-[#9ca3af] font-mono">
                CrackLeap · Vertex Loop Education
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
