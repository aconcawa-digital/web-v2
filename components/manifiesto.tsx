import { Reveal } from '@/components/reveal'

const blocks = [
  {
    title: 'Tejemos relatos que vinculan personas',
    body: 'Cada proyecto es un hilo. Entrelazamos historia, imagen y sonido para crear piezas que conectan a las marcas con quienes las habitan, desde una escucha honesta.',
    span: 'lg:col-span-7',
    accent: 'text-terracotta',
  },
  {
    title: 'Cumplimos los plazos acordados',
    body: 'La reciprocidad también es rigor. Lo que prometemos, lo entregamos: tiempos claros, procesos transparentes y compromisos que se sostienen.',
    span: 'lg:col-span-5 lg:mt-24',
    accent: 'text-deepblue',
  },
  {
    title: 'Devolvemos lo que recibimos',
    body: 'Dar y recibir en equilibrio. Trabajamos como aliados estratégicos, aportando mirada y criterio para que cada relato crezca junto a quien lo confía.',
    span: 'lg:col-span-6 lg:col-start-4',
    accent: 'text-rust',
  },
]

export function Manifiesto() {
  return (
    <section
      id="manifiesto"
      className="bg-beige px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-serif text-5xl font-light tracking-tight text-darkbrown text-balance sm:text-6xl">
            Cómo trabajamos
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-12">
          {blocks.map((block, i) => (
            <Reveal
              key={block.title}
              delay={i * 120}
              className={`${block.span} border-l border-border pl-6`}
            >
              <span
                className={`font-serif text-5xl font-light ${block.accent}`}
              >
                {`0${i + 1}`}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-normal leading-snug text-darkbrown text-balance">
                {block.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-darkbrown/70">
                {block.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
