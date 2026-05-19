import { Variants, Transition } from 'framer-motion'

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
}

export const cinematicTransition: Transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
}

export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
}

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: cinematicTransition,
  },
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: smoothTransition,
  },
}

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: cinematicTransition,
  },
}

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 60, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: cinematicTransition,
  },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: cinematicTransition,
  },
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const heroTitleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

export const heroWordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -30,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 8px 32px rgba(26,35,51,0.06), 0 2px 8px rgba(26,35,51,0.04)',
  },
  hover: {
    scale: 1.025,
    y: -6,
    boxShadow: '0 32px 80px rgba(26,35,51,0.10), 0 8px 24px rgba(26,35,51,0.06)',
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const orbFloatVariants: Variants = {
  animate: {
    y: [0, -24, 0],
    x: [0, 8, 0],
    scale: [1, 1.04, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const orbFloat2Variants: Variants = {
  animate: {
    y: [0, 20, 0],
    x: [0, -12, 0],
    scale: [1, 1.06, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 2,
    },
  },
}

export const counterVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}