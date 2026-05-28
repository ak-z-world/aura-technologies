'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ValueCard from '@/components/ui/ValueCard'
import { staggerContainerVariants, staggerItemVariants, fadeUpVariants } from '@/lib/motion'
import { VALUE_PROPOSITIONS } from '@/lib/data'

function StatBadge({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="flex flex-col items-center gap-1.5 px-6 py-4 rounded-2xl glass-card text-center"
    >
      <span className="stat-value text-4xl text-slate-ink">{value}</span>
      <span className="text-xs font-mono text-slate-dim tracking-wider uppercase">{label}</span>
    </motion.div>
  )
}

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-10 md:py-15 overflow-hidden"
      aria-label="Why Choose Us"
    >
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f0eb] via-[#ede9e2] to-[#e8e4dc]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full bg-gold-soft/50 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-sky-soft/40 blur-[100px]" />
      </motion.div>

      {/* Decorative topographic lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-slate-ink/100 rounded-full"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              top: '50%',
              left: '-100px',
              transform: `translate(0, -50%)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 section-padding">
        {/* Header */}
        <div className="max-w-3xl mb-1">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="gold">Why Vertex Loop</SectionLabel>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.08}>
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.03em] mb-6">
              Not a vendor.
              <br />
              <span className="italic font-normal text-[#a07830]">A strategic partner.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.14}>
            <p className="text-slate-mid text-lg leading-relaxed font-light">
              The difference between a vendor and a partner is accountability. Vendors deliver
              outputs. We deliver outcomes — with the architecture, talent, and ecosystem depth
              to back every commitment we make.
            </p>
          </AnimatedSection>
        </div>

        {/* Stats row */}
        {/* <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {STATS.map((stat, i) => (
            <StatBadge key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </motion.div> */}

        {/* Divider */}
        <div className="divider-gradient mb-5" />

        {/* Value grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {VALUE_PROPOSITIONS.map((value, index) => (
            <motion.div key={value.id} variants={staggerItemVariants}>
              <ValueCard value={value} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial strip */}
        <AnimatedSection variant="fadeUp" delay={0.1} className="mt-20">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-14"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(248,247,244,0.75) 100%)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.7)',
              boxShadow: '0 20px 60px rgba(26,35,51,0.08), 0 4px 16px rgba(26,35,51,0.05), inset 0 1px 0 rgba(255,255,255,0.95)',
            }}
          >
            {/* Gold accent */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold-warm/40 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <div className="text-[#a07830]/40 text-5xl font-display leading-none mb-4">&ldquo;</div>
                <p className="text-display italic font-normal text-slate-ink text-xl md:text-2xl leading-relaxed tracking-tight">
                  Vertex Loop does not just understand technology. They understand the intersection
                  of technology and business outcomes. Working across three of their divisions
                  simultaneously transformed what was possible for our team.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-soft to-gold-warm/50 flex items-center justify-center text-[#a07830] font-display font-bold text-lg">
                    R
                  </div>
                  <div>
                    <div className="font-semibold text-slate-ink text-sm">Rajesh Nair</div>
                    <div className="text-slate-dim text-xs font-mono">CTO, FinStack Technologies</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-4">
                {[
                  { label: 'Time to Market', value: '3× Faster' },
                  { label: 'Engineering Velocity', value: '+180%' },
                  { label: 'Team Capability', value: 'Top-quartile' },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between p-4 rounded-xl"
                    style={{
                      background: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.8)',
                    }}
                  >
                    <span className="text-xs font-mono text-slate-dim tracking-wider uppercase">{metric.label}</span>
                    <span className="font-semibold text-slate-ink text-sm">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}