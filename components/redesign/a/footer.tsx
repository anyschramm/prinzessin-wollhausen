import Link from 'next/link'
import { site } from '@/lib/site'
import { EtsyIcon, HeartIcon, InstagramIcon, PinterestIcon } from '@/components/redesign/shared/icons'

export function FooterA() {
  return (
    <footer className="border-t border-foreground/10 px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl text-foreground">PrinzessinWollhausen</p>
          <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
            Handgestrickte und gehäkelte Unikate von Any aus Ahrensburg,
            Schleswig-Holstein. Verkauf ausschließlich über den Etsy-Shop.
          </p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
            {site.city}, {site.region}, {site.country}
            <br />
            <a href={`mailto:${site.email}`} className="underline-offset-4 hover:text-primary hover:underline">
              {site.email}
            </a>
          </address>
        </div>

        <nav aria-label="Shop & Social">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Wo du mich findest</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={site.etsyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-foreground hover:text-primary">
                <EtsyIcon className="h-4 w-4" /> Etsy-Shop
              </a>
            </li>
            <li>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-foreground hover:text-primary">
                <InstagramIcon className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a href={site.pinterestUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-foreground hover:text-primary">
                <PinterestIcon className="h-4 w-4" /> Pinterest
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Rechtliches">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Rechtliches</p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/impressum" className="inline-flex min-h-10 items-center text-foreground hover:text-primary">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="inline-flex min-h-10 items-center text-foreground hover:text-primary">
                Datenschutz
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-12 flex max-w-6xl items-center gap-2 border-t border-foreground/10 pt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} PrinzessinWollhausen · Handmade with love
        <HeartIcon className="h-3.5 w-3.5 text-primary" />
      </p>
    </footer>
  )
}
