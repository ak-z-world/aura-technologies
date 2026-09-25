'use client'

import React from 'react'

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[540px] aspect-[4/3.2] mx-auto flex items-center justify-center select-none">
      {/* Soft background ambient glow */}
      <div className="absolute inset-0 bg-radial from-amber-100/25 via-sky-100/15 to-transparent blur-3xl pointer-events-none" />

      <svg
        viewBox="0 0 540 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label="Vertex Loop Three Core Domains: Software, Marketing, Academy"
      >
        <defs>
          {/* ------------------------------------------------------------- */}
          {/* FILTERS & SHADOWS */}
          {/* ------------------------------------------------------------- */}
          {/* Ambient Ground Shadow Filter */}
          <filter id="ambientShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
          </filter>
          
          {/* Soft Ground Contact Shadow Filter */}
          <filter id="contactShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>

          {/* Internal Glow Blur Filter */}
          <filter id="innerGlowBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>

          {/* Specular Highlight Blur */}
          <filter id="sheenBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>

          {/* ------------------------------------------------------------- */}
          {/* 1. SOFTWARE (AMBER / GOLD TRANSLUCENT GLASS) */}
          {/* ------------------------------------------------------------- */}
          {/* Top Face Frosted Glass */}
          <linearGradient id="amberTopGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#fef3c7" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0.55" />
          </linearGradient>

          {/* Top Specular Sheen */}
          <linearGradient id="amberTopSheen" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Left Face Frosted Glass */}
          <linearGradient id="amberLeftGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#fdba74" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0.6" />
          </linearGradient>

          {/* Right Face Frosted Glass */}
          <linearGradient id="amberRightGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.65" />
          </linearGradient>

          {/* Back Faces (Depth through glass) */}
          <linearGradient id="amberBackWallLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c2410c" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="amberBackWallRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="amberBackFloor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9a3412" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.35" />
          </linearGradient>

          {/* Volumetric Core Glow */}
          <radialGradient id="amberCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#fb923c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </radialGradient>


          {/* ------------------------------------------------------------- */}
          {/* 2. MARKETING (CYAN / SKY BLUE TRANSLUCENT GLASS) */}
          {/* ------------------------------------------------------------- */}
          {/* Top Face Frosted Glass */}
          <linearGradient id="blueTopGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#e0f2fe" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.6" />
          </linearGradient>

          {/* Top Specular Sheen */}
          <linearGradient id="blueTopSheen" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Left Face Frosted Glass */}
          <linearGradient id="blueLeftGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.65" />
          </linearGradient>

          {/* Right Face Frosted Glass */}
          <linearGradient id="blueRightGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.68" />
          </linearGradient>

          {/* Back Faces (Depth through glass) */}
          <linearGradient id="blueBackWallLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="blueBackWallRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0369a1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#075985" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="blueBackFloor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c4a6e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#082f49" stopOpacity="0.35" />
          </linearGradient>

          {/* Volumetric Core Glow */}
          <radialGradient id="blueCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>


          {/* ------------------------------------------------------------- */}
          {/* 3. ACADEMY (LAVENDER / VIOLET TRANSLUCENT GLASS) */}
          {/* ------------------------------------------------------------- */}
          {/* Top Face Frosted Glass */}
          <linearGradient id="purpleTopGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#faf5ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0.6" />
          </linearGradient>

          {/* Top Specular Sheen */}
          <linearGradient id="purpleTopSheen" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Left Face Frosted Glass */}
          <linearGradient id="purpleLeftGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#d8b4fe" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.65" />
          </linearGradient>

          {/* Right Face Frosted Glass */}
          <linearGradient id="purpleRightGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.68" />
          </linearGradient>

          {/* Back Faces (Depth through glass) */}
          <linearGradient id="purpleBackWallLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="purpleBackWallRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6b21a8" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="purpleBackFloor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#581c87" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3b0764" stopOpacity="0.35" />
          </linearGradient>

          {/* Volumetric Core Glow */}
          <radialGradient id="purpleCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* CONNECTING COORDINATE LINES */}
        {/* ------------------------------------------------------------- */}
        <g stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" opacity="0.55">
          {/* Top Amber to Bottom Left Blue */}
          <line x1="240" y1="145" x2="140" y2="185" />
          {/* Top Amber to Bottom Right Purple */}
          <line x1="240" y1="145" x2="340" y2="185" />
          {/* Bottom Left Blue to Bottom Right Purple */}
          <line x1="195" y1="245" x2="285" y2="245" />
        </g>

        {/* Subtle connector node dots */}
        <circle cx="240" cy="145" r="2.5" fill="#f59e0b" opacity="0.6" />
        <circle cx="140" cy="185" r="2.5" fill="#0284c7" opacity="0.6" />
        <circle cx="340" cy="185" r="2.5" fill="#9333ea" opacity="0.6" />


        {/* ============================================================= */}
        {/* 1. TOP AMBER CUBE (SOFTWARE) */}
        {/* ============================================================= */}
        <g className="transition-transform duration-300 hover:scale-105">
          {/* A. Soft Ambient Ground Shadow */}
          <ellipse
            cx="240"
            cy="162"
            rx="62"
            ry="20"
            fill="#1e293b"
            opacity="0.07"
            filter="url(#ambientShadow)"
          />
          <ellipse
            cx="240"
            cy="155"
            rx="42"
            ry="14"
            fill="#ea580c"
            opacity="0.12"
            filter="url(#contactShadow)"
          />

          {/* B. Back Interior Faces (visible through translucent glass) */}
          {/* Back Floor */}
          <polygon
            points="185,115 240,85 295,115 240,145"
            fill="url(#amberBackFloor)"
          />
          {/* Back Wall Left */}
          <polygon
            points="185,50 240,20 240,85 185,115"
            fill="url(#amberBackWallLeft)"
          />
          {/* Back Wall Right */}
          <polygon
            points="295,50 240,20 240,85 295,115"
            fill="url(#amberBackWallRight)"
          />

          {/* C. Internal Back Wireframe Edges (refraction inside glass) */}
          <g stroke="rgba(255,255,255,0.35)" strokeWidth="1" opacity="0.75">
            <line x1="240" y1="20" x2="240" y2="85" strokeDasharray="2 2" />
            <line x1="185" y1="115" x2="240" y2="85" strokeDasharray="2 2" />
            <line x1="295" y1="115" x2="240" y2="85" strokeDasharray="2 2" />
          </g>

          {/* D. Internal Volumetric Core Glow */}
          <ellipse
            cx="240"
            cy="82"
            rx="38"
            ry="28"
            fill="url(#amberCoreGlow)"
            filter="url(#innerGlowBlur)"
          />

          {/* E. Translucent Front Left Face */}
          <polygon
            points="185,50 240,80 240,145 185,115"
            fill="url(#amberLeftGlass)"
            stroke="rgba(251, 146, 60, 0.35)"
            strokeWidth="0.75"
          />

          {/* F. Translucent Front Right Face */}
          <polygon
            points="295,50 240,80 240,145 295,115"
            fill="url(#amberRightGlass)"
            stroke="rgba(217, 119, 6, 0.4)"
            strokeWidth="0.75"
          />

          {/* G. Translucent Top Face */}
          <polygon
            points="240,20 295,50 240,80 185,50"
            fill="url(#amberTopGlass)"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1"
          />

          {/* Top Specular Sheen (glossy diagonal reflection) */}
          <polygon
            points="240,20 278,41 218,74 185,50"
            fill="url(#amberTopSheen)"
            filter="url(#sheenBlur)"
            opacity="0.7"
          />

          {/* H. Crisp Glass Edge Bevel Highlights */}
          {/* Top front ridges */}
          <polyline
            points="185,50 240,80 295,50"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Top back ridges */}
          <polyline
            points="185,50 240,20 295,50"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Front vertical corner */}
          <line
            x1="240"
            y1="80"
            x2="240"
            y2="145"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Bottom silhouette highlights */}
          <polyline
            points="185,115 240,145 295,115"
            stroke="rgba(245, 158, 11, 0.4)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Corner Specular Glints */}
          <circle cx="240" cy="20" r="1.5" fill="#ffffff" opacity="0.95" />
          <circle cx="240" cy="80" r="1.5" fill="#ffffff" opacity="0.95" />

          {/* I. Software Icon </> on Top Face */}
          <g transform="translate(240, 56)" textAnchor="middle">
            <text
              x="0"
              y="0"
              fontFamily="var(--font-mono, monospace)"
              fontSize="19"
              fontWeight="bold"
              fill="#9a3412"
              opacity="0.95"
              letterSpacing="-0.06em"
              style={{ filter: 'drop-shadow(0 1px 2px rgba(254, 215, 170, 0.6))' }}
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


        {/* ============================================================= */}
        {/* 2. BOTTOM LEFT BLUE CUBE (MARKETING) */}
        {/* ============================================================= */}
        <g className="transition-transform duration-300 hover:scale-105">
          {/* A. Soft Ambient Ground Shadow */}
          <ellipse
            cx="140"
            cy="327"
            rx="62"
            ry="20"
            fill="#1e293b"
            opacity="0.07"
            filter="url(#ambientShadow)"
          />
          <ellipse
            cx="140"
            cy="320"
            rx="42"
            ry="14"
            fill="#0284c7"
            opacity="0.12"
            filter="url(#contactShadow)"
          />

          {/* B. Back Interior Faces */}
          {/* Back Floor */}
          <polygon
            points="85,280 140,250 195,280 140,310"
            fill="url(#blueBackFloor)"
          />
          {/* Back Wall Left */}
          <polygon
            points="85,215 140,185 140,250 85,280"
            fill="url(#blueBackWallLeft)"
          />
          {/* Back Wall Right */}
          <polygon
            points="195,215 140,185 140,250 195,280"
            fill="url(#blueBackWallRight)"
          />

          {/* C. Internal Back Wireframe Edges */}
          <g stroke="rgba(255,255,255,0.35)" strokeWidth="1" opacity="0.75">
            <line x1="140" y1="185" x2="140" y2="250" strokeDasharray="2 2" />
            <line x1="85" y1="280" x2="140" y2="250" strokeDasharray="2 2" />
            <line x1="195" y1="280" x2="140" y2="250" strokeDasharray="2 2" />
          </g>

          {/* D. Internal Volumetric Core Glow */}
          <ellipse
            cx="140"
            cy="247"
            rx="38"
            ry="28"
            fill="url(#blueCoreGlow)"
            filter="url(#innerGlowBlur)"
          />

          {/* E. Translucent Front Left Face */}
          <polygon
            points="85,215 140,245 140,310 85,280"
            fill="url(#blueLeftGlass)"
            stroke="rgba(56, 189, 248, 0.4)"
            strokeWidth="0.75"
          />

          {/* F. Translucent Front Right Face */}
          <polygon
            points="195,215 140,245 140,310 195,280"
            fill="url(#blueRightGlass)"
            stroke="rgba(2, 132, 199, 0.45)"
            strokeWidth="0.75"
          />

          {/* G. Translucent Top Face */}
          <polygon
            points="140,185 195,215 140,245 85,215"
            fill="url(#blueTopGlass)"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1"
          />

          {/* Top Specular Sheen */}
          <polygon
            points="140,185 178,206 118,239 85,215"
            fill="url(#blueTopSheen)"
            filter="url(#sheenBlur)"
            opacity="0.7"
          />

          {/* H. Crisp Glass Edge Bevel Highlights */}
          {/* Top front ridges */}
          <polyline
            points="85,215 140,245 195,215"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Top back ridges */}
          <polyline
            points="85,215 140,185 195,215"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Front vertical corner */}
          <line
            x1="140"
            y1="245"
            x2="140"
            y2="310"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Bottom silhouette highlights */}
          <polyline
            points="85,280 140,310 195,280"
            stroke="rgba(2, 132, 199, 0.4)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Corner Specular Glints */}
          <circle cx="140" cy="185" r="1.5" fill="#ffffff" opacity="0.95" />
          <circle cx="140" cy="245" r="1.5" fill="#ffffff" opacity="0.95" />

          {/* I. Bar Chart Icon 📊 on Top Face */}
          <g transform="translate(140, 215)" stroke="#0c4a6e" strokeWidth="2.4" strokeLinecap="round">
            <line x1="-9" y1="2" x2="-9" y2="-5" />
            <line x1="-1" y1="2" x2="-1" y2="-11" />
            <line x1="7" y1="2" x2="7" y2="-17" />
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


        {/* ============================================================= */}
        {/* 3. BOTTOM RIGHT PURPLE CUBE (ACADEMY) */}
        {/* ============================================================= */}
        <g className="transition-transform duration-300 hover:scale-105">
          {/* A. Soft Ambient Ground Shadow */}
          <ellipse
            cx="340"
            cy="327"
            rx="62"
            ry="20"
            fill="#1e293b"
            opacity="0.07"
            filter="url(#ambientShadow)"
          />
          <ellipse
            cx="340"
            cy="320"
            rx="42"
            ry="14"
            fill="#9333ea"
            opacity="0.12"
            filter="url(#contactShadow)"
          />

          {/* B. Back Interior Faces */}
          {/* Back Floor */}
          <polygon
            points="285,280 340,250 395,280 340,310"
            fill="url(#purpleBackFloor)"
          />
          {/* Back Wall Left */}
          <polygon
            points="285,215 340,185 340,250 285,280"
            fill="url(#purpleBackWallLeft)"
          />
          {/* Back Wall Right */}
          <polygon
            points="395,215 340,185 340,250 395,280"
            fill="url(#purpleBackWallRight)"
          />

          {/* C. Internal Back Wireframe Edges */}
          <g stroke="rgba(255,255,255,0.35)" strokeWidth="1" opacity="0.75">
            <line x1="340" y1="185" x2="340" y2="250" strokeDasharray="2 2" />
            <line x1="285" y1="280" x2="340" y2="250" strokeDasharray="2 2" />
            <line x1="395" y1="280" x2="340" y2="250" strokeDasharray="2 2" />
          </g>

          {/* D. Internal Volumetric Core Glow */}
          <ellipse
            cx="340"
            cy="247"
            rx="38"
            ry="28"
            fill="url(#purpleCoreGlow)"
            filter="url(#innerGlowBlur)"
          />

          {/* E. Translucent Front Left Face */}
          <polygon
            points="285,215 340,245 340,310 285,280"
            fill="url(#purpleLeftGlass)"
            stroke="rgba(192, 132, 252, 0.4)"
            strokeWidth="0.75"
          />

          {/* F. Translucent Front Right Face */}
          <polygon
            points="395,215 340,245 340,310 395,280"
            fill="url(#purpleRightGlass)"
            stroke="rgba(147, 51, 234, 0.45)"
            strokeWidth="0.75"
          />

          {/* G. Translucent Top Face */}
          <polygon
            points="340,185 395,215 340,245 285,215"
            fill="url(#purpleTopGlass)"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1"
          />

          {/* Top Specular Sheen */}
          <polygon
            points="340,185 378,206 318,239 285,215"
            fill="url(#purpleTopSheen)"
            filter="url(#sheenBlur)"
            opacity="0.7"
          />

          {/* H. Crisp Glass Edge Bevel Highlights */}
          {/* Top front ridges */}
          <polyline
            points="285,215 340,245 395,215"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Top back ridges */}
          <polyline
            points="285,215 340,185 395,215"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Front vertical corner */}
          <line
            x1="340"
            y1="245"
            x2="340"
            y2="310"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Bottom silhouette highlights */}
          <polyline
            points="285,280 340,310 395,280"
            stroke="rgba(147, 51, 234, 0.4)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Corner Specular Glints */}
          <circle cx="340" cy="185" r="1.5" fill="#ffffff" opacity="0.95" />
          <circle cx="340" cy="245" r="1.5" fill="#ffffff" opacity="0.95" />

          {/* I. Graduation Cap Icon 🎓 on Top Face */}
          <g transform="translate(340, 212)" stroke="#581c87" strokeWidth="1.7" fill="none" strokeLinejoin="round">
            {/* Mortarboard Diamond */}
            <polygon points="0,-12 13,-6 0,0 -13,-6" fill="rgba(243, 232, 255, 0.5)" stroke="#581c87" />
            {/* Lower cap arch */}
            <path d="M -7.5,-3.5 C -7.5,0.5 7.5,0.5 7.5,-3.5" />
            {/* Tassel */}
            <line x1="13" y1="-6" x2="13" y2="2" stroke="#581c87" strokeWidth="1.4" />
            <circle cx="13" cy="2" r="1.2" fill="#581c87" />
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
