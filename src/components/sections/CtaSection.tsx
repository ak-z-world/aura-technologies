'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/motion'
import { DIVISIONS } from '@/lib/data'

interface FormState {
  name: string
  email: string
  company: string
  division: string
  message: string
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  company: '',
  division: '',
  message: '',
}

export default function CtaSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
      aria-label="Contact and CTA"
    >
      {/* Animated gradient background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(193,218,240,0.55) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(216,210,236,0.5) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 20%, rgba(193,226,219,0.35) 0%, transparent 45%),
              radial-gradient(ellipse at 30% 80%, rgba(240,230,200,0.4) 0%, transparent 50%),
              #f0ede8
            `,
          }}
        />
      </motion.div>

      {/* Soft glow orbs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[100px] bg-sky-soft/50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full blur-[80px] bg-lavender-soft/45 pointer-events-none" />

      <div className="relative z-10 section-padding">
        {/* Hero CTA copy */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <AnimatedSection variant="fadeUp" className="mb-5">
            <SectionLabel accent="mint">Start the Conversation</SectionLabel>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.08}>
            <h2 className="text-display font-semibold text-slate-ink text-4xl md:text-5xl lg:text-[72px] leading-[1.06] tracking-[-0.03em] mb-6">
              Ready to build something
              <br />
              <span className="italic font-normal text-[#3d8c7a]">the market hasn&rsquo;t seen?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fadeUp" delay={0.14}>
            <p className="text-slate-mid text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Whether you need one division or all five, a conversation with Vertex Loop begins with
              a single question: <em className="text-slate-ink">what outcome do you need?</em> We
              take it from there.
            </p>
          </AnimatedSection>
        </div>

        {/* Contact form + info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <AnimatedSection variant="slideLeft" delay={0.05} className="lg:col-span-3">
            <div className="glass-card-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3d8c7a]/40 to-transparent" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-mint-soft flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-[#3d8c7a]" />
                  </div>
                  <h3 className="text-display font-semibold text-slate-ink text-2xl mb-3">
                    Message received.
                  </h3>
                  <p className="text-slate-mid text-base max-w-xs">
                    A Vertex Loop strategist will reach out within one business day. We look forward to building with you.
                  </p>
                </motion.div>
              ) : (
                <div>
                  <h3 className="text-display font-semibold text-slate-ink text-2xl mb-1.5 tracking-tight">
                    Partner Inquiry
                  </h3>
                  <p className="text-slate-dim text-sm mb-8 font-mono tracking-wide">
                    Response within 1 business day · No commitment required
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-dim uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Arunkumar R."
                        className="w-full px-4 py-3 rounded-xl bg-pearl-50/80 border border-pearl-200/60 text-slate-ink placeholder-slate-dim/50 text-sm focus:outline-none focus:border-[#3d8c7a]/40 focus:bg-white/80 transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-dim uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-pearl-50/80 border border-pearl-200/60 text-slate-ink placeholder-slate-dim/50 text-sm focus:outline-none focus:border-[#3d8c7a]/40 focus:bg-white/80 transition-all"
                      />
                    </div>
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono text-slate-dim uppercase tracking-wider mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your organization"
                        className="w-full px-4 py-3 rounded-xl bg-pearl-50/80 border border-pearl-200/60 text-slate-ink placeholder-slate-dim/50 text-sm focus:outline-none focus:border-[#3d8c7a]/40 focus:bg-white/80 transition-all"
                      />
                    </div>
                    {/* Division */}
                    <div>
                      <label className="block text-xs font-mono text-slate-dim uppercase tracking-wider mb-2">
                        Division of Interest
                      </label>
                      <select
                        name="division"
                        value={form.division}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-pearl-50/80 border border-pearl-200/60 text-slate-ink text-sm focus:outline-none focus:border-[#3d8c7a]/40 focus:bg-white/80 transition-all appearance-none"
                      >
                        <option value="">Select a division…</option>
                        {DIVISIONS.map((d) => (
                          <option key={d.id} value={d.id}>{d.title}</option>
                        ))}
                        <option value="multi">Multiple Divisions</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label className="block text-xs font-mono text-slate-dim uppercase tracking-wider mb-2">
                      Tell us what you&rsquo;re building *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your challenge, goal, or the outcome you need. The more specific, the better we can respond."
                      className="w-full px-4 py-3 rounded-xl bg-pearl-50/80 border border-pearl-200/60 text-slate-ink placeholder-slate-dim/50 text-sm focus:outline-none focus:border-[#3d8c7a]/40 focus:bg-white/80 transition-all resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email || !form.message}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <>
                        Send Inquiry
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Right info column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Engagement options */}
            <AnimatedSection variant="slideRight" delay={0.1}>
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#4a7fa5]/30 to-transparent" />
                <h4 className="font-semibold text-slate-ink text-base mb-4 tracking-tight">
                  How we engage
                </h4>
                <div className="flex flex-col gap-3">
                  {[
                    { mode: 'Project-Based', desc: 'Defined scope, fixed outcome, clean exit.' },
                    { mode: 'Retainer Partnership', desc: 'Embedded strategic capacity, always on.' },
                    { mode: 'Multi-Division', desc: 'Full ecosystem leverage, maximum ROI.' },
                    { mode: 'Advisory', desc: 'Executive and technical strategy sessions.' },
                  ].map(({ mode, desc }) => (
                    <div key={mode} className="flex items-start gap-3 py-2.5 border-b border-pearl-100 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4a7fa5] mt-1.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-slate-ink">{mode}</div>
                        <div className="text-xs text-slate-dim mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Quick contact */}
            <AnimatedSection variant="slideRight" delay={0.16}>
              <div className="glass-card rounded-2xl p-6">
                <h4 className="font-semibold text-slate-ink text-base mb-4 tracking-tight">
                  Prefer a direct conversation?
                </h4>
                <a
                  href="mailto:hello@vertexloop.io"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/50 border border-white/70 hover:bg-white/80 hover:shadow-glass transition-all duration-300 group mb-3"
                >
                  <div>
                    <div className="text-xs font-mono text-slate-dim uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-sm font-medium text-slate-ink">hello@vertexloop.io</div>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-dim group-hover:text-slate-ink transition-colors" />
                </a>
                <a
                  href="https://calendly.com/vertexloop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/50 border border-white/70 hover:bg-white/80 hover:shadow-glass transition-all duration-300 group"
                >
                  <div>
                    <div className="text-xs font-mono text-slate-dim uppercase tracking-wider mb-0.5">Schedule</div>
                    <div className="text-sm font-medium text-slate-ink">Book a 30-min strategy call</div>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-dim group-hover:text-slate-ink transition-colors" />
                </a>
              </div>
            </AnimatedSection>

            {/* Trust signals */}
            <AnimatedSection variant="slideRight" delay={0.22}>
              <div className="glass-card rounded-2xl p-5">
                <div className="flex flex-wrap gap-3">
                  {[
                    '🔒 NDA-ready',
                    '⚡ 1-day response',
                    '🌍 Global capacity',
                    '✅ No lock-in',
                  ].map((signal) => (
                    <span
                      key={signal}
                      className="px-3 py-1.5 rounded-lg bg-pearl-100/60 text-slate-mid text-xs font-medium border border-pearl-200/50"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}