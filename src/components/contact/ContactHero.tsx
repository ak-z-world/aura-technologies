import ContactHeroVisual from './ContactHeroVisual'

export default function ContactHero() {
  return (
    <section
      id="hero"
      aria-label="Contact Vertex Loop Pvt Ltd Hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-[#faf9f5] via-[#fbfaf7] to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-[11px] font-mono font-semibold tracking-[0.18em] uppercase text-[#64748b] block mb-4">
              CONTACT
            </span>

            <h1 className="font-display text-[40px] sm:text-[52px] md:text-[62px] lg:text-[68px] font-semibold text-[#111827] leading-[1.08] tracking-[-0.03em] max-w-2xl mb-6">
              Let&apos;s talk about
              <br />
              <span className="italic font-normal text-[#111827]">what you&apos;re building.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-[18px] text-[#4b5563] font-light leading-relaxed max-w-xl">
              Have a software requirement, marketing enquiry, training need or another business
              enquiry? Tell us what you are working on.
            </p>
          </div>

          {/* Right Column: Conversation Diagram */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <ContactHeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
