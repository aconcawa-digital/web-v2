import { Reveal } from '@/components/reveal'

export function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-offwhite px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-serif text-5xl font-light tracking-tight text-darkbrown text-balance sm:text-6xl">
            Contacto
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-md mx-auto leading-relaxed text-darkbrown/70">
            Cuéntanos lo que necesitas, tus ideas o tus preguntas.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-col items-center gap-4 text-lg text-darkbrown">
            <a
              href="mailto:aconcagua.digital@proton.me"
              className="transition-colors hover:text-terracotta"
            >
              aconcagua.digital@proton.me
            </a>
            <a
              href="tel:+56959425922"
              className="transition-colors hover:text-terracotta"
            >
              +56 9 5942 5922
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
