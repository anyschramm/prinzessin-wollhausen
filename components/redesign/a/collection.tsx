import Image from 'next/image'
import { products, site } from '@/lib/site'
import { productImageStyle } from '@/components/redesign/shared/product-image'

export function CollectionA() {
  const [lead, ...rest] = products

  return (
    <section id="kollektion" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 border-b border-foreground/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              01 — Die Kollektion
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
              Fünf Lieblingsstücke, von Hand gefertigt
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Pulswärmer, Mützen, Stirnbänder, Decken und Lesezeichen – alles
              in kleiner Stückzahl, mit ausgesuchten Garnen und viel Geduld.
              Aktuelle Farben, Preise und Verfügbarkeit findest du im Etsy-Shop.
            </p>
          </div>
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center gap-2 border-b-2 border-primary pb-1 text-base font-semibold text-primary transition-colors hover:text-berry-deep"
          >
            Alle Unikate auf Etsy ansehen
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <figure>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-foreground/10 bg-card">
                <Image
                  src={lead.image}
                  alt={lead.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-serif text-3xl text-foreground">{lead.name}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
                    {lead.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-primary underline-offset-4 group-hover:underline sm:mt-2">
                  Auf Etsy ansehen →
                </span>
              </figcaption>
            </figure>
          </a>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {rest.map((product, index) => (
              <li key={product.slug}>
                <a
                  href={site.etsyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-5 lg:items-center"
                >
                  <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-lg border border-foreground/10 bg-card sm:w-32 lg:aspect-square lg:w-36">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="160px"
                      style={productImageStyle(product)}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="min-w-0 py-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      0{index + 2}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-foreground">{product.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {product.short}
                    </p>
                    <span className="mt-2 inline-block text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                      Auf Etsy ansehen →
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
