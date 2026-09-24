import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#faf9f5] border-t border-[#1a2333]/8 py-12 md:py-16 text-[#374151]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 pb-10 border-b border-[#1a2333]/6">
          {/* Left Column: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block mb-2" aria-label="Vertex Loop Pvt Ltd">
              <div className="relative h-8 w-36 sm:w-44">
                <Image
                  src="/logo.png"
                  alt="Vertex Loop Pvt Ltd"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain object-center md:object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-[#6b7280] tracking-wide mt-1">
              Software · Digital Marketing · Education
            </p>
          </div>

          {/* Center / Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs md:text-sm font-normal text-[#4b5563]">
            <Link href="/software" className="hover:text-[#111827] transition-colors">
              Software
            </Link>
            <Link href="/marketing" className="hover:text-[#111827] transition-colors">
              Marketing
            </Link>
            <Link href="/academy" className="hover:text-[#111827] transition-colors">
              Academy
            </Link>
            <Link href="/contact" className="hover:text-[#111827] transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#111827] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-[#111827] transition-colors">
              Terms & Conditions
            </Link>
          </nav>

          {/* Right Column: Copyright */}
          <div className="text-center md:text-right text-xs text-[#6b7280] font-normal">
            <p>© {currentYear} Vertex Loop Pvt Ltd.</p>
            <p className="mt-0.5">All rights reserved.</p>
          </div>
        </div>

        {/* Bottom subtle note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9ca3af] gap-3">
          <p>VERTEX LOOP PVT LTD — Technology, Growth & Learning</p>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  )
}