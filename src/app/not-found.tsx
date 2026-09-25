import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Home, Code2, TrendingUp, GraduationCap, Mail } from 'lucide-react'

export const metadata = {
  title: {
    absolute: '404 - Page Not Found | Vertex Loop Pvt Ltd',
  },
  description: 'The page you are looking for does not exist or has been moved.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] pt-36 pb-24 bg-[#faf9f5] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#8b5cf6] uppercase block mb-3">
            404 ERROR
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#111827] tracking-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#4b5563] font-light leading-relaxed mb-10 max-w-md mx-auto">
            The page you requested could not be found. Please check the URL or explore our core
            sections below.
          </p>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
            <Link
              href="/"
              className="p-4 rounded-xl bg-white border border-[#1a2333]/8 hover:border-[#1a2333]/20 transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <Home size={18} className="text-[#111827]" />
                <span className="text-sm font-medium text-[#111827]">Home Overview</span>
              </div>
              <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/software"
              className="p-4 rounded-xl bg-white border border-[#1a2333]/8 hover:border-[#1a2333]/20 transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <Code2 size={18} className="text-[#111827]" />
                <span className="text-sm font-medium text-[#111827]">Software &amp; AI</span>
              </div>
              <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/marketing"
              className="p-4 rounded-xl bg-white border border-[#1a2333]/8 hover:border-[#1a2333]/20 transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <TrendingUp size={18} className="text-[#111827]" />
                <span className="text-sm font-medium text-[#111827]">Digital Marketing</span>
              </div>
              <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/academy"
              className="p-4 rounded-xl bg-white border border-[#1a2333]/8 hover:border-[#1a2333]/20 transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-[#111827]" />
                <span className="text-sm font-medium text-[#111827]">CrackLeap Academy</span>
              </div>
              <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#181e28] text-white text-sm font-medium hover:bg-[#2c3545] transition-all"
          >
            <Mail size={15} />
            <span>Contact Vertex Loop</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
