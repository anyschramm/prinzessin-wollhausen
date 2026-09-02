import Image from 'next/image'
import { site } from '@/lib/site'
import { EtsyIcon, StarIcon } from '@/components/redesign/shared/icons'
import { productImageStyle } from '@/components/redesign/shared/product-image'

const mosaic: { src: string; alt: string; label: string; imagePosition?: string; imageScale?: number }[] = [
  { src: '/images/pulswaermer.jpeg', alt: 'Handgestrickte Pulswärmer mit rot-weißem Norwegermuster', label: 'Pulswärmer' },
  { src: '/images/muetzen.jpeg', alt: 'Vier handgestrickte Mützen in Rot, Pink, Senfgelb und Beere', label: 'Mützen' },
  { src: '/images/decke.jpeg', alt: 'Gehäkelte Granny-Square-Decke mit Blütenmuster', label: 'Decken', imageScale: 1.2 },
  { src: '/images/lesezeichen.jpeg', alt: 'Gehäkeltes Blumen-Lesezeichen auf einer Grußkarte', label: 'Lesezeichen', imagePosition: 'center 70%' },
]

const bullets = [
  'Von Hand gestrickt & gehäkelt in Ahrensburg',
  'Kein Stück gibt es zweimal – echte Unikate',
  'Geschenkfertig verpackt, aus Deutschland versendet',
]

export function HeroC() {
  return (
    <section className="pattern-dots px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <a
            href={`${site.etsyUrl}#reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground shadow-sm"
          >
            <span className="flex gap-0.5 text-mustard" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            Handmade-Shop auf Etsy · Bewertungen ansehen
          </a>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Handgestrickte Unikate aus Ahrensburg –{' '}
            <span className="text-primary">jetzt im Etsy-Shop.</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
            Pulswärmer, Mützen, Stirnbänder, Decken und Lesezeichen von Any –
            liebevoll von Hand gefertigt. Für dich oder als Geschenk, das
            wirklich ankommt.
          </p>

          <ul className="mt-6 space-y-2.5">
            {bullets.map((line) => (
              <li key={line} className="flex items-start gap-3 text-base font-semibold text-foreground">
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/30 text-sm font-bold text-foreground">
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-etsy px-8 text-lg font-bold text-white shadow-soft transition-colors hover:bg-etsy-deep"
            >
              <EtsyIcon className="h-5 w-5" />
              Zum Etsy-Shop
            </a>
            <a
              href="#kategorien"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-primary px-8 text-lg font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Sortiment ansehen
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Bezahlung sicher über Etsy: PayPal, Kreditkarte, Klarna & mehr · Käuferschutz inklusive
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4">
          {mosaic.map((tile, index) => (
            <li key={tile.src} className={index === 0 || index === 3 ? 'translate-y-4 sm:translate-y-6' : ''}>
              <a
                href={site.etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-card"
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  style={productImageStyle(tile)}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-background/95 px-3 py-2 text-sm font-bold text-foreground shadow-sm">
                  {tile.label}
                  <span aria-hidden="true" className="text-etsy">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
