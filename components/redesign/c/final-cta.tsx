import { site } from '@/lib/site'
import { EtsyIcon } from '@/components/redesign/shared/icons'

export function FinalCtaC() {
  return (
    <section aria-labelledby="final-heading" className="pattern-knit px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-card sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Nur solange vorrätig</p>
        <h2 id="final-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
          Sichere dir dein Unikat – jedes Stück gibt es nur einmal.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Alle verfügbaren Pulswärmer, Mützen, Stirnbänder, Decken und
          Lesezeichen findest du mit Preis und Bildern im Etsy-Shop.
        </p>
        <a
          href={site.etsyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-etsy px-8 text-lg font-bold text-white shadow-soft transition-colors hover:bg-etsy-deep sm:w-auto"
        >
          <EtsyIcon className="h-5 w-5" />
          Zum Etsy-Shop
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Sicher bezahlen · Versand aus Deutschland · Liebevoll verpackt
        </p>
      </div>
    </section>
  )
}
