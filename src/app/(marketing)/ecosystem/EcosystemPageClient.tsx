'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  GraduationCap, Cpu, Server, Code2, TrendingUp,
  ArrowUpRight, Check, ChevronRight, Layers, Users, Clock, BarChart3,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/motion'
import { DIVISIONS } from '@/lib/data'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  GraduationCap, Cpu, Server, Code2, TrendingUp,
}

const DIVISION_DETAILS: Record<string, {
  longDesc: string
  process: { step: string; label: string; desc: string }[]
  deliverables: string[]
  idealFor: string[]
  caseStudy: { title: string; result: string; detail: string }
}> = {
  academy: {
    longDesc:
      'The Vertex Loop Tech Academy is a world-class technical education institution designed for two audiences: ambitious individuals seeking elite engineering careers, and organizations that need to rapidly upskill their workforce. Our curriculum is co-designed with CTOs and senior engineers, updated quarterly, and always one cycle ahead of market demand.',
    process: [
      { step: '01', label: 'Needs Assessment', desc: 'We map your skill gaps or individual goals against market requirements.' },
      { step: '02', label: 'Curriculum Design', desc: 'Custom or cohort tracks built around real production scenarios.' },
      { step: '03', label: 'Intensive Training', desc: 'Project-based, mentorship-heavy, zero-theory bloat programs.' },
      { step: '04', label: 'Outcome Tracking', desc: 'Placement support, performance reviews, and post-completion mentorship.' },
    ],
    deliverables: [
      'Custom corporate training programs',
      'AI & ML engineering bootcamps',
      'Cloud & DevOps certification tracks',
      'Full-stack development intensives',
      'Data science & analytics programs',
      'Technical leadership workshops',
    ],
    idealFor: ['Enterprises upskilling teams', 'Startups building engineering bench', 'Career-changing professionals', 'Universities seeking industry curriculum'],
    caseStudy: {
      title: 'FinStack Technologies',
      result: '42 engineers upskilled in 12 weeks',
      detail: 'Designed and delivered a custom AI/ML training track for FinStack\'s engineering team, resulting in the company shipping their first AI-powered feature set within one quarter.',
    },
  },
  'ai-products': {
    longDesc:
      'We do not integrate AI as an afterthought. We architect intelligence as the foundational layer of your product. From LLM-powered backends to autonomous agent systems, multimodal pipelines, and fine-tuned domain models — we build AI products that perform in production, not just in demos.',
    process: [
      { step: '01', label: 'AI Feasibility Audit', desc: 'Assess what AI can genuinely add versus what is marketing noise.' },
      { step: '02', label: 'Architecture Design', desc: 'Model selection, pipeline design, data strategy, and infra planning.' },
      { step: '03', label: 'Build & Evaluate', desc: 'Iterative development with rigorous evals, red-teaming, and benchmark testing.' },
      { step: '04', label: 'Production & Monitoring', desc: 'Deployment, observability, drift detection, and continuous improvement.' },
    ],
    deliverables: [
      'LLM integration & orchestration',
      'Fine-tuning & RLHF workflows',
      'Autonomous agent architecture',
      'Voice AI & conversational systems',
      'RAG pipeline engineering',
      'AI SaaS platform development',
    ],
    idealFor: ['SaaS companies adding AI features', 'Enterprises automating workflows', 'AI-first startups', 'Research teams productizing models'],
    caseStudy: {
      title: 'LegalEdge Platform',
      result: '89% reduction in document review time',
      detail: 'Built a multi-agent RAG system for contract analysis, combining fine-tuned legal LLMs with structured extraction pipelines — cutting review time from hours to minutes.',
    },
  },
  'it-services': {
    longDesc:
      'Infrastructure is not a cost center. It is the silent architecture of competitive advantage. Our IT Services division designs, deploys, and manages enterprise-grade cloud infrastructure, security frameworks, and 24/7 operational systems for organizations that cannot afford downtime — or complacency.',
    process: [
      { step: '01', label: 'Infrastructure Audit', desc: 'Comprehensive assessment of current state, risk, and opportunity.' },
      { step: '02', label: 'Architecture Blueprint', desc: 'Cloud-native design with security, compliance, and scale baked in.' },
      { step: '03', label: 'Migration & Deployment', desc: 'Zero-downtime migrations with rollback safeguards at every stage.' },
      { step: '04', label: 'Managed Operations', desc: '24/7 NOC, proactive monitoring, incident response, and optimization.' },
    ],
    deliverables: [
      'Cloud infrastructure design & migration',
      'Kubernetes & container orchestration',
      'Cybersecurity frameworks & compliance',
      '24/7 managed NOC services',
      'Disaster recovery & business continuity',
      'Enterprise system integration',
    ],
    idealFor: ['Enterprises migrating to cloud', 'Regulated industries needing compliance', 'Companies with uptime SLAs', 'Organizations post-security incident'],
    caseStudy: {
      title: 'RegionBank Financial',
      result: '99.98% uptime over 18 months',
      detail: 'Redesigned and migrated a 12-year-old on-premise banking infrastructure to a multi-region AWS architecture with full SOC 2 Type II compliance.',
    },
  },
  software: {
    longDesc:
      'Software engineering is where we began, and it remains the most rigorous expression of the Vertex Loop standard. We design and build complex distributed systems, high-performance APIs, real-time data platforms, and bespoke software products — with architectural depth that most engineering teams cannot achieve internally.',
    process: [
      { step: '01', label: 'Technical Discovery', desc: 'Deep-dive into requirements, constraints, existing architecture, and non-negotiables.' },
      { step: '02', label: 'System Design', desc: 'Architecture document, data model, API contracts, and technology decisions ratified before code.' },
      { step: '03', label: 'Iterative Build', desc: 'Sprint-based delivery with CI/CD, automated testing, and weekly demos.' },
      { step: '04', label: 'Handoff & Support', desc: 'Comprehensive documentation, knowledge transfer, and optional ongoing support.' },
    ],
    deliverables: [
      'Distributed system architecture',
      'High-performance API design',
      'Real-time data pipelines',
      'Platform & SDK engineering',
      'Database optimization & design',
      'Legacy system modernization',
    ],
    idealFor: ['Startups building core product', 'Enterprises modernizing legacy systems', 'Teams needing surge capacity', 'Products requiring specialized architecture'],
    caseStudy: {
      title: 'TradeFlow Logistics',
      result: '12× throughput improvement',
      detail: 'Redesigned a monolithic order management system into an event-driven microservices architecture, reducing P99 latency from 3.2s to under 180ms at 10× peak load.',
    },
  },
  'digital-marketing': {
    longDesc:
      'Marketing without measurement is art. Marketing with measurement — and AI augmentation — is engineering. Our Digital Marketing division applies the same analytical rigor we bring to software to every campaign, channel, and conversion funnel. We do not chase impressions. We engineer growth.',
    process: [
      { step: '01', label: 'Market Intelligence', desc: 'Competitive landscape, audience mapping, channel audit, and positioning analysis.' },
      { step: '02', label: 'Strategy Architecture', desc: 'Full-funnel strategy with AI-powered content planning and channel allocation.' },
      { step: '03', label: 'Campaign Execution', desc: 'Creative production, campaign launch, and daily performance optimization.' },
      { step: '04', label: 'Analytics & Attribution', desc: 'Custom dashboards, multi-touch attribution, and monthly strategy reviews.' },
    ],
    deliverables: [
      'AI-powered campaign strategy',
      'SEO architecture & content systems',
      'Performance marketing & PPC',
      'Brand identity & positioning',
      'Marketing automation setup',
      'Analytics & attribution modeling',
    ],
    idealFor: ['B2B SaaS companies', 'D2C brands scaling acquisition', 'Enterprises relaunching brands', 'Startups establishing market presence'],
    caseStudy: {
      title: 'NovaPay FinTech',
      result: '4.6× ROAS in 90 days',
      detail: 'Built a full-funnel performance marketing system integrating AI-generated ad variants, dynamic bidding, and closed-loop attribution — from zero to $2M monthly ad spend profitably.',
    },
  },
}

const ACCENT_CONFIGS = {
  academy: { color: '#4a7fa5', label: 'blue' as const },
  'ai-products': { color: '#7c6fad', label: 'lavender' as const },
  'it-services': { color: '#3d8c7a', label: 'mint' as const },
  software: { color: '#a07830', label: 'gold' as const },
  'digital-marketing': { color: '#b04a4a', label: 'rose' as const },
}

function DivisionTab({ division, isActive, onClick }: { division: typeof DIVISIONS[0]; isActive: boolean; onClick: () => void }) {
  const IconComponent = ICON_MAP[division.icon]
  const accent = ACCENT_CONFIGS[division.id as keyof typeof ACCENT_CONFIGS]

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: isActive ? 0 : -2 }}
      className={`relative flex items-center gap-3 px-5 py-3.5 rounded-2xl text-left transition-all duration-300 flex-shrink-0 ${
        isActive
          ? 'bg-white/90 shadow-glass-lg border border-white/80'
          : 'bg-white/40 hover:bg-white/60 border border-transparent'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="tab-accent"
          className="absolute top-0 left-4 right-4 h-[2px] rounded-b-full"
          style={{ background: `linear-gradient(90deg, ${accent.color}, ${accent.color}60)` }}
        />
      )}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          background: isActive ? `${accent.color}18` : 'rgba(255,255,255,0.5)',
          border: isActive ? `1px solid ${accent.color}30` : '1px solid rgba(255,255,255,0.4)',
        }}
      >
        {IconComponent && <IconComponent size={17} style={{ color: isActive ? accent.color : '#94a3b8' }} />}
      </div>
      <span className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-slate-ink' : 'text-slate-dim'}`}>
        {division.title}
      </span>
    </motion.button>
  )
}

function DivisionDetail({ division }: { division: typeof DIVISIONS[0] }) {
  const detail = DIVISION_DETAILS[division.id]
  const accent = ACCENT_CONFIGS[division.id as keyof typeof ACCENT_CONFIGS]
  const IconComponent = ICON_MAP[division.icon]

  return (
    <motion.div
      key={division.id}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-7"
    >
      {/* Left: Main info */}
      <div className="lg:col-span-2 space-y-6">
        {/* Header card */}
        <div className="glass-card-strong rounded-3xl p-8 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 0% 0%, ${division.gradient.from} 0%, transparent 60%)`,
            }}
          />
          <div className="relative z-10">
            <div className="flex items-start gap-5 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glass"
                style={{ background: `${accent.color}16`, border: `1.5px solid ${accent.color}30` }}
              >
                {IconComponent && <IconComponent size={28} style={{ color: accent.color }} />}
              </div>
              <div>
                <div className="text-xs font-mono tracking-[0.1em] uppercase mb-1.5" style={{ color: accent.color }}>
                  {division.tagline}
                </div>
                <h2 className="text-display font-semibold text-slate-ink text-3xl tracking-tight">{division.title}</h2>
              </div>
            </div>
            <p className="text-slate-mid leading-relaxed text-base font-light">{detail.longDesc}</p>
            <div className="mt-5 flex items-center gap-3">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-mono font-medium"
                style={{ background: `${accent.color}12`, color: accent.color, border: `1px solid ${accent.color}25` }}
              >
                {division.stats.value} {division.stats.label}
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium transition-all hover:gap-2"
                style={{ color: accent.color }}
              >
                Engage this division <ChevronRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="glass-card rounded-3xl p-7">
          <h3 className="font-semibold text-slate-ink text-lg mb-6 tracking-tight">How we work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {detail.process.map((p) => (
              <div key={p.step} className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-white/60">
                <div
                  className="text-2xl font-display font-semibold leading-none flex-shrink-0 mt-0.5"
                  style={{ color: `${accent.color}50` }}
                >
                  {p.step}
                </div>
                <div>
                  <div className="font-medium text-slate-ink text-sm mb-1">{p.label}</div>
                  <div className="text-slate-dim text-xs leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Deliverables, ideal for, case study */}
      <div className="space-y-5">
        {/* Deliverables */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-semibold text-slate-ink text-sm mb-4 tracking-tight flex items-center gap-2">
            <Layers size={14} style={{ color: accent.color }} /> What we deliver
          </h3>
          <ul className="space-y-2.5">
            {detail.deliverables.map((d) => (
              <li key={d} className="flex items-center gap-2.5 text-xs text-slate-mid">
                <Check size={11} style={{ color: accent.color }} className="flex-shrink-0" /> {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal for */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-semibold text-slate-ink text-sm mb-4 tracking-tight flex items-center gap-2">
            <Users size={14} style={{ color: accent.color }} /> Ideal for
          </h3>
          <div className="flex flex-col gap-2">
            {detail.idealFor.map((f) => (
              <span key={f} className="tag-pill justify-start">{f}</span>
            ))}
          </div>
        </div>

        {/* Case study */}
        <div
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${accent.color}10, ${accent.color}06)`,
            border: `1px solid ${accent.color}25`,
          }}
        >
          <div className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: accent.color }}>
            Case Study
          </div>
          <div className="font-semibold text-slate-ink text-sm mb-1">{detail.caseStudy.title}</div>
          <div
            className="text-lg font-display font-semibold mb-3 tracking-tight"
            style={{ color: accent.color }}
          >
            {detail.caseStudy.result}
          </div>
          <p className="text-slate-mid text-xs leading-relaxed">{detail.caseStudy.detail}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function EcosystemPageClient() {
  const [activeId, setActiveId] = useState(DIVISIONS[0].id)
  const activeDivision = DIVISIONS.find((d) => d.id === activeId)!

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <PageHero
        label="Our Ecosystem"
        labelAccent="blue"
        headline={
          <>
            Five divisions.
            <br />
            <span className="italic font-normal text-[#4a7fa5]">Infinite leverage.</span>
          </>
        }
        subline="Each Vertex Loop division is independently world-class. Integrated across five domains — education, AI products, software, IT, and marketing — they create an ecosystem with compounding advantages no single-service firm can replicate."
        gradient={{
          orb1: 'rgba(193,218,240,0.55)',
          orb2: 'rgba(193,226,219,0.4)',
          orb3: 'rgba(216,210,236,0.3)',
          base: '#f0f4f8',
        }}
      />

      {/* ── ECOSYSTEM MAP VISUAL ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8] to-[#ede9e2]" />
        <div className="relative z-10 section-padding">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-3"
          >
            {DIVISIONS.map((division) => {
              const accent = ACCENT_CONFIGS[division.id as keyof typeof ACCENT_CONFIGS]
              const IconComponent = ICON_MAP[division.icon]
              return (
                <motion.button
                  key={division.id}
                  variants={staggerItemVariants}
                  onClick={() => { setActiveId(division.id); document.getElementById('division-detail')?.scrollIntoView({ behavior: 'smooth' }); }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="glass-card rounded-2xl p-5 text-center group cursor-pointer relative overflow-hidden transition-shadow duration-300 hover:shadow-glass-lg"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent.color}12, transparent 70%)` }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${accent.color}12`, border: `1px solid ${accent.color}25` }}
                  >
                    {IconComponent && <IconComponent size={22} style={{ color: accent.color }} />}
                  </div>
                  <div className="text-sm font-medium text-slate-ink">{division.title}</div>
                  <div className="text-xs text-slate-dim mt-1 font-mono">{division.stats.value}</div>
                  <div className="text-[10px] text-slate-dim/70 font-mono">{division.stats.label}</div>
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── TABBED DIVISION DEEP-DIVE ── */}
      <section id="division-detail" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ede9e2] to-[#f0ece5]" />
        <div className="relative z-10 section-padding">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="blue">Division Deep-Dive</SectionLabel>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.06} className="mb-10 max-w-xl">
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em]">
              Explore each division
              <br />
              <span className="italic font-normal text-[#4a7fa5]">in depth.</span>
            </h2>
          </AnimatedSection>

          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 mb-10 p-2 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 w-fit">
            {DIVISIONS.map((d) => (
              <DivisionTab
                key={d.id}
                division={d}
                isActive={activeId === d.id}
                onClick={() => setActiveId(d.id)}
              />
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <DivisionDetail key={activeId} division={activeDivision} />
          </AnimatePresence>
        </div>
      </section>

      {/* ── SYNERGY SECTION ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0ece5] to-[#edeae4]" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-sky-soft/35 blur-[100px]" />
        <div className="relative z-10 section-padding">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="mint">Ecosystem Synergy</SectionLabel>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection variant="fadeUp" delay={0.06}>
                <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em] mb-6">
                  The more you engage,
                  <br />
                  <span className="italic font-normal text-[#3d8c7a]">the more you gain.</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeUp" delay={0.12}>
                <p className="text-slate-mid text-lg font-light leading-relaxed mb-8">
                  Companies that engage multiple Vertex Loop divisions don't just save on coordination — they access
                  a level of integrated intelligence that is architecturally impossible to replicate with
                  separate vendors.
                </p>
                <Link href="/contact" className="btn-primary inline-flex">
                  Design Your Engagement <ArrowUpRight size={14} />
                </Link>
              </AnimatedSection>
            </div>
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { combo: 'Academy + Software', benefit: 'Train and build simultaneously — teams learn on your real product', icon: '🎓 + 💻' },
                { combo: 'AI Products + IT Services', benefit: 'Ship AI systems with the infrastructure to run them at scale', icon: '🤖 + 🏗️' },
                { combo: 'Software + Digital Marketing', benefit: 'Build the product and the growth engine in one coordinated motion', icon: '⚙️ + 📈' },
                { combo: 'All Five Divisions', benefit: 'The compounding advantage — talent, technology, infrastructure, and growth', icon: '⚡' },
              ].map((item) => (
                <motion.div
                  key={item.combo}
                  variants={staggerItemVariants}
                  className="glass-card rounded-2xl p-5 flex items-center gap-5"
                >
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-medium text-slate-ink text-sm mb-1">{item.combo}</div>
                    <div className="text-slate-dim text-xs">{item.benefit}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dde9f4] via-[#e8e4f3] to-[#d8ede8]" />
        <div className="relative z-10 section-padding text-center max-w-3xl mx-auto">
          <AnimatedSection variant="scaleIn">
            <div className="tag-pill mb-6 mx-auto w-fit">Ready to begin?</div>
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl leading-tight tracking-[-0.03em] mb-5">
              Which division does
              <br />
              <span className="italic font-normal text-[#4a7fa5]">your challenge need?</span>
            </h2>
            <p className="text-slate-mid text-lg font-light mb-8">
              Tell us what you are building, and we will tell you exactly how Vertex Loop can help — from a single division to the full ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Start a Conversation <ArrowUpRight size={14} /></Link>
              <Link href="/why-us" className="btn-ghost">Why Vertex Loop</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}