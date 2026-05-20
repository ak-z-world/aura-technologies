'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '@/lib/motion'
import { DIVISIONS } from '@/lib/data'

const FOOTER_LINKS = {
  divisions: DIVISIONS.map((d) => ({ label: d.title, href: `/ecosystem` })),
  company: [
    { label: 'About Vertex Loop', href: '/about' },
    { label: 'Why Choose Us', href: '/why-us' },
    { label: 'Partnership', href: '/contact' },
    { label: 'Careers', href: '#' },
    { label: 'Press & Media', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <>
    {/* FIXED: Replaced bg-slate-ink with a hardcoded dark slate background to ensure it always renders */}
    <footer className="relative overflow-hidden bg-[#0f172a]">
      {/* Subtle top edge glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Background gradient overlays */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#4a7fa5]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#7c6fad]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-20">
        {/* Top row */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10"
        >
          {/* Brand column */}
          <motion.div variants={staggerItemVariants} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20" />
                <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="2.5" fill="rgba(255,255,255,0.9)"/>
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-semibold text-white text-xl tracking-tight">
                  Vertex<span className="text-[#a5b4fc]">Loop</span>
                </span>
                <p className="text-[10px] text-white/50 tracking-[0.12em] uppercase mt-0.5 font-mono">
                  Technology Ecosystem
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              Five elite divisions. One interconnected technology ecosystem. Building the intelligence
              infrastructure of the next decade — with precision, depth, and an unwavering commitment
              to outcomes.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={16} className="text-white/40 flex-shrink-0" />
                <a href="mailto:hello@vertexloop.io" className="hover:text-white transition-colors">
                  hello@vertexloop.io
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={16} className="text-white/40 flex-shrink-0 mt-0.5" />
                <span>Global Operations · HQ: Technology Hub, India</span>
              </div>
            </div>
            
            {/* FIXED: Now using the correct FontAwesome icons instead of Lucide placeholders */}
            <div className="flex items-center gap-3 mt-8">
              {[
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaGithub, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Divisions */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="text-white/90 text-xs font-mono font-semibold tracking-[0.12em] uppercase mb-5">
              Divisions
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.divisions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="text-white/90 text-xs font-mono font-semibold tracking-[0.12em] uppercase mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / Contact card */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="text-white/90 text-xs font-mono font-semibold tracking-[0.12em] uppercase mb-5">
              Stay Ahead
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Get frontier intelligence on AI, engineering, and technology strategy.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#a5b4fc]/50 focus:bg-white/10 transition-all"
              />
              <button className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Subscribe
                <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="mt-8 h-px bg-white/10" />
            <div className="mt-6">
              <h5 className="text-white/40 text-[10px] font-mono tracking-wider uppercase mb-3">Legal</h5>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {FOOTER_LINKS.legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/40 hover:text-white/80 text-xs transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/40 text-xs font-mono">
            © {new Date().getFullYear()} Vertex Loop Technology Ecosystem. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            All systems operational
          </div>
        </motion.div>
      </div>
    </footer>
    </>
  )
}