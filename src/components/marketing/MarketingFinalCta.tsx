import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function MarketingFinalCta() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-3xl bg-[#f7f6f0] border border-[#1a2333]/8 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col items-start">
              <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-5 max-w-lg">
                Let&apos;s build a clearer
                <br />
                digital presence.
              </h2>
              <p className="text-sm sm:text-base text-[#4b5563] font-light leading-relaxed max-w-md mb-8">
                Talk to Vertex Loop about search, content, social media, performance marketing,
                analytics or digital marketing systems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#181e28] text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#2c3545] hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>Contact us</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/software"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#1a2333]/15 text-[#181e28] text-sm font-medium tracking-wide transition-all duration-200 hover:bg-gray-50 hover:border-[#1a2333]/30"
                >
                  <span>Explore Software</span>
                  <ArrowRight size={14} className="text-[#6b7280]" />
                </Link>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full min-h-[300px] lg:min-h-[380px] relative">
              <Image
                src="/images/marketing-cta-desk-hd.webp"
                alt="Ideas, Content, Campaigns, Growth notebook on desk"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
