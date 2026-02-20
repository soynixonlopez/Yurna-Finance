'use client'

import { motion } from 'framer-motion'

const variants = {
  fadeUp: {
    initial: { opacity: 0, y: 48 },
    inView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  fadeUpSoft: {
    initial: { opacity: 0, y: 28 },
    inView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -40 },
    inView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  fadeRight: {
    initial: { opacity: 0, x: 40 },
    inView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.97 },
    inView: { opacity: 1, scale: 1 },
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  fadeOnly: {
    initial: { opacity: 0 },
    inView: { opacity: 1 },
    transition: { duration: 0.7 },
  },
}

type VariantKey = keyof typeof variants

interface SectionTransitionProps {
  children: React.ReactNode
  variant?: VariantKey
  delay?: number
}

export default function SectionTransition({ children, variant = 'fadeUp', delay = 0 }: SectionTransitionProps) {
  const v = variants[variant] ?? variants.fadeUp
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.inView}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...v.transition, delay }}
    >
      {children}
    </motion.div>
  )
}
