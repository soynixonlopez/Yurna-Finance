'use client'

import { useState } from 'react'
import Link from 'next/link'
import PrivacyModal from './PrivacyModal'
import LegalModal from './LegalModal'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodo', label: 'Método' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)

  return (
    <>
      <footer
        id="contacto"
        className="bg-navy text-white py-16 md:py-20 border-t border-white/10"
        aria-label="Pie de página"
      >
        <div className="max-w-content mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Col 1: Marca */}
            <div>
              <p className="font-display font-semibold text-xl text-white">Yurna Finance</p>
              <p className="mt-3 text-white/80 text-sm leading-relaxed max-w-xs">
                Ordena. Cumple. Crece. Arquitectura financiera integral para personas, emprendedores y empresas.
              </p>
              <Link
                href="/agendar"
                className="mt-4 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-gold/20 text-gold text-sm font-semibold hover:bg-gold/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Agendar sesión
              </Link>
            </div>

            {/* Col 2: Enlaces */}
            <div>
              <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
                Navegación
              </h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-gold text-sm transition-colors focus:outline-none focus-visible:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contacto */}
            <div>
              <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
                Contacto
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>
                  <a
                    href="mailto:yurna@yurnafinance.com"
                    className="hover:text-gold transition-colors inline-flex items-center gap-2 focus:outline-none focus-visible:text-gold"
                  >
                    <span className="text-gold">✉</span> yurna@yurnafinance.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/50766841749"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors inline-flex items-center gap-2 focus:outline-none focus-visible:text-gold"
                  >
                    <span className="text-gold">💬</span> WhatsApp +507 6684 1749
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yurnafinance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors inline-flex items-center gap-2 focus:outline-none focus-visible:text-gold"
                  >
                    <span className="text-gold">📷</span> @yurnafinance
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Legal */}
            <div>
              <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="text-white/80 hover:text-gold transition-colors text-left focus:outline-none focus-visible:text-gold"
                  >
                    Política de privacidad
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalOpen(true)}
                    className="text-white/80 hover:text-gold transition-colors text-left focus:outline-none focus-visible:text-gold"
                  >
                    Aviso legal
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-xs">
              © {year} Yurna Finance. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-white/60 hover:text-gold transition-colors focus:outline-none focus-visible:text-gold"
              >
                Privacidad
              </button>
              <button
                type="button"
                onClick={() => setLegalOpen(true)}
                className="text-white/60 hover:text-gold transition-colors focus:outline-none focus-visible:text-gold"
              >
                Aviso legal
              </button>
            </div>
          </div>
        </div>
      </footer>
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <LegalModal isOpen={legalOpen} onClose={() => setLegalOpen(false)} />
    </>
  )
}
