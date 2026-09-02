import Image from 'next/image'
import { site } from '@/lib/site'
import { WaveB } from './wave'

const occasions = ['Geburtstag', 'Weihnachten', 'Muttertag', 'Dankeschön', 'Einfach so']

export function GiftB() {
  return (
    <>
      <WaveB fill="fill-rose-soft/50" />
      <section id="geschenke" className="bg-rose-soft/50 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-card">
              <Image
                src="/images/lesezeichen.jpeg"
                alt="Gehäkeltes rosa Blumen-Lesezeichen auf einer Grußkarte mit der Aufschrift „Für dich – damit jede Geschichte noch schöner wird“"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 w-40 -rotate-3 overflow-hidden rounded-3xl border-4 border-background shadow-card sm:-right-8 sm:w-48">
              <Image
                src="/images/muetzen.jpeg"
                alt="Vier handgestrickte Mützen in Rot, Pink, Senfgelb und Beere"
                width={480}
                height={360}
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Geschenkideen mit Herz</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
              Kleine Geschenke, große Freude
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              Ein handgemachtes Geschenk sagt mehr als ein schneller Klick: Du
              hast dir Gedanken gemacht. Meine Pulswärmer, Mützen und Lesezeichen
              kommen hübsch verpackt bei dir an – du musst sie nur noch
              überreichen.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Passende Anlässe">
              {occasions.map((occasion) => (
                <li key={occasion} className="rounded-full bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
                  {occasion}
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3 text-foreground">
              {[
                'Jedes Stück ist ein Unikat – niemand sonst hat genau dieses.',
                'Direkt geschenkfertig verpackt, mit Liebe zum Detail.',
                'Wunschfarbe oder Wunschmuster? Frag mich einfach.',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                    ✓
                  </span>
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={site.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-13 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-soft transition-colors hover:bg-berry-deep"
            >
              Geschenk im Etsy-Shop aussuchen
            </a>
          </div>
        </div>
      </section>
      <WaveB fill="fill-background" flip={false} className="bg-rose-soft/50" />
    </>
  )
}
