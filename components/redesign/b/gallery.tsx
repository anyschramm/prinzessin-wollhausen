import Image from 'next/image'
import { galleryShots, site } from '@/lib/site'
import { InstagramIcon, PinterestIcon } from '@/components/redesign/shared/icons'

export function GalleryB() {
  return (
    <section id="werkstatt" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Aus meiner Werkstatt</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            Muster, die Geschichten erzählen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Herzchen, Tulpen, Rauten und Regenbogen – ein Blick auf meine
            liebsten Handarbeiten. Neue Stücke zeige ich zuerst auf Instagram.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {galleryShots.map((shot, index) => (
            <li
              key={shot.image}
              className={`relative overflow-hidden rounded-3xl bg-card shadow-card ${
                index === 0 || index === 3 ? 'aspect-[4/5]' : 'aspect-square'
              }`}
            >
              <Image
                src={shot.image}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-foreground shadow-sm">
                {shot.caption}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-primary/30 px-6 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="h-5 w-5" />
            {site.instagramHandle}
          </a>
          <a
            href={site.pinterestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-primary/30 px-6 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <PinterestIcon className="h-5 w-5" />
            Auf Pinterest folgen
          </a>
        </div>
      </div>
    </section>
  )
}
