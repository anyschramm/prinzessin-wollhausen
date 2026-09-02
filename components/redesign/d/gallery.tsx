import Image from 'next/image'

/**
 * Variante D – Galerie wie auf der Live-Startseite (gleiche Reihenfolge).
 * SEO-Ergänzung: beschreibendere Alt-Texte mit „handgestrickt“ und Motiv.
 */
const shots = [
  {
    image: '/images/g-herz.jpeg',
    alt: 'Handgestrickte Pulswärmer mit grün-pinkem Herzchenmuster an den Händen',
  },
  {
    image: '/images/g-collage.jpeg',
    alt: 'Collage verschiedener handgestrickter Pulswärmer in Gelb, Rosa, Beere und Braun',
  },
  {
    image: '/images/g-regenbogen.jpeg',
    alt: 'Bunt gestreifte handgestrickte Pulswärmer in Regenbogenfarben an den Händen',
  },
  {
    image: '/images/g-tulpe.jpeg',
    alt: 'Handgestrickte Stulpen mit gelb-grünem Tulpenmuster und Zackenrand',
  },
  {
    image: '/images/g-diamant.jpeg',
    alt: 'Handgestrickte Pulswärmer mit beerenfarbenem Rautenmuster',
  },
  {
    image: '/images/g-tulpe2.jpeg',
    alt: 'Handgestrickte Stulpen mit pink-grünem Tulpenmuster',
  },
]

export function GalleryD() {
  return (
    <section id="galerie" className="bg-secondary/50 px-5 py-16 sm:py-24" aria-labelledby="galerie-heading">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Einblicke
          </p>
          <h2
            id="galerie-heading"
            className="mt-3 font-serif text-3xl font-medium text-foreground text-balance sm:text-4xl"
          >
            Jedes Muster mit Liebe gestrickt
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
            Von feinen Norweger- und Rautenmustern bis zu fröhlichen Tulpen und
            Herzchen – ein kleiner Einblick in meine liebsten Handarbeiten.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {shots.map((shot) => (
            <li
              key={shot.image}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card"
            >
              <Image
                src={shot.image || '/placeholder.svg'}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
