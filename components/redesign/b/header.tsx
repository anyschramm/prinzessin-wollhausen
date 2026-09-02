import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

export function HeaderB() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/redesign/b" className="flex min-h-11 items-center gap-3 text-primary-foreground" aria-label="PrinzessinWollhausen – Startseite">
          <Image
            src="/images/logo.jpeg"
            alt=""
            width={44}
            height={42}
            className="h-11 w-11 rounded-full border-2 border-white/80 object-cover"
          />
          <span className="hidden font-serif text-2xl drop-shadow-sm sm:block">PrinzessinWollhausen</span>
        </Link>
        <nav aria-label="Hauptnavigation" className="flex items-center gap-3">
          <a
            href="#lieblingsstuecke"
            className="hidden min-h-11 items-center rounded-full px-4 text-sm font-semibold text-primary-foreground/95 drop-shadow-sm transition-colors hover:bg-white/15 md:inline-flex"
          >
            Lieblingsstücke
          </a>
          <a
            href="#geschenke"
            className="hidden min-h-11 items-center rounded-full px-4 text-sm font-semibold text-primary-foreground/95 drop-shadow-sm transition-colors hover:bg-white/15 md:inline-flex"
          >
            Geschenkideen
          </a>
          <a
            href="#any"
            className="hidden min-h-11 items-center rounded-full px-4 text-sm font-semibold text-primary-foreground/95 drop-shadow-sm transition-colors hover:bg-white/15 md:inline-flex"
          >
            Über Any
          </a>
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-primary shadow-soft transition-colors hover:bg-rose-soft"
          >
            Zum Etsy-Shop
          </a>
        </nav>
      </div>
    </header>
  )
}
