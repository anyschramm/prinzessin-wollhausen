import Image from 'next/image'
import { site } from '@/lib/site'
import { EtsyIcon } from '@/components/redesign/shared/icons'

export function CtaBandA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-berry-deep px-5 py-20 text-primary-foreground sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-soft">
            Bereit zum Verschenken – oder zum Selbstbehalten
          </p>
          <h2 id="cta-heading" className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Dein Unikat wartet im Etsy-Shop.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
            Alle aktuell verfügbaren Stücke, Preise und Farben findest du bei
            Etsy – sicher bezahlen, aus Deutschland versendet, liebevoll
            verpackt. Wenn ein Stück weg ist, ist es weg: Jedes gibt es nur einmal.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-sm bg-background px-8 text-base font-semibold tracking-wide text-primary transition-colors hover:bg-cream-deep"
            >
              <EtsyIcon className="h-5 w-5" />
              Zum Etsy-Shop
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center rounded-sm border border-primary-foreground/40 px-8 text-base font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Neues auf Instagram
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-primary-foreground/20">
          <Image
            src="/images/shop-collage.jpeg"
            alt="Collage bunter gehäkelter Granny-Square-Decken aus dem Etsy-Shop von PrinzessinWollhausen"
            width={1080}
            height={1080}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
