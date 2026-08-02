"use server"

import { Resend } from "resend"

const CONTACT_TO = "aconcagua.digital@proton.me"
// Resend requires a verified domain to use a custom "from" address.
// Until aconcawa.com is verified in Resend, use their shared onboarding sender.
const CONTACT_FROM = "Aconcawa <onboarding@resend.dev>"

const AREAS = ["Recursos Humanos", "Ventas", "Sostenibilidad", "Eventos", "Otro"]

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function sendContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const nombre = String(formData.get("nombre") ?? "").trim()
  const empresa = String(formData.get("empresa") ?? "").trim()
  const area = String(formData.get("area") ?? "").trim()
  const mensaje = String(formData.get("mensaje") ?? "").trim()
  // Honeypot: bots fill hidden fields, humans don't.
  const honeypot = String(formData.get("website") ?? "").trim()

  if (honeypot) {
    // Silently pretend success for bots.
    return { status: "success", message: "" }
  }

  if (!nombre || !area || !mensaje) {
    return {
      status: "error",
      message: "Por favor completa nombre, área y mensaje.",
    }
  }

  if (nombre.length > 120 || empresa.length > 160 || mensaje.length > 4000) {
    return {
      status: "error",
      message: "Alguno de los campos supera el largo permitido.",
    }
  }

  if (!AREAS.includes(area)) {
    return { status: "error", message: "Selecciona un área válida." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      status: "error",
      message:
        "El envío de correo no está configurado todavía. Escríbenos directamente a aconcagua.digital@proton.me.",
    }
  }

  const resend = new Resend(apiKey)

  const html = `
    <h2>Nuevo mensaje desde Aconcawa</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(empresa) || "—"}</p>
    <p><strong>Área:</strong> ${escapeHtml(area)}</p>
    <p><strong>Mensaje:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(mensaje)}</p>
  `

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject: `Contacto Aconcawa · ${nombre}${empresa ? ` (${empresa})` : ""}`,
      html,
      replyTo: undefined,
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return {
        status: "error",
        message:
          "No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos a aconcagua.digital@proton.me.",
      }
    }

    return {
      status: "success",
      message: "Gracias por escribir. Te responderemos pronto.",
    }
  } catch (err) {
    console.log("[v0] Resend exception:", err)
    return {
      status: "error",
      message:
        "No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos a aconcagua.digital@proton.me.",
    }
  }
}
