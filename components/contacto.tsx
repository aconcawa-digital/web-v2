'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { Reveal } from '@/components/reveal'
import { sendContact, type ContactState } from '@/app/actions/contacto'

const areas = [
  'Recursos Humanos',
  'Ventas',
  'Sostenibilidad',
  'Eventos',
  'Otro',
]

const initialState: ContactState = { status: 'idle', message: '' }

export function Contacto() {
  const [state, formAction] = useActionState(sendContact, initialState)

  return (
    <section
      id="contacto"
      className="bg-offwhite px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-terracotta">
            Hablemos
          </p>
          <h2 className="font-serif text-5xl font-light tracking-tight text-darkbrown text-balance sm:text-6xl">
            Conversemos
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-darkbrown/70">
            Cuéntanos lo que necesitas, tus ideas o tus preguntas.
          </p>

          <div className="mt-10 space-y-1 text-sm text-stone">
            <p>
              <a
                href="mailto:aconcagua.digital@proton.me"
                className="transition-colors hover:text-terracotta"
              >
                aconcagua.digital@proton.me
              </a>
            </p>
            <p>
              <a
                href="tel:+56959425922"
                className="transition-colors hover:text-terracotta"
              >
                +56 9 5942 5922
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          {state.status === 'success' ? (
            <div className="flex h-full min-h-64 items-center border-l border-terracotta pl-8">
              <p className="font-serif text-2xl font-light text-darkbrown text-balance">
                {state.message ||
                  'Gracias por escribir. Te responderemos pronto.'}
              </p>
            </div>
          ) : (
            <form action={formAction} className="flex flex-col gap-8">
              <Field id="nombre" label="Nombre">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  maxLength={120}
                  className="input-line"
                />
              </Field>

              <Field id="empresa" label="Empresa">
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  maxLength={160}
                  className="input-line"
                />
              </Field>

              <Field id="area" label="Área">
                <select
                  id="area"
                  name="area"
                  defaultValue=""
                  required
                  className="input-line appearance-none"
                >
                  <option value="" disabled>
                    Selecciona un área
                  </option>
                  {areas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </Field>

              <Field id="mensaje" label="Mensaje">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  maxLength={4000}
                  className="input-line resize-none"
                />
              </Field>

              {/* Honeypot anti-spam: hidden from users */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="sr-only"
              />

              {state.status === 'error' && state.message ? (
                <p
                  role="alert"
                  className="text-sm text-terracotta"
                >
                  {state.message}
                </p>
              ) : null}

              <SubmitButton />
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex w-fit items-center border border-darkbrown/40 bg-terracotta px-8 py-3 text-sm tracking-wide text-offwhite transition-colors duration-300 hover:bg-darkbrown disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? 'Enviando…' : 'Contactar'}
    </button>
  )
}

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.25em] text-stone"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
