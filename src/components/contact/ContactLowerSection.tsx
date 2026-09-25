import { Mail, MessageSquare, ArrowRight } from 'lucide-react'

export default function ContactLowerSection() {
  return (
    <section id="other-ways" className="py-20 md:py-24 bg-[#faf9f5] border-t border-[#1a2333]/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: OTHER WAYS TO CONNECT */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pr-6">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
                OTHER WAYS TO CONNECT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-4">
                Reach out directly
              </h2>
              <p className="text-sm text-[#4b5563] font-light leading-relaxed mb-8 max-w-md">
                You can also contact us using the details below.
              </p>
            </div>

            {/* 2 Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#1a2333]/8 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    <Mail size={18} className="stroke-[1.75]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#111827] mb-1">
                    Email
                  </h3>
                  <p className="text-xs text-[#6b7280] font-light mb-4">
                    For general enquiries
                  </p>
                </div>
                <a
                  href="mailto:hello@vertexloop.in"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827] hover:text-blue-600 transition-colors group"
                >
                  <span>Send us an email</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Contact Form Shortcut Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#1a2333]/8 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-4">
                    <MessageSquare size={18} className="stroke-[1.75]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#111827] mb-1">
                    Contact form
                  </h3>
                  <p className="text-xs text-[#6b7280] font-light mb-4">
                    For all enquiries
                  </p>
                </div>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827] hover:text-purple-600 transition-colors group"
                >
                  <span>Use the form above</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: OUR COMPANY */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pl-6 lg:border-l border-gray-200">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
                OUR COMPANY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#111827] tracking-[-0.03em] leading-tight mb-2">
                Vertex Loop Pvt Ltd
              </h2>
              <p className="text-xs font-mono font-medium text-[#6b7280] tracking-wider uppercase mb-4">
                Software · Digital Marketing · Education
              </p>
              <p className="text-sm text-[#4b5563] font-light leading-relaxed mb-8 max-w-lg">
                Technology, digital growth and education under one company.
              </p>
            </div>

            {/* 3 Business Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              {/* Software */}
              <div className="flex flex-col">
                <h3 className="text-xs font-mono font-bold tracking-wider text-[#111827] uppercase mb-1">
                  Software
                </h3>
                <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                  Technology products and solutions
                </p>
              </div>

              {/* Marketing */}
              <div className="flex flex-col">
                <h3 className="text-xs font-mono font-bold tracking-wider text-[#111827] uppercase mb-1">
                  Marketing
                </h3>
                <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                  Digital marketing and growth
                </p>
              </div>

              {/* CrackLeap */}
              <div className="flex flex-col">
                <h3 className="text-xs font-mono font-bold tracking-wider text-[#111827] uppercase mb-1">
                  CrackLeap
                </h3>
                <p className="text-xs text-[#6b7280] font-light leading-relaxed">
                  Education and learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
