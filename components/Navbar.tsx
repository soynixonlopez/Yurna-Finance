'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodo', label: 'Método' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Al estar en home con hash (ej. /#servicios), hacer scroll a la sección
  useEffect(() => {
    if (pathname !== '/' || typeof window === 'undefined') return
    const hash = window.location.hash
    if (hash) {
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  const scrollToSection = (id: string) => {
    setMobileOpen(false)
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavClick = (e: React.MouseEvent, linkHref: string) => {
    if (isHome) {
      e.preventDefault()
      scrollToSection(linkHref)
    }
    // Si no estamos en home, el Link navegará a /#sección
    else {
      setMobileOpen(false)
    }
  }

  const isLight = scrolled

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isLight
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-card-border'
          : 'bg-navy border-b border-white/5'
      }`}
    >
      <div className="max-w-content mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          <Link
            href="/"
            onClick={(e) => isHome && (e.preventDefault(), scrollToSection('#inicio'))}
            className={`font-display font-semibold text-xl transition-colors ${
              isLight ? 'text-slate-text hover:text-gold' : 'text-white hover:text-gold'
            }`}
          >
            Yurna Finance
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href === '#inicio' ? '/' : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors focus:outline-none focus-visible:text-gold ${
                  isLight ? 'text-slate-muted hover:text-gold' : 'text-white/90 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gold hover:bg-gold-light text-navy font-semibold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Agenda tu Sesión
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              isLight ? 'text-slate-text hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={`md:hidden border-t ${
            isLight ? 'border-card-border bg-white' : 'border-white/10 bg-navy'
          }`}
        >
          <nav className="px-4 py-4 space-y-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href === '#inicio' ? '/' : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block w-full text-left py-3 font-medium transition-colors hover:text-gold ${
                  isLight ? 'text-slate-text' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/agendar"
              className="block mt-4 text-center py-3 rounded-lg bg-gold text-navy font-semibold"
            >
              Agenda tu Sesión
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
