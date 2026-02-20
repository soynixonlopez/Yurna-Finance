'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

function IconQuestion() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const faqs: { question: string; answer: string }[] = [
  {
    question: '¿La sesión es online?',
    answer:
      'Sí. Las sesiones estratégicas se realizan por videollamada (Zoom o similar), para que puedas conectarte desde donde estés.',
  },
  {
    question: '¿Qué necesito preparar antes de la sesión?',
    answer:
      'Te enviaré una breve guía con la información que conviene tener a mano: ingresos, gastos relevantes, obligaciones fiscales si aplica, y preguntas concretas que quieras resolver.',
  },
  {
    question: '¿Incluye declaración de impuestos?',
    answer:
      'La sesión incluye orientación fiscal y revisión de tu situación. La elaboración y presentación de declaraciones formales puede ser un servicio adicional según tu caso.',
  },
  {
    question: '¿Puedo contratar un plan mensual luego?',
    answer:
      'Sí. Después de la sesión estratégica podemos definir un acompañamiento mensual o por proyectos según tus objetivos.',
  },
  {
    question: '¿Trabajas con Panamá y otros países?',
    answer:
      'Sí. Tengo experiencia en Panamá y en otros países de la región. La estrategia se adapta al marco legal y fiscal de tu jurisdicción.',
  },
  {
    question: '¿Cómo se realiza el pago y confirmación?',
    answer:
      'El pago se realiza antes de la sesión (transferencia o método acordado). Una vez confirmado el pago, se agenda la fecha y hora y recibes el enlace de la videollamada.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-y border-card-border overflow-hidden" aria-labelledby="faq-heading">
      <div className="max-w-content mx-auto px-3 sm:px-4 lg:px-6">
        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-slate-text flex items-center gap-3"
        >
          <span className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
            <IconQuestion />
          </span>
          Preguntas frecuentes
        </motion.h2>
        <dl className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-card-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
            >
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left text-slate-text font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-gold transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`border-t border-card-border ${openIndex === i ? 'block' : 'hidden'}`}
              >
                <p className="px-4 py-4 text-slate-muted text-base leading-relaxed">{faq.answer}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
