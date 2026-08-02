'use client'

import { useState, useEffect, useCallback } from 'react'
import { Play, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export type Work = {
  id: string
  title: string
  thumbnail: string
}

export function TrabajosGallery({ works }: { works: Work[] }) {
  const [active, setActive] = useState<Work | null>(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close])

  return (
    <>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, i) => (
          <Reveal key={work.id} delay={(i % 3) * 120}>
            <button
              type="button"
              onClick={() => setActive(work)}
              className="group relative flex aspect-video w-full flex-col justify-end overflow-hidden bg-darkbrown text-left text-offwhite"
            >
              <img
                src={work.thumbnail || '/placeholder.svg'}
                alt={work.title}
                crossOrigin="anonymous"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-darkbrown/90 via-darkbrown/20 to-transparent" />
              <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-offwhite/50 bg-darkbrown/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="relative z-10 p-6 font-serif text-xl font-light leading-snug text-balance">
                {work.title}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-darkbrown/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar video"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center text-offwhite/80 transition-colors hover:text-terracotta"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full overflow-hidden bg-black">
              <iframe
                key={active.id}
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
            <p className="mt-4 font-serif text-lg font-light text-offwhite">
              {active.title}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
