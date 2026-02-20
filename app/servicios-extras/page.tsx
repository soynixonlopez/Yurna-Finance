import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ServiciosExtrasContent from '@/components/ServiciosExtrasContent'

export const metadata = {
  title: 'Programa de Integración y Orden Profesional | Yurna Finance',
  description: 'Acompañamos a las empresas a fortalecer a sus colaboradores con sesiones 1-1, dinámicas internas, orden de procesos y desarrollo del equipo. Del humano a la empresa.',
}

export default function ServiciosExtrasPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiciosExtrasContent />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
