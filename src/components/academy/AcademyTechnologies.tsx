const TECH_CATEGORIES = [
  {
    category: 'Development',
    items: ['Python', 'Django', 'React', 'Next.js', 'JavaScript'],
  },
  {
    category: 'Data',
    items: ['SQL', 'Data Science', 'Machine Learning', 'Data Analysis'],
  },
  {
    category: 'AI',
    items: ['Artificial Intelligence', 'Generative AI', 'LLMs', 'AI Applications'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'DevOps', 'CI/CD', 'Infrastructure'],
  },
]

export default function AcademyTechnologies() {
  return (
    <section id="technologies" className="py-20 md:py-24 bg-white border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
              TECHNOLOGIES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15]">
              Technologies
              <br />
              worth building with.
            </h2>
          </div>

          {/* Right Column: 4 Technology Categories */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.category} className="flex flex-col">
                <h3 className="text-xs font-mono font-bold tracking-wider text-[#111827] uppercase mb-4 pb-2 border-b border-gray-200">
                  {cat.category}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-[13px] text-[#4b5563] font-light leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
