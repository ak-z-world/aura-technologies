import { FileText, Cpu, Brain, Database, Workflow, Code2, Shield } from 'lucide-react'

const ARCH_LAYERS = [
  { name: 'User', sub: 'End users and stakeholders' },
  { name: 'Application', sub: 'Web, Mobile or SaaS' },
  { name: 'Business Logic', sub: 'Core functionality and workflows' },
  { name: 'Data', sub: 'Data storage and processing' },
  { name: 'AI / Automation', sub: 'Intelligence and automation' },
  { name: 'Cloud / Infrastructure', sub: 'Deployment and infrastructure' },
]

const RD_AREAS = [
  { label: 'Software', icon: Code2 },
  { label: 'AI', icon: Brain },
  { label: 'ML', icon: Cpu },
  { label: 'Data', icon: Database },
  { label: 'Automation', icon: Workflow },
]

export default function SoftwareArchitecture() {
  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Product Architecture */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#1a2333]/8 shadow-[0_4px_20px_rgba(26,35,51,0.03)]">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              PRODUCT ARCHITECTURE
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-3">
              A connected software system.
            </h2>

            <p className="text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed mb-8">
              Software products typically involve multiple layers working together to deliver
              functionality, intelligence and value.
            </p>

            {/* Architecture Stack Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              {/* Left Side: Visual Stack Layers */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full max-w-[220px] space-y-1.5 py-4">
                  {/* Layer 1: User */}
                  <div className="h-9 rounded-lg bg-gradient-to-r from-amber-50 to-amber-100/70 border border-amber-200/60 flex items-center justify-center text-[11px] font-medium text-amber-900 shadow-sm">
                    User Interface
                  </div>
                  {/* Layer 2: Application */}
                  <div className="h-9 rounded-lg bg-gradient-to-r from-sky-50 to-sky-100/70 border border-sky-200/60 flex items-center justify-center text-[11px] font-medium text-sky-900 shadow-sm">
                    Application Layer
                  </div>
                  {/* Layer 3: Business Logic */}
                  <div className="h-9 rounded-lg bg-gradient-to-r from-indigo-50 to-indigo-100/70 border border-indigo-200/60 flex items-center justify-center text-[11px] font-medium text-indigo-900 shadow-sm">
                    Business Logic
                  </div>
                  {/* Layer 4: Data */}
                  <div className="h-9 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/70 border border-blue-200/60 flex items-center justify-center text-[11px] font-medium text-blue-900 shadow-sm">
                    Data Layer
                  </div>
                  {/* Layer 5: AI / Automation */}
                  <div className="h-9 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100/70 border border-purple-200/60 flex items-center justify-center text-[11px] font-medium text-purple-900 shadow-sm">
                    AI &amp; Automation
                  </div>
                  {/* Layer 6: Cloud / Infrastructure */}
                  <div className="h-9 rounded-lg bg-gradient-to-r from-slate-100 to-slate-200/70 border border-slate-300/60 flex items-center justify-center text-[11px] font-medium text-slate-800 shadow-sm">
                    Cloud Infrastructure
                  </div>
                </div>
              </div>

              {/* Right Side: Detailed Layer Labels */}
              <div className="sm:col-span-7 space-y-3.5 divide-y divide-gray-100 sm:divide-y-0">
                {ARCH_LAYERS.map((layer) => (
                  <div key={layer.name} className="flex items-start gap-2.5 pt-2 sm:pt-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111827] mt-1.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-[#111827]">
                        {layer.name}
                      </h4>
                      <p className="text-[11px] text-[#6b7280] font-light">
                        {layer.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: R&D and Intellectual Property */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Top Block: Research & Development */}
            <div className="bg-white rounded-3xl p-8 border border-[#1a2333]/8 shadow-[0_4px_20px_rgba(26,35,51,0.03)]">
              <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-2">
                RESEARCH &amp; DEVELOPMENT
              </span>

              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#111827] mb-3">
                Exploring technology through development.
              </h3>

              <p className="text-xs text-[#4b5563] font-light leading-relaxed mb-6">
                Vertex Loop undertakes research, design and development across software, AI,
                machine learning and data science to explore practical applications of emerging
                technologies.
              </p>

              {/* 5 R&D Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                {RD_AREAS.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#faf9f5] border border-[#1a2333]/8 text-xs font-medium text-[#1f2937]"
                    >
                      <Icon size={12} className="text-[#64748b]" />
                      <span>{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Bottom Block: Intellectual Property */}
            <div className="bg-white rounded-3xl p-8 border border-[#1a2333]/8 shadow-[0_4px_20px_rgba(26,35,51,0.03)] flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#faf9f5] border border-[#1a2333]/8 flex items-center justify-center text-[#111827] flex-shrink-0 mt-1">
                <FileText size={16} />
              </div>

              <div>
                <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-1.5">
                  INTELLECTUAL PROPERTY
                </span>

                <h3 className="font-display text-lg font-semibold text-[#111827] mb-2">
                  Building technology that can become a product.
                </h3>

                <p className="text-xs text-[#4b5563] font-light leading-relaxed">
                  The company may develop, own, license and work with intellectual property
                  including software, source code, algorithms, databases, trademarks, copyrights and
                  other technology assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
