'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'


interface PageHeroProps {
  label: string
  labelAccent?: 'blue' | 'lavender' | 'mint' | 'gold' | 'rose' | 'default'
  headline: React.ReactNode
  subline: string
  gradient?: {
    orb1: string
    orb2: string
    orb3?: string
    base: string
  }
  children?: React.ReactNode
}

const DEFAULT_GRADIENT = {
  orb1: 'rgba(193,218,240,0.55)',
  orb2: 'rgba(216,210,236,0.45)',
  orb3: 'rgba(193,226,219,0.35)',
  base: '#f6f4f0',
}

export default function PageHero({
  label,
  labelAccent = 'default',
  headline,
  subline,
  gradient = DEFAULT_GRADIENT,
  children,
}: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden min-h-[60vh] flex flex-col justify-center">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 25% 35%, ${gradient.orb1} 0%, transparent 55%),
              radial-gradient(ellipse at 75% 65%, ${gradient.orb2} 0%, transparent 55%),
              ${gradient.orb3 ? `radial-gradient(ellipse at 60% 10%, ${gradient.orb3} 0%, transparent 50%),` : ''}
              ${gradient.base}`,
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `linear-gradient(rgba(26,35,51,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26,35,51,1) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </motion.div>

      {/* Geometric decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 right-0 w-[480px] h-[480px] opacity-[0.032]" viewBox="0 0 480 480" fill="none">
          <circle cx="480" cy="0" r="320" stroke="#1a2333" strokeWidth="1" />
          <circle cx="480" cy="0" r="220" stroke="#1a2333" strokeWidth="1" />
          <circle cx="480" cy="0" r="140" stroke="#1a2333" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[340px] h-[340px] opacity-[0.025]" viewBox="0 0 340 340" fill="none">
          <polygon points="170,0 340,170 170,340 0,170" stroke="#1a2333" strokeWidth="1" fill="none" />
          <polygon points="170,50 290,170 170,290 50,170" stroke="#1a2333" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <motion.div style={{ y: contentY, opacity }} className="relative z-10 section-padding">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <SectionLabel accent={labelAccent}>{label}</SectionLabel>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="text-display font-semibold text-slate-ink text-5xl md:text-6xl lg:text-[80px] xl:text-[92px] leading-[1.05] tracking-[-0.03em] mb-7 max-w-5xl"
        >
          {headline}
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="text-slate-mid text-lg md:text-xl leading-relaxed font-light max-w-2xl"
        >
          {subline}
        </motion.p>

        {/* Optional children (CTAs, badges, etc.) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}