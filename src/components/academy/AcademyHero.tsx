import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AcademyHero() {
  return (
    <section
      id="hero"
      aria-label="CrackLeap Technology Academy Hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#faf9f5] via-[#fbfaf7] to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Academy Identity, Headline & Action */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* CrackLeap Brand Lockup */}
            <div className="flex items-center gap-3.5 mb-8">
              {/* CrackLeap Icon Mark */}
              <div className="w-10 h-10 rounded-xl bg-[#181e28] flex items-center justify-center p-2 shadow-sm shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <circle cx="12" cy="12" r="9" stroke="#c084fc" strokeWidth="2.5" strokeDasharray="40 15" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="5" fill="#e879f9" />
                  <path d="M12 7L16 12L12 17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#111827] uppercase font-mono leading-none">
                  CRACKLEAP
                </span>
                <span className="text-[11px] sm:text-xs text-[#6b7280] font-light mt-1">
                  An education initiative by Vertex Loop Pvt Ltd
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-[40px] sm:text-[52px] md:text-[60px] lg:text-[66px] font-semibold text-[#111827] leading-[1.08] tracking-[-0.03em] max-w-xl mb-6">
              Learn technology
              <br />
              <span className="font-normal italic text-[#6b7280]">by </span>
              building <span className="italic font-normal text-[#8b5cf6]">real skills.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-[18px] text-[#4b5563] font-light leading-relaxed max-w-lg mb-9">
              CrackLeap is a technology training initiative focused on practical software
              development, AI, and modern digital skills.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#181e28] text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#2c3545] hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore Courses</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="#structure"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#1a2333]/15 text-[#181e28] text-sm font-medium tracking-wide transition-all duration-200 hover:bg-gray-50 hover:border-[#1a2333]/30"
              >
                <span>How We Teach</span>
                <ArrowRight size={14} className="text-[#6b7280]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual with Photography & Learning Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#1a2333]/8 bg-white shadow-sm aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/11]">
              <Image
                src="/images/academy-learning-hd.webp"
                alt="CrackLeap Technology Learning Environment with Laptop and Core Engineering Domains"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
