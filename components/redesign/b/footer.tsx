import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'
import { EtsyIcon, HeartIcon, InstagramIcon, PinterestIcon } from '@/components/redesign/shared/icons'

export function FooterB() {
  return (
    <footer className="rounded-t-[2.5rem] bg-cream-deep px-5 pb-28 pt-14 text-center sm:px-8 sm:pb-14">
      <Image
        src="/images/logo.jpeg"
        alt="PrinzessinWollhausen – Handmade with love"
        width={160}
        height={150}
        className="mx-auto h-28 w-auto mix-blend-multiply"
      />
      <p className="mt-4 mx-auto max-w-md leading-relaxed text-muted-foreground">
        Handgestrickte und gehäkelte Unikate von Any aus {site.city},{' '}
        {site.region}. Erhältlich im Etsy-Shop.
      </p>

      <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {[
          { href: site.etsyUrl, label: 'Etsy-Shop', Icon: EtsyIcon },
          { href: site.instagramUrl, label: 'Instagram', Icon: InstagramIcon },
          { href: site.pinterestUrl, label: 'Pinterest', Icon: PinterestIcon },
        ].map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-card px-5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:text-primary"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          </li>
        ))}
      </ul>

      <nav aria-label="Rechtliches" className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <Link href="/impressum" className="inline-flex min-h-10 items-center transition-colors hover:text-primary">
          Impressum
        </Link>
        <Link href="/datenschutz" className="inline-flex min-h-10 items-center transition-colors hover:text-primary">
          Datenschutz
        </Link>
        <a href={`mailto:${site.email}`} className="inline-flex min-h-10 items-center transition-colors hover:text-primary">
          Kontakt
        </a>
      </nav>

      <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        Danke, dass du Handarbeit unterstützt
        <HeartIcon className="h-3.5 w-3.5 text-primary" />
      </p>
    </footer>
  )
}
