import Image from 'next/image'
import { products, site } from '@/lib/site'

/**
 * Vier Karten mit kurzer Karten-Beschreibung; Bild, Alt-Text und Geschenk-Hinweis
 * kommen aus den zentralen Produktdaten in lib/site.
 */
const cardCopy = [
  { slug: 'pulswaermer', description: 'Kuschelig warm für kalte Tage – in vielen liebevollen Mustern.' },
  { slug: 'muetzen', description: 'Weiche, warme Mützen in fröhlichen Farben für jeden Kopf.' },
  { slug: 'decken', description: 'Gemütliche Häkeldecken mit fröhlichen Blütenmotiven.' },
  { slug: 'lesezeichen', description: 'Kleine gehäkelte Begleiter für deine liebsten Bücher.' },
]

const cards = cardCopy.flatMap(({ slug, description }) => {
  const product = products.find((p) => p.slug === slug)
  return product ? [{ ...product, description }] : []
})

export function Offerings() {
  return (
    <section id="angebot" className="px-5 py-16 sm:py-24" aria-labelledby="angebot-heading">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Was ich anbiete
          </p>
          <h2
            id="angebot-heading"
            className="mt-3 font-serif text-3xl font-medium text-foreground text-balance sm:text-4xl"
          >
            Von Hand gefertigt – kein Massenprodukt, ein echtes Unikat
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
            In meinem kleinen Handmade-Label entstehen liebevoll gestrickte und
            gehäkelte Accessoires für jeden Tag: kuschelige Pulswärmer in vielen
            Mustern, warme Mützen, weiche Stirnbänder, gemütliche Decken und
            praktische Lesezeichen.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((product) => (
            <li
              key={product.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80">
                  Handgefertigt in Ahrensburg · {product.giftHint}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Alle aktuell verfügbaren Unikate findest du im{' '}
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Etsy-Shop von PrinzessinWollhausen
          </a>
          .
        </p>
      </div>
    </section>
  )
}
