import Image from 'next/image'
import { galleryShots, trustSignals } from '@/lib/site'

export function CraftA() {
  const highlights = trustSignals.slice(0, 3)

  return (
    <section id="handwerk" className="border-y border-foreground/10 bg-cream-deep/60 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            02 — Das Handwerk
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            Warum handgemacht den Unterschied macht
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Ein handgestricktes Stück trägt die Zeit und Sorgfalt seiner
            Macherin in sich. Es wird nicht in Serie produziert, sondern
            Masche für Masche für genau eine Person gefertigt.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {highlights.map((item, index) => (
            <li key={item.title} className="border-t border-foreground/15 pt-6">
              <span className="font-serif text-5xl text-primary/70">0{index + 1}</span>
              <h3 className="mt-4 font-serif text-2xl text-foreground">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>

        <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {galleryShots.slice(0, 4).map((shot) => (
            <li key={shot.image} className="relative aspect-square overflow-hidden rounded-lg border border-foreground/10 bg-card">
              <Image
                src={shot.image}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-sm bg-background/90 px-2.5 py-1 text-xs font-semibold tracking-wide text-foreground">
                {shot.caption}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
