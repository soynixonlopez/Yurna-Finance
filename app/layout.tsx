import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yurna Finance | Arquitectura Financiera Integral',
  description:
    'Estructura tu vida financiera. Sesiones estratégicas que integran finanzas personales, empresariales, estrategia fiscal e inversión (real estate + bursátil). Ordena, cumple, crece.',
  openGraph: {
    title: 'Yurna Finance | Arquitectura Financiera Integral',
    description:
      'Estructura tu vida financiera. Sesiones estratégicas que integran finanzas personales, empresariales, estrategia fiscal e inversión.',
    type: 'website',
  },
  icons: {
    icon: '/assets/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-offwhite text-slate-text antialiased font-body">
        {children}
      </body>
    </html>
  )
}
