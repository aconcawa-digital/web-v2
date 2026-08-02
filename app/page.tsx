import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Manifiesto } from '@/components/manifiesto'
import { Proceso } from '@/components/proceso'
import { Trabajos } from '@/components/trabajos'
import { Contacto } from '@/components/contacto'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Manifiesto />
        <Proceso />
        <Trabajos />
        <Contacto />
      </main>
      <SiteFooter />
    </>
  )
}
