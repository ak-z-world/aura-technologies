import { Box, BarChart2, GraduationCap } from 'lucide-react'

export default function SoftwareCrossDomain() {
  return (
    <section className="py-20 md:py-24 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Editorial Copy */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-4">
              Software does not exist in isolation.
            </h2>
            <p className="text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed max-w-xl">
              Vertex Loop operates across software, digital marketing and education. Technology can
              support the products we build, the digital growth systems we develop, and the learning
              experiences we create.
            </p>
          </div>

          {/* Right Column: 3 Intersecting/Pill Circles */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="flex items-center -space-x-4 select-none">
              {/* Software Circle */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/90 border border-[#1a2333]/10 shadow-[0_4px_16px_rgba(26,35,51,0.04)] flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 hover:z-10 bg-gradient-to-b from-white to-amber-50/30">
                <Box size={18} className="text-[#d97706] mb-1.5" />
                <span className="text-[11px] font-semibold text-[#111827]">Software</span>
              </div>

              {/* Marketing Circle */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/90 border border-[#1a2333]/10 shadow-[0_4px_16px_rgba(26,35,51,0.04)] flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 hover:z-10 bg-gradient-to-b from-white to-sky-50/30">
                <BarChart2 size={18} className="text-[#0284c7] mb-1.5" />
                <span className="text-[11px] font-semibold text-[#111827]">Marketing</span>
              </div>

              {/* Academy Circle */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/90 border border-[#1a2333]/10 shadow-[0_4px_16px_rgba(26,35,51,0.04)] flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 hover:z-10 bg-gradient-to-b from-white to-purple-50/30">
                <GraduationCap size={18} className="text-[#7c3aed] mb-1.5" />
                <span className="text-[11px] font-semibold text-[#111827]">Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
