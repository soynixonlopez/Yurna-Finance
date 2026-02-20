'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconChart, IconDocument, IconTrendingUp } from './Icons'

const steps = [
  { label: 'Diagnóstico profundo', icon: IconChart },
  { label: 'Orden estructural', icon: IconDocument },
  { label: 'Optimización fiscal y financiera', icon: IconDocument },
  { label: 'Estrategia de inversión (real estate + bursátil)', icon: IconTrendingUp },
  { label: 'Crecimiento y expansión sostenible', icon: IconTrendingUp },
]

const IMG_METHOD = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop'

const container = {
  hidden: { opacity: 1, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 1, x: -16 },
  show: { opacity: 1, x: 0 },
}

export default function Method() {
  return (
    <section
      id="metodo"
      className="py-24 md:py-32 bg-white border-y border-card-border overflow-hidden"
      aria-labelledby="method-heading"
    >
      <div className="max-w-content mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 1, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl overflow-hidden border-2 border-gold/20 bg-cream shadow-cardHover max-w-md mx-auto lg:mx-0"
            >
              <div className="relative">
                <Image
                  src={IMG_METHOD}
                  alt="Planificación y método de trabajo"
                  width={600}
                  height={500}
                  className="w-full h-auto aspect-[6/5] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent pt-12 pb-4 px-5">
                  <p className="text-white font-semibold text-lg">
                    Método paso a paso para tu crecimiento
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Orden, claridad y resultados medibles
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="lg:col-span-7">
            <h2
              id="method-heading"
              className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl"
              style={{ color: '#0F172A' }}
            >
              Método Yurna Finance
            </h2>
            <p
              className="mt-4 text-lg md:text-xl max-w-2xl"
              style={{ color: '#475569' }}
            >
              Un proceso claro en cinco pasos para estructurar tus finanzas y crecer con estrategia.
            </p>
            <motion.ol
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="mt-10 space-y-4"
              role="list"
              start={1}
            >
              {steps.map((step, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-cream border-2 border-card-border/80 hover:border-gold/40 hover:shadow-card transition-all"
                >
                  <span
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy text-white font-display font-semibold flex items-center justify-center text-lg"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                    <step.icon />
                  </span>
                  <span className="text-lg font-semibold" style={{ color: '#0F172A' }}>{step.label}</span>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  )
}
