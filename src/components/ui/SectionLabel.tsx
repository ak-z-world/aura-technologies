import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  accent?: 'blue' | 'lavender' | 'mint' | 'gold' | 'rose' | 'default'
}

const ACCENT_STYLES: Record<string, string> = {
  blue: 'text-[#4a7fa5] bg-sky-soft/60 border-sky-mist/60',
  lavender: 'text-[#7c6fad] bg-lavender-soft/60 border-lavender-mist/60',
  mint: 'text-[#3d8c7a] bg-mint-soft/60 border-mint-mist/60',
  gold: 'text-[#a07830] bg-gold-soft/60 border-gold-soft/80',
  rose: 'text-[#b04a4a] bg-[#fce8e8]/60 border-[#f5d5d5]/80',
  default: 'text-slate-dim bg-pearl-100/60 border-pearl-200/60',
}

export default function SectionLabel({
  children,
  className,
  accent = 'default',
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-mono font-medium tracking-[0.1em] uppercase backdrop-blur-sm',
        ACCENT_STYLES[accent],
        className
      )}
    >
      <span className={cn(
        'w-1 h-1 rounded-full flex-shrink-0',
        accent === 'blue' && 'bg-[#4a7fa5]',
        accent === 'lavender' && 'bg-[#7c6fad]',
        accent === 'mint' && 'bg-[#3d8c7a]',
        accent === 'gold' && 'bg-[#a07830]',
        accent === 'rose' && 'bg-[#b04a4a]',
        accent === 'default' && 'bg-slate-dim',
      )} />
      {children}
    </span>
  )
}