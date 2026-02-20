'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconCalendar } from './Icons'

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-navy overflow-hidden" aria-labelledby="finalcta-heading">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />
      <div className="relative max-w-content mx-auto px-3 sm:px-4 lg:px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 text-gold-light text-sm font-medium mb-6"
        >
          <IconCalendar />
          Un paso hacia tu orden financiero
        </motion.span>
        <motion.h2
          id="finalcta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl mx-auto leading-tight"
        >
          La tranquilidad financiera no es suerte. <span className="text-gold">Es estrategia.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-white/90 text-lg md:text-xl max-w-xl mx-auto"
        >
          Agenda tu Sesión Estratégica y comienza a estructurar tu crecimiento hoy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold hover:bg-gold-light text-navy font-bold text-lg shadow-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              <IconCalendar />
              Agendar ahora
            </Link>
          </motion.div>
          <motion.a
            href="https://wa.me/50766841749?text=Hola,%20me%20interesa%20agendar%20una%20Sesión%20Estratégica%20con%20Yurna%20Finance."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/40 text-white hover:bg-white/10 font-semibold text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Hablar por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
