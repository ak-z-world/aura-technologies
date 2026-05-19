'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Layers,
  Brain,
  Network,
  Users,
  Target,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ValueProposition } from '@/types'
import { cardHoverVariants } from '@/lib/motion'

const ICON_MAP: Record<
  string,
  React.ComponentType<{
    size?: number
    className?: string
    style?: React.CSSProperties
  }>
>

interface ValueCardProps {
  value: ValueProposition
  index: number
}

const ACCENT_COLORS = [
  { color: '#4a7fa5', bg: 'rgba(74,127,165,0.08)', border: 'rgba(74,127,165,0.2)' },
  { color: '#7c6fad', bg: 'rgba(124,111,173,0.08)', border: 'rgba(124,111,173,0.2)' },
  { color: '#3d8c7a', bg: 'rgba(61,140,122,0.08)', border: 'rgba(61,140,122,0.2)' },
  { color: '#a07830', bg: 'rgba(160,120,48,0.08)', border: 'rgba(160,120,48,0.2)' },
  { color: '#b04a4a', bg: 'rgba(176,74,74,0.08)', border: 'rgba(176,74,74,0.2)' },
  { color: '#4a7fa5', bg: 'rgba(74,127,165,0.08)', border: 'rgba(74,127,165,0.2)' },
]

export default function ValueCard({ value, index }: ValueCardProps) {
  const [hovered, setHovered] = useState(false)
  const IconComponent = ICON_MAP[value.icon]
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length]

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl glass-card border border-white/60 p-7 group overflow-hidden"
    >
      {/* Hover background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: `radial-gradient(ellipse at 0% 0%, ${accent.bg} 0%, transparent 70%)` }}
      />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
        style={{ background: `linear-gradient(90deg, ${accent.color}80, transparent)`, transformOrigin: 'left' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative z-10">
        {/* Icon + metric */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
            animate={{
              backgroundColor: hovered ? accent.bg : 'rgba(255,255,255,0.7)',
              border: hovered ? `1px solid ${accent.border}` : '1px solid rgba(255,255,255,0.6)',
            }}
          >
            {IconComponent && (
              <IconComponent
  size={20}
  className="transition-colors duration-300"
  style={{ color: hovered ? accent.color : '#64748b' }}
/>
            )}
          </motion.div>

          {value.metric && (
            <div className="text-right">
              <div
                className="text-2xl font-display font-semibold leading-none transition-colors duration-300"
                style={{ color: hovered ? accent.color : '#1a2333' }}
              >
                {value.metric}
              </div>
              <div className="text-[10px] font-mono text-slate-dim tracking-wider mt-0.5 uppercase">
                {value.metricLabel}
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-ink tracking-tight mb-3 leading-snug">
          {value.title}
        </h3>

        {/* Description */}
        <p className="text-slate-mid text-sm leading-relaxed font-light">
          {value.description}
        </p>
      </div>
    </motion.div>
  )
}