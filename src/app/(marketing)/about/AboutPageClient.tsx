'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Target, Heart, Zap, Globe, Shield, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/motion'
// import { STATS } from '@/lib/data'

const TIMELINE = [
  {
    year: '2016',
    title: 'The Beginning',
    body:
      'Founded with a single conviction: that elite technology outcomes require cross-domain mastery, not siloed execution. The first division — Software Engineering — launched with three founding engineers.',
    accent: '#4a7fa5',
  },
  {
    year: '2018',
    title: 'Tech Academy Opens',
    body:
      'We recognized that the talent shortage was as critical as the technology gap. Vertex Loop Tech Academy launched, building the engineers our industry desperately needed from the ground up.',
    accent: '#7c6fad',
  },
  {
    year: '2020',
    title: 'AI Products Division',
    body:
      'As LLMs moved from research papers to production systems, we moved with them. The AI Products division was born, pioneering enterprise-grade AI integrations years before the market caught on.',
    accent: '#3d8c7a',
  },
  {
    year: '2022',
    title: 'Full Ecosystem',
    body:
      'IT Services and Digital Marketing joined the fold, completing the five-division ecosystem. For the first time, a client could trust a single partner from talent development to market growth.',
    accent: '#a07830',
  },
  {
    year: '2024',
    title: 'Global Scale',
    body:
      'Vertex Loop crossed 100 global clients, 2,000+ trained engineers, and established operations across three continents. The ecosystem model proved itself at enterprise scale.',
    accent: '#b04a4a',
  },
]

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Outcome Obsession',
    body:
      'We are measured by what changes in your business — not by deliverables shipped or hours billed. Every engagement begins with a clear definition of success.',
    accent: '#4a7fa5',
  },
  {
    icon: Shield,
    title: 'Architectural Integrity',
    body:
      'No shortcuts. No technical debt by design. Every system we touch is built to last, scale, and evolve — because we will be the ones maintaining it.',
    accent: '#7c6fad',
  },
  {
    icon: Lightbulb,
    title: 'Frontier Thinking',
    body:
      'We invest 20% of our capacity in research and emerging technology. When a breakthrough becomes relevant to your business, we are already fluent in it.',
    accent: '#3d8c7a',
  },
  {
    icon: Heart,
    title: 'Partnership Depth',
    body:
      'The best work emerges from genuine partnership. We invest in understanding your business, your culture, and your ambitions — not just your technical requirements.',
    accent: '#a07830',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    body:
      'Our team spans continents. This diversity of market context, technical tradition, and cultural lens makes every solution more robust and more globally competitive.',
    accent: '#b04a4a',
  },
  {
    icon: Zap,
    title: 'Relentless Velocity',
    body:
      'Speed is a competitive advantage. We run lean, decide fast, and ship without ceremony — while maintaining the quality standards that come from eight years of practice.',
    accent: '#4a7fa5',
  },
]

const LEADERSHIP = [
  {
    initials: 'SK',
    name: 'Siddharth Krishnamurti',
    role: 'Co-Founder & CEO',
    focus: 'Strategy, Ecosystem Architecture, Enterprise Partnerships',
    bg: 'from-sky-soft to-sky-mist',
    accent: '#4a7fa5',
  },
  {
    initials: 'PR',
    name: 'Priya Rangarajan',
    role: 'Co-Founder & CTO',
    focus: 'AI Research, Software Architecture, Platform Engineering',
    bg: 'from-lavender-soft to-lavender-mist',
    accent: '#7c6fad',
  },
  {
    initials: 'AM',
    name: 'Aditya Mehrotra',
    role: 'Head of AI Products',
    focus: 'LLM Systems, Product Strategy, AI Safety Practices',
    bg: 'from-mint-soft to-mint-mist',
    accent: '#3d8c7a',
  },
  {
    initials: 'VN',
    name: 'Vidya Nair',
    role: 'Head of Academy',
    focus: 'Curriculum Design, Corporate Training, Pedagogy',
    bg: 'from-gold-soft to-[#e8d4a8]',
    accent: '#a07830',
  },
]

function TimelineItem({
  item,
  index,
}: {
  item: (typeof TIMELINE)[0]
  index: number
}) {
  const isEven = index % 2 === 0
  return (
    <motion.div
      variants={staggerItemVariants}
      className={`relative flex items-start gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div
          className="inline-block text-xs font-mono tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-3"
          style={{ color: item.accent, background: `${item.accent}12`, border: `1px solid ${item.accent}25` }}
        >
          {item.year}
        </div>
        <h3 className="text-display font-semibold text-slate-ink text-2xl tracking-tight mb-3">
          {item.title}
        </h3>
        <p className="text-slate-mid text-sm leading-relaxed font-light max-w-sm md:max-w-none">
          {item.body}
        </p>
      </div>

      {/* Center node */}
      <div className="relative flex-shrink-0 flex items-center justify-center md:mt-4 mt-0">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-pearl-200 -z-10 hidden md:block" />
        <motion.div
          whileInView={{ scale: [0.7, 1.1, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="w-10 h-10 rounded-full flex items-center justify-center shadow-glass-lg z-10"
          style={{ background: `linear-gradient(135deg, ${item.accent}20, ${item.accent}08)`, border: `2px solid ${item.accent}40` }}
        >
          <div className="w-3 h-3 rounded-full" style={{ background: item.accent }} />
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export default function AboutPageClient() {
  const manifestoRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: manifestoRef, offset: ['start end', 'end start'] })
  const manifestoY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <PageHero
        label="Who We Are"
        labelAccent="lavender"
        headline={
          <>
            Built by builders,
            <br />
            <span className="italic font-normal text-[#7c6fad]">for builders.</span>
          </>
        }
        subline="Vertex Loop was not founded by strategists who theorize about technology. It was built by engineers, designers, and operators who have shipped real systems, made real mistakes, and earned every principle we now live by."
        gradient={{
          orb1: 'rgba(216,210,236,0.55)',
          orb2: 'rgba(193,218,240,0.45)',
          orb3: 'rgba(193,226,219,0.3)',
          base: '#f4f1f9',
        }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/ecosystem" className="btn-primary text-sm">
            Explore Our Ecosystem <ArrowUpRight size={14} />
          </Link>
          <Link href="/contact" className="btn-ghost text-sm">
            Start a Conversation
          </Link>
        </div>
      </PageHero>

      {/* ── MANIFESTO ── */}
      <section ref={manifestoRef} className="relative py-28 overflow-hidden">
        <motion.div style={{ y: manifestoY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0ede8] to-[#e8e4dc]" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] rounded-full bg-lavender-soft/40 blur-[100px]" />
        </motion.div>
        <div className="relative z-10 section-padding max-w-5xl mx-auto">
          <AnimatedSection variant="fadeUp">
            <SectionLabel accent="lavender" className="mb-8">Our Manifesto</SectionLabel>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.08}>
            <div className="space-y-7">
              {[
                {
                  text: 'We believe the technology industry has a craft problem. Too many systems are assembled, not designed. Too many products are launched, not engineered. Too many partnerships are transactional, not transformative.',
                  em: false,
                },
                {
                  text: 'Vertex Loop exists to correct that. We are a company that treats software as craft, AI as responsibility, education as investment, and client success as the only meaningful metric.',
                  em: true,
                },
                {
                  text: 'Our five-division model is not a business strategy. It is a worldview — that technology problems are never purely technical, that talent is the ultimate competitive advantage, and that the best solutions emerge at the intersection of disciplines.',
                  em: false,
                },
              ].map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`text-xl md:text-2xl leading-relaxed tracking-tight ${p.em ? 'text-display italic font-normal text-[#7c6fad]' : 'text-slate-mid font-light'}`}
                >
                  {p.text}
                </motion.p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      {/* <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-ink" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[200px] rounded-full bg-[#4a7fa5]/12 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-[#7c6fad]/10 blur-[70px]" />
        <div className="relative z-10 section-padding">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/10"
          >
            {STATS.map((s) => (
              <motion.div key={s.label} variants={staggerItemVariants} className="text-center px-6">
                <div className="stat-value text-4xl md:text-5xl text-white mb-2">{s.value}</div>
                <div className="text-white/45 text-xs font-mono tracking-widest uppercase">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ── PRINCIPLES ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8e4dc] via-[#ede9e2] to-[#f0ece5]" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[400px] rounded-full bg-gold-soft/40 blur-[100px]" />
        <div className="relative z-10 section-padding">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="gold">Core Principles</SectionLabel>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.08} className="mb-16 max-w-2xl">
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
              The six beliefs that
              <br />
              <span className="italic font-normal text-[#a07830]">guide every decision.</span>
            </h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  variants={staggerItemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                  className="glass-card rounded-2xl p-7 group cursor-default relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 0% 0%, ${p.accent}10, transparent 65%)` }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${p.accent}12`, border: `1px solid ${p.accent}25` }}
                  >
                    <Icon size={20} style={{ color: p.accent }} />
                  </div>
                  <h3 className="font-semibold text-slate-ink text-lg mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-slate-mid text-sm leading-relaxed font-light">{p.body}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0ece5] to-[#f4f0eb]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-sky-soft/35 blur-[110px]" />
        <div className="relative z-10 section-padding">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="blue">Our Journey</SectionLabel>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.08} className="mb-20 max-w-xl">
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
              Eight years of
              <br />
              <span className="italic font-normal text-[#4a7fa5]">compounding conviction.</span>
            </h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-14 max-w-4xl mx-auto relative"
          >
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-px bg-gradient-to-b from-transparent via-pearl-200 to-transparent hidden md:block" />
            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f0eb] to-[#f0ede8]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-mint-soft/40 blur-[100px]" />
        <div className="relative z-10 section-padding">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="mint">Leadership</SectionLabel>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.08} className="mb-16 max-w-xl">
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
              The architects
              <br />
              <span className="italic font-normal text-[#3d8c7a]">behind the ecosystem.</span>
            </h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {LEADERSHIP.map((person) => (
              <motion.div
                key={person.name}
                variants={staggerItemVariants}
                whileHover={{ y: -6, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
                className="glass-card rounded-2xl p-6 group cursor-default relative overflow-hidden"
              >
                {/* Avatar */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${person.bg} flex items-center justify-center mb-5 shadow-glass text-display font-bold text-xl`}
                  style={{ color: person.accent }}
                >
                  {person.initials}
                </div>
                {/* Accent hover line */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${person.accent}80, transparent)` }}
                />
                <h3 className="font-semibold text-slate-ink text-base tracking-tight mb-1">{person.name}</h3>
                <div
                  className="text-xs font-mono tracking-wider uppercase mb-3"
                  style={{ color: person.accent }}
                >
                  {person.role}
                </div>
                <p className="text-slate-dim text-xs leading-relaxed">{person.focus}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dde9f4] via-[#e8e4f3] to-[#d8ede8]" />
        <div className="relative z-10 section-padding text-center max-w-3xl mx-auto">
          <AnimatedSection variant="scaleIn">
            <div className="tag-pill mb-6 mx-auto w-fit">Ready to partner?</div>
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em] mb-5">
              The best technology partnerships
              <br />
              <span className="italic font-normal text-[#7c6fad]">start with a conversation.</span>
            </h2>
            <p className="text-slate-mid text-lg font-light mb-8">
              Whether you know exactly what you need or are still defining the problem — we are the
              right room to be in.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start the Conversation <ArrowUpRight size={14} />
              </Link>
              <Link href="/ecosystem" className="btn-ghost">
                Explore Ecosystem
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}