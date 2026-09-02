import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

const navItems = [
  { href: '#kollektion', label: 'Kollektion' },
  { href: '#handwerk', label: 'Handwerk' },
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#fragen', label: 'Fragen' },
]

export function HeaderA() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Link href="/redesign/a" className="flex min-h-11 items-center gap-3" aria-label="PrinzessinWollhausen – Startseite">
          <Image
            src="/images/logo.jpeg"
            alt=""
            width={48}
            height={46}
            className="h-10 w-10 rounded-full object-cover mix-blend-multiply sm:h-11 sm:w-11"
          />
          <span className="font-serif text-lg tracking-tight text-foreground sm:text-2xl">
            PrinzessinWollhausen
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.etsyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-sm bg-primary px-4 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-berry-deep sm:px-5"
        >
          <span className="hidden sm:inline">Zum Etsy-Shop</span>
          <span className="sm:hidden">Etsy-Shop</span>
        </a>
      </div>
    </header>
  )
}
