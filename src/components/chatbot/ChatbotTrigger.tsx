'use client'

import React, { useEffect, useState } from 'react'
import LottieRobot from './LottieRobot'
import enLocale from '@/locales/en.json'

interface ChatbotTriggerProps {
  isOpen: boolean
  onClick: () => void
}

export default function ChatbotTrigger({ isOpen, onClick }: ChatbotTriggerProps) {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowSpeechBubble(false)
      return
    }

    // Show speech bubble initially after 1s
    const initialTimer = setTimeout(() => {
      setShowSpeechBubble(true)
    }, 1000)

    // Loop speech bubble visibility every 10s (show for 5s, hide for 5s)
    const intervalTimer = setInterval(() => {
      setShowSpeechBubble(prev => !prev)
    }, 5000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(intervalTimer)
    }
  }, [isOpen])

  if (isOpen) {
    return null
  }

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none">
      {/* Speech Bubble */}
      <div
        onClick={onClick}
        className={`mb-2.5 max-w-[260px] cursor-pointer transition-all duration-500 ease-out transform ${
          showSpeechBubble
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
        role="button"
        tabIndex={0}
        aria-label="Kural Greeting Message"
      >
        <div className="relative bg-white text-[#1E1B4B] text-[14px] font-semibold border border-[#E9D5FF] rounded-2xl rounded-br-md shadow-xl px-[14px] py-[10px] flex items-center gap-2 hover:border-[#7C3AED] transition-colors">
          <span>{enLocale.bot.speechBubble}</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
          
          {/* Subtle bubble arrow */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r border-b border-[#E9D5FF] transform rotate-45" />
        </div>
      </div>

      {/* Trigger Group: Robot Waving + Green Dot */}
      <div className="flex flex-col items-center">
        {/* Main Robot Avatar Button */}
        <button
          type="button"
          onClick={onClick}
          className="relative group cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-[1.08] active:scale-95 flex items-center justify-center"
          aria-label="Open chat with Kural"
          id="kural-chatbot-trigger"
        >
          {/* Plain Lottie Robot Widget with medium sizing and NO round background */}
          <div className="w-[70px] h-[78px] sm:w-[78px] sm:h-[88px] md:w-[84px] md:h-[94px] drop-shadow-[0_8px_20px_rgba(124,58,237,0.28)] flex items-center justify-center">
            <LottieRobot width="100%" height="100%" />
          </div>

          {/* Green Online Dot (12px, #10B981, 2px white border, top-right near robot head, ping animation) */}
          <div className="absolute top-0.5 right-1.5 sm:top-1 sm:right-2 w-3 h-3 z-10 pointer-events-none">
            <span className="absolute inset-0 rounded-full bg-[#10B981] opacity-75 animate-ping" />
            <span className="relative block w-3 h-3 rounded-full bg-[#10B981] border-2 border-white shadow-sm" />
          </div>
        </button>
      </div>
    </div>
  )
}
