'use client'

import Link from 'next/link'
import { IconArrowRight } from './Icons'

const problems = [
  'Facturas, pero no sabes cuánto ganas.',
  'Declaras por obligación, no con estrategia.',
  'Negocio o inversiones sin orden financiero.',
  'Todo depende de ti, sin claridad de números.',
  'Miedo a errores, multas o malas decisiones.',
]

export default function Problem() {
  return (
    <section className="py-16 md:py-20 bg-cream pattern-dots overflow-hidden" aria-labelledby="problem-heading">
      <div className="max-w-content mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="problem-heading"
            className="font-display font-semibold text-2xl md:text-3xl text-slate-text"
          >
            ¿Te pasa que…?
          </h2>

          {/* Lista de problemas en una línea compacta */}
          <div className="mt-6 rounded-xl border border-card-border bg-white px-4 py-3 shadow-card">
            <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-slate-text text-sm md:text-base" role="list">
              {problems.map((text, i) => (
                <li key={i} className="flex items-center gap-x-2 after:content-['•'] after:text-gold/60 after:text-xs last:after:content-['']">
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cierre enfatizado */}
          <div className="mt-8 p-5 md:p-6 rounded-xl bg-navy text-white">
            <p className="font-display font-semibold text-lg md:text-xl leading-snug text-center">
              Cuando no hay orden financiero, hay ansiedad. Y cuando no hay estrategia, no hay crecimiento sostenible.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/agendar"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gold hover:bg-gold-light text-navy font-semibold text-sm shadow-gold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Quiero ordenar mi situación
                <IconArrowRight />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-white/50 text-white hover:bg-white/10 font-semibold text-sm transition-all"
              >
                Ver sesiones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
