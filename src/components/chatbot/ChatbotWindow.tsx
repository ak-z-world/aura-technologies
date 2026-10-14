'use client'

import React, { useRef, useEffect, useState } from 'react'
import LottieRobot from './LottieRobot'
import enLocale from '@/locales/en.json'
import { ChatMessage, FlowType } from '@/types/chatbot'

interface ChatbotWindowProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatbotWindow({ isOpen, onClose }: ChatbotWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [currentFlow, setCurrentFlow] = useState<FlowType | null>(null)
  const [currentStep, setCurrentStep] = useState<string | null>(null)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [isOpen, messages, isTyping])

  // Initialize conversation with Kural's greeting & main menu
  const initConversation = () => {
    setCurrentFlow(null)
    setCurrentStep('main_menu')
    setFormData({})
    setInputValue('')
    setIsTyping(false)
    setIsSubmitting(false)

    setMessages([
      {
        id: `greeting-${Date.now()}`,
        sender: 'bot',
        text: enLocale.bot.greeting,
        pills: enLocale.mainMenu,
        customType: 'main_menu',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ])
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initConversation()
    }
  }, [isOpen])

  // Helper to add bot reply with natural typing delay
  const addBotReply = (text: string, pills?: string[], customType?: ChatMessage['customType'], leadData?: Record<string, string>, whatsAppUrl?: string) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text,
          pills,
          customType,
          leadData,
          whatsAppUrl,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ])
    }, 600)
  }

  // Handle lead submission to /api/lead
  const submitLead = async (completedData: Record<string, string>, flow: FlowType) => {
    setIsSubmitting(true)
    setIsTyping(true)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          flow: enLocale.flows[flow].title,
          ...completedData
        })
      })

      const result = await res.json()
      setIsSubmitting(false)
      setIsTyping(false)

      const prospectName = completedData.name || 'there'
      const successText = enLocale.messages.leadSuccess.replace('{name}', prospectName)
      const whatsAppUrl = result.whatsAppUrl || `https://wa.me/919445770160`

      setMessages(prev => [
        ...prev,
        {
          id: `success-${Date.now()}`,
          sender: 'bot',
          text: successText,
          customType: 'lead_success',
          leadData: completedData,
          whatsAppUrl,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ])
    } catch (err) {
      console.error('Lead submit failed', err)
      setIsSubmitting(false)
      setIsTyping(false)

      const prospectName = completedData.name || 'there'
      const fallbackWhatsApp = `https://wa.me/919445770160?text=${encodeURIComponent(`Hello Vertex Loop, I connected with Kural on your website: ${completedData.name || ''} - ${completedData.phone || ''}`)}`
      
      setMessages(prev => [
        ...prev,
        {
          id: `success-fallback-${Date.now()}`,
          sender: 'bot',
          text: enLocale.messages.leadSuccess.replace('{name}', prospectName),
          customType: 'lead_success',
          leadData: completedData,
          whatsAppUrl: fallbackWhatsApp,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ])
    }
  }

  // Handle User Action (Pill Click or Form Text Submit)
  const handleUserMessage = (userText: string) => {
    if (!userText.trim()) return

    const trimmed = userText.trim()

    // Add user message to thread
    setMessages(prev => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: trimmed,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ])

    setInputValue('')

    // Flow routing logic
    // 1. If at Main Menu or restarting
    if (!currentFlow || currentStep === 'main_menu') {
      if (trimmed.includes('Build Product') || trimmed.includes('Tech Team')) {
        setCurrentFlow('buildProduct')
        setCurrentStep('service')
        addBotReply(
          enLocale.flows.buildProduct.stepPrompts.service,
          enLocale.flows.buildProduct.options
        )
      } else if (trimmed.includes('Digital Marketing')) {
        setCurrentFlow('digitalMarketing')
        setCurrentStep('pillar')
        addBotReply(
          enLocale.flows.digitalMarketing.stepPrompts.pillar,
          enLocale.flows.digitalMarketing.options
        )
      } else if (trimmed.includes('CrackLeap') || trimmed.includes('Academy')) {
        setCurrentFlow('crackleapAcademy')
        setCurrentStep('course')
        addBotReply(
          enLocale.flows.crackleapAcademy.stepPrompts.course,
          enLocale.flows.crackleapAcademy.options
        )
      } else if (trimmed.includes('Scripten')) {
        setCurrentFlow('scriptenCopilot')
        setCurrentStep('platform')
        const fullExplain = `${enLocale.flows.scriptenCopilot.explain}\n\n${enLocale.flows.scriptenCopilot.highlights}\n\n${enLocale.flows.scriptenCopilot.stepPrompts.platform}`
        addBotReply(
          fullExplain,
          enLocale.flows.scriptenCopilot.options,
          'scripten_intro'
        )
      } else if (trimmed.includes('Career')) {
        setCurrentFlow('careers')
        setCurrentStep('role')
        addBotReply(
          enLocale.flows.careers.stepPrompts.role,
          enLocale.flows.careers.options
        )
      } else {
        // Fallback or natural query
        addBotReply(
          "I'd love to help you with that! Please choose one of our core divisions below to get started:",
          enLocale.mainMenu,
          'main_menu'
        )
      }
      return
    }

    // 2. FLOW 1: Build Product / Tech Team
    if (currentFlow === 'buildProduct') {
      if (currentStep === 'service') {
        const nextData = { ...formData, service: trimmed }
        setFormData(nextData)
        setCurrentStep('company')
        addBotReply(enLocale.flows.buildProduct.stepPrompts.company)
      } else if (currentStep === 'company') {
        const nextData = { ...formData, company: trimmed }
        setFormData(nextData)
        setCurrentStep('name')
        addBotReply(enLocale.flows.buildProduct.stepPrompts.name)
      } else if (currentStep === 'name') {
        const nextData = { ...formData, name: trimmed }
        setFormData(nextData)
        setCurrentStep('phone')
        addBotReply(enLocale.flows.buildProduct.stepPrompts.phone)
      } else if (currentStep === 'phone') {
        const nextData = { ...formData, phone: trimmed }
        setFormData(nextData)
        setCurrentStep('budget')
        addBotReply(
          enLocale.flows.buildProduct.stepPrompts.budget,
          enLocale.flows.buildProduct.stepPrompts.budgetOptions
        )
      } else if (currentStep === 'budget') {
        const nextData = { ...formData, budget: trimmed }
        setFormData(nextData)
        setCurrentStep('completed')
        submitLead(nextData, 'buildProduct')
      }
      return
    }

    // 3. FLOW 2: Grow with Digital Marketing - 6 Pillars
    if (currentFlow === 'digitalMarketing') {
      if (currentStep === 'pillar') {
        const nextData = { ...formData, service: trimmed }
        setFormData(nextData)
        setCurrentStep('company')
        addBotReply(enLocale.flows.digitalMarketing.stepPrompts.company)
      } else if (currentStep === 'company') {
        const nextData = { ...formData, company: trimmed }
        setFormData(nextData)
        setCurrentStep('name')
        addBotReply(enLocale.flows.digitalMarketing.stepPrompts.name)
      } else if (currentStep === 'name') {
        const nextData = { ...formData, name: trimmed }
        setFormData(nextData)
        setCurrentStep('phone')
        addBotReply(enLocale.flows.digitalMarketing.stepPrompts.phone)
      } else if (currentStep === 'phone') {
        const nextData = { ...formData, phone: trimmed }
        setFormData(nextData)
        setCurrentStep('website')
        addBotReply(enLocale.flows.digitalMarketing.stepPrompts.website)
      } else if (currentStep === 'website') {
        const nextData = { ...formData, website: trimmed }
        setFormData(nextData)
        setCurrentStep('monthlyBudget')
        addBotReply(
          enLocale.flows.digitalMarketing.stepPrompts.monthlyBudget,
          enLocale.flows.digitalMarketing.stepPrompts.budgetOptions
        )
      } else if (currentStep === 'monthlyBudget') {
        const nextData = { ...formData, budget: trimmed }
        setFormData(nextData)
        setCurrentStep('completed')
        submitLead(nextData, 'digitalMarketing')
      }
      return
    }

    // 4. FLOW 3: Join CrackLeap Academy - 6 Courses
    if (currentFlow === 'crackleapAcademy') {
      if (currentStep === 'course') {
        const nextData = { ...formData, service: trimmed }
        setFormData(nextData)
        setCurrentStep('background')
        addBotReply(
          enLocale.flows.crackleapAcademy.stepPrompts.background,
          enLocale.flows.crackleapAcademy.stepPrompts.backgroundOptions
        )
      } else if (currentStep === 'background') {
        const nextData = { ...formData, background: trimmed }
        setFormData(nextData)
        setCurrentStep('name')
        addBotReply(enLocale.flows.crackleapAcademy.stepPrompts.name)
      } else if (currentStep === 'name') {
        const nextData = { ...formData, name: trimmed }
        setFormData(nextData)
        setCurrentStep('phone')
        addBotReply(enLocale.flows.crackleapAcademy.stepPrompts.phone)
      } else if (currentStep === 'phone') {
        const nextData = { ...formData, phone: trimmed }
        setFormData(nextData)
        setCurrentStep('timing')
        addBotReply(
          enLocale.flows.crackleapAcademy.stepPrompts.timing,
          enLocale.flows.crackleapAcademy.stepPrompts.timingOptions
        )
      } else if (currentStep === 'timing') {
        const nextData = { ...formData, timing: trimmed }
        setFormData(nextData)
        setCurrentStep('completed')
        submitLead(nextData, 'crackleapAcademy')
      }
      return
    }

    // 5. FLOW 4: Get Scripten Co-pilot for Content Creators
    if (currentFlow === 'scriptenCopilot') {
      if (currentStep === 'platform') {
        const nextData = { ...formData, platform: trimmed }
        setFormData(nextData)
        setCurrentStep('niche')
        addBotReply(enLocale.flows.scriptenCopilot.stepPrompts.niche)
      } else if (currentStep === 'niche') {
        const nextData = { ...formData, niche: trimmed }
        setFormData(nextData)
        setCurrentStep('name')
        addBotReply(enLocale.flows.scriptenCopilot.stepPrompts.name)
      } else if (currentStep === 'name') {
        const nextData = { ...formData, name: trimmed }
        setFormData(nextData)
        setCurrentStep('email')
        addBotReply(enLocale.flows.scriptenCopilot.stepPrompts.email)
      } else if (currentStep === 'email') {
        const nextData = { ...formData, email: trimmed }
        setFormData(nextData)
        setCurrentStep('phone')
        addBotReply(enLocale.flows.scriptenCopilot.stepPrompts.phone)
      } else if (currentStep === 'phone') {
        const nextData = { ...formData, phone: trimmed }
        setFormData(nextData)
        setCurrentStep('completed')
        submitLead(nextData, 'scriptenCopilot')
      }
      return
    }

    // 6. FLOW 5: Careers
    if (currentFlow === 'careers') {
      if (currentStep === 'role') {
        const nextData = { ...formData, role: trimmed }
        setFormData(nextData)
        setCurrentStep('name')
        addBotReply(enLocale.flows.careers.stepPrompts.name)
      } else if (currentStep === 'name') {
        const nextData = { ...formData, name: trimmed }
        setFormData(nextData)
        setCurrentStep('phone')
        addBotReply(enLocale.flows.careers.stepPrompts.phone)
      } else if (currentStep === 'phone') {
        const nextData = { ...formData, phone: trimmed }
        setFormData(nextData)
        setCurrentStep('portfolio')
        addBotReply(enLocale.flows.careers.stepPrompts.portfolio)
      } else if (currentStep === 'portfolio') {
        const nextData = { ...formData, portfolio: trimmed }
        setFormData(nextData)
        setCurrentStep('completed')
        submitLead(nextData, 'careers')
      }
      return
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleUserMessage(inputValue)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 z-50 flex flex-col w-full h-[100dvh] sm:w-[420px] sm:h-[600px] bg-white sm:rounded-2xl shadow-2xl border border-[#DDD6FE] overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95"
      role="dialog"
      aria-modal="true"
      aria-label="Kural from Vertex Loop Chatbot"
    >
      {/* 1. HEADER: Vertex Loop + Kural + Online + ONLY ONE X at top-right */}
      <header className="bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#5B21B6] text-white px-4 py-3.5 flex items-center justify-between shrink-0 shadow-sm relative">
        <div className="flex items-center gap-3">
          {/* Kural Mini Avatar with Waving Robot */}
          <div className="relative w-10 h-10 rounded-full bg-white/20 p-0.5 border border-white/40 flex items-center justify-center shrink-0 overflow-hidden">
            <LottieRobot width="100%" height="100%" />
            {/* Online Green Indicator Dot */}
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#10B981] border-2 border-white" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-[16px] tracking-tight leading-tight">
                {enLocale.bot.fullName}
              </h2>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#10B981]/25 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                {enLocale.bot.status}
              </span>
            </div>
            <p className="text-[12px] text-purple-200 line-clamp-1 leading-normal font-normal">
              {enLocale.brand.name} • {enLocale.brand.location.split(',')[0]}
            </p>
          </div>
        </div>

        {/* Top-Right Action Controls (Restart + ONLY ONE Close X) */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={initConversation}
            className="p-1.5 rounded-full hover:bg-white/15 text-purple-200 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50"
            title="Restart conversation"
            aria-label={enLocale.bot.restartAriaLabel}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>

          {/* THE ONLY ONE CLOSE BUTTON (Top-Right) */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            title="Close chat"
            aria-label={enLocale.bot.closeAriaLabel}
            id="kural-chatbot-close-button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>

      {/* 2. CHAT MESSAGES BODY */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#FAF5FF]/50 to-[#FFFFFF]">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-2`}
          >
            {/* Message Bubble */}
            <div className="flex items-end gap-2 max-w-[88%]">
              {msg.sender === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-[#EDE9FE] border border-[#DDD6FE] flex items-center justify-center text-xs shrink-0 mb-1 overflow-hidden">
                  🤖
                </div>
              )}

              <div
                className={`p-3.5 text-[15px] font-[500] leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-2xl rounded-br-sm'
                    : 'bg-[#F5F3FF] text-[#1E1B4B] rounded-2xl rounded-tl-sm border border-[#EDE9FE]'
                }`}
              >
                {/* Text content with newline support */}
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* Timestamp */}
                <div
                  className={`text-[10px] mt-1 text-right ${
                    msg.sender === 'user' ? 'text-purple-200' : 'text-[#6D28D9]/70'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>

            {/* Quick Reply Pills */}
            {msg.pills && msg.pills.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1 pl-8 max-w-full">
                {msg.pills.map((pill, idx) => (
                  <button
                    key={`${pill}-${idx}`}
                    type="button"
                    onClick={() => handleUserMessage(pill)}
                    className="bg-white border border-[#DDD6FE] text-[#4C1D95] font-semibold text-[13px] sm:text-[14px] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] shadow-sm rounded-full px-3.5 py-2 transition-all cursor-pointer text-left active:scale-95"
                  >
                    {pill}
                  </button>
                ))}
              </div>
            )}

            {/* Success Card with Direct CTAs */}
            {msg.customType === 'lead_success' && (
              <div className="w-full pl-8 pr-2 pt-2">
                <div className="bg-white border-2 border-[#DDD6FE] rounded-2xl p-4 shadow-md text-[#1E1B4B]">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">✓</span>
                    <span>Lead Dispatched Successfully</span>
                  </div>

                  <p className="text-xs text-[#475569] mb-4">
                    {enLocale.messages.leadSuccessSub}
                  </p>

                  <div className="space-y-2">
                    {/* WhatsApp CTA */}
                    <a
                      href={msg.whatsAppUrl || 'https://wa.me/919445770160'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-[14px] py-2.5 px-4 rounded-xl shadow-md transition-colors text-center"
                    >
                      <span>💬</span>
                      <span>{enLocale.messages.whatsappCta}</span>
                    </a>

                    {/* Email CTA */}
                    <a
                      href="mailto:hello@vertexloop.in"
                      className="w-full flex items-center justify-center gap-2 bg-[#F5F3FF] hover:bg-[#EDE9FE] text-[#4C1D95] border border-[#DDD6FE] font-semibold text-[13px] py-2 px-4 rounded-xl transition-colors text-center"
                    >
                      <span>✉️</span>
                      <span>{enLocale.messages.emailCta}</span>
                    </a>

                    {/* Restart Button */}
                    <button
                      type="button"
                      onClick={initConversation}
                      className="w-full text-center text-xs text-[#7C3AED] font-semibold hover:underline pt-1"
                    >
                      ↻ {enLocale.messages.restartPrompt}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Kural is typing indicator */}
        {isTyping && (
          <div className="flex items-end gap-2 max-w-[88%]">
            <div className="w-6 h-6 rounded-full bg-[#EDE9FE] border border-[#DDD6FE] flex items-center justify-center text-xs shrink-0 mb-1 overflow-hidden">
              🤖
            </div>
            <div className="bg-[#F5F3FF] text-[#1E1B4B] p-3 rounded-2xl rounded-tl-sm border border-[#EDE9FE] shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="text-xs text-[#6D28D9] font-medium ml-1.5">{enLocale.messages.thinking}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 3. INPUT BAR: Clean, rounded-full, NO OVERLAP, 40px Circle Gradient Button */}
      <div className="bg-white border-t border-[#E9D5FF] px-3.5 py-3 shrink-0">
        <form
          onSubmit={e => {
            e.preventDefault()
            handleUserMessage(inputValue)
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={enLocale.bot.inputPlaceholder}
            disabled={isSubmitting}
            className="flex-1 bg-white border border-[#E9D5FF] rounded-full px-4 py-2.5 text-[#1E1B4B] text-[14px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#DDD6FE] transition-all disabled:opacity-60"
            id="kural-chatbot-input"
          />

          {/* 40px Circle Gradient Send Button */}
          <button
            type="submit"
            disabled={!inputValue.trim() || isSubmitting}
            className="w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white flex items-center justify-center shadow-md shrink-0 transition-transform active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            aria-label={enLocale.bot.sendAriaLabel}
            id="kural-chatbot-send-button"
          >
            <svg className="w-4 h-4 transform rotate-45 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>

      {/* 4. FOOTER: Fully visible, informative, no overlap */}
      <footer className="bg-[#FAF5FF] border-t border-[#EDE9FE] px-4 py-2 text-center text-[11px] text-[#64748b] shrink-0 flex items-center justify-between">
        <span className="font-medium text-[#4C1D95] flex items-center gap-1">
          <span>⚡</span>
          <span>{enLocale.bot.footerText}</span>
        </span>
        <div className="flex items-center gap-2 text-[11px]">
          <a
            href="https://wa.me/919445770160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] font-bold hover:underline"
          >
            WhatsApp
          </a>
          <span>•</span>
          <a
            href="mailto:hello@vertexloop.in"
            className="text-[#7C3AED] font-semibold hover:underline"
          >
            hello@vertexloop.in
          </a>
        </div>
      </footer>
    </div>
  )
}
