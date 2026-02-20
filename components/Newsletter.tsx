'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to your backend/newsletter service
    setStatus({
      type: 'success',
      message: '¡Gracias por suscribirte!',
    })
    setEmail('')
    setTimeout(() => setStatus({ type: null, message: '' }), 5000)
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(30,73,118,0.4),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_80%,rgba(15,23,42,0.7),transparent_50%)] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <p className="text-brand-yellow font-display text-sm font-semibold tracking-widest uppercase mb-4">
          Newsletter
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Recibe insights sobre finanzas e inversión
        </h2>
        <p className="text-white/85 mb-8">
          Artículos, tendencias y reflexiones sobre gestión financiera, estructuración de proyectos e inversiones en la región.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-white/95 border border-white/20 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-brand-yellow hover:bg-brand-yellow-dark text-slate-900 font-semibold rounded-lg transition-colors"
          >
            Suscribirme
          </button>
        </form>
        {status.message && (
          <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
            {status.message}
          </p>
        )}
      </motion.div>
    </section>
  )
}
