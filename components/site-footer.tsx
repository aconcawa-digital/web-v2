import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-beige px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/aconcawa-mark.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="font-serif text-base tracking-wide text-darkbrown">
            Aconcawa
          </span>
        </div>
        <p className="text-xs tracking-wide text-stone">
          {`© ${new Date().getFullYear()} Aconcawa · Relatos que nos trenzan`}
        </p>
      </div>
    </footer>
  )
}
