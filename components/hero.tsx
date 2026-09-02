import { Heart, LogoMark } from '@/components/logo-mark'
import { site } from '@/lib/site'

/**
 * Die sichtbare Tagline ist die einzige H1 der Seite; der Markenname steckt als
 * sr-only-Präfix mit drin. Die Unterzeile nennt Produkte, Herkunft und „Unikat“
 * als crawlbaren Text.
 */
export function Hero() {
  return (
    <header className="relative overflow-hidden px-5 pb-14 pt-12 text-center sm:pb-20 sm:pt-16">
      <LogoMark />

      <div className="mx-auto mt-6 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-primary/40" />
        <Heart className="h-3 w-3 text-primary" />
        <span className="h-px w-8 bg-primary/40" />
      </div>

      <h1 className="mx-auto mt-4 max-w-md text-sm font-semibold uppercase leading-relaxed tracking-[0.2em] text-muted-foreground text-pretty sm:text-base">
        <span className="sr-only">{site.name} – </span>
        Handgemachte Lieblingsstücke mit viel Liebe zum Detail
      </h1>

      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
        Handgestrickte Pulswärmer, Mützen und Stirnbänder, gehäkelte Decken und
        Lesezeichen aus Ahrensburg in Schleswig-Holstein – jedes Stück ein Unikat.
      </p>

      <a
        href={site.etsyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-9 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Zum Etsy-Shop
      </a>

      <p className="mt-4 text-xs tracking-wide text-muted-foreground">
        Handmade in Deutschland · Unikate · liebevoll verpackt
      </p>
    </header>
  )
}
