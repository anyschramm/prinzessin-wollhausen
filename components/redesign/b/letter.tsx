import Image from 'next/image'
import { trustSignals } from '@/lib/site'
import { HeartIcon } from '@/components/redesign/shared/icons'
import { WaveB } from './wave'

export function LetterB() {
  return (
    <>
      <WaveB fill="fill-cream-deep" />
      <section id="any" className="bg-cream-deep px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <figure className="relative mx-auto w-full max-w-sm lg:sticky lg:top-8">
            <div className="relative aspect-square overflow-hidden rounded-[45%_55%_50%_50%/55%_45%_55%_45%] shadow-card">
              <Image
                src="/images/ueber-mich.jpeg"
                alt="Bunt gehäkeltes Tuch und Häkelarbeit von Any, der Macherin von PrinzessinWollhausen"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              Any · Ahrensburg, Schleswig-Holstein
            </figcaption>
          </figure>

          <div className="rounded-[2rem] bg-card p-7 shadow-card sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Ein paar Zeilen von Any</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
              Liebe Wollfreundin, schön, dass du hier bist.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              <p>
                Ich bin Any, und PrinzessinWollhausen ist mein kleines
                Handmade-Label aus Ahrensburg in Schleswig-Holstein. Seit vielen
                Jahren stricke und häkle ich mit großer Leidenschaft – erst für
                Familie und Freundinnen, heute für Menschen in ganz Deutschland.
              </p>
              <p>
                Ich wähle Garne und Muster mit viel Sorgfalt aus und nehme mir
                Zeit für jedes Detail. Denn ein Stück, das lange Freude machen
                soll, muss nicht nur schön aussehen, sondern auch gut verarbeitet
                sein.
              </p>
              <p>
                Wenn du bei mir kaufst, unterstützt du kein großes Unternehmen,
                sondern eine Frau mit Stricknadeln, viel Geduld und einem Herz
                für schöne Dinge. Danke dafür!
              </p>
            </div>
            <p className="mt-6 font-serif text-3xl italic text-primary">Herzlichst, deine Any</p>

            <ul className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              {trustSignals.slice(0, 4).map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-soft text-primary">
                    <HeartIcon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-bold text-foreground">{item.title}</span>
                    <span className="block text-sm leading-snug text-muted-foreground">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <WaveB fill="fill-background" className="bg-cream-deep" />
    </>
  )
}
