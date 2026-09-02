import Image from 'next/image'
import { EtsyIcon, InstagramIcon, PinterestIcon } from '@/components/redesign/shared/icons'
import { site } from '@/lib/site'

/**
 * Variante D – „Wo du mich findest“ wie auf der Live-Startseite.
 * SEO/GEO-Ergänzung: eindeutig formulierter Kauf-Hinweis (Wo? Wie?) im Text
 * und beschreibender Alt-Text.
 */
const channels = [
  {
    name: 'Etsy-Shop',
    handle: 'prinzessinwollhausen.etsy.com',
    href: site.etsyUrl,
    Icon: EtsyIcon,
  },
  {
    name: 'Instagram',
    handle: site.instagramHandle,
    href: site.instagramUrl,
    Icon: InstagramIcon,
  },
  {
    name: 'Pinterest',
    handle: 'Prinzessin Wollhausen',
    href: site.pinterestUrl,
    Icon: PinterestIcon,
  },
]

export function FindMeD() {
  return (
    <section id="finden" className="px-5 py-16 sm:py-24" aria-labelledby="finden-heading">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Wo du mich findest
            </p>
            <h2
              id="finden-heading"
              className="mt-3 font-serif text-3xl font-medium text-foreground text-balance sm:text-4xl"
            >
              Entdecke mehr in meinem Shop
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground text-pretty">
              Alle Produkte von PrinzessinWollhausen kaufst du direkt in meinem
              Etsy-Shop – sicher bezahlen, Versand aus Deutschland. Schau auch
              gerne auf Instagram und Pinterest vorbei – dort zeige ich neue
              Projekte, Muster und Einblicke in meine Arbeit.
            </p>

            <ul className="mt-8 space-y-3">
              {channels.map(({ name, handle, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center gap-4 rounded-2xl border border-border bg-card px-5 transition-colors hover:border-primary/60 hover:bg-accent/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-serif text-xl text-foreground">
                        {name}
                      </span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {handle}
                      </span>
                    </span>
                    <span aria-hidden="true" className="ml-auto text-primary">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 mx-auto w-full max-w-sm lg:order-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <Image
                src="/images/shop-collage.jpeg"
                alt="Bunte gehäkelte Granny-Square-Decken von PrinzessinWollhausen – erhältlich im Etsy-Shop"
                width={1080}
                height={1080}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
