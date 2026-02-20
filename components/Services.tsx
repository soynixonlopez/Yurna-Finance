'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconUser, IconBriefcase, IconBuilding, IconCheck, IconArrowRight } from './Icons'

const plans = [
  {
    title: 'Sesión Estratégica Personal',
    price: '$50',
    for: 'Profesionales e individuos',
    icon: IconUser,
    includes: [
      'Diagnóstico financiero personal',
      'Revisión de ingresos y gastos',
      'Orientación fiscal básica',
      'Recomendaciones de inversión inicial',
      'Plan de acción personalizado',
    ],
    cta: 'Agendar sesión personal',
    featured: false,
  },
  {
    title: 'Sesión Estratégica para Emprendedores',
    price: '$100',
    for: 'Emprendedores',
    icon: IconBriefcase,
    includes: [
      'Diagnóstico financiero del negocio',
      'Revisión contable y fiscal',
      'Identificación de riesgos',
      'Optimización de flujo de caja',
      'Ruta estratégica de crecimiento',
    ],
    cta: 'Agendar sesión emprendedor',
    featured: true,
  },
  {
    title: 'Sesión Estratégica Empresarial',
    price: '$300',
    for: 'Empresas',
    icon: IconBuilding,
    includes: [
      'Diagnóstico integral',
      'Revisión estructura contable y fiscal',
      'Evaluación de rentabilidad y costos',
      'Análisis de riesgos financieros',
      'Propuesta de optimización y expansión',
      'Reunión estratégica ejecutiva',
    ],
    cta: 'Agendar sesión empresarial',
    featured: false,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 md:py-32 bg-cream pattern-dots overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-content mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2
            id="services-heading"
            className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-slate-text leading-snug"
          >
            ¿Qué tienen en común el éxito personal y el empresarial?
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gold font-semibold tracking-wide">
            La misma base: finanzas ordenadas.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {plans.map((plan, i) => (
            <motion.article
              key={i}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-shadow duration-300 ${
                plan.featured
                  ? 'bg-navy text-white border-gold/40 shadow-gold md:-mt-2 md:mb-2 md:scale-[1.03] ring-2 ring-gold/30'
                  : 'bg-card-bg border-card-border shadow-card hover:shadow-cardHover hover:border-gold/30'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light" aria-hidden="true" />
              )}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    plan.featured ? 'bg-gold/25 text-gold-light' : 'bg-gold/15 text-gold'
                  }`}
                >
                  <plan.icon />
                </motion.div>
                <h3 className={`mt-5 font-display font-semibold text-xl md:text-2xl ${plan.featured ? 'text-white' : 'text-slate-text'}`}>
                  {plan.title}
                </h3>
                <p className={`mt-2 text-sm ${plan.featured ? 'text-white/70' : 'text-slate-muted'}`}>
                  {plan.for}
                </p>
                <ul className="mt-6 space-y-3 flex-1" role="list">
                  {plan.includes.map((incl, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * j }}
                      className={`flex items-start gap-3 text-sm md:text-base ${
                        plan.featured ? 'text-white/90' : 'text-slate-muted'
                      }`}
                    >
                      <span className={`flex-shrink-0 mt-0.5 ${plan.featured ? 'text-gold-light' : 'text-gold'}`}>
                        <IconCheck />
                      </span>
                      <span>{incl}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/agendar"
                    className={`mt-8 inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl font-semibold text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                      plan.featured
                        ? 'bg-gold hover:bg-gold-light text-navy shadow-gold'
                        : 'bg-navy hover:bg-navy-light text-white'
                    }`}
                  >
                    {plan.cta}
                    <IconArrowRight />
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-slate-muted text-sm md:text-base"
        >
          Pago previo requerido para confirmar la sesión.
        </motion.p>
      </div>
    </section>
  )
}
