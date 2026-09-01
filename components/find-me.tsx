import Image from 'next/image'

function EtsyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M9.16 3.1v6.36c0 .16.06.24.23.24.62 0 1.86.06 2.46-.02.42-.06.7-.36.86-.9.09-.3.2-.83.24-1.06h.63c-.02.35-.1 2-.1 2.72 0 .7.08 2.06.1 2.36h-.63c-.06-.28-.16-.72-.24-1-.16-.55-.4-.88-.86-.94-.6-.08-1.84-.03-2.46-.03-.17 0-.23.09-.23.24v5.05c0 1.05.44 1.5 1.66 1.5h2.2c1.36 0 2.02-.5 2.9-2.4.22-.5.5-1.13.63-1.44l.6.1c-.08.4-.5 3.1-.6 3.72 0 0-2.6-.06-3.7-.06H8.44c-1.24 0-2.5.06-3.44.06v-.6c1.12-.12 1.53-.2 1.53-1.1 0-.35.02-1.4.02-3.65V8.05c0-2.24-.02-3.3-.02-3.65 0-.9-.4-.98-1.53-1.1v-.6c.94 0 2.2.06 3.44.06h4.36c1.1 0 3.06-.1 3.42-.1.02.5.16 2.7.24 3.34l-.58.08c-.18-.53-.42-1.24-.72-1.63-.44-.58-1.06-.94-2.02-.94H9.94c-.6 0-.78.06-.78.6z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.19-.8 1.2-5.1 1.2-5.1s-.3-.62-.3-1.53c0-1.43.83-2.5 1.86-2.5.88 0 1.3.66 1.3 1.45 0 .88-.56 2.2-.85 3.42-.24 1.02.51 1.85 1.52 1.85 1.82 0 3.22-1.92 3.22-4.7 0-2.46-1.76-4.18-4.28-4.18-2.92 0-4.63 2.19-4.63 4.45 0 .88.34 1.82.76 2.34.08.1.1.19.07.29-.08.32-.26 1.02-.29 1.16-.05.19-.15.23-.35.14-1.3-.6-2.11-2.5-2.11-4.02 0-3.27 2.38-6.28 6.86-6.28 3.6 0 6.4 2.57 6.4 6 0 3.58-2.26 6.46-5.39 6.46-1.05 0-2.04-.55-2.38-1.19l-.65 2.47c-.23.9-.87 2.03-1.3 2.72.98.3 2.02.47 3.1.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  )
}

const channels = [
  {
    name: 'Etsy-Shop',
    handle: 'prinzessinwollhausen.etsy.com',
    href: 'https://prinzessinwollhausen.etsy.com',
    Icon: EtsyIcon,
  },
  {
    name: 'Instagram',
    handle: '@prinzessinwollhausen',
    href: 'https://www.instagram.com/prinzessinwollhausen',
    Icon: InstagramIcon,
  },
  {
    name: 'Pinterest',
    handle: 'Prinzessin Wollhausen',
    href: 'https://www.pinterest.com/prinzessinwollhausen',
    Icon: PinterestIcon,
  },
]

export function FindMe() {
  return (
    <section id="finden" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Wo du mich findest
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground text-balance sm:text-4xl">
              Entdecke mehr in meinem Shop
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground text-pretty">
              Meine Produkte findest du in meinem Etsy-Shop. Schau auch gerne auf
              Instagram und Pinterest vorbei – dort zeige ich neue Projekte,
              Muster und Einblicke in meine Arbeit.
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
                src="/images/flyer.jpeg"
                alt="Übersicht der handgemachten Produkte von PrinzessinWollhausen"
                width={900}
                height={1300}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
