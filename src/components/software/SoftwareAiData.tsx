import {
  Sparkles,
  GitBranch,
  Layers,
  MessageSquare,
  Eye,
  Bot,
  FileCode,
  BarChart2,
  Zap,
} from 'lucide-react'

const TECH_MATRIX = [
  {
    code: 'AI',
    name: 'Artificial Intelligence',
    icon: Sparkles,
    accent: '#2563eb',
    bg: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    code: 'ML',
    name: 'Machine Learning',
    icon: GitBranch,
    accent: '#0284c7',
    bg: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    code: 'DL',
    name: 'Deep Learning',
    icon: Layers,
    accent: '#4f46e5',
    bg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  },
  {
    code: 'NLP',
    name: 'Natural Language Processing',
    icon: MessageSquare,
    accent: '#059669',
    bg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    code: 'CV',
    name: 'Computer Vision',
    icon: Eye,
    accent: '#0891b2',
    bg: 'bg-cyan-50 text-cyan-700 border-cyan-100',
  },
  {
    code: 'Gen AI',
    name: 'Generative AI',
    icon: Bot,
    accent: '#7c3aed',
    bg: 'bg-purple-50 text-purple-700 border-purple-100',
  },
  {
    code: 'LLMs',
    name: 'Large Language Models',
    icon: FileCode,
    accent: '#9333ea',
    bg: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100',
  },
  {
    code: 'Data',
    name: 'Data Analytics',
    icon: BarChart2,
    accent: '#d97706',
    bg: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    code: 'Automation',
    name: 'Intelligent Automation',
    icon: Zap,
    accent: '#ea580c',
    bg: 'bg-orange-50 text-orange-700 border-orange-100',
  },
]

export default function SoftwareAiData() {
  return (
    <section id="ai-data" className="py-20 md:py-28 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              AI / DATA / AUTOMATION
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-5">
              Intelligence as part
              <br />
              of the software.
            </h2>

            <p className="text-sm md:text-base text-[#4b5563] font-light leading-relaxed">
              Vertex Loop develops software that can incorporate artificial intelligence, machine
              learning, deep learning, natural language processing, computer vision, generative AI,
              large language models, data analytics and automation.
            </p>
          </div>

          {/* Right Column: 3x3 Technology Matrix */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {TECH_MATRIX.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.code}
                    className="p-4 rounded-xl bg-[#faf9f5] border border-[#1a2333]/6 hover:border-[#1a2333]/15 transition-all group flex items-center gap-3.5"
                  >
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#111827] block">
                        {item.code}
                      </span>
                      <span className="text-[11px] text-[#6b7280] font-normal leading-tight block">
                        {item.name}
                      </span>
                    </div>
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
