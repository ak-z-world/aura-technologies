export interface Division {
  id: string
  title: string
  tagline: string
  description: string
  capabilities: string[]
  icon: string
  gradient: {
    from: string
    to: string
    glow: string
  }
  accentColor: string
  stats: {
    label: string
    value: string
  }
}

export interface ValueProposition {
  id: string
  title: string
  description: string
  icon: string
  metric?: string
  metricLabel?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

export type AnimationVariant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'stagger'

export interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: AnimationVariant
}