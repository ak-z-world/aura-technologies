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

const FOOTER_LINKS = {
  services: [
    { label: 'AI Solutions & Agents', href: '/services/ai-development' },
    { label: 'Custom Software Engineering', href: '/services/custom-software-development' },
    { label: 'Cloud Architecture & DevOps', href: '/services/cloud-architecture' },
    { label: 'Digital Marketing & SEO', href: '/services/digital-marketing' },
  ],
  products: [
    { label: 'SCRIPTen AI Creator Tool', href: 'https://scripten.arivuon.in/', external: true },
    { label: 'Vertex Loop ERP', href: '/products/erp' },
    { label: 'Digital Invoicing Software', href: '/products/invoicing' },
    { label: 'Enterprise HRMS System', href: '/products/hrms' },
  ],
  ecosystem: [
    { label: 'About Vertex Loop', href: '/about' },
    { label: 'Crack Leap Tech Academy', href: 'https://crackleap.vertexloop.in', external: true },
    { label: 'Ecosystem Overview', href: '/ecosystem' },
    { label: 'Why Choose Us', href: '/why-us' },
    { label: 'Contact & Partnerships', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-conditions' },
  ],
}

export default function Footer() {
  return (
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10"
        >
          {/* Brand column */}
          <motion.div variants={staggerItemVariants} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit group" aria-label="Vertex Loop">
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
              Custom AI development, enterprise software engineering, cloud architecture, software academy, and proprietary business applications (ERP, HRMS, Invoicing, SCRIPTen). Building intelligence infrastructure globally.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={16} className="text-white/40 flex-shrink-0" />
                <a href="mailto:hello@vertexloop.in" className="hover:text-white transition-colors">
                  hello@vertexloop.in
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={16} className="text-white/40 flex-shrink-0 mt-0.5" />
                <span>Global Operations · Technology Hub, India</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mt-8">
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/company/vertex-loop', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://x.com/LoopVertex99532', label: 'Twitter' },
                { icon: FaGithub, href: 'https://github.com/auratech', label: 'GitHub' },
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

          {/* Services Column */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="text-white/90 text-xs font-mono font-semibold tracking-[0.12em] uppercase mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
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

          {/* Products Column */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="text-white/90 text-xs font-mono font-semibold tracking-[0.12em] uppercase mb-5">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                    {link.external && <ArrowUpRight size={12} className="text-white/40" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ecosystem Column */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="text-white/90 text-xs font-mono font-semibold tracking-[0.12em] uppercase mb-5">
              Ecosystem & Education
            </h4>
            <ul className="flex flex-col gap-3 mb-6">
              {FOOTER_LINKS.ecosystem.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                    {link.external && <ArrowUpRight size={12} className="text-white/40" />}
                  </a>
                </li>
              ))}
            </ul>
            <h5 className="text-white/40 text-[10px] font-mono tracking-wider uppercase mb-3">Legal</h5>
            <div className="flex flex-col gap-2">
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
  )
}