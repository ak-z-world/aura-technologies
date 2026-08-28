'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowUpRight, Send, CheckCircle2,
  Mail, MapPin, Clock, AlertCircle, RefreshCw,
  GraduationCap, Cpu, Server, Code2, TrendingUp,
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
import { trackGAEvent } from '@/components/analytics/GoogleAnalytics'

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

type Timeline = 'asap' | '1-3m' | '3-6m' | '6m-plus' | 'not-sure' | ''
type PreferredContact = 'email' | 'phone' | 'whatsapp' | 'any'

interface ContactFormData {
  // Identity & Contact
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  role: string
  country: string

  // Scope & Focus
  divisions: string[]
  preferredContactMethod: PreferredContact

  // Project Details
  timeline: Timeline
  message: string
  hearAbout: string

  // Anti-Spam
  _hp_company_url: string
}

const INITIAL_FORM: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  country: '',
  divisions: ['ai-products'],
  preferredContactMethod: 'email',
  timeline: 'asap',
  message: '',
  hearAbout: '',
  _hp_company_url: '',
}

const TIMELINE_OPTIONS: { id: Timeline; label: string }[] = [
  { id: 'asap', label: 'Immediately' },
  { id: '1-3m', label: 'Within 1–3 months' },
  { id: '3-6m', label: 'Within 3–6 months' },
  { id: '6m-plus', label: '6+ months' },
  { id: 'not-sure', label: 'Exploring / Advisory' },
]

const CONTACT_PREFERENCES: { id: PreferredContact; label: string; icon: string }[] = [
  { id: 'email', label: 'Email', icon: '✉️' },
  { id: 'phone', label: 'Phone Call', icon: '📞' },
  { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
  { id: 'any', label: 'Any Method', icon: '⚡' },
]

function FormField({
  label,
  id,
  children,
  required,
  error,
  hint,
}: {
  label: string
  id?: string
  children: React.ReactNode
  required?: boolean
  error?: string
  hint?: string
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-xs font-mono text-slate-dim uppercase tracking-wider">
          {label}{required && <span className="text-[#b04a4a] ml-1 font-bold">*</span>}
        </label>
        {hint && <span className="text-[11px] font-mono text-slate-400">{hint}</span>}
      </div>
      {children}
      {error && (
        <p id={id ? `${id}-error` : undefined} className="text-xs text-[#b04a4a] flex items-center gap-1.5 mt-1 font-medium animate-in fade-in duration-200">
          <AlertCircle size={13} className="flex-shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

const inputBaseCls = "w-full px-4 py-3 rounded-xl bg-white/70 border text-slate-ink placeholder-slate-dim/50 text-sm focus:outline-none focus:bg-white transition-all shadow-sm"

export default function ContactPageClient() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formLoadedAt, setFormLoadedAt] = useState<number>(() => Date.now())

  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  useEffect(() => {
    trackGAEvent('contact_form_view', { page: '/contact' })
  }, [])

  const setField = (k: keyof ContactFormData, v: unknown) => {
    setForm(prev => ({ ...prev, [k]: v }))
    // Clear error for that field if user starts typing
    if (fieldErrors[k]) {
      setFieldErrors(prev => {
        const copy = { ...prev }
        delete copy[k]
        return copy
      })
    }
    if (generalError) setGeneralError(null)
  }

  const toggleDivision = (id: string) => {
    setForm(prev => {
      const exists = prev.divisions.includes(id)
      const newDivisions = exists
        ? prev.divisions.filter(d => d !== id)
        : [...prev.divisions, id]
      return { ...prev, divisions: newDivisions.length > 0 ? newDivisions : [id] }
    })
  }

  const validateClientSide = (): boolean => {
    const errors: Record<string, string> = {}

    if (!form.firstName.trim()) {
      errors.firstName = 'First name is required.'
    } else if (form.firstName.trim().length < 2) {
      errors.firstName = 'First name must be at least 2 characters.'
    }

    if (!form.email.trim()) {
      errors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Please enter a valid email address.'
    }

    if (!form.phone.trim()) {
      errors.phone = 'Phone number is required.'
    } else if (form.phone.trim().replace(/\D/g, '').length < 7) {
      errors.phone = 'Please enter a valid phone number with country code (e.g. +91 94457 70160).'
    }

    if (!form.message.trim()) {
      errors.message = 'Please provide details about your project or inquiry.'
    } else if (form.message.trim().length < 15) {
      errors.message = 'Message must be at least 15 characters long.'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateClientSide()) {
      setGeneralError('Please fill in all required fields accurately before submitting.')
      return
    }

    setLoading(true)
    setGeneralError(null)
    setFieldErrors({})

    trackGAEvent('contact_form_submit', {
      divisions: form.divisions.join(','),
      contactMethod: form.preferredContactMethod,
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _form_loaded_at: formLoadedAt,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors)
        }
        throw new Error(result.message || result.error || 'Failed to dispatch inquiry. Please try again.')
      }

      // Success
      setSubmitted(true)
      trackGAEvent('contact_form_success', {
        divisions: form.divisions.join(','),
      })

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred while sending your inquiry.'
      setGeneralError(msg)
      trackGAEvent('contact_form_error', { error: msg })
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setForm(INITIAL_FORM)
    setFieldErrors({})
    setGeneralError(null)
    setSubmitted(false)
    setFormLoadedAt(Date.now())
  }

  return (
    <main className="relative overflow-hidden bg-[#f6f4f0] text-slate-ink">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 md:pt-34 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, rgba(193,226,219,0.5) 0%, transparent 55%),
              radial-gradient(ellipse at 70% 60%, rgba(193,218,240,0.45) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 10%, rgba(216,210,236,0.35) 0%, transparent 50%),
              #f0f6f4`,
          }}
        />
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: 'linear-gradient(rgba(26,35,51,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,35,51,1) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7"
          >
            <SectionLabel accent="mint">Get in Touch · Vertex Loop Pvt Ltd</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-display font-semibold text-slate-ink text-5xl md:text-6xl lg:text-[76px] leading-[1.05] tracking-[-0.03em] mb-6 max-w-4xl"
          >
            Let&rsquo;s build something
            <br />
            <span className="italic font-normal text-[#3d8c7a]">extraordinary together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-mid text-lg font-light max-w-2xl leading-relaxed"
          >
            Whether you need custom AI development, enterprise software architecture, cloud DevOps, or university training with Crack Leap — our senior engineering team responds within one business day.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT SECTION ── */}
      <section ref={sectionRef} className="relative py-8 pb-16 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0f6f4] to-[#e8f2ee]" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[500px] rounded-full bg-mint-soft/40 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-sky-soft/35 blur-[100px]" />
        </motion.div>

        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-12">

            {/* ── CONTACT FORM (3 cols) ── */}
            <AnimatedSection variant="slideLeft" className="lg:col-span-3">
              <div className="glass-card-strong rounded-3xl p-8 md:p-10 relative overflow-hidden min-h-[640px] border border-white/80 shadow-glass-lg">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3d8c7a]/40 to-transparent" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center py-16 text-center h-full"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-mint-soft border border-[#3d8c7a]/30 flex items-center justify-center mb-6 shadow-sm"
                    >
                      <CheckCircle2 size={38} className="text-[#3d8c7a]" />
                    </motion.div>
                    
                    <h2 className="text-display font-semibold text-slate-ink text-3xl mb-3 tracking-tight">
                      Inquiry Received Successfully!
                    </h2>
                    <p className="text-slate-mid text-base max-w-md leading-relaxed mb-8 font-light">
                      Thank you, <strong>{form.firstName}</strong>. We have dispatched your requirements to our engineering leadership team. A Vertex Loop strategist will review your requirements and reach out via <strong>{form.preferredContactMethod}</strong> ({form.email}) within one business day.
                    </p>

                    {/* Inquiry Recap Card */}
                    <div className="w-full max-w-md bg-white/70 rounded-2xl p-5 border border-white/80 text-left text-xs space-y-2 mb-8 shadow-sm">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-[#3d8c7a] font-bold mb-1">
                        Inquiry Reference Details
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">Contact:</span>
                        <span className="font-medium text-slate-800">{form.firstName} {form.lastName} ({form.phone})</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">Email:</span>
                        <span className="font-medium text-slate-800">{form.email}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span className="text-slate-500">Divisions:</span>
                        <span className="font-medium text-slate-800">{form.divisions.join(', ')}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">Timeline:</span>
                        <span className="font-medium text-slate-800">{form.timeline || 'Flexible'}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="btn-ghost text-sm inline-flex items-center gap-2"
                      >
                        <RefreshCw size={14} /> Send Another Inquiry
                      </button>
                      <Link href="/services" className="btn-primary text-sm">
                        Explore Engineering Services <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <form 
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col h-full space-y-8"
                    aria-label="Vertex Loop Pvt Ltd Contact Form"
                  >
                    <div>
                      <h2 className="text-display font-semibold text-slate-ink text-3xl tracking-tight mb-2">
                        Start an Architectural Discovery
                      </h2>
                      <p className="text-slate-dim text-sm font-light">
                        Tell us about your organization and technical requirements. Direct email: <a href="mailto:hello@vertexloop.in" className="text-[#3d8c7a] font-medium hover:underline">hello@vertexloop.in</a>.
                      </p>
                    </div>

                    {/* Honeypot field (hidden from legitimate users, populated by bots) */}
                    <div className="sr-only" aria-hidden="true" style={{ display: 'none' }}>
                      <label htmlFor="_hp_company_url">Website URL (Leave blank)</label>
                      <input
                        id="_hp_company_url"
                        type="text"
                        name="_hp_company_url"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form._hp_company_url}
                        onChange={e => setField('_hp_company_url', e.target.value)}
                      />
                    </div>

                    {/* General Error Banner */}
                    {generalError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 shadow-sm"
                        role="alert"
                      >
                        <AlertCircle size={18} className="text-rose-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium">{generalError}</p>
                          <p className="text-xs text-rose-600 mt-1">
                            You can also reach our desk directly at <a href="tel:+919445770160" className="underline font-bold">+91 94457 70160</a>.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    <div className="space-y-10">
                      
                      {/* ── SECTION 1: Identity & Direct Contact ── */}
                      <section className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2">
                          <span className="w-5 h-5 rounded-full bg-[#3d8c7a] text-white text-[11px] font-mono font-bold flex items-center justify-center">1</span>
                          <h3 className="text-base font-semibold text-slate-ink tracking-tight">
                            Identity & Contact Channels
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                          <FormField
                            label="First Name"
                            id="firstName"
                            required
                            error={fieldErrors.firstName}
                          >
                            <input
                              id="firstName"
                              type="text"
                              required
                              autoComplete="given-name"
                              aria-invalid={!!fieldErrors.firstName}
                              aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined}
                              className={`${inputBaseCls} ${fieldErrors.firstName ? 'border-rose-400 focus:border-rose-500' : 'border-white/80 focus:border-[#3d8c7a]'}`}
                              placeholder="e.g. Arunkumar"
                              value={form.firstName}
                              onChange={e => setField('firstName', e.target.value)}
                            />
                          </FormField>

                          <FormField
                            label="Last Name"
                            id="lastName"
                            error={fieldErrors.lastName}
                          >
                            <input
                              id="lastName"
                              type="text"
                              autoComplete="family-name"
                              className={`${inputBaseCls} border-white/80 focus:border-[#3d8c7a]`}
                              placeholder="e.g. R."
                              value={form.lastName}
                              onChange={e => setField('lastName', e.target.value)}
                            />
                          </FormField>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            label="Work Email"
                            id="email"
                            required
                            error={fieldErrors.email}
                          >
                            <input
                              id="email"
                              type="email"
                              required
                              autoComplete="email"
                              aria-invalid={!!fieldErrors.email}
                              aria-describedby={fieldErrors.email ? "email-error" : undefined}
                              className={`${inputBaseCls} ${fieldErrors.email ? 'border-rose-400 focus:border-rose-500' : 'border-white/80 focus:border-[#3d8c7a]'}`}
                              placeholder="you@company.com"
                              value={form.email}
                              onChange={e => setField('email', e.target.value)}
                            />
                          </FormField>

                          <FormField
                            label="Phone Number"
                            id="phone"
                            required
                            hint="With country code"
                            error={fieldErrors.phone}
                          >
                            <input
                              id="phone"
                              type="tel"
                              required
                              autoComplete="tel"
                              aria-invalid={!!fieldErrors.phone}
                              aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                              className={`${inputBaseCls} ${fieldErrors.phone ? 'border-rose-400 focus:border-rose-500' : 'border-white/80 focus:border-[#3d8c7a]'}`}
                              placeholder="+91 94457 70160"
                              value={form.phone}
                              onChange={e => setField('phone', e.target.value)}
                            />
                          </FormField>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormField label="Company / Organization" id="company">
                            <input
                              id="company"
                              type="text"
                              autoComplete="organization"
                              className={`${inputBaseCls} border-white/80 focus:border-[#3d8c7a]`}
                              placeholder="e.g. Acme Labs"
                              value={form.company}
                              onChange={e => setField('company', e.target.value)}
                            />
                          </FormField>

                          <FormField label="Designation / Role" id="role">
                            <input
                              id="role"
                              type="text"
                              autoComplete="organization-title"
                              className={`${inputBaseCls} border-white/80 focus:border-[#3d8c7a]`}
                              placeholder="e.g. CTO / Founder"
                              value={form.role}
                              onChange={e => setField('role', e.target.value)}
                            />
                          </FormField>

                          <FormField label="Country / Region" id="country">
                            <input
                              id="country"
                              type="text"
                              autoComplete="country-name"
                              className={`${inputBaseCls} border-white/80 focus:border-[#3d8c7a]`}
                              placeholder="e.g. India / USA"
                              value={form.country}
                              onChange={e => setField('country', e.target.value)}
                            />
                          </FormField>
                        </div>
                      </section>

                      {/* ── SECTION 2: Engagement Divisions ── */}
                      <section className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2">
                          <span className="w-5 h-5 rounded-full bg-[#3d8c7a] text-white text-[11px] font-mono font-bold flex items-center justify-center">2</span>
                          <h3 className="text-base font-semibold text-slate-ink tracking-tight">
                            Engineering Divisions & Training Programs
                          </h3>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs font-mono text-slate-dim uppercase tracking-wider">
                            Select all capabilities relevant to your inquiry
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            {DIVISIONS.map(division => {
                              const accent = ACCENT_CONFIGS[division.id as keyof typeof ACCENT_CONFIGS]
                              const IconComponent = ICON_MAP[division.icon]
                              const selected = form.divisions.includes(division.id)
                              return (
                                <button
                                  key={division.id}
                                  type="button"
                                  onClick={() => toggleDivision(division.id)}
                                  className="flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200"
                                  style={{
                                    background: selected ? `${accent.color}12` : 'rgba(255,255,255,0.55)',
                                    borderColor: selected ? `${accent.color}45` : 'rgba(255,255,255,0.8)',
                                    boxShadow: selected ? `0 0 0 1.5px ${accent.color}35` : 'none',
                                  }}
                                >
                                  <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${accent.color}18`, border: `1px solid ${accent.color}30` }}
                                  >
                                    {IconComponent && <IconComponent size={15} style={{ color: accent.color }} />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className={`text-xs font-semibold ${selected ? 'text-slate-900' : 'text-slate-700'}`}>
                                      {division.title}
                                    </div>
                                    <div className="text-[11px] text-slate-500 truncate">{division.tagline}</div>
                                  </div>
                                  <div
                                    className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0"
                                    style={{
                                      background: selected ? accent.color : 'transparent',
                                      borderColor: selected ? accent.color : 'rgba(100,116,139,0.3)',
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
                        </div>

                        {/* Preferred Contact Method */}
                        <div className="pt-2">
                          <label className="block text-xs font-mono text-slate-dim uppercase tracking-wider mb-2">
                            Preferred Contact Method
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {CONTACT_PREFERENCES.map(pref => {
                              const isSelected = form.preferredContactMethod === pref.id
                              return (
                                <button
                                  key={pref.id}
                                  type="button"
                                  onClick={() => setField('preferredContactMethod', pref.id)}
                                  className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all flex items-center justify-center gap-1.5 ${
                                    isSelected
                                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                      : 'bg-white/60 text-slate-600 border-white/80 hover:bg-white'
                                  }`}
                                >
                                  <span>{pref.icon}</span>
                                  <span>{pref.label}</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </section>

                      {/* ── SECTION 3: Project Requirements & Timeline ── */}
                      <section className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2">
                          <span className="w-5 h-5 rounded-full bg-[#3d8c7a] text-white text-[11px] font-mono font-bold flex items-center justify-center">3</span>
                          <h3 className="text-base font-semibold text-slate-ink tracking-tight">
                            Project Specifications
                          </h3>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-dim uppercase tracking-wider mb-2">
                            Target Start Timeline
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {TIMELINE_OPTIONS.map(o => (
                              <button
                                key={o.id}
                                type="button"
                                onClick={() => setField('timeline', o.id)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                                  form.timeline === o.id
                                    ? 'bg-[#3d8c7a]/15 text-[#245c4f] border-[#3d8c7a]/40 font-semibold'
                                    : 'bg-white/60 text-slate-600 border-white/80 hover:bg-white'
                                }`}
                              >
                                {o.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <FormField
                          label="What are you aiming to achieve?"
                          id="message"
                          required
                          hint="Minimum 15 characters"
                          error={fieldErrors.message}
                        >
                          <textarea
                            id="message"
                            rows={4}
                            required
                            aria-invalid={!!fieldErrors.message}
                            aria-describedby={fieldErrors.message ? "message-error" : undefined}
                            className={`${inputBaseCls} ${fieldErrors.message ? 'border-rose-400 focus:border-rose-500' : 'border-white/80 focus:border-[#3d8c7a]'}`}
                            placeholder="Describe your current bottleneck, desired architecture, generative AI application, or training cohort requirements. Include any relevant timeline or technology constraints."
                            value={form.message}
                            onChange={e => setField('message', e.target.value)}
                            style={{ resize: 'vertical' }}
                          />
                        </FormField>

                        <FormField label="How did you hear about Vertex Loop?" id="hearAbout">
                          <input
                            id="hearAbout"
                            type="text"
                            className={`${inputBaseCls} border-white/80 focus:border-[#3d8c7a]`}
                            placeholder="e.g. Google Search, LinkedIn, Recommendation, Tech Conference..."
                            value={form.hearAbout}
                            onChange={e => setField('hearAbout', e.target.value)}
                          />
                        </FormField>
                      </section>

                    </div>

                    {/* Submit Action */}
                    <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-slate-500 font-light">
                        🔒 Protected by enterprise anti-spam & rate limiting. Your email is never shared.
                      </p>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary text-sm px-8 py-3.5 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                      >
                        {loading ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            <span>Dispatching Inquiry…</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inbound Inquiry</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* ── INFO PANEL (2 cols) ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Direct Official Channels */}
              <AnimatedSection variant="slideRight" delay={0.08}>
                <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-sm">
                  <h4 className="font-semibold text-slate-ink text-sm tracking-tight mb-5 flex items-center gap-2">
                    <Phone size={15} className="text-[#3d8c7a]" /> Official Contact Desk
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        icon: Phone,
                        label: 'Phone (Direct & WhatsApp)',
                        value: '+91 94457 70160',
                        href: 'tel:+919445770160',
                        color: '#3d8c7a',
                      },
                      {
                        icon: Mail,
                        label: 'Official Inquiries Email',
                        value: 'hello@vertexloop.in',
                        href: 'mailto:hello@vertexloop.in',
                        color: '#4a7fa5',
                      },
                      {
                        icon: Calendar,
                        label: 'Consulting Discovery',
                        value: 'Book technical discovery session',
                        href: 'mailto:hello@vertexloop.in?subject=Consulting%20Discovery%20Session',
                        color: '#7c6fad',
                      },
                      {
                        icon: MessageSquare,
                        label: 'LinkedIn Organization',
                        value: 'linkedin.com/company/vertex-loop',
                        href: 'https://www.linkedin.com/company/vertex-loop',
                        color: '#0077b5',
                      },
                    ].map(({ icon: Icon, label, value, href, color }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/60 border border-white/70 hover:bg-white hover:shadow-glass transition-all duration-300 group"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                          style={{ background: `${color}14`, border: `1px solid ${color}25` }}
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

              {/* Verified Headquarters */}
              <AnimatedSection variant="slideRight" delay={0.13}>
                <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-sm">
                  <h4 className="font-semibold text-slate-ink text-sm tracking-tight mb-3 flex items-center gap-2">
                    <MapPin size={15} className="text-[#b04a4a]" /> Registered Headquarters
                  </h4>
                  <p className="text-xs text-slate-dim mb-3 font-mono">
                    Single Official Physical Facility:
                  </p>
                  <div className="p-3.5 rounded-xl bg-white/70 border border-white/80 text-xs text-slate-ink space-y-1 mb-4">
                    <div className="font-semibold text-sm text-slate-900">Vertex Loop Pvt Ltd</div>
                    <div className="text-slate-mid">G2, Venkatapuram, Ambattur</div>
                    <div className="text-slate-mid">Chennai - 600053, Tamil Nadu, India</div>
                  </div>
                  
                  {/* Google Map Embed */}
                  <div className="rounded-xl overflow-hidden border border-slate-200/80 aspect-video w-full">
                    <iframe
                      title="Vertex Loop Pvt Ltd Ambattur Chennai Office Map"
                      src="https://maps.google.com/maps?q=Venkatapuram,+Ambattur,+Chennai,+Tamil+Nadu+600053&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Response Commitment */}
              <AnimatedSection variant="slideRight" delay={0.18}>
                <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-sm">
                  <h4 className="font-semibold text-slate-ink text-sm tracking-tight mb-4 flex items-center gap-2">
                    <Clock size={15} className="text-[#a07830]" /> Service Commitment
                  </h4>
                  <div className="space-y-3">
                    {[
                      { promise: 'Guaranteed 1-business-day response', icon: '⚡' },
                      { promise: 'Mutual NDA executed prior to deep discovery', icon: '🔒' },
                      { promise: 'Zero sales pressure or unsolicited outreach', icon: '✅' },
                      { promise: 'Tailored architectural roadmap provided', icon: '📋' },
                    ].map(({ promise, icon }) => (
                      <div key={promise} className="flex items-center gap-3 text-xs text-slate-mid">
                        <span className="text-sm">{icon}</span>
                        <span>{promise}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Channels */}
              <AnimatedSection variant="slideRight" delay={0.22}>
                <div className="glass-card rounded-2xl p-5 flex items-center justify-between border border-white/80 shadow-sm">
                  <span className="text-xs font-mono text-slate-dim">Follow our engineering work</span>
                  <div className="flex items-center gap-2">
                    {[
                      { icon: FaLinkedin, href: 'https://www.linkedin.com/company/vertex-loop', label: 'LinkedIn' },
                      { icon: FaTwitter, href: 'https://x.com/LoopVertex99532', label: 'Twitter' },
                      { icon: FaGithub, href: 'https://github.com/vertexloop', label: 'GitHub' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/70 border border-white/80 text-slate-dim hover:text-slate-ink hover:bg-white hover:shadow-glass transition-all duration-300"
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
      <section className="relative py-20 overflow-hidden border-t border-slate-200/60">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f2ee] to-[#f0ece5]" />
        <div className="relative z-10 section-padding max-w-5xl mx-auto">
          <AnimatedSection variant="fadeUp" className="mb-4">
            <SectionLabel accent="mint">Frequently Asked Questions</SectionLabel>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay={0.06} className="mb-10">
            <h2 className="text-display font-semibold text-slate-ink text-3xl md:text-4xl tracking-tight">
              Before You Reach Out
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
                q: 'How quickly will Vertex Loop respond to our inquiry?',
                a: 'We guarantee a direct response from our senior technical team within one business day. For urgent architectural or security issues, indicate this in your message.',
              },
              {
                q: 'Do we need a completed technical specification to engage?',
                a: 'No. Many enterprise partnerships begin with an exploratory problem statement. We provide end-to-end architectural discovery to define scopes and milestones.',
              },
              {
                q: 'What regions and time zones does Vertex Loop support?',
                a: 'Vertex Loop operates from our single headquarters in Ambattur, Chennai, and delivers remote agile sprints with scheduled time-zone overlap for clients in India, USA, UK, Canada, Australia, UAE, and Singapore.',
              },
              {
                q: 'Can we inquire specifically about Crack Leap training programs?',
                a: 'Yes. Select the "Crack Leap Academy" division on the form for campus bootcamps, college partnerships, corporate upskilling, and professional AI engineering cohorts.',
              },
              {
                q: 'Is our project information kept confidential?',
                a: 'Yes. All client disclosures and project briefs are strictly confidential. We execute bilateral Non-Disclosure Agreements (NDAs) prior to detailed code audits or architecture reviews.',
              },
              {
                q: 'How do you handle software delivery and billing?',
                a: 'We work across dedicated engineering pods, fixed-price sprint milestones, or ongoing advisory retainers with transparent reporting and milestone tracking.',
              },
            ].map(({ q, a }) => (
              <motion.div
                key={q}
                variants={staggerItemVariants}
                className="glass-card rounded-2xl p-6 group border border-white/80 shadow-sm"
              >
                <h3 className="font-semibold text-slate-ink text-sm mb-2.5 tracking-tight">{q}</h3>
                <p className="text-slate-mid text-xs sm:text-sm leading-relaxed font-light">{a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}