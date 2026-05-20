'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { AnimatedSectionProps, AnimationVariant } from '@/types'
import {
  fadeUpVariants,
  fadeInVariants,
  slideLeftVariants,
  slideRightVariants,
  scaleInVariants,
  staggerContainerVariants,
} from '@/lib/motion'
import { Variants } from 'framer-motion'

const VARIANT_MAP: Record<AnimationVariant, Variants> = {
  fadeUp: fadeUpVariants,
  fadeIn: fadeInVariants,
  slideLeft: slideLeftVariants,
  slideRight: slideRightVariants,
  scaleIn: scaleInVariants,
  stagger: staggerContainerVariants,
}

interface Props extends AnimatedSectionProps {
  as?: 'div' | 'section' | 'article' | 'aside'
  once?: boolean
  margin?: `${number}px` | `${number}%`
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = 'fadeUp',
  as: Tag = 'div',
  once = true,
  margin = '-100px',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const inView = useInView(ref, {
    once,
    margin,
  })
  const variants = VARIANT_MAP[variant]

  const customVariants: Variants = {
    ...variants,
    visible: {
      ...(typeof variants.visible === 'object' ? variants.visible : {}),
      transition: {
        ...((typeof variants.visible === 'object' && 'transition' in variants.visible)
          ? (variants.visible as { transition?: object }).transition
          : {}),
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={customVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}