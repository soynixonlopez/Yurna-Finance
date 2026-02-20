'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  IconChart,
  IconDocument,
  IconTrendingUp,
  IconCalculator,
  IconBuilding,
  IconShield,
} from './Icons'

import yurnaImg from '@/assets/img/yurna.png'
import bannerImg from '@/assets/img/banner.jpg'

const bullets = [
  { text: '+12 años en administración, finanzas y proyectos', icon: IconChart },
]

// Iconos alrededor de la foto de Yurna: posición desordenada y animación por icono
const photoIcons = [
  { Icon: IconChart, pos: 'top-[5%] left-[-8%] sm:left-[-4%]', color: 'text-gold', float: 4, delay: 0 },
  { Icon: IconCalculator, pos: 'top-[22%] right-[-12%] sm:right-[-6%]', color: 'text-gold/80', float: 5.5, delay: 0.4 },
  { Icon: IconTrendingUp, pos: 'bottom-[38%] left-[-10%] sm:left-[-5%]', color: 'text-gold/70', float: 3.8, delay: 0.8 },
  { Icon: IconBuilding, pos: 'bottom-[12%] right-[-6%]', color: 'text-gold', float: 5, delay: 0.2 },
  { Icon: IconShield, pos: 'top-[48%] right-[-2%]', color: 'text-gold/60', float: 4.5, delay: 0.6 },
  { Icon: IconDocument, pos: 'bottom-[52%] left-[2%]', color: 'text-gold/80', float: 6, delay: 0.3 },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const animItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden min-h-[90vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Borde inferior con diseño: onda + línea dorada de la marca */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none" aria-hidden>
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-32"
          preserveAspectRatio="none"
        >
          {/* Onda principal — relleno crema */}
          <path
            d="M0 52 C360 14 720 84 1080 52 C1260 34 1380 40 1440 52 L1440 100 L0 100 Z"
            fill="#FDFBF7"
          />
          {/* Línea dorada sobre el borde de la onda */}
          <path
            d="M0 52 C360 14 720 84 1080 52 C1260 34 1380 40 1440 52"
            stroke="#C9A227"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>
      {/* Imagen de fondo banner */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Image
          src={bannerImg}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
      {/* Overlay oscuro para que el contenido resalte */}
      <div
        className="absolute inset-0 bg-navy/75 pointer-events-none"
        aria-hidden="true"
      />

      {/* Orbes animados únicos en el fondo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[min(80vw,520px)] h-[min(80vw,520px)] rounded-full bg-gold/12 blur-[80px] animate-orb-1"
          style={{ top: '10%', right: '-10%' }}
        />
        <div
          className="absolute w-[min(60vw,380px)] h-[min(60vw,380px)] rounded-full bg-gold/10 blur-[70px] animate-orb-2"
          style={{ bottom: '5%', left: '-5%' }}
        />
        <div
          className="absolute w-[min(50vw,320px)] h-[min(50vw,320px)] rounded-full bg-navy-light/40 blur-[60px] animate-orb-3"
          style={{ top: '50%', left: '20%' }}
        />
      </div>

      {/* Glow central */}
      <div
        className="absolute inset-0 bg-hero-glow animate-pulse-soft pointer-events-none"
        aria-hidden="true"
      />
      {/* Patrón en movimiento */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none pattern-dots animate-grid-move"
        style={{ backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />
      <div className="relative max-w-content mx-auto px-3 sm:px-4 lg:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7 max-w-3xl text-center lg:text-left flex flex-col items-center lg:items-stretch"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h1
              id="hero-heading"
              className="font-display font-semibold text-xl sm:text-2xl md:text-3xl lg:text-7xl leading-snug text-white"
            >
              <motion.span variants={animItem} className="block">
                Finanzas,
              </motion.span>
              <motion.span
                variants={animItem}
                className="block mt-1 hero-title-highlight"
              >
                Real Estate, Inversiones Bursátiles
              </motion.span>
            </h1>
            <motion.p
              variants={animItem}
              className="mt-5 text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Acompaño a personas y empresas a construir claridad financiera, desarrollar y estructurar ideas de negocio, estabilizar y hacer crecer sus empresas, invertir estratégicamente en bienes raíces y participar con criterio en el mercado bursátil.
            </motion.p>
            <motion.div variants={animItem} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/agendar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold hover:bg-gold-light text-navy font-semibold shadow-gold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Agenda tu Sesión Estratégica
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border-2 border-white/40 text-white hover:bg-white/10 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Ver cómo trabajo
              </a>
            </motion.div>
            <motion.ul
              className="mt-12 space-y-4 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none"
              role="list"
              variants={container}
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 0.4, staggerChildren: 0.08 }}
            >
              {bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  variants={animItem}
                  className="flex items-center justify-center lg:justify-start gap-4 text-white/90 text-sm md:text-base"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center text-gold">
                    <bullet.icon />
                  </span>
                  <span>{bullet.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Columna derecha: imagen con iconos alrededor */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-[520px] xl:max-w-[580px]">
              {/* Iconos desordenados alrededor de la foto */}
              {photoIcons.map(({ Icon, pos, color, float, delay }, i) => (
                <motion.div
                  key={i}
                  className={`absolute z-10 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center ${pos} ${color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                    rotate: [0, 3, -2, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.3 + delay },
                    scale: { duration: 0.4, delay: 0.2 + delay },
                    y: { duration: float, repeat: Infinity, ease: 'easeInOut', delay },
                    rotate: { duration: float + 1, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 },
                  }}
                  aria-hidden
                >
                  <Icon />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative"
              >
                <div
                  className="absolute -inset-3 rounded-3xl bg-gold/25 blur-2xl animate-pulse-soft"
                  aria-hidden="true"
                />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white/5"
                >
                  <div className="relative aspect-[4/5] w-full max-h-[min(85vh,720px)]">
                    <Image
                      src={yurnaImg}
                      alt="Yurna Finance - Consultora estratégica"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 580px"
                      quality={100}
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
