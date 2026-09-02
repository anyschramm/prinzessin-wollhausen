import Image from 'next/image'
import { products, site } from '@/lib/site'
import { HeartIcon } from '@/components/redesign/shared/icons'

export function ProductsB() {
  return (
    <section id="lieblingsstuecke" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-rose-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <HeartIcon className="h-3 w-3" />
            Meine Lieblingsstücke
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            Kleine Kuschelmomente für jeden Tag
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Alles hier entsteht in kleiner Stückzahl. Was dir gefällt, findest du
            mit aktuellen Farben und Preisen in meinem Etsy-Shop – solange es
            noch da ist.
          </p>
        </div>

        <ul className="scrollbar-hidden -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.slug}
              className="w-[78vw] max-w-xs shrink-0 snap-center sm:w-auto sm:max-w-none"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectPosition: product.imagePosition }}
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold tracking-wide text-primary shadow-sm">
                    Unikat
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-3xl text-foreground">{product.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{product.giftHint}</p>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{product.short}</p>
                  <a
                    href={site.etsyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-berry-deep"
                  >
                    Auf Etsy ansehen
                  </a>
                </div>
              </article>
            </li>
          ))}

          <li className="w-[78vw] max-w-xs shrink-0 snap-center sm:w-auto sm:max-w-none">
            <a
              href={site.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full min-h-72 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-primary/40 bg-rose-soft/40 p-8 text-center transition-colors hover:bg-rose-soft/70"
            >
              <HeartIcon className="h-8 w-8 text-primary" />
              <span className="mt-4 font-serif text-3xl text-foreground">Alles entdecken</span>
              <span className="mt-2 text-muted-foreground">
                Alle aktuellen Unikate, Farben und Preise im Etsy-Shop
              </span>
              <span className="mt-6 inline-flex min-h-12 items-center rounded-full bg-primary px-6 font-bold text-primary-foreground">
                Zum Etsy-Shop
              </span>
            </a>
          </li>
        </ul>
        <p className="mt-2 text-center text-sm text-muted-foreground sm:hidden">← wischen für mehr →</p>
      </div>
    </section>
  )
}
