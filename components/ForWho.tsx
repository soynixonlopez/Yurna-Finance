'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconUser, IconBriefcase, IconBuilding, IconTrendingUp, IconCheck } from './Icons'

const forWho = [
  { text: 'Profesionales que desean claridad financiera', icon: IconUser },
  { text: 'Emprendedores que quieren crecer con orden', icon: IconBriefcase },
  { text: 'Empresas que buscan dirección estratégica', icon: IconBuilding },
  { text: 'Inversionistas que quieren construir patrimonio real', icon: IconTrendingUp },
]

const IMG_FORWHO = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop'

const container = {
  hidden: { opacity: 1, y: 16 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 1, y: 12 },
  show: { opacity: 1, y: 0 },
}

export default function ForWho() {
  return (
    <section className="py-24 md:py-32 bg-cream pattern-dots overflow-hidden" aria-labelledby="forwho-heading">
      <div className="max-w-content mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-6 order-2 lg:order-1 flex justify-center"
            initial={{ opacity: 1, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 1, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl overflow-hidden border-2 border-gold/20 bg-white shadow-cardHover max-w-md w-full"
            >
              <div className="relative">
                <Image
                  src={IMG_FORWHO}
                  alt="Profesional en reunión de estrategia"
                  width={600}
                  height={500}
                  className="w-full h-auto aspect-[6/5] object-cover"
                />
                <div className="bg-navy px-6 py-5 text-center">
                  <p className="text-white font-semibold text-lg">
                    Para quien quiere crecer con orden y estrategia
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Claridad financiera y resultados a largo plazo
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <h2
              id="forwho-heading"
              className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl"
              style={{ color: '#0F172A' }}
            >
              ¿Para quién es?
            </h2>
            <p
              className="mt-4 text-lg md:text-xl max-w-xl"
              style={{ color: '#475569' }}
            >
              Para personas y organizaciones que buscan estructura, no parches.
            </p>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="mt-10 grid sm:grid-cols-1 gap-4"
              role="list"
            >
              {forWho.map((row, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-card-border hover:border-gold/40 hover:shadow-card transition-all"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                    <row.icon />
                  </span>
                  <span className="text-base md:text-lg font-medium" style={{ color: '#0F172A' }}>{row.text}</span>
                  <span className="ml-auto text-gold flex-shrink-0">
                    <IconCheck />
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
