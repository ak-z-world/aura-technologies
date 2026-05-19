'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import {
  staggerContainerVariants,
  staggerItemVariants,
  orbFloatVariants,
  orbFloat2Variants,
  fadeInVariants,
} from '@/lib/motion'
import { STATS } from '@/lib/data'

function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 80, rotateX: -30, filter: 'blur(12px)' }}
      animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="inline-block mr-[0.25em]"
    >
      {word}
    </motion.span>
  )
}

const HEADLINE_WORDS = ['Engineering', 'the', 'Intelligent', 'Future.']
const HEADLINE_ACCENT_INDICES = [2]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const meshY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated mesh background */}
      <motion.div
        style={{ y: meshY }}
        className="absolute inset-0 animated-mesh noise-overlay"
      />

      {/* Floating orbs */}
      <motion.div
        variants={orbFloatVariants}
        animate="animate"
        className="orb absolute top-[15%] left-[8%] w-[380px] h-[380px]"
        style={{ background: 'radial-gradient(circle, rgba(180,208,234,0.5) 0%, transparent 70%)' }}
      />
      <motion.div
        variants={orbFloat2Variants}
        animate="animate"
        className="orb absolute bottom-[20%] right-[6%] w-[320px] h-[320px]"
        style={{ background: 'radial-gradient(circle, rgba(216,210,236,0.45) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
          transition: { duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 },
        }}
        className="orb absolute top-[55%] left-[60%] w-[260px] h-[260px]"
        style={{ background: 'radial-gradient(circle, rgba(193,226,219,0.4) 0%, transparent 70%)' }}
      />

      {/* Decorative geometric lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.035]" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="600" cy="0" r="400" stroke="#1a2333" strokeWidth="1"/>
          <circle cx="600" cy="0" r="300" stroke="#1a2333" strokeWidth="1"/>
          <circle cx="600" cy="0" r="200" stroke="#1a2333" strokeWidth="1"/>
          <line x1="600" y1="0" x2="200" y2="600" stroke="#1a2333" strokeWidth="1"/>
          <line x1="600" y1="0" x2="0" y2="300" stroke="#1a2333" strokeWidth="1"/>
        </svg>
        <svg className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.03]" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="250,0 500,250 250,500 0,250" stroke="#1a2333" strokeWidth="1" fill="none"/>
          <polygon points="250,60 440,250 250,440 60,250" stroke="#1a2333" strokeWidth="1" fill="none"/>
          <polygon points="250,120 380,250 250,380 120,250" stroke="#1a2333" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 section-padding w-full flex flex-col items-center text-center pt-32 pb-20"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/65 backdrop-blur-xl border border-white/60 shadow-glass text-slate-dim text-[11px] font-mono tracking-[0.12em] uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d8c7a] animate-pulse" />
              <span className="text-[#3d8c7a]">Live</span>
            </span>
            <span className="w-px h-3 bg-pearl-200" />
            Five Divisions · One Ecosystem
            <span className="w-px h-3 bg-pearl-200" />
            Est. 2016
          </span>
        </motion.div>

        {/* Headline */}
        <div className="perspective-[1000px]">
          <h1 className="text-display font-semibold text-slate-ink leading-[1.06] tracking-[-0.03em] text-5xl md:text-7xl lg:text-[88px] xl:text-[100px] max-w-5xl mx-auto mb-2">
            {HEADLINE_WORDS.map((word, i) => (
              <AnimatedWord
                key={word + i}
                word={word}
                delay={0.3 + i * 0.1}
              />
            ))}
          </h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-display italic font-normal text-[#4a7fa5]/80 text-3xl md:text-5xl lg:text-6xl xl:text-[68px] tracking-[-0.02em] mt-1 leading-tight"
        >
          with precision and depth.
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 max-w-2xl text-slate-mid text-lg md:text-xl leading-relaxed font-light"
        >
          Vertex Loop is a next-generation technology ecosystem spanning AI product development,
          bespoke software engineering, elite tech education, enterprise IT services, and
          precision digital marketing. We do not just deliver — we{' '}
          <em className="font-normal italic text-slate-ink not-italic">architect outcomes.</em>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#ecosystem" className="btn-primary text-sm px-8 py-4">
            Explore Our Ecosystem
            <ArrowUpRight size={15} />
          </Link>
          <Link href="#contact" className="btn-ghost text-sm px-8 py-4">
            Partner With Us
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 1.4, staggerChildren: 0.12 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-pearl-200 max-w-3xl w-full mx-auto"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItemVariants}
              className="flex flex-col items-center gap-1 px-6"
            >
              <span className="stat-value text-3xl md:text-4xl text-slate-ink">{stat.value}</span>
              <span className="text-slate-dim text-xs font-mono tracking-wider uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-slate-dim/60 text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-slate-dim/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}