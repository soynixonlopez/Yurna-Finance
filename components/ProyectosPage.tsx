'use client'

import { motion } from 'framer-motion'

const servicios = [
  'Estructuración financiera',
  'Evaluación de viabilidad',
  'Búsqueda de financiamiento',
  'Gestión integral de proyectos',
]

export default function ProyectosPage() {
  const whatsappLink = 'https://wa.me/50766841749?text=Hola,%20me%20interesa%20Proyectos.%20Me%20gustaría%20agendar%20una%20consulta.'

  return (
    <main>
      <section className="pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-yellow font-display text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Servicios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4"
          >
            Proyectos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-xl md:text-2xl text-slate-900 font-medium mb-4"
          >
            Estructura, viabilidad y financiamiento para tu inversión.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-600 text-base md:text-lg max-w-xl mx-auto"
          >
            Estructuración financiera, evaluación de viabilidad y gestión integral de proyectos de inversión.
          </motion.p>
        </div>
      </section>

      <section className="pb-16 md:pb-24" aria-label="Servicios de proyectos">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden border-l-4 border-l-brand-yellow"
            >
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 md:px-8 py-6 md:py-8">
                <div className="flex items-center gap-4">
                  <span className="w-14 h-14 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Proyectos</h2>
                    <p className="text-white/80 text-sm md:text-base mt-1">Desde la idea hasta el financiamiento y la ejecución</p>
                  </div>
                </div>
              </div>
              <div className="px-6 md:px-8 py-4">
                <ul className="divide-y divide-slate-100" role="list">
                  {servicios.map((servicio) => (
                    <li key={servicio} className="flex items-center gap-4 py-3.5 md:py-4">
                      <span className="w-10 h-10 rounded-lg bg-brand-yellow/15 flex items-center justify-center text-brand-yellow flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span className="font-display font-semibold text-slate-900">{servicio}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-500 text-sm border-l-2 border-brand-yellow pl-4 mt-5 mb-4">
                  Tu proyecto con estructura clara, viabilidad evaluada y camino al financiamiento.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-2">¿Listo para estructurar tu proyecto?</h2>
          <p className="text-slate-600 text-sm mb-6">Desde la idea hasta el financiamiento.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
