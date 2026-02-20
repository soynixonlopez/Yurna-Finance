import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ExtraServicesPromo from '@/components/ExtraServicesPromo'
import Differentiator from '@/components/Differentiator'
import MethodAndForWho from '@/components/MethodAndForWho'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import SectionTransition from '@/components/SectionTransition'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <SectionTransition variant="fadeOnly">
          <Hero />
        </SectionTransition>
        <SectionTransition variant="scaleIn">
          <Services />
        </SectionTransition>
        <SectionTransition variant="fadeUp">
          <ExtraServicesPromo />
        </SectionTransition>
        <SectionTransition variant="fadeUp">
          <MethodAndForWho />
        </SectionTransition>
        <SectionTransition variant="fadeLeft">
          <Differentiator />
        </SectionTransition>
        <SectionTransition variant="fadeUp">
          <FAQ />
        </SectionTransition>
        <SectionTransition variant="scaleIn">
          <FinalCTA />
        </SectionTransition>
        <SectionTransition variant="fadeUpSoft">
          <Footer />
        </SectionTransition>
      </main>
      <FloatingButtons />
    </>
  )
}
