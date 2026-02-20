import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingPage from '@/components/BookingPage'

export const metadata = {
  title: 'Agenda tu Sesión Estratégica | Yurna Finance',
  description: 'Reserva tu sesión estratégica personalizada. Análisis financiero, estrategia fiscal e inversión. Sesiones para profesionales, emprendedores y empresas.',
}

export default function AgendarPage() {
  return (
    <>
      <Navbar />
      <main>
        <BookingPage />
      </main>
      <Footer />
    </>
  )
}
