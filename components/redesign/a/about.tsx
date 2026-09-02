import Image from 'next/image'
import { site } from '@/lib/site'
import { InstagramIcon, PinterestIcon } from '@/components/redesign/shared/icons'

export function AboutA() {
  return (
    <section id="ueber-mich" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-foreground/10 bg-card shadow-card">
            <Image
              src="/images/ueber-mich.jpeg"
              alt="Bunt gehäkeltes Tuch und Häkelarbeit von Any, der Macherin von PrinzessinWollhausen"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Any bei der Arbeit an einem gehäkelten Tuch – Ahrensburg, Schleswig-Holstein
          </figcaption>
        </figure>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            03 — Über mich
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            Ich bin Any – und PrinzessinWollhausen ist meine Herzenssache.
          </h2>
          <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-2xl italic leading-snug text-foreground/90">
            „Ich stricke nicht, um Zeit zu füllen. Ich stricke, weil aus Garn
            etwas entsteht, das jemanden wärmt – oft für viele Jahre.“
          </blockquote>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              Seit vielen Jahren stricke und häkle ich mit Leidenschaft. Aus
              dieser Leidenschaft ist PrinzessinWollhausen entstanden – mein
              kleines Label aus Ahrensburg in Schleswig-Holstein, nahe Hamburg.
            </p>
            <p>
              Ich wähle Garne und Muster selbst aus und lege großen Wert
              darauf, dass jedes Stück nicht nur schön aussieht, sondern auch
              hochwertig verarbeitet ist und lange Freude macht. Was du bei mir
              kaufst, habe ich persönlich in der Hand gehabt – von der ersten
              bis zur letzten Masche.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-primary"
            >
              <InstagramIcon className="h-5 w-5" />
              {site.instagramHandle}
            </a>
            <a
              href={site.pinterestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-primary"
            >
              <PinterestIcon className="h-5 w-5" />
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
