'use client'

import { motion } from 'framer-motion'
import { IconCalendar, IconCheck, IconArrowRight } from './Icons'
import { useState, useEffect } from 'react'

const FORMSUBMIT_URL = 'https://formsubmit.co/yurna@yurnafinance.com'

const servicios = [
  { value: '', label: 'Selecciona el tipo de sesión' },
  { value: 'Sesión Estratégica Personal ($50)', label: 'Sesión Estratégica Personal — $50' },
  { value: 'Sesión Estratégica para Emprendedores ($100)', label: 'Sesión Estratégica para Emprendedores — $100' },
  { value: 'Sesión Estratégica Empresarial ($300)', label: 'Sesión Estratégica Empresarial — $300' },
]

export default function BookingPage() {
  const [successPage, setSuccessPage] = useState(false)
  const [nextUrl, setNextUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNextUrl(`${window.location.origin}/agendar?enviado=1`)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('enviado') === '1') {
      setSuccessPage(true)
    }
  }, [])

  if (successPage) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 bg-cream pattern-dots">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto px-4"
        >
          <div className="text-center py-12 px-6 rounded-2xl bg-white border border-card-border shadow-cardHover">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 rounded-2xl bg-gold/20 flex items-center justify-center text-gold mx-auto"
            >
              <IconCheck />
            </motion.div>
            <h2 className="mt-6 font-display font-semibold text-3xl text-slate-text">¡Mensaje enviado!</h2>
            <p className="mt-4 text-slate-muted text-lg">
              Te contactaremos pronto para confirmar tu sesión. Revisa tu correo y WhatsApp.
            </p>
            <p className="mt-6 text-slate-muted text-sm">
              Pago previo requerido para confirmar la sesión.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy hover:bg-navy-light text-white font-semibold transition-colors"
            >
              Volver al inicio
              <IconArrowRight />
            </motion.a>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <div className="min-h-screen bg-cream pattern-dots">
      {/* Hero compacto + formulario en flujo único */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-navy via-navy-soft to-navy overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-60" aria-hidden="true" />
        <div className="relative max-w-content mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 text-gold-light text-sm font-medium mb-4">
              <IconCalendar />
              Reserva tu sesión
            </span>
            <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Agenda tu Sesión Estratégica
            </h1>
            <p className="mt-4 text-white/90 text-base md:text-lg">
              Completa los datos y te confirmamos fecha, hora y pago en menos de 24 h.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario inmediato: diseño estratégico */}
      <section className="relative -mt-8 md:-mt-12 pb-20">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            action={FORMSUBMIT_URL}
            method="POST"
            className="rounded-2xl border-2 border-card-border bg-white p-6 md:p-8 shadow-xl space-y-5"
          >
            <input type="hidden" name="_subject" value="Nueva solicitud de sesión - Yurna Finance" />
            <input type="hidden" name="_next" value={nextUrl} />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-slate-text mb-1.5">
                  Nombre <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="Nombre"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-sm font-semibold text-slate-text mb-1.5">
                  Apellido <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="Apellido"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-slate-text mb-1.5">
                Teléfono <span className="text-gold">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="Teléfono"
                required
                className="w-full px-4 py-3 rounded-xl border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="Ej. +507 6000 0000"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-text mb-1.5">
                Correo electrónico <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                required
                className="w-full px-4 py-3 rounded-xl border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="servicio" className="block text-sm font-semibold text-slate-text mb-1.5">
                Tipo de sesión <span className="text-gold">*</span>
              </label>
              <select
                id="servicio"
                name="Servicio"
                required
                className="w-full px-4 py-3 rounded-xl border border-card-border text-slate-text focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
              >
                {servicios.map((opt) => (
                  <option key={opt.value || 'blank'} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="descripcion" className="block text-sm font-semibold text-slate-text mb-1.5">
                ¿En qué te podemos ayudar? <span className="text-gold">*</span>
              </label>
              <textarea
                id="descripcion"
                name="Descripción"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                placeholder="Breve descripción de tu situación o objetivo para la sesión..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold hover:bg-gold-light text-navy font-bold text-lg shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <IconCalendar />
              Enviar solicitud
            </motion.button>
          </motion.form>

          <p className="mt-6 text-center text-slate-muted text-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-1.5 align-middle" aria-hidden="true" />
            Pago previo requerido para confirmar. Respuesta a yurna@yurnafinance.com.
          </p>
        </div>
      </section>
    </div>
  )
}
