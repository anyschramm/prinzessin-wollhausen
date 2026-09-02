import Link from 'next/link'
import { products, site } from '@/lib/site'
import { EtsyIcon, HeartIcon, InstagramIcon, PinterestIcon } from '@/components/redesign/shared/icons'

export function FooterC() {
  return (
    <footer className="border-t border-border bg-cream-deep px-4 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-2xl font-semibold text-foreground">PrinzessinWollhausen</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Handgestrickte und gehäkelte Unikate von Any. Gefertigt in{' '}
            {site.city}, {site.region} – erhältlich im Etsy-Shop.
          </p>
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-etsy px-5 text-sm font-bold text-white transition-colors hover:bg-etsy-deep"
          >
            <EtsyIcon className="h-4 w-4" />
            Zum Etsy-Shop
          </a>
        </div>

        <nav aria-label="Sortiment">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Sortiment</p>
          <ul className="mt-4 space-y-2">
            {products.map((product) => (
              <li key={product.slug}>
                <a href={site.etsyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center text-foreground hover:text-primary">
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Social Media">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Folge mir</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-2 text-foreground hover:text-primary">
                <InstagramIcon className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a href={site.pinterestUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-2 text-foreground hover:text-primary">
                <PinterestIcon className="h-4 w-4" /> Pinterest
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-9 items-center gap-2 text-foreground hover:text-primary">
                E-Mail schreiben
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Rechtliches">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Rechtliches</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/impressum" className="inline-flex min-h-9 items-center text-foreground hover:text-primary">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="inline-flex min-h-9 items-center text-foreground hover:text-primary">
                Datenschutz
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-12 flex max-w-6xl items-center gap-2 border-t border-border pt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} PrinzessinWollhausen · Handmade with love in {site.city}
        <HeartIcon className="h-3.5 w-3.5 text-primary" />
      </p>
    </footer>
  )
}
