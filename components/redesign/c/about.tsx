import Image from 'next/image'
import { galleryShots, site } from '@/lib/site'
import { InstagramIcon } from '@/components/redesign/shared/icons'

export function AboutC() {
  return (
    <section id="ueber-mich" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Die Macherin</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Hallo, ich bin Any aus Ahrensburg.
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              PrinzessinWollhausen ist mein kleines Handmade-Label aus
              Schleswig-Holstein. Seit vielen Jahren stricke und häkle ich mit
              Leidenschaft – und jedes Stück in meinem Etsy-Shop habe ich
              persönlich gefertigt.
            </p>
            <p>
              Ich wähle Garne und Muster mit Sorgfalt aus und achte darauf, dass
              alles nicht nur schön, sondern auch hochwertig verarbeitet ist.
              Mit deinem Kauf unterstützt du eine Handarbeiterin aus der Region.
            </p>
          </div>
          <dl className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-5 text-center">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Standort</dt>
              <dd className="mt-1 text-base font-bold text-foreground">Ahrensburg</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Fertigung</dt>
              <dd className="mt-1 text-base font-bold text-foreground">100 % Hand</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Verkauf</dt>
              <dd className="mt-1 text-base font-bold text-foreground">Etsy-Shop</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-berry-deep"
            >
              Zum Etsy-Shop
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-border px-6 text-base font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="h-5 w-5" />
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/images/ueber-mich.jpeg"
              alt="Bunt gehäkeltes Tuch und Häkelarbeit von Any, der Macherin von PrinzessinWollhausen"
              fill
              sizes="(max-width: 1024px) 66vw, 35vw"
              className="object-cover"
            />
          </div>
          {galleryShots.slice(0, 2).map((shot) => (
            <div key={shot.image} className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
              <Image src={shot.image} alt={shot.alt} fill sizes="(max-width: 1024px) 33vw, 17vw" className="object-cover" />
            </div>
          ))}
          {galleryShots.slice(2, 5).map((shot) => (
            <div key={shot.image} className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
              <Image src={shot.image} alt={shot.alt} fill sizes="(max-width: 1024px) 33vw, 17vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
