import Link from 'next/link'
import { Heart } from './logo-mark'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50 px-5 py-10 text-center">
      <p className="font-serif text-2xl text-foreground">PrinzessinWollhausen</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Handmade with love · Ahrensburg, Schleswig-Holstein
      </p>
      <nav className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <Link href="/impressum" className="transition-colors hover:text-primary">
          Impressum
        </Link>
        <Link href="/datenschutz" className="transition-colors hover:text-primary">
          Datenschutz
        </Link>
      </nav>
      <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        Danke für deine Unterstützung
        <Heart className="h-3.5 w-3.5 text-primary" />
      </p>
    </footer>
  )
}
