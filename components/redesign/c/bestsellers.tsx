import Image from 'next/image'
import { products, site } from '@/lib/site'
import { EtsyIcon } from '@/components/redesign/shared/icons'
import { productImageStyle } from '@/components/redesign/shared/product-image'

const featuredSlugs = ['pulswaermer', 'muetzen', 'decken']

export function BestsellersC() {
  const featured = products.filter((p) => featuredSlugs.includes(p.slug))

  return (
    <section id="beliebt" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Beliebt im Shop</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Die Lieblinge meiner Kundinnen
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground text-pretty">
            Jedes Stück gibt es genau einmal. Was dir gefällt, sicherst du dir
            am besten direkt – aktueller Preis und Verfügbarkeit stehen bei Etsy.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((product) => (
            <li key={product.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={productImageStyle(product)}
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-lg bg-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                    Unikat · nur 1×
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-2xl font-extrabold tracking-tight text-foreground">{product.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{product.description}</p>
                  <p className="mt-4 text-sm font-semibold text-foreground">
                    Preis & Verfügbarkeit im Etsy-Shop
                  </p>
                  <a
                    href={site.etsyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-etsy px-5 text-base font-bold text-white transition-colors hover:bg-etsy-deep"
                  >
                    <EtsyIcon className="h-4 w-4" />
                    Auf Etsy ansehen
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
