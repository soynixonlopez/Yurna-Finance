'use client'

import Link from 'next/link'

export default function FloatingCTA() {
  return (
    <Link
      href="/agendar"
      className="md:hidden fixed bottom-6 right-6 z-40 flex items-center justify-center px-5 py-3 rounded-full bg-gold hover:bg-gold-light text-navy font-semibold text-sm shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite"
      aria-label="Agendar sesión"
    >
      Agendar
    </Link>
  )
}
