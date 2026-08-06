import { Reveal } from '@/components/reveal'
import { TrabajosGallery, type Work } from '@/components/trabajos-gallery'

const WORKS: Work[] = [
  { id: 'nSUYNQTKc3I', title: 'Providencia: Animaciones' },
  { id: 'wM011v8DYKw', title: 'Evento Colaboración' },
  { id: 'mD-aQyYeX4c', title: 'SEC: Biblioteca Técnica' },
  { id: '_kqPjOwlWbY', title: 'Documental Ellas' },
  { id: 'iGPAtFiVHfg', title: 'Prevención del Delito' },
  { id: 'pleyFnQRSWs', title: 'Evento Tunquén' },
].map((w) => ({
  ...w,
  thumbnail: `https://i.ytimg.com/vi/${w.id}/hqdefault.jpg`,
}))

export function Trabajos() {
  const works = WORKS

  return (
    <section id="trabajos" className="bg-beige px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-serif text-5xl font-light tracking-tight text-darkbrown text-balance sm:text-6xl">
            Portafolio
          </h2>
        </Reveal>

        <TrabajosGallery works={works} />
      </div>
    </section>
  )
}
