'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react'
import { staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '@/lib/motion'
import { DIVISIONS, NAV_LINKS } from '@/lib/data'

const FOOTER_LINKS = {
  divisions: DIVISIONS.map((d) => ({ label: d.title, href: `#ecosystem` })),
  company: [
    { label: 'About Vertex Loop', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Partnership', href: '#contact' },
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
    <footer className="relative overflow-hidden bg-slate-ink">
      {/* Subtle top edge glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Background gradient overlays */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#4a7fa5]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#7c6fad]/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 section-padding py-20">
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
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-white/8 border border-white/20" />
                <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="12" r="2.5" fill="rgba(255,255,255,0.85)"/>
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-display font-semibold text-white text-lg tracking-tight">
                  Vertex<span className="text-sky-mist">Loop</span>
                </span>
                <p className="text-[9px] text-white/40 tracking-[0.12em] uppercase mt-0.5 font-mono">
                  Technology Ecosystem
                </p>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm mb-8">
              Five elite divisions. One interconnected technology ecosystem. Building the intelligence
              infrastructure of the next decade — with precision, depth, and an unwavering commitment
              to outcomes.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/45 text-sm">
                <Mail size={14} className="text-white/30 flex-shrink-0" />
                <a href="mailto:hello@vertexloop.io" className="hover:text-white/70 transition-colors">
                  hello@vertexloop.io
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/45 text-sm">
                <MapPin size={14} className="text-white/30 flex-shrink-0 mt-0.5" />
                <span>Global Operations · HQ: Technology Hub, India</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-8">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/8 border border-white/12 text-white/50 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Divisions */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="text-white/80 text-xs font-mono font-medium tracking-[0.12em] uppercase mb-5">
              Divisions
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.divisions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/45 hover:text-white/75 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="text-white/80 text-xs font-mono font-medium tracking-[0.12em] uppercase mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/45 hover:text-white/75 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / Contact card */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="text-white/80 text-xs font-mono font-medium tracking-[0.12em] uppercase mb-5">
              Stay Ahead
            </h4>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Get frontier intelligence on AI, engineering, and technology strategy.
            </p>
            <div className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/12 text-white/80 placeholder-white/30 text-sm focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
              />
              <button className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white/80 text-sm font-medium hover:bg-white/22 hover:text-white transition-all flex items-center justify-center gap-2">
                Subscribe
                <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="mt-6 h-px bg-white/8" />
            <div className="mt-5">
              <h5 className="text-white/50 text-xs font-mono tracking-wider uppercase mb-3">Legal</h5>
              <div className="flex flex-col gap-2">
                {FOOTER_LINKS.legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/35 hover:text-white/60 text-xs transition-colors"
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
          <p className="text-white/30 text-xs font-mono">
            © {new Date().getFullYear()} Vertex Loop Technology Ecosystem. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/25 text-xs font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-mint-leaf animate-pulse" />
            All systems operational
          </div>
        </motion.div>
      </div>
    </footer>
  )
}