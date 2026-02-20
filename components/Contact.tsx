'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    setStatus({
      type: 'success',
      message: '¡Mensaje enviado! Te responderé a la brevedad.',
    })
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus({ type: null, message: '' }), 5000)
  }

  const whatsappLink = 'https://wa.me/50766841749?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20sus%20servicios'

  return (
    <section id="contacto" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-yellow font-display text-sm font-semibold tracking-widest uppercase mb-4">
              Contacto
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-carbon mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-carbon/80 text-lg leading-relaxed mb-8">
              ¿Tienes un proyecto de inversión, necesitas asesoría financiera o estructuración? Escríbeme por email o WhatsApp y te respondo a la brevedad.
            </p>
            <div className="space-y-6">
              <a
                href="mailto:yurna@yurnafinance.com"
                className="flex items-center gap-4 text-carbon hover:text-brand-yellow transition-colors group"
              >
                <span className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow/25 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold block">Email</span>
                  <span className="text-carbon/80">yurna@yurnafinance.com</span>
                </div>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-carbon hover:text-brand-yellow transition-colors group"
              >
                <span className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/25 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold block">WhatsApp</span>
                  <span className="text-carbon/80">+507 6684 1749</span>
                </div>
              </a>
            </div>
            <div className="mt-10">
              <p className="text-carbon/70 text-sm font-semibold uppercase tracking-wider mb-4">Redes sociales</p>
              <div className="flex gap-4">
                {[
                  { href: 'https://www.linkedin.com/in/yurnairys', label: 'LinkedIn', icon: 'LI' },
                  { href: 'https://www.instagram.com/yurnafinance', label: 'Instagram', icon: 'IG' },
                  { href: 'https://www.tiktok.com/@yurnairyspinango', label: 'TikTok', icon: 'TT' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-slate-200 hover:bg-brand-yellow/20 text-carbon hover:text-brand-yellow flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10"
          >
            <h3 className="font-display text-xl font-bold text-carbon mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-carbon mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-carbon focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-carbon mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-carbon focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-carbon mb-2">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-carbon focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>
              {status.message && (
                <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
