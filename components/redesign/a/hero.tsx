import Image from 'next/image'
import { site } from '@/lib/site'
import { HeartIcon } from '@/components/redesign/shared/icons'

export function HeroA() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <HeartIcon className="h-3 w-3" />
            Handmade in Ahrensburg
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground text-balance sm:text-6xl lg:text-7xl">
            Handgemachte Lieblingsstücke, die wärmen und bleiben.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
            Liebevoll gestrickte Pulswärmer, Mützen und Stirnbänder, gehäkelte
            Decken und Lesezeichen – jedes Stück ein Unikat von Any aus
            Schleswig-Holstein. Für dich oder als Geschenk mit Herz.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center rounded-sm bg-primary px-8 text-base font-semibold tracking-wide text-primary-foreground shadow-soft transition-colors hover:bg-berry-deep"
            >
              Zum Etsy-Shop
            </a>
            <a
              href="#kollektion"
              className="inline-flex min-h-13 items-center justify-center rounded-sm border border-foreground/25 px-8 text-base font-semibold tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Kollektion ansehen
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-foreground/10 pt-6 text-sm">
            <div>
              <dt className="text-muted-foreground">Fertigung</dt>
              <dd className="mt-1 font-semibold text-foreground">100 % von Hand</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Herkunft</dt>
              <dd className="mt-1 font-semibold text-foreground">Ahrensburg, DE</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Auflage</dt>
              <dd className="mt-1 font-semibold text-foreground">Jedes Stück 1×</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-lg border border-foreground/10 bg-card shadow-card">
            <Image
              src="/images/pulswaermer.jpeg"
              alt="Handgestrickte Pulswärmer mit rot-weißem Norwegermuster an den Händen einer Frau"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </figure>
          <figure className="absolute -bottom-8 -left-4 w-[42%] overflow-hidden rounded-lg border-4 border-background bg-card shadow-card sm:-left-10">
            <Image
              src="/images/g-herz.jpeg"
              alt="Pulswärmer mit grün-pinkem Herzchenmuster an den Händen"
              width={600}
              height={450}
              className="aspect-[4/3] h-auto w-full object-cover"
            />
          </figure>
          <p className="absolute -right-2 top-6 rotate-3 rounded-sm bg-background/95 px-4 py-2 font-serif text-lg italic text-primary shadow-card sm:-right-6">
            „Jedes Stück ein Unikat“
          </p>
        </div>
      </div>
    </section>
  )
}
