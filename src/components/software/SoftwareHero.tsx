import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SoftwareHeroVisual from './SoftwareHeroVisual'

export default function SoftwareHero() {
  return (
    <section
      id="hero"
      aria-label="Software Overview Hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#faf9f5] via-[#fbfaf7] to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="mb-5">
              <span className="text-[11px] font-mono font-semibold tracking-[0.18em] uppercase text-[#64748b]">
                01 / SOFTWARE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-[40px] sm:text-[52px] md:text-[62px] lg:text-[68px] xl:text-[74px] font-semibold text-[#111827] leading-[1.08] tracking-[-0.03em] max-w-2xl mb-6">
              Building software,
              <br />
              products for the
              <br />
              <span className="italic font-normal text-[#111827]">intelligent</span> digital world.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-[18px] text-[#4b5563] font-light leading-relaxed max-w-xl mb-9">
              Vertex Loop Pvt Ltd designs and develops software products, web and mobile
              applications, SaaS, PaaS and cloud-based solutions, including systems that use AI,
              machine learning and automation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#181e28] text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#2c3545] hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore our capabilities</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#1a2333]/15 text-[#181e28] text-sm font-medium tracking-wide transition-all duration-200 hover:bg-gray-50 hover:border-[#1a2333]/30"
              >
                <span>Talk to us</span>
                <ArrowRight size={14} className="text-[#6b7280]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Layered Architecture System Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <SoftwareHeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
