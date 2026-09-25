'use client'

import React from 'react'

export default function MarketingHeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-radial from-sky-50/50 via-indigo-50/20 to-transparent blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm overflow-visible"
        aria-label="Digital Marketing Ecosystem: Search, Content, Social, Performance, Data, Automation"
      >
        <defs>
          {/* Subtle drop shadows */}
          <filter id="centerShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1a2333" floodOpacity="0.05" />
          </filter>
          <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1a2333" floodOpacity="0.04" />
          </filter>

          {/* Center disk gradient */}
          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#faf9f6" />
          </linearGradient>

          {/* Outer ring gradient */}
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4f1ea" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e9e5dc" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* 1. Concentric Background Circles */}
        <circle cx="230" cy="230" r="190" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
        <circle cx="230" cy="230" r="140" fill="url(#ringGradient)" />
        <circle cx="230" cy="230" r="140" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />

        {/* 2. Radial Connecting Dashed Lines */}
        <g stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6">
          {/* Top (Search): 90 deg / (230, 70) */}
          <line x1="230" y1="160" x2="230" y2="70" />
          {/* Top Right (Content): 30 deg / (360, 150) */}
          <line x1="285" y1="195" x2="360" y2="150" />
          {/* Right (Social): 0 deg / (390, 230) */}
          <line x1="300" y1="230" x2="390" y2="230" />
          {/* Bottom Right (Performance): -45 deg / (360, 320) */}
          <line x1="285" y1="265" x2="360" y2="320" />
          {/* Bottom (Data): -90 deg / (230, 390) */}
          <line x1="230" y1="300" x2="230" y2="390" />
          {/* Bottom Left (Automation): -150 deg / (95, 320) */}
          <line x1="175" y1="265" x2="95" y2="320" />
        </g>

        {/* Small connector cross markers */}
        <g stroke="#94a3b8" strokeWidth="1" opacity="0.6">
          <path d="M 226 70 H 234 M 230 66 V 74" />
          <path d="M 356 150 H 364 M 360 146 V 154" />
          <path d="M 386 230 H 394 M 390 226 V 234" />
          <path d="M 356 320 H 364 M 360 316 V 324" />
          <path d="M 226 390 H 234 M 230 386 V 394" />
          <path d="M 91 320 H 99 M 95 316 V 324" />
        </g>

        {/* 3. Central Node (Digital Marketing) */}
        <g filter="url(#centerShadow)" className="transition-transform duration-300 hover:scale-105">
          <circle cx="230" cy="230" r="70" fill="url(#centerGradient)" stroke="#1a2333" strokeWidth="1" strokeOpacity="0.1" />
          <text
            x="230"
            y="225"
            textAnchor="middle"
            fontFamily="var(--font-display, serif)"
            fontSize="16"
            fontWeight="600"
            fill="#111827"
          >
            Digital
          </text>
          <text
            x="230"
            y="245"
            textAnchor="middle"
            fontFamily="var(--font-display, serif)"
            fontSize="16"
            fontWeight="600"
            fill="#111827"
          >
            Marketing
          </text>
        </g>

        {/* 4. Orbit Nodes with Icons & Labels */}

        {/* Node 1: SEARCH (Top: 230, 40) */}
        <g transform="translate(230, 40)" className="transition-transform duration-200 hover:scale-110">
          <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#nodeShadow)" />
          {/* Search Icon */}
          <g transform="translate(-6, -6)" stroke="#2563eb" strokeWidth="1.6" fill="none">
            <circle cx="5" cy="5" r="4.5" />
            <line x1="8.5" y1="8.5" x2="12" y2="12" />
          </g>
          <text x="0" y="28" textAnchor="middle" fontFamily="var(--font-body, sans-serif)" fontSize="11" fontWeight="600" fill="#111827">
            Search
          </text>
        </g>

        {/* Node 2: CONTENT (Top Right: 360, 100) */}
        <g transform="translate(360, 100)" className="transition-transform duration-200 hover:scale-110">
          <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#nodeShadow)" />
          {/* File/Content Icon */}
          <g transform="translate(-6, -6)" stroke="#d97706" strokeWidth="1.6" fill="none">
            <rect x="1" y="0" width="10" height="13" rx="1.5" />
            <line x1="3.5" y1="4" x2="8.5" y2="4" />
            <line x1="3.5" y1="7" x2="8.5" y2="7" />
          </g>
          <text x="0" y="28" textAnchor="middle" fontFamily="var(--font-body, sans-serif)" fontSize="11" fontWeight="600" fill="#111827">
            Content
          </text>
        </g>

        {/* Node 3: SOCIAL (Right: 405, 230) */}
        <g transform="translate(405, 230)" className="transition-transform duration-200 hover:scale-110">
          <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#nodeShadow)" />
          {/* Social / Users Icon */}
          <g transform="translate(-6, -6)" stroke="#0284c7" strokeWidth="1.6" fill="none">
            <circle cx="6" cy="4" r="3" />
            <path d="M 1 12 C 1 9.5 3 8 6 8 C 9 8 11 9.5 11 12" />
          </g>
          <text x="0" y="28" textAnchor="middle" fontFamily="var(--font-body, sans-serif)" fontSize="11" fontWeight="600" fill="#111827">
            Social
          </text>
        </g>

        {/* Node 4: PERFORMANCE (Bottom Right: 360, 340) */}
        <g transform="translate(360, 340)" className="transition-transform duration-200 hover:scale-110">
          <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#nodeShadow)" />
          {/* Performance Bar Chart Icon */}
          <g transform="translate(-6, -6)" stroke="#ea580c" strokeWidth="1.6" strokeLinecap="round">
            <line x1="2" y1="11" x2="2" y2="7" />
            <line x1="6" y1="11" x2="6" y2="3" />
            <line x1="10" y1="11" x2="10" y2="0" />
          </g>
          <text x="0" y="28" textAnchor="middle" fontFamily="var(--font-body, sans-serif)" fontSize="11" fontWeight="600" fill="#111827">
            Performance
          </text>
        </g>

        {/* Node 5: DATA (Bottom: 230, 400) */}
        <g transform="translate(230, 400)" className="transition-transform duration-200 hover:scale-110">
          <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#nodeShadow)" />
          {/* Data / Clock Icon */}
          <g transform="translate(-6, -6)" stroke="#4f46e5" strokeWidth="1.6" fill="none">
            <circle cx="6" cy="6" r="5.5" />
            <polyline points="6 3 6 6 8.5 7.5" />
          </g>
          <text x="0" y="28" textAnchor="middle" fontFamily="var(--font-body, sans-serif)" fontSize="11" fontWeight="600" fill="#111827">
            Data
          </text>
        </g>

        {/* Node 6: AUTOMATION (Bottom Left: 85, 340) */}
        <g transform="translate(85, 340)" className="transition-transform duration-200 hover:scale-110">
          <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#nodeShadow)" />
          {/* Settings / Gear Icon */}
          <g transform="translate(-6, -6)" stroke="#059669" strokeWidth="1.6" fill="none">
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="6" cy="6" r="5.5" strokeDasharray="2.5 2.5" />
          </g>
          <text x="0" y="28" textAnchor="middle" fontFamily="var(--font-body, sans-serif)" fontSize="11" fontWeight="600" fill="#111827">
            Automation
          </text>
        </g>
      </svg>
    </div>
  )
}
