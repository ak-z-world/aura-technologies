'use client'

import React from 'react'

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[540px] aspect-[4/3.2] mx-auto flex items-center justify-center select-none">
      {/* Subtle background ambient glow */}
      <div className="absolute inset-0 bg-radial from-amber-100/30 via-sky-100/20 to-transparent blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 540 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm overflow-visible"
        aria-label="Vertex Loop Three Core Domains: Software, Marketing, Academy"
      >
        <defs>
          {/* Amber Cube Gradients (Software) */}
          <linearGradient id="amberTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="amberLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="amberRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>

          {/* Blue Cube Gradients (Marketing) */}
          <linearGradient id="blueTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="blueLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="blueRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.85" />
          </linearGradient>

          {/* Purple Cube Gradients (Academy) */}
          <linearGradient id="purpleTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="purpleLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="purpleRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.8" />
          </linearGradient>

          {/* Cube Soft Shadows */}
          <filter id="cubeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#1a2333" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Connecting coordinate lines */}
        <g stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" opacity="0.65">
          {/* Top Amber to Bottom Left Blue */}
          <line x1="230" y1="130" x2="140" y2="230" />
          {/* Top Amber to Bottom Right Purple */}
          <line x1="250" y1="130" x2="340" y2="230" />
          {/* Bottom connection line */}
          <path d="M 175 295 L 240 330 L 305 295" fill="none" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* 1. TOP AMBER CUBE (SOFTWARE) */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-transform duration-300 hover:scale-105" filter="url(#cubeShadow)">
          {/* Cube faces (centered at x: 240, y: 70) */}
          {/* Top face */}
          <polygon
            points="240,20 295,50 240,80 185,50"
            fill="url(#amberTop)"
            stroke="#f59e0b"
            strokeWidth="0.75"
            strokeOpacity="0.5"
          />
          {/* Left face */}
          <polygon
            points="185,50 240,80 240,145 185,115"
            fill="url(#amberLeft)"
            stroke="#d97706"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
          {/* Right face */}
          <polygon
            points="295,50 240,80 240,145 295,115"
            fill="url(#amberRight)"
            stroke="#b45309"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />

          {/* Software Icon </> */}
          <g transform="translate(240, 80)" textAnchor="middle">
            <text
              x="0"
              y="-10"
              fontFamily="var(--font-mono, monospace)"
              fontSize="20"
              fontWeight="bold"
              fill="#9a3412"
              opacity="0.9"
              letterSpacing="-0.05em"
            >
              &lt;/&gt;
            </text>
          </g>
        </g>

        {/* Software Callout line & text */}
        <g>
          <line x1="295" y1="80" x2="335" y2="80" stroke="#cbd5e1" strokeWidth="1" />
          <text x="345" y="76" fontFamily="var(--font-body, sans-serif)" fontSize="11" fontWeight="700" letterSpacing="0.12em" fill="#111827">
            SOFTWARE
          </text>
          <text x="345" y="93" fontFamily="var(--font-body, sans-serif)" fontSize="10" fill="#64748b" fontWeight="400">
            Build technology
          </text>
          <text x="345" y="106" fontFamily="var(--font-body, sans-serif)" fontSize="10" fill="#64748b" fontWeight="400">
            for real problems
          </text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* 2. BOTTOM LEFT BLUE CUBE (MARKETING) */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-transform duration-300 hover:scale-105" filter="url(#cubeShadow)">
          {/* Top face */}
          <polygon
            points="140,185 195,215 140,245 85,215"
            fill="url(#blueTop)"
            stroke="#38bdf8"
            strokeWidth="0.75"
            strokeOpacity="0.6"
          />
          {/* Left face */}
          <polygon
            points="85,215 140,245 140,310 85,280"
            fill="url(#blueLeft)"
            stroke="#0284c7"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
          {/* Right face */}
          <polygon
            points="195,215 140,245 140,310 195,280"
            fill="url(#blueRight)"
            stroke="#0369a1"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />

          {/* Bar Chart Icon 📊 */}
          <g transform="translate(140, 245)" stroke="#075985" strokeWidth="2.5" strokeLinecap="round">
            <line x1="-10" y1="-8" x2="-10" y2="0" />
            <line x1="-2" y1="-14" x2="-2" y2="0" />
            <line x1="6" y1="-20" x2="6" y2="0" />
          </g>
        </g>

        {/* Marketing Callout line & text */}
        <g>
          <line x1="85" y1="310" x2="85" y2="350" stroke="#cbd5e1" strokeWidth="1" />
          <text x="85" y="368" fontFamily="var(--font-body, sans-serif)" fontSize="11" fontWeight="700" letterSpacing="0.12em" fill="#111827">
            MARKETING
          </text>
          <text x="85" y="384" fontFamily="var(--font-body, sans-serif)" fontSize="10" fill="#64748b" fontWeight="400">
            Grow products
          </text>
          <text x="85" y="397" fontFamily="var(--font-body, sans-serif)" fontSize="10" fill="#64748b" fontWeight="400">
            with data and content
          </text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* 3. BOTTOM RIGHT PURPLE CUBE (ACADEMY) */}
        {/* ------------------------------------------------------------- */}
        <g className="transition-transform duration-300 hover:scale-105" filter="url(#cubeShadow)">
          {/* Top face */}
          <polygon
            points="340,185 395,215 340,245 285,215"
            fill="url(#purpleTop)"
            stroke="#c084fc"
            strokeWidth="0.75"
            strokeOpacity="0.6"
          />
          {/* Left face */}
          <polygon
            points="285,215 340,245 340,310 285,280"
            fill="url(#purpleLeft)"
            stroke="#9333ea"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
          {/* Right face */}
          <polygon
            points="395,215 340,245 340,310 395,280"
            fill="url(#purpleRight)"
            stroke="#7e22ce"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />

          {/* Graduation Cap Icon 🎓 */}
          <g transform="translate(340, 238)" stroke="#581c87" strokeWidth="1.8" fill="none" strokeLinejoin="round">
            {/* Mortarboard Diamond */}
            <polygon points="0,-16 14,-9 0,-2 -14,-9" fill="rgba(243,232,255,0.4)" stroke="#581c87" />
            {/* Skullcap / lower curve */}
            <path d="M -8,-6 C -8,-2 8,-2 8,-6" />
            {/* Tassel */}
            <line x1="14" y1="-9" x2="14" y2="0" stroke="#581c87" strokeWidth="1.5" />
            <circle cx="14" cy="0" r="1.5" fill="#581c87" />
          </g>
        </g>

        {/* Academy Callout line & text */}
        <g>
          <line x1="395" y1="310" x2="395" y2="350" stroke="#cbd5e1" strokeWidth="1" />
          <text x="395" y="368" fontFamily="var(--font-body, sans-serif)" fontSize="11" fontWeight="700" letterSpacing="0.12em" fill="#111827">
            ACADEMY
          </text>
          <text x="395" y="384" fontFamily="var(--font-body, sans-serif)" fontSize="10" fill="#64748b" fontWeight="400">
            Develop practical
          </text>
          <text x="395" y="397" fontFamily="var(--font-body, sans-serif)" fontSize="10" fill="#64748b" fontWeight="400">
            skills and capability
          </text>
        </g>
      </svg>
    </div>
  )
}
