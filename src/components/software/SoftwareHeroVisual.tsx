'use client'

import React from 'react'
import { Layout, Sparkles, Database, Workflow, Cloud } from 'lucide-react'

const LAYERS = [
  {
    name: 'Applications',
    sub: 'Web & Mobile',
    icon: Layout,
    color: '#d97706',
    topColor: '#fef3c7',
    leftColor: '#fde68a',
    rightColor: '#f59e0b',
  },
  {
    name: 'AI',
    sub: 'Intelligence',
    icon: Sparkles,
    color: '#0284c7',
    topColor: '#e0f2fe',
    leftColor: '#bae6fd',
    rightColor: '#38bdf8',
  },
  {
    name: 'Automation',
    sub: 'Workflows',
    icon: Workflow,
    color: '#c2410c',
    topColor: '#ffedd5',
    leftColor: '#fed7aa',
    rightColor: '#fb923c',
  },
]

export default function SoftwareHeroVisual() {
  return (
    <div className="relative w-full max-w-[540px] aspect-[4/3.4] mx-auto flex items-center justify-center select-none">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-radial from-amber-50/40 via-sky-50/30 to-transparent blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 540 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm overflow-visible"
        aria-label="Software Architecture Layers: Applications, AI, Data, Automation, Cloud"
      >
        <defs>
          {/* Layer 1 - Applications (Amber/Gold) */}
          <linearGradient id="layer1Top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.8" />
          </linearGradient>

          {/* Layer 2 - AI (Sky Blue) */}
          <linearGradient id="layer2Top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.85" />
          </linearGradient>

          {/* Layer 3 - Data (Blue) */}
          <linearGradient id="layer3Top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eff6ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.8" />
          </linearGradient>

          {/* Layer 4 - Automation (Warm Sand/Peach) */}
          <linearGradient id="layer4Top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.8" />
          </linearGradient>

          {/* Layer 5 - Cloud (Ice/Slate) */}
          <linearGradient id="layer5Top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.85" />
          </linearGradient>

          {/* Soft shadow filter */}
          <filter id="layerShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1a2333" floodOpacity="0.04" />
          </filter>
        </defs>

        {/* Vertical Axis guide */}
        <line x1="160" y1="40" x2="160" y2="390" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

        {/* ------------------------------------------------------------- */}
        {/* 5 ISOMETRIC FLOATING LAYERS */}
        {/* ------------------------------------------------------------- */}

        {/* LAYER 1: APPLICATIONS (y: 60) */}
        <g className="transition-transform duration-300 hover:scale-105" filter="url(#layerShadow)">
          <polygon
            points="160,20 250,65 160,110 70,65"
            fill="url(#layer1Top)"
            stroke="#f59e0b"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
          <polygon points="70,65 160,110 160,118 70,73" fill="#fde68a" fillOpacity="0.6" />
          <polygon points="250,65 160,110 160,118 250,73" fill="#f59e0b" fillOpacity="0.5" />
          <circle cx="160" cy="65" r="3" fill="#d97706" />
        </g>
        {/* Layer 1 Callout */}
        <g>
          <path d="M 250 65 L 305 65 L 330 45 L 350 45" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          {/* Badge */}
          <rect x="360" y="27" width="34" height="34" rx="8" fill="#fffbeb" stroke="#fef3c7" strokeWidth="1" />
          <g transform="translate(369, 36)" stroke="#d97706" strokeWidth="1.6" fill="none">
            <rect x="0" y="0" width="16" height="13" rx="2" />
            <line x1="0" y1="4" x2="16" y2="4" />
          </g>
          {/* Text */}
          <text x="404" y="41" fontFamily="var(--font-body, sans-serif)" fontSize="12" fontWeight="700" fill="#111827">
            Applications
          </text>
          <text x="404" y="55" fontFamily="var(--font-body, sans-serif)" fontSize="10.5" fill="#64748b" fontWeight="400">
            Web &amp; Mobile
          </text>
        </g>

        {/* LAYER 2: AI (y: 130) */}
        <g className="transition-transform duration-300 hover:scale-105" filter="url(#layerShadow)">
          <polygon
            points="160,90 250,135 160,180 70,135"
            fill="url(#layer2Top)"
            stroke="#0284c7"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
          <polygon points="70,135 160,180 160,188 70,143" fill="#bae6fd" fillOpacity="0.6" />
          <polygon points="250,135 160,180 160,188 250,143" fill="#38bdf8" fillOpacity="0.5" />
          <circle cx="160" cy="135" r="3" fill="#0284c7" />
        </g>
        {/* Layer 2 Callout */}
        <g>
          <path d="M 250 135 L 305 135 L 330 115 L 350 115" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          <rect x="360" y="97" width="34" height="34" rx="8" fill="#f0f9ff" stroke="#e0f2fe" strokeWidth="1" />
          <g transform="translate(369, 106)" stroke="#0284c7" strokeWidth="1.6" fill="none">
            <path d="M 8 0 L 10 5 L 15 7 L 10 9 L 8 14 L 6 9 L 1 7 L 6 5 Z" />
          </g>
          <text x="404" y="111" fontFamily="var(--font-body, sans-serif)" fontSize="12" fontWeight="700" fill="#111827">
            AI
          </text>
          <text x="404" y="125" fontFamily="var(--font-body, sans-serif)" fontSize="10.5" fill="#64748b" fontWeight="400">
            Intelligence
          </text>
        </g>

        {/* LAYER 3: DATA (y: 200) */}
        <g className="transition-transform duration-300 hover:scale-105" filter="url(#layerShadow)">
          <polygon
            points="160,160 250,205 160,250 70,205"
            fill="url(#layer3Top)"
            stroke="#2563eb"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
          <polygon points="70,205 160,250 160,258 70,213" fill="#bfdbfe" fillOpacity="0.6" />
          <polygon points="250,205 160,250 160,258 250,213" fill="#60a5fa" fillOpacity="0.5" />
          <circle cx="160" cy="205" r="3" fill="#2563eb" />
        </g>
        {/* Layer 3 Callout */}
        <g>
          <path d="M 250 205 L 305 205 L 330 185 L 350 185" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          <rect x="360" y="167" width="34" height="34" rx="8" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1" />
          <g transform="translate(370, 176)" stroke="#2563eb" strokeWidth="1.6" fill="none">
            <ellipse cx="7" cy="3" rx="7" ry="2.5" />
            <path d="M 0 3 V 10 C 0 11.5 3.5 13 7 13 C 10.5 13 14 11.5 14 10 V 3" />
            <path d="M 0 6.5 C 0 8 3.5 9.5 7 9.5 C 10.5 9.5 14 8 14 6.5" />
          </g>
          <text x="404" y="181" fontFamily="var(--font-body, sans-serif)" fontSize="12" fontWeight="700" fill="#111827">
            Data
          </text>
          <text x="404" y="195" fontFamily="var(--font-body, sans-serif)" fontSize="10.5" fill="#64748b" fontWeight="400">
            Analytics
          </text>
        </g>

        {/* LAYER 4: AUTOMATION (y: 270) */}
        <g className="transition-transform duration-300 hover:scale-105" filter="url(#layerShadow)">
          <polygon
            points="160,230 250,275 160,320 70,275"
            fill="url(#layer4Top)"
            stroke="#ea580c"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
          <polygon points="70,275 160,320 160,328 70,283" fill="#fed7aa" fillOpacity="0.6" />
          <polygon points="250,275 160,320 160,328 250,283" fill="#fb923c" fillOpacity="0.5" />
          <circle cx="160" cy="275" r="3" fill="#ea580c" />
        </g>
        {/* Layer 4 Callout */}
        <g>
          <path d="M 250 275 L 305 275 L 330 255 L 350 255" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          <rect x="360" y="237" width="34" height="34" rx="8" fill="#fff7ed" stroke="#ffedd5" strokeWidth="1" />
          <g transform="translate(369, 246)" stroke="#ea580c" strokeWidth="1.6" fill="none">
            <circle cx="8" cy="8" r="6" strokeDasharray="3 3" />
            <circle cx="8" cy="8" r="2" fill="#ea580c" />
          </g>
          <text x="404" y="251" fontFamily="var(--font-body, sans-serif)" fontSize="12" fontWeight="700" fill="#111827">
            Automation
          </text>
          <text x="404" y="265" fontFamily="var(--font-body, sans-serif)" fontSize="10.5" fill="#64748b" fontWeight="400">
            Workflows
          </text>
        </g>

        {/* LAYER 5: CLOUD (y: 340) */}
        <g className="transition-transform duration-300 hover:scale-105" filter="url(#layerShadow)">
          <polygon
            points="160,300 250,345 160,390 70,345"
            fill="url(#layer5Top)"
            stroke="#64748b"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
          <polygon points="70,345 160,390 160,398 70,353" fill="#cbd5e1" fillOpacity="0.6" />
          <polygon points="250,345 160,390 160,398 250,353" fill="#94a3b8" fillOpacity="0.5" />
          <circle cx="160" cy="345" r="3" fill="#475569" />
        </g>
        {/* Layer 5 Callout */}
        <g>
          <path d="M 250 345 L 305 345 L 330 325 L 350 325" stroke="#cbd5e1" strokeWidth="1" fill="none" />
          <rect x="360" y="307" width="34" height="34" rx="8" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="1" />
          <g transform="translate(369, 316)" stroke="#475569" strokeWidth="1.6" fill="none">
            <path d="M 3 11 A 3 3 0 0 1 3 6 A 4 4 0 0 1 10 4 A 4 4 0 0 1 14 7 A 3 3 0 0 1 13 12 Z" />
          </g>
          <text x="404" y="321" fontFamily="var(--font-body, sans-serif)" fontSize="12" fontWeight="700" fill="#111827">
            Cloud
          </text>
          <text x="404" y="335" fontFamily="var(--font-body, sans-serif)" fontSize="10.5" fill="#64748b" fontWeight="400">
            Infrastructure
          </text>
        </g>
      </svg>
    </div>
  )
}
