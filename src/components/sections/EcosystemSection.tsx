'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import DivisionCard from '@/components/ui/DivisionCard'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/motion'
import { DIVISIONS } from '@/lib/data'

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Our Ecosystem"
    >
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#edeae4] via-[#f0ece5] to-[#f4f0eb]" />
        <div className="absolute top-0 right-1/4 w-[700px] h-[400px] rounded-full bg-sky-soft/30 blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-mint-soft/30 blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-lavender-soft/25 blur-[80px]" />
      </motion.div>

      {/* Subtle grid lines background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(26,35,51,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,35,51,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 section-padding">
        {/* Header */}
        <div className="mb-16">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="blue">Our Ecosystem</SectionLabel>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <AnimatedSection variant="fadeUp" delay={0.08} className="max-w-2xl">
              <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.03em]">
                Five divisions.
                <br />
                <span className="italic font-normal text-[#4a7fa5]">One compounding force.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.14} className="max-w-md">
              <p className="text-slate-mid text-base leading-relaxed font-light">
                Each Vertex Loop division is independently elite. Integrated, they create an
                unfair advantage that no single-service provider can replicate.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* Row 1: Featured card (2 cols) + single */}
          <motion.div variants={staggerItemVariants} className="lg:col-span-2">
            <DivisionCard division={DIVISIONS[0]} featured index={0} />
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            <DivisionCard division={DIVISIONS[1]} index={1} />
          </motion.div>

          {/* Row 2: Single + Featured (2 cols) */}
          <motion.div variants={staggerItemVariants}>
            <DivisionCard division={DIVISIONS[2]} index={2} />
          </motion.div>

          <motion.div variants={staggerItemVariants} className="lg:col-span-2">
            <DivisionCard division={DIVISIONS[3]} featured index={3} />
          </motion.div>

          {/* Row 3: Full-width card */}
          <motion.div variants={staggerItemVariants} className="md:col-span-2 lg:col-span-3">
            <DivisionCard division={DIVISIONS[4]} index={4} />
          </motion.div>
        </motion.div>

        {/* Synergy callout */}
        <AnimatedSection variant="fadeUp" delay={0.1} className="mt-16">
          <div className="glass-card-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-sky-soft/40 blur-[60px]" />
            </div>
            <div className="relative z-10">
              <div className="tag-pill mb-5 mx-auto w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4a7fa5]" />
                Ecosystem Synergy
              </div>
              <h3 className="text-display font-semibold text-slate-ink text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4">
                The more divisions you engage,
                <br />
                <span className="italic font-normal text-[#4a7fa5]">the greater your returns.</span>
              </h3>
              <p className="text-slate-mid text-base max-w-2xl mx-auto leading-relaxed font-light mb-8">
                A company that trains talent through our Academy, builds products with our Software
                team, deploys on our IT infrastructure, and grows through our Marketing division —
                does not just save costs. They gain a strategic moat.
              </p>
              <a href="#contact" className="btn-primary inline-flex mx-auto">
                Explore Multi-Division Partnerships
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}