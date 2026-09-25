'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Laptop,
  BarChart2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactLowerSection from '@/components/contact/ContactLowerSection'

type TopicId = 'Software' | 'Digital Marketing' | 'Academy / Training'

interface TopicOption {
  id: TopicId
  title: string
  description: string
  icon: typeof Laptop
}

const TOPIC_OPTIONS: TopicOption[] = [
  {
    id: 'Software',
    title: 'Software',
    description:
      'Software products, applications, AI, platforms and technology requirements.',
    icon: Laptop,
  },
  {
    id: 'Digital Marketing',
    title: 'Digital Marketing',
    description:
      'Digital marketing, SEO, social media, content and performance marketing.',
    icon: BarChart2,
  },
  {
    id: 'Academy / Training',
    title: 'Academy / Training',
    description:
      'CrackLeap courses, technical training and learning enquiries.',
    icon: GraduationCap,
  },
]

export default function ContactPageClient() {
  const [selectedTopic, setSelectedTopic] = useState<TopicId>('Software')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [enquiryType, setEnquiryType] = useState<string>('Software')
  const [requirement, setRequirement] = useState('')

  // Anti-spam tokens
  const [honeypot, setHoneypot] = useState('')
  const [formLoadedAt, setFormLoadedAt] = useState<number>(0)

  // Status & validation states
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const formRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setFormLoadedAt(Date.now())
  }, [])

  // Sync selected topic card with enquiry type dropdown
  const handleTopicSelect = (topicId: TopicId) => {
    setSelectedTopic(topicId)
    setEnquiryType(topicId)
  }

  // Handle dropdown change and sync topic card
  const handleEnquiryTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setEnquiryType(val)
    if (val === 'Software' || val === 'Digital Marketing' || val === 'Academy / Training') {
      setSelectedTopic(val as TopicId)
    }
  }

  const validateClientSide = () => {
    const errors: Record<string, string> = {}
    if (!fullName.trim() || fullName.trim().length < 2) {
      errors.name = 'Please provide your full name (at least 2 characters).'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.'
    }
    if (!requirement.trim() || requirement.trim().length < 10) {
      errors.requirement = 'Please describe your requirement (at least 10 characters).'
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')
    setErrorMessage('')

    if (!validateClientSide()) {
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        name: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        company: company.trim(),
        enquiryType,
        requirement: requirement.trim(),
        message: requirement.trim(),
        _hp_company_url: honeypot,
        _form_loaded_at: formLoadedAt,
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmitStatus('success')
        // Reset form
        setFullName('')
        setEmail('')
        setPhone('')
        setCompany('')
        setRequirement('')
        setFieldErrors({})
      } else {
        setSubmitStatus('error')
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors)
        }
        setErrorMessage(
          data.message ||
            "We couldn't send your enquiry right now. Please try again or email hello@vertexloop.in directly."
        )
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage(
        "Network error. We couldn't send your enquiry right now. Please check your connection or email hello@vertexloop.in directly."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#111827]">
        {/* Contact Hero */}
        <ContactHero />

        {/* Main 2-Column Section: Choose a Conversation + Contact Form */}
        <section
          id="contact-form"
          ref={formRef}
          className="py-16 md:py-24 bg-white border-t border-[#1a2333]/6"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
              {/* Left Column: CHOOSE A CONVERSATION */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-3">
                  CHOOSE A CONVERSATION
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.15] mb-4">
                  What would you like
                  <br />
                  to talk about?
                </h2>
                <p className="text-sm md:text-[15px] text-[#4b5563] font-light leading-relaxed mb-8 max-w-sm">
                  Select a topic so we can understand your enquiry better.
                </p>

                {/* 3 Selectable Topic Cards */}
                <div className="w-full space-y-4">
                  {TOPIC_OPTIONS.map((topic) => {
                    const Icon = topic.icon
                    const isSelected = selectedTopic === topic.id
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => handleTopicSelect(topic.id)}
                        className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 group ${
                          isSelected
                            ? 'bg-[#fffbf7] border-[#f97316]/60 shadow-xs ring-1 ring-[#f97316]/20'
                            : 'bg-[#faf9f5] border-[#1a2333]/8 hover:border-[#1a2333]/20 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : 'bg-white text-[#111827] border-[#1a2333]/10'
                            }`}
                          >
                            <Icon size={18} className="stroke-[1.75]" />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-semibold text-[#111827] mb-1">
                              {topic.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-[#6b7280] font-light leading-relaxed max-w-[280px]">
                              {topic.description}
                            </p>
                          </div>
                        </div>

                        <div
                          className={`shrink-0 transition-transform ${
                            isSelected
                              ? 'text-[#f97316] translate-x-0.5'
                              : 'text-gray-400 group-hover:translate-x-1 group-hover:text-[#111827]'
                          }`}
                        >
                          <ArrowRight size={16} />
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Right Column: SEND US A MESSAGE (Contact Form) */}
              <div className="lg:col-span-7">
                <div className="bg-[#faf9f5] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#1a2333]/8 shadow-xs">
                  <span className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-[#64748b] block mb-2">
                    SEND US A MESSAGE
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#111827] tracking-[-0.02em] mb-2">
                    Contact Form
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6b7280] font-light mb-8">
                    Fill in your details and tell us about your requirement.
                  </p>

                  {/* Submission Success Banner */}
                  {submitStatus === 'success' && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5"
                    >
                      <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-emerald-900 mb-1">
                          Thank you. Your enquiry has been received.
                        </h4>
                        <p className="text-xs text-emerald-700 leading-relaxed font-light">
                          We&apos;ll review your message and get back to you using the contact
                          details provided.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submission Error Banner */}
                  {submitStatus === 'error' && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="mb-8 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3"
                    >
                      <AlertCircle size={20} className="text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-rose-900 mb-0.5">
                          Unable to send enquiry
                        </h4>
                        <p className="text-xs text-rose-700 leading-relaxed font-light">
                          {errorMessage ||
                            "We couldn't send your enquiry right now. Please try again."}
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Hidden Honeypot Field for Bot Trapping */}
                    <div className="sr-only" aria-hidden="true">
                      <label htmlFor="company_website_url">Do not fill this field</label>
                      <input
                        type="text"
                        id="company_website_url"
                        name="company_website_url"
                        tabIndex={-1}
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        autoComplete="off"
                      />
                    </div>

                    {/* Row 1: Full Name & Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2"
                        >
                          Full name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          ref={nameInputRef}
                          id="fullName"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your full name"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value)
                            if (fieldErrors.name) {
                              setFieldErrors((prev) => ({ ...prev, name: '' }))
                            }
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#111827] placeholder:text-[#9ca3af] focus:outline-none transition-colors ${
                            fieldErrors.name
                              ? 'border-rose-400 focus:border-rose-500'
                              : 'border-[#1a2333]/15 focus:border-[#111827]'
                          }`}
                        />
                        {fieldErrors.name && (
                          <p className="text-[11px] text-rose-600 mt-1.5">{fieldErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2"
                        >
                          Email address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="yourname@company.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            if (fieldErrors.email) {
                              setFieldErrors((prev) => ({ ...prev, email: '' }))
                            }
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#111827] placeholder:text-[#9ca3af] focus:outline-none transition-colors ${
                            fieldErrors.email
                              ? 'border-rose-400 focus:border-rose-500'
                              : 'border-[#1a2333]/15 focus:border-[#111827]'
                          }`}
                        />
                        {fieldErrors.email && (
                          <p className="text-[11px] text-rose-600 mt-1.5">{fieldErrors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Company / Organisation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2"
                        >
                          Phone number <span className="text-[#6b7280] font-normal lowercase">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value)
                            if (fieldErrors.phone) {
                              setFieldErrors((prev) => ({ ...prev, phone: '' }))
                            }
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#111827] placeholder:text-[#9ca3af] focus:outline-none transition-colors ${
                            fieldErrors.phone
                              ? 'border-rose-400 focus:border-rose-500'
                              : 'border-[#1a2333]/15 focus:border-[#111827]'
                          }`}
                        />
                        {fieldErrors.phone && (
                          <p className="text-[11px] text-rose-600 mt-1.5">{fieldErrors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2"
                        >
                          Company / Organisation <span className="text-[#6b7280] font-normal lowercase">(optional)</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Your company name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#1a2333]/15 text-sm text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#111827] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 3: Enquiry Type Select */}
                    <div>
                      <label
                        htmlFor="enquiryType"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2"
                      >
                        Enquiry type <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        value={enquiryType}
                        onChange={handleEnquiryTypeChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#1a2333]/15 text-sm text-[#111827] focus:outline-none focus:border-[#111827] transition-colors cursor-pointer"
                      >
                        <option value="Software">Software</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Academy / Training">Academy / Training</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Row 4: Requirement Textarea */}
                    <div>
                      <label
                        htmlFor="requirement"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-[#111827] mb-2"
                      >
                        Tell us about your requirement <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="requirement"
                        name="requirement"
                        rows={4}
                        required
                        placeholder="Briefly describe what you are looking for..."
                        value={requirement}
                        onChange={(e) => {
                          setRequirement(e.target.value)
                          if (fieldErrors.requirement || fieldErrors.message) {
                            setFieldErrors((prev) => ({
                              ...prev,
                              requirement: '',
                              message: '',
                            }))
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#111827] placeholder:text-[#9ca3af] focus:outline-none transition-colors resize-y ${
                          fieldErrors.requirement || fieldErrors.message
                            ? 'border-rose-400 focus:border-rose-500'
                            : 'border-[#1a2333]/15 focus:border-[#111827]'
                        }`}
                      />
                      {(fieldErrors.requirement || fieldErrors.message) && (
                        <p className="text-[11px] text-rose-600 mt-1.5">
                          {fieldErrors.requirement || fieldErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#181e28] text-white text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#2c3545] hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw size={15} className="animate-spin text-white/70" />
                          <span>Sending enquiry...</span>
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle2 size={16} className="text-emerald-400" />
                          <span>Enquiry sent</span>
                        </>
                      ) : submitStatus === 'error' ? (
                        <>
                          <span>Try again</span>
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    {/* Privacy Policy Compliance Notice */}
                    <p className="text-[11px] text-[#6b7280] font-light leading-relaxed text-center pt-2">
                      By submitting this form, you agree that Vertex Loop Pvt Ltd may use the
                      information provided to respond to your enquiry. Please refer to our{' '}
                      <Link
                        href="/privacy-policy"
                        className="underline underline-offset-2 text-[#111827] hover:text-blue-600 transition-colors"
                      >
                        Privacy Policy
                      </Link>{' '}
                      for more information.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lower Section: Other Ways to Connect & Our Company */}
        <ContactLowerSection />
      </main>
      <Footer />
    </>
  )
}