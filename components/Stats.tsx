'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  value: string | number
  label: string
  prefix?: string
  suffix?: string
}

const stats: StatItem[] = [
  { value: 15, label: 'Años de experiencia', prefix: '+' },
  { value: 50, label: 'Proyectos asesorados', prefix: '+' },
  { value: 100, label: 'Enfoque en resultados', suffix: '%' },
  { value: 'LATAM', label: 'Alcance regional' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isInView) return

    stats.forEach((stat, index) => {
      if (typeof stat.value === 'number') {
        const duration = 2000
        const steps = 60
        const increment = stat.value / steps
        const stepDuration = duration / steps

        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = stat.value as number
              return newCounts
            })
            clearInterval(timer)
          } else {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(current)
              return newCounts
            })
          }
        }, stepDuration)
      } else {
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = stat.value
          return newCounts
        })
      }
    })
  }, [isInView])

  return (
    <section id="stats-section" className="py-16 md:py-20 bg-white border-y border-slate-100">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-brand-yellow mb-1 font-sans">
                {typeof stat.value === 'number' ? (
                  <>
                    {stat.prefix}
                    {counts[index]}
                    {stat.suffix}
                  </>
                ) : (
                  stat.value
                )}
              </p>
              <p className="text-slate-600 text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
