import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Package,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  Cpu,
} from 'lucide-react'

const CAPABILITIES = [
  { name: 'Software Products', icon: Package },
  { name: 'Web Applications', icon: Globe },
  { name: 'Mobile Applications', icon: Smartphone },
  { name: 'SaaS & PaaS', icon: Layers },
  { name: 'AI & Machine Learning', icon: Sparkles },
  { name: 'Automation', icon: Cpu },
]

export default function SoftwareSection() {
  return (
    <section id="software" className="py-20 md:py-28 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Workspace / Laptop Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3.2] w-full rounded-2xl overflow-hidden border border-[#1a2333]/8 shadow-[0_8px_30px_rgba(26,35,51,0.06)] bg-[#faf9f5]">
              <Image
                src="/images/software-workspace-hd.webp"
                alt="Vertex Loop Software Engineering and Product Development"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy & Capability Matrix */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              01 / SOFTWARE
            </span>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-5">
              Technology built
              <br />
              to solve real problems.
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm md:text-base text-[#4b5563] font-light leading-relaxed mb-8">
              Vertex Loop develops software products, web applications, mobile applications, SaaS,
              PaaS and cloud-based solutions, including systems that use AI, machine learning, data
              analytics and automation.
            </p>

            {/* 2x4 Capability Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full mb-8">
              {CAPABILITIES.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#faf9f5] border border-[#1a2333]/6 hover:border-[#1a2333]/15 transition-all group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#1a2333]/8 flex items-center justify-center text-[#4b5563] group-hover:text-[#2563eb] transition-colors flex-shrink-0">
                      <Icon size={14} />
                    </div>
                    <span className="text-xs font-medium text-[#1f2937] leading-tight">
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <Link
              href="/software"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-[#111827] hover:text-[#2563eb] transition-colors pt-2"
            >
              <span>Explore Software</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
