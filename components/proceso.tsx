import { Reveal } from '@/components/reveal'

const steps = [
  {
    title: 'Definición',
    body: 'Escuchamos el objetivo, el público y el mensaje. Alineamos expectativas y trazamos el rumbo del relato.',
  },
  {
    title: 'Pre-producción',
    body: 'Guion, dirección de arte, planificación y logística. Todo queda amarrado antes de encender la cámara.',
  },
  {
    title: 'Rodaje',
    body: 'Capturamos las imágenes con equipo profesional, cuidando la luz, el encuadre y la energía del momento.',
  },
  {
    title: 'Edición',
    body: 'Edición, color, sonido y postproducción se unen para dar forma final a la pieza, con ritmo y sensibilidad.',
  },
  {
    title: 'Entrega',
    body: 'Revisamos, ajustamos y entregamos en los formatos acordados, listos para vincular tu relato con el mundo.',
  },
]

export function Proceso() {
  return (
    <section
      id="proceso"
      className="bg-offwhite px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-terracotta">
            Cómo trabajamos
          </p>
          <h2 className="font-serif text-5xl font-light tracking-tight text-darkbrown text-balance sm:text-6xl">
            Camino
          </h2>
        </Reveal>

        <ol className="relative mt-20 ml-1">
          {/* rope */}
          <span
            aria-hidden
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-terracotta/60 via-darkbrown/30 to-terracotta/60"
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative pl-12 pb-14 last:pb-0">
              <Reveal delay={i * 90}>
                {/* knot */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-darkbrown/40 bg-beige"
                >
                  <span className="h-2 w-2 rotate-45 bg-terracotta" />
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-stone">
                    {`0${i + 1}`}
                  </span>
                  <h3 className="font-serif text-2xl font-normal uppercase tracking-wide text-darkbrown">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-xl leading-relaxed text-darkbrown/70">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
