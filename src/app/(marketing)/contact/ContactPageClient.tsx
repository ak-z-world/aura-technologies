'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  ArrowUpRight, Send, CheckCircle2, ChevronRight, ChevronLeft,
  Mail, MapPin, Clock,
  GraduationCap, Cpu, Server, Code2, TrendingUp, Layers,
  MessageSquare, Calendar, Phone,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/motion'
import { DIVISIONS } from '@/lib/data'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'


const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  GraduationCap, Cpu, Server, Code2, TrendingUp,
}

const ACCENT_CONFIGS = {
  academy:           { color: '#4a7fa5' },
  'ai-products':     { color: '#7c6fad' },
  'it-services':     { color: '#3d8c7a' },
  software:          { color: '#a07830' },
  'digital-marketing': { color: '#b04a4a' },
}

type EngagementType = 'project' | 'retainer' | 'advisory' | 'training' | 'multi' | ''
type BudgetRange = 'under-10k' | '10k-50k' | '50k-200k' | '200k-plus' | 'not-sure' | ''
type Timeline = 'asap' | '1-3m' | '3-6m' | '6m-plus' | 'not-sure' | ''

interface FormData {
  // Step 1 — Identity
  firstName: string
  lastName: string
  email: string
  company: string
  role: string

  // Step 2 — Engagement
  engagementType: EngagementType
  divisions: string[]

  // Step 3 — Project
  budget: BudgetRange
  timeline: Timeline
  message: string
  hearAbout: string
}

const INITIAL_FORM: FormData = {
  firstName: '', lastName: '', email: '', company: '', role: '',
  engagementType: '', divisions: [],
  budget: '', timeline: '', message: '', hearAbout: '',
}

const ENGAGEMENT_TYPES: { id: EngagementType; label: string; desc: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { id: 'project', label: 'Project-Based', desc: 'Defined scope, fixed outcome', icon: Layers },
  { id: 'retainer', label: 'Retainer', desc: 'Ongoing embedded capacity', icon: Clock },
  { id: 'advisory', label: 'Advisory', desc: 'Strategic guidance & consulting', icon: MessageSquare },
  { id: 'training', label: 'Training', desc: 'Team upskilling & education', icon: GraduationCap },
  { id: 'multi', label: 'Multi-Division', desc: 'Full ecosystem engagement', icon: Layers },
]

const BUDGET_OPTIONS: { id: BudgetRange; label: string }[] = [
  { id: 'under-10k', label: 'Under ₹10L / $10K' },
  { id: '10k-50k', label: '₹10L–₹50L / $10K–$50K' },
  { id: '50k-200k', label: '₹50L–₹2Cr / $50K–$200K' },
  { id: '200k-plus', label: '₹2Cr+ / $200K+' },
  { id: 'not-sure', label: 'Not yet defined' },
]

const TIMELINE_OPTIONS: { id: Timeline; label: string }[] = [
  { id: 'asap', label: 'Immediately' },
  { id: '1-3m', label: 'Within 1–3 months' },
  { id: '3-6m', label: 'Within 3–6 months' },
  { id: '6m-plus', label: '6+ months' },
  { id: 'not-sure', label: 'Still exploring' },
]

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="relative flex items-center justify-center transition-all duration-400"
            style={{
              width: i <= current ? 28 : 22,
              height: i <= current ? 28 : 22,
              borderRadius: '50%',
              background: i < current
                ? '#1a2333'
                : i === current
                ? 'linear-gradient(135deg, #4a7fa5, #7c6fad)'
                : 'rgba(100,116,139,0.15)',
              border: i === current ? 'none' : `1.5px solid ${i < current ? 'transparent' : 'rgba(100,116,139,0.25)'}`,
            }}
          >
            {i < current ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <span className="text-[10px] font-mono font-medium" style={{ color: i === current ? 'white' : '#94a3b8' }}>
                {i + 1}
              </span>
            )}
          </div>
          {i < total - 1 && (
            <div
              className="h-px transition-all duration-500"
              style={{ width: 32, background: i < current ? '#1a2333' : 'rgba(100,116,139,0.2)' }}
            />
          )}
        </div>
      ))}
      <span className="ml-3 text-xs font-mono text-slate-dim">
        Step {current + 1} of {total}
      </span>
    </div>
  )
}

function SelectChip({ label, selected, onClick, color = '#4a7fa5' }: { label: string; selected: boolean; onClick: () => void; color?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-250 border text-left"
      style={{
        background: selected ? `${color}12` : 'rgba(255,255,255,0.55)',
        borderColor: selected ? `${color}40` : 'rgba(255,255,255,0.6)',
        color: selected ? color : '#64748b',
        boxShadow: selected ? `0 0 0 1px ${color}30` : 'none',
      }}
    >
      {label}
    </button>
  )
}

function FormField({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-mono text-slate-dim uppercase tracking-wider mb-2">
        {label}{required && <span className="text-[#b04a4a] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls = "w-full px-4 py-3 rounded-xl bg-white/60 border border-white/70 text-slate-ink placeholder-slate-dim/50 text-sm focus:outline-none focus:border-[#4a7fa5]/40 focus:bg-white/80 transition-all"

export default function ContactPageClient() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  const set = (k: keyof FormData, v: unknown) => setForm(prev => ({ ...prev, [k]: v }))

  const toggleDivision = (id: string) => {
    setForm(prev => ({
      ...prev,
      divisions: prev.divisions.includes(id)
        ? prev.divisions.filter(d => d !== id)
        : [...prev.divisions, id],
    }))
  }

  const canProceed = () => {
    if (step === 0) return form.firstName && form.email
    if (step === 1) return form.engagementType && form.divisions.length > 0
    return form.message.length > 20
  }

  const handleSubmit = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1600))
    setLoading(false)
    setSubmitted(true)
  }

  const TOTAL_STEPS = 3

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, rgba(193,226,219,0.5) 0%, transparent 55%),
              radial-gradient(ellipse at 70% 60%, rgba(193,218,240,0.45) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 10%, rgba(216,210,236,0.35) 0%, transparent 50%),
              #f0f6f4`,
          }}
        />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: 'linear-gradient(rgba(26,35,51,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,35,51,1) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        <div className="relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7"
          >
            <SectionLabel accent="mint">Get in Touch</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-display font-semibold text-slate-ink text-5xl md:text-6xl lg:text-[80px] leading-[1.05] tracking-[-0.03em] mb-6 max-w-4xl"
          >
            Let&rsquo;s build something
            <br />
            <span className="italic font-normal text-[#3d8c7a]">extraordinary together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-mid text-lg font-light max-w-xl"
          >
            Whether you have a fully scoped project or just a hypothesis worth exploring — this
            is where the conversation begins. We respond within one business day.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section ref={sectionRef} className="relative py-12 pb-32 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0f6f4] to-[#e8f2ee]" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[500px] rounded-full bg-mint-soft/40 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-sky-soft/35 blur-[100px]" />
        </motion.div>
        <div className="relative z-10 section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-12">

            {/* ── FORM (3 cols) ── */}
            <AnimatedSection variant="slideLeft" className="lg:col-span-3">
              <div className="glass-card-strong rounded-3xl p-8 md:p-10 relative overflow-hidden min-h-[600px]">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3d8c7a]/40 to-transparent" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center py-20 text-center h-full"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-mint-soft border border-[#3d8c7a]/25 flex items-center justify-center mb-8"
                    >
                      <CheckCircle2 size={36} className="text-[#3d8c7a]" />
                    </motion.div>
                    <h3 className="text-display font-semibold text-slate-ink text-3xl mb-3 tracking-tight">
                      Inquiry received.
                    </h3>
                    <p className="text-slate-mid text-base max-w-sm leading-relaxed mb-10">
                      A Vertex Loop strategist will reach out within one business day. We look forward to
                      building something extraordinary with you.
                    </p>
                    <div className="flex gap-3">
                      <Link href="/ecosystem" className="btn-ghost text-sm">
                        Explore Our Divisions
                      </Link>
                      <Link href="/about" className="btn-primary text-sm">
                        Learn About Us <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <StepIndicator current={step} total={TOTAL_STEPS} />

                    <AnimatePresence mode="wait">
                      {/* ── STEP 0: Identity ── */}
                      {step === 0 && (
                        <motion.div
                          key="step-0"
                          initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-5"
                        >
                          <div>
                            <h3 className="text-display font-semibold text-slate-ink text-2xl tracking-tight mb-1">
                              Let&rsquo;s start with you.
                            </h3>
                            <p className="text-slate-dim text-sm">Tell us who you are and where you work.</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4 pt-2">
                            <FormField label="First Name" required>
                              <input
                                className={inputCls}
                                placeholder="Arunkumar"
                                value={form.firstName}
                                onChange={e => set('firstName', e.target.value)}
                              />
                            </FormField>
                            <FormField label="Last Name">
                              <input
                                className={inputCls}
                                placeholder="R."
                                value={form.lastName}
                                onChange={e => set('lastName', e.target.value)}
                              />
                            </FormField>
                          </div>
                          <FormField label="Work Email" required>
                            <input
                              type="email"
                              className={inputCls}
                              placeholder="you@company.com"
                              value={form.email}
                              onChange={e => set('email', e.target.value)}
                            />
                          </FormField>
                          <div className="grid grid-cols-2 gap-4">
                            <FormField label="Company">
                              <input
                                className={inputCls}
                                placeholder="Aura Enterprises"
                                value={form.company}
                                onChange={e => set('company', e.target.value)}
                              />
                            </FormField>
                            <FormField label="Your Role">
                              <input
                                className={inputCls}
                                placeholder="CTO / Founder / VP Eng."
                                value={form.role}
                                onChange={e => set('role', e.target.value)}
                              />
                            </FormField>
                          </div>
                        </motion.div>
                      )}

                      {/* ── STEP 1: Engagement ── */}
                      {step === 1 && (
                        <motion.div
                          key="step-1"
                          initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-6"
                        >
                          <div>
                            <h3 className="text-display font-semibold text-slate-ink text-2xl tracking-tight mb-1">
                              How do you want to work together?
                            </h3>
                            <p className="text-slate-dim text-sm">Select your engagement type and divisions of interest.</p>
                          </div>

                          <FormField label="Engagement Type" required>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {ENGAGEMENT_TYPES.map(({ id, label, desc, icon: Icon }) => (
                                <button
                                  key={id}
                                  type="button"
                                  onClick={() => set('engagementType', id)}
                                  className="flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-250"
                                  style={{
                                    background: form.engagementType === id ? 'rgba(74,127,165,0.08)' : 'rgba(255,255,255,0.55)',
                                    borderColor: form.engagementType === id ? 'rgba(74,127,165,0.4)' : 'rgba(255,255,255,0.65)',
                                    boxShadow: form.engagementType === id ? '0 0 0 1px rgba(74,127,165,0.25)' : 'none',
                                  }}
                                >
                                  <Icon size={16} className={form.engagementType === id ? 'text-[#4a7fa5] mt-0.5' : 'text-slate-dim mt-0.5'} />
                                  <div>
                                    <div className={`text-sm font-medium ${form.engagementType === id ? 'text-[#4a7fa5]' : 'text-slate-ink'}`}>{label}</div>
                                    <div className="text-xs text-slate-dim mt-0.5">{desc}</div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </FormField>

                          <FormField label="Division(s) of Interest" required>
                            <div className="grid grid-cols-1 gap-2">
                              {DIVISIONS.map(division => {
                                const accent = ACCENT_CONFIGS[division.id as keyof typeof ACCENT_CONFIGS]
                                const IconComponent = ICON_MAP[division.icon]
                                const selected = form.divisions.includes(division.id)
                                return (
                                  <button
                                    key={division.id}
                                    type="button"
                                    onClick={() => toggleDivision(division.id)}
                                    className="flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-250"
                                    style={{
                                      background: selected ? `${accent.color}08` : 'rgba(255,255,255,0.5)',
                                      borderColor: selected ? `${accent.color}35` : 'rgba(255,255,255,0.6)',
                                    }}
                                  >
                                    <div
                                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                      style={{ background: `${accent.color}12`, border: `1px solid ${accent.color}25` }}
                                    >
                                      {IconComponent && <IconComponent size={15} style={{ color: accent.color }} />}
                                    </div>
                                    <div className="flex-1">
                                      <div className={`text-sm font-medium ${selected ? 'text-slate-ink' : 'text-slate-mid'}`}>{division.title}</div>
                                      <div className="text-xs text-slate-dim">{division.tagline}</div>
                                    </div>
                                    <div
                                      className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0"
                                      style={{
                                        background: selected ? accent.color : 'transparent',
                                        borderColor: selected ? accent.color : 'rgba(100,116,139,0.25)',
                                      }}
                                    >
                                      {selected && (
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                          <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      )}
                                    </div>
                                  </button>
                                )
                              })}
                            </div>
                          </FormField>
                        </motion.div>
                      )}

                      {/* ── STEP 2: Project details ── */}
                      {step === 2 && (
                        <motion.div
                          key="step-2"
                          initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-5"
                        >
                          <div>
                            <h3 className="text-display font-semibold text-slate-ink text-2xl tracking-tight mb-1">
                              Tell us about your challenge.
                            </h3>
                            <p className="text-slate-dim text-sm">The more specific, the better we can respond.</p>
                          </div>

                          <FormField label="Budget Range">
                            <div className="flex flex-wrap gap-2">
                              {BUDGET_OPTIONS.map(o => (
                                <SelectChip
                                  key={o.id}
                                  label={o.label}
                                  selected={form.budget === o.id}
                                  onClick={() => set('budget', o.id)}
                                  color="#3d8c7a"
                                />
                              ))}
                            </div>
                          </FormField>

                          <FormField label="Ideal Start Timeline">
                            <div className="flex flex-wrap gap-2">
                              {TIMELINE_OPTIONS.map(o => (
                                <SelectChip
                                  key={o.id}
                                  label={o.label}
                                  selected={form.timeline === o.id}
                                  onClick={() => set('timeline', o.id)}
                                  color="#4a7fa5"
                                />
                              ))}
                            </div>
                          </FormField>

                          <FormField label="What are you trying to achieve?" required>
                            <textarea
                              rows={4}
                              className={inputCls}
                              placeholder="Describe your challenge, goal, or the outcome you need. Include any constraints, existing stack, or context that would help us understand your situation."
                              value={form.message}
                              onChange={e => set('message', e.target.value)}
                              style={{ resize: 'none' }}
                            />
                          </FormField>

                          <FormField label="How did you hear about us?">
                            <input
                              className={inputCls}
                              placeholder="LinkedIn / referral / search / event…"
                              value={form.hearAbout}
                              onChange={e => set('hearAbout', e.target.value)}
                            />
                          </FormField>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-pearl-100">
                      <button
                        type="button"
                        onClick={() => setStep(s => s - 1)}
                        disabled={step === 0}
                        className="flex items-center gap-2 text-sm text-slate-dim hover:text-slate-ink transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft size={16} /> Back
                      </button>

                      {step < TOTAL_STEPS - 1 ? (
                        <button
                          type="button"
                          onClick={() => setStep(s => s + 1)}
                          disabled={!canProceed()}
                          className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Continue <ChevronRight size={14} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={loading || !canProceed()}
                          className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Sending…
                            </>
                          ) : (
                            <>Submit Inquiry <Send size={14} /></>
                          )}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </AnimatedSection>

            {/* ── INFO PANEL (2 cols) ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Direct contact */}
              <AnimatedSection variant="slideRight" delay={0.08}>
                <div className="glass-card rounded-2xl p-6">
                  <h4 className="font-semibold text-slate-ink text-sm tracking-tight mb-5 flex items-center gap-2">
                    <Phone size={14} className="text-[#3d8c7a]" /> Prefer direct contact?
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        icon: Mail,
                        label: 'Email',
                        value: 'hello@vertexloop.io',
                        href: 'mailto:hello@vertexloop.io',
                        color: '#4a7fa5',
                      },
                      {
                        icon: Calendar,
                        label: 'Schedule a call',
                        value: 'Book 30-min strategy session',
                        href: 'https://calendly.com/vertexloop',
                        color: '#7c6fad',
                      },
                      {
                        icon: MessageSquare,
                        label: 'LinkedIn',
                        value: 'linkedin.com/company/vertex-loop',
                        href: 'https://linkedin.com/company/vertex-loop',
                        color: '#3d8c7a',
                      },
                    ].map(({ icon: Icon, label, value, href, color }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/50 border border-white/65 hover:bg-white/80 hover:shadow-glass transition-all duration-300 group"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                          style={{ background: `${color}10`, border: `1px solid ${color}25` }}
                        >
                          <Icon size={15} style={{ color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-mono text-slate-dim uppercase tracking-wider">{label}</div>
                          <div className="text-sm font-medium text-slate-ink truncate">{value}</div>
                        </div>
                        <ArrowUpRight size={13} className="text-slate-dim group-hover:text-slate-ink transition-colors flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Location */}
              <AnimatedSection variant="slideRight" delay={0.13}>
                <div className="glass-card rounded-2xl p-6">
                  <h4 className="font-semibold text-slate-ink text-sm tracking-tight mb-4 flex items-center gap-2">
                    <MapPin size={14} className="text-[#b04a4a]" /> Global Operations
                  </h4>
                  <div className="space-y-3">
                    {[
                      { city: 'Chennai', region: 'India — HQ', status: 'Primary', color: '#4a7fa5' },
                      { city: 'Bangalore', region: 'India — Engineering', status: 'Active', color: '#7c6fad' },
                      { city: 'Dubai', region: 'UAE — MENA', status: 'Active', color: '#3d8c7a' },
                      { city: 'Singapore', region: 'SEA — APAC', status: 'Active', color: '#a07830' },
                    ].map(({ city, region, status, color }) => (
                      <div key={city} className="flex items-center justify-between py-2.5 border-b border-pearl-100 last:border-0">
                        <div>
                          <div className="text-sm font-medium text-slate-ink">{city}</div>
                          <div className="text-xs text-slate-dim">{region}</div>
                        </div>
                        <span
                          className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                          style={{ background: `${color}10`, color, border: `1px solid ${color}20` }}
                        >
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Response commitment */}
              <AnimatedSection variant="slideRight" delay={0.18}>
                <div className="glass-card rounded-2xl p-6">
                  <h4 className="font-semibold text-slate-ink text-sm tracking-tight mb-4 flex items-center gap-2">
                    <Clock size={14} className="text-[#a07830]" /> Our commitment
                  </h4>
                  <div className="space-y-3">
                    {[
                      { promise: 'Response within 1 business day', icon: '⚡' },
                      { promise: 'NDA available on request', icon: '🔒' },
                      { promise: 'No sales pressure, ever', icon: '✅' },
                      { promise: 'Proposal within 3 days of first call', icon: '📋' },
                    ].map(({ promise, icon }) => (
                      <div key={promise} className="flex items-center gap-3 text-sm text-slate-mid">
                        <span>{icon}</span> {promise}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Social */}
              <AnimatedSection variant="slideRight" delay={0.22}>
                <div className="glass-card rounded-2xl p-5 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-dim">Follow our work</span>
                  <div className="flex items-center gap-2">
                    {[
                      // Use the new FontAwesome icons from react-icons
                      { icon: FaLinkedin, href: 'https://linkedin.com/company/vertex-loop', label: 'LinkedIn' },
                      { icon: FaTwitter, href: 'https://x.com/LoopVertex99532', label: 'Twitter' },
                      { icon: FaGithub, href: '#', label: 'GitHub' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/60 border border-white/70 text-slate-dim hover:text-slate-ink hover:bg-white hover:shadow-glass transition-all duration-300"
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ STRIP ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f2ee] to-[#f0ece5]" />
        <div className="relative z-10 section-padding max-w-5xl mx-auto">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="mint">Common Questions</SectionLabel>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.06} className="mb-12">
            <h2 className="text-display font-semibold text-slate-ink text-3xl md:text-4xl tracking-tight">
              Before you reach out.
            </h2>
          </AnimatedSection>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[
              {
                q: 'How quickly do you respond?',
                a: 'We guarantee a response within one business day. For urgent matters, flag it in your message and we will prioritize accordingly.',
              },
              {
                q: 'Do we need to know exactly what we need?',
                a: 'No. Many of our best engagements started with "we have a problem we haven\'t fully defined yet." Discovery is part of what we do.',
              },
              {
                q: 'Do you work with early-stage startups?',
                a: 'Yes, selectively. We work with startups that have conviction about their problem and are ready to build with quality from day one.',
              },
              {
                q: 'What geographies do you serve?',
                a: 'We work globally. Our team spans India, UAE, and Singapore, and we operate across time zones for US, Europe, and APAC clients.',
              },
              {
                q: 'Can we engage just one division?',
                a: 'Absolutely. Many clients start with one division and expand. There is no pressure to engage more than what your challenge requires.',
              },
              {
                q: 'What makes Vertex Loop different from an agency?',
                a: 'We are not a service provider — we are an engineering and intelligence partner. We own outcomes, not just deliverables. That changes everything.',
              },
            ].map(({ q, a }) => (
              <motion.div
                key={q}
                variants={staggerItemVariants}
                className="glass-card rounded-2xl p-6 group"
              >
                <h3 className="font-semibold text-slate-ink text-sm mb-3 tracking-tight">{q}</h3>
                <p className="text-slate-mid text-sm leading-relaxed font-light">{a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}