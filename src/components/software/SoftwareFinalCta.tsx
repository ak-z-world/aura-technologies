import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function SoftwareFinalCta() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-3xl overflow-hidden bg-[#f4efe8] border border-[#e8e2d8] shadow-[0_8px_30px_rgba(26,35,51,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: CTA Editorial Copy & Actions */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col items-start">
              <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
                LET&apos;S BUILD
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-4">
                Have a product idea
                <br />
                or a software problem to solve?
              </h2>

              <p className="text-sm md:text-base text-[#4b5563] font-light leading-relaxed max-w-lg mb-8">
                Talk to Vertex Loop about software products, applications, platforms, AI-enabled
                systems or technology development.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#181e28] text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#2c3545] hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>Contact us</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#1a2333]/15 text-[#181e28] text-sm font-medium tracking-wide transition-all duration-200 hover:bg-gray-50"
                >
                  <span>Explore Vertex Loop</span>
                  <ArrowRight size={14} className="text-[#6b7280]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Office Image / Architectural Banner */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[260px] lg:min-h-[360px]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/cta-office-hd.webp"
                  alt="Vertex Loop Pvt Ltd Software Design and Engineering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f4efe8] via-transparent to-transparent lg:block hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
