import { Heart, LogoMark } from './logo-mark'

export function Hero() {
  return (
    <header className="relative overflow-hidden px-5 pb-14 pt-12 text-center sm:pb-20 sm:pt-16">
      <LogoMark />

      <h1 className="sr-only">PrinzessinWollhausen</h1>

      <div className="mx-auto mt-6 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-primary/40" />
        <Heart className="h-3 w-3 text-primary" />
        <span className="h-px w-8 bg-primary/40" />
      </div>

      <p className="mx-auto mt-4 max-w-md text-sm font-semibold uppercase leading-relaxed tracking-[0.2em] text-muted-foreground text-pretty sm:text-base">
        Handgemachte Lieblingsstücke mit viel Liebe zum Detail
      </p>

      <a
        href="https://prinzessinwollhausen.etsy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-9 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Zum Etsy-Shop
      </a>
    </header>
  )
}
