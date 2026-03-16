import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingPage from '@/components/BookingPage'

export const metadata = {
  title: 'Agenda tu Sesión Estratégica | Yurna Finance',
  description: 'Reserva tu sesión estratégica personalizada. Análisis financiero, estrategia fiscal e inversión. Sesiones para profesionales, emprendedores y empresas.',
}

export const dynamic = 'force-dynamic'

function AgendarFallback() {
  return (
    <div className="min-h-screen bg-cream pattern-dots flex items-center justify-center">
      <div className="animate-pulse text-slate-muted">Cargando...</div>
    </div>
  )
}

export default function AgendarPage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<AgendarFallback />}>
          <BookingPage />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
