import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'
import { EtsyIcon } from '@/components/redesign/shared/icons'

const navItems = [
  { href: '#kategorien', label: 'Sortiment' },
  { href: '#beliebt', label: 'Beliebt' },
  { href: '#vertrauen', label: 'Warum handgemacht' },
  { href: '#bewertungen', label: 'Bewertungen' },
  { href: '#fragen', label: 'FAQ' },
]

export function HeaderC() {
  return (
    <>
      <div className="bg-berry-deep px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
        <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <span>✓ Jedes Stück ein Unikat</span>
          <span className="hidden sm:inline">✓ Versand aus Deutschland</span>
          <span>✓ Liebevoll verpackt</span>
          <span className="hidden md:inline">✓ Sicher bezahlen über Etsy</span>
        </p>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-8">
          <Link href="/redesign/c" className="flex min-h-11 items-center gap-3" aria-label="PrinzessinWollhausen – Startseite">
            <Image
              src="/images/logo.jpeg"
              alt=""
              width={44}
              height={42}
              className="h-10 w-10 rounded-full object-cover mix-blend-multiply"
            />
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              PrinzessinWollhausen
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-bold text-foreground/80 transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-etsy px-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-etsy-deep sm:px-5"
          >
            <EtsyIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Jetzt im Etsy-Shop stöbern</span>
            <span className="sm:hidden">Etsy-Shop</span>
          </a>
        </div>
      </header>
    </>
  )
}
