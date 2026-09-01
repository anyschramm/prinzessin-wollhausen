import Image from 'next/image'

const products = [
  {
    name: 'Pulswärmer',
    description: 'Kuschelig warm für kalte Tage – in vielen liebevollen Mustern.',
    image: '/images/pulswaermer.png',
    alt: 'Handgestrickte Pulswärmer mit rot-weißem Norwegermuster auf einem Holztisch',
  },
  {
    name: 'Mützen',
    description: 'Weiche, warme Mützen in fröhlichen Farben für jeden Kopf.',
    image: '/images/muetzen.png',
    alt: 'Drei handgestrickte Mützen in Beere, Senfgelb und Rosa',
  },
  {
    name: 'Stirnbänder',
    description: 'Elegante Stirnbänder, die Ohren und Herz warm halten.',
    image: '/images/stirnband.png',
    alt: 'Handgestricktes Stirnband mit Zopfmuster in Altrosa',
  },
  {
    name: 'Decken',
    description: 'Gemütliche Häkeldecken mit fröhlichen Blütenmotiven.',
    image: '/images/decken.png',
    alt: 'Bunte gehäkelte Granny-Square-Decke mit Blütenmuster',
  },
  {
    name: 'Lesezeichen',
    description: 'Kleine gehäkelte Begleiter für deine liebsten Bücher.',
    image: '/images/lesezeichen.png',
    alt: 'Gehäkeltes Lesezeichen mit Blütenmotiv in einem aufgeschlagenen Buch',
  },
]

export function Offerings() {
  return (
    <section id="angebot" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Was ich anbiete
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-foreground text-balance sm:text-4xl">
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
          {products.map((product) => (
            <li
              key={product.name}
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
