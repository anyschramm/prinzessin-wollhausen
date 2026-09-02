import Link from 'next/link'
import { Heart } from '@/components/logo-mark'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50 px-5 py-10 text-center">
      <p className="font-serif text-2xl text-foreground">{site.name}</p>
      <address className="mt-1 text-sm not-italic text-muted-foreground">
        Handmade with love · {site.city}, {site.region}
      </address>
      <nav
        aria-label="Rechtliches und Shop"
        className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
      >
        <Link href="/impressum" className="transition-colors hover:text-primary">
          Impressum
        </Link>
        <Link href="/datenschutz" className="transition-colors hover:text-primary">
          Datenschutz
        </Link>
        <a
          href={site.etsyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          Etsy-Shop
        </a>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          Instagram
        </a>
      </nav>
      <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        Danke für deine Unterstützung
        <Heart className="h-3.5 w-3.5 text-primary" />
      </p>
    </footer>
  )
}
