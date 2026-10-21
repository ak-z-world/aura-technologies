import JsonLd from '@/components/seo/JsonLd'

export interface FaqItem {
  q: string
  a: string
}

interface FaqSectionProps {
  id: string
  label: string
  heading: string
  faqs: FaqItem[]
  schemaId: string
  tone?: 'white' | 'cream'
}

/**
 * Visible FAQ block + matching FAQPage schema generated from the SAME data,
 * so the structured data can never drift from what a visitor actually reads.
 * Plain <details> markup: no client JS, full text is in the server HTML.
 */
export default function FaqSection({
  id,
  label,
  heading,
  faqs,
  schemaId,
  tone = 'white',
}: FaqSectionProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': schemaId,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <section
      id={id}
      className={`py-20 md:py-24 ${tone === 'cream' ? 'bg-[#faf9f5]' : 'bg-white'} border-t border-[#1a2333]/6`}
    >
      <JsonLd
        data={faqSchema}
        id={`${schemaId.replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '')}-jsonld`}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
          {label}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-10">
          {heading}
        </h2>
        <div className="max-w-3xl">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-[#1a2333]/8 py-5 first:pt-0"
            >
              <summary className="cursor-pointer list-none font-display text-base sm:text-lg font-semibold text-[#111827] flex items-start justify-between gap-4">
                <span>{faq.q}</span>
                <span aria-hidden="true" className="text-[#64748b] font-light select-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#4b5563] font-light leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
