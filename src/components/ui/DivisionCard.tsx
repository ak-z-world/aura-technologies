'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  Cpu,
  Server,
  Code2,
  TrendingUp,
  ChevronRight,
  Check,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Division } from '@/types'
import { cardHoverVariants } from '@/lib/motion'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GraduationCap,
  Cpu,
  Server,
  Code2,
  TrendingUp,
}

interface DivisionCardProps {
  division: Division
  featured?: boolean
  index: number
}

export default function DivisionCard({ division, featured = false, index }: DivisionCardProps) {
  const [hovered, setHovered] = useState(false)
  const IconComponent = ICON_MAP[division.icon]

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        'relative rounded-3xl overflow-hidden glass-card border border-white/60 group cursor-default',
        featured ? 'lg:col-span-2' : ''
      )}
      style={{ minHeight: featured ? 380 : 300 }}
    >
      {/* Gradient accent background — appears on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${division.gradient.from} 0%, transparent 65%), radial-gradient(ellipse at 100% 100%, ${division.gradient.to} 0%, transparent 65%)`,
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[60px] pointer-events-none transition-opacity duration-500 group-hover:opacity-70 opacity-0"
        style={{ backgroundColor: division.gradient.glow }}
      />

      {/* Border glow line */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px"
        animate={{ opacity: hovered ? 1 : 0 }}
        style={{
          background: `linear-gradient(90deg, transparent, ${division.accentColor}60, transparent)`,
        }}
      />

      <div className={cn('relative z-10 p-8', featured ? 'p-10' : '')}>
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
            animate={{
              backgroundColor: hovered ? `${division.accentColor}18` : 'rgba(255,255,255,0.7)',
              borderColor: hovered ? `${division.accentColor}30` : 'rgba(255,255,255,0.6)',
            }}
            style={{ border: '1px solid rgba(255,255,255,0.6)' }}
          >
            {IconComponent && (
              <IconComponent
                size={24}
                className="transition-colors duration-300"
                style={{ color: hovered ? division.accentColor : '#64748b' } as React.CSSProperties}
              />
            )}
          </motion.div>

          {/* Stat chip */}
          <div
            className="px-3 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-wider flex items-center gap-1.5 transition-all duration-300"
            style={{
              backgroundColor: `${division.accentColor}12`,
              color: division.accentColor,
              border: `1px solid ${division.accentColor}25`,
            }}
          >
            <span className="font-bold">{division.stats.value}</span>
            <span className="opacity-70">{division.stats.label}</span>
          </div>
        </div>

        {/* Title & tagline */}
        <div className="mb-4">
          <h3
            className={cn(
              'text-display font-semibold text-slate-ink tracking-tight leading-tight mb-1.5',
              featured ? 'text-3xl' : 'text-2xl'
            )}
          >
            {division.title}
          </h3>
          <p
            className="text-xs font-mono tracking-[0.1em] uppercase transition-colors duration-300"
            style={{ color: hovered ? division.accentColor : '#94a3b8' }}
          >
            {division.tagline}
          </p>
        </div>

        {/* Description */}
        <p className={cn(
          'text-slate-mid leading-relaxed font-light mb-6',
          featured ? 'text-base max-w-lg' : 'text-sm'
        )}>
          {division.description}
        </p>

        {/* Capabilities */}
        <AnimatePresence>
          {(hovered || featured) && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'flex flex-col gap-2 mb-6',
                !featured && 'hidden sm:flex'
              )}
            >
              {division.capabilities.slice(0, featured ? 5 : 3).map((cap, i) => (
                <li key={cap} className="flex items-center gap-2.5 text-xs text-slate-mid">
                  <Check
                    size={12}
                    className="flex-shrink-0 transition-colors"
                    style={{ color: division.accentColor }}
                  />
                  {cap}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* CTA link */}
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-300 group/link"
          style={{ color: hovered ? division.accentColor : '#64748b' }}
          whileHover={{ x: 3 }}
        >
          Learn more
          <ChevronRight size={12} className="transition-transform duration-200 group-hover/link:translate-x-0.5" />
        </motion.a>
      </div>

      {/* Index watermark */}
      <div className="absolute bottom-6 right-7 text-[80px] font-display font-bold leading-none text-slate-ink/[0.03] select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </div>
    </motion.div>
  )
}