import Image from 'next/image'
import { site } from '@/lib/site'
import { HeartIcon } from '@/components/redesign/shared/icons'
import { WaveB } from './wave'

export function HeroB() {
  return (
    <section className="relative isolate flex min-h-[88svh] max-h-[960px] flex-col justify-end overflow-hidden text-primary-foreground">
      <Image
        src="/images/muetzen.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[center_40%]"
      />
      <div
        aria-hidden="true"
        className="-z-10 absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.36_0.1_14/0.55)_0%,oklch(0.36_0.1_14/0.35)_35%,oklch(0.36_0.1_14/0.82)_100%)]"
      />

      <div className="mx-auto w-full max-w-4xl px-5 pb-24 pt-36 text-center sm:px-8 sm:pb-32">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur-sm">
          <HeartIcon className="h-3.5 w-3.5 text-rose-soft" />
          Handgemacht in Ahrensburg · Jedes Stück ein Unikat
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-balance drop-shadow-sm sm:text-6xl lg:text-7xl">
          Mit Liebe gestrickt.
          <br />
          <em className="font-medium not-italic text-rose-soft">Für dich gemacht.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 text-pretty sm:text-xl">
          Kuschelige Pulswärmer, warme Mützen, weiche Stirnbänder, gemütliche
          Decken und kleine Lesezeichen – von Hand gefertigt von Any, mit viel
          Geduld und einem Herz für schöne Dinge.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-9 text-lg font-bold text-primary shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-rose-soft sm:w-auto"
          >
            Zum Etsy-Shop
          </a>
          <a
            href="#lieblingsstuecke"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full border-2 border-white/70 px-9 text-lg font-semibold text-primary-foreground transition-colors hover:bg-white/15 sm:w-auto"
          >
            Lieblingsstücke entdecken
          </a>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/80">
          Versand aus Deutschland · Sicher bezahlen über Etsy · Liebevoll verpackt
        </p>
      </div>

      <WaveB className="absolute inset-x-0 bottom-0" fill="fill-background" />
    </section>
  )
}
