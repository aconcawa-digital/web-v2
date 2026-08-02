import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-stone/25 via-beige to-offwhite"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 md:px-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-terracotta">
              Productora audiovisual estratégica
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tight text-darkbrown text-balance sm:text-7xl lg:text-8xl">
              Aconcawa
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-md font-serif text-2xl font-light italic text-darkbrown/70 text-pretty sm:text-3xl">
              Video profesional para RR.HH, Ventas, Sostenibilidad y Eventos.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="#contacto"
              className="mt-10 inline-flex items-center border border-darkbrown/40 px-8 py-3 text-sm tracking-wide text-darkbrown transition-colors duration-300 hover:border-terracotta hover:bg-terracotta hover:text-offwhite"
            >
              Conversemos
            </a>
          </Reveal>
        </div>

        <Reveal delay={300} className="hidden justify-center lg:flex">
          <Image
            src="/aconcawa-mark.png"
            alt="Símbolo trisquel andino de Aconcawa"
            width={420}
            height={420}
            className="h-auto w-full max-w-sm object-contain opacity-90"
            priority
          />
        </Reveal>
      </div>
    </section>
  )
}
