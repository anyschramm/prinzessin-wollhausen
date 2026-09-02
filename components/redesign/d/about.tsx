import Image from 'next/image'
import { Heart } from '@/components/logo-mark'

/**
 * Variante D – „Über mich“ wie auf der Live-Startseite.
 * SEO/GEO-Ergänzungen: klar formulierte Entitätsfakten (wer, wo, was) im
 * Fließtext und ein beschreibenderer Alt-Text.
 */
const badges = [
  { title: 'Handgemacht', text: 'mit ganz viel Liebe' },
  { title: 'Liebevoll verpackt', text: 'bereit zum Verschenken' },
  { title: 'Nachhaltig & bewusst', text: 'ausgewählte Materialien' },
  { title: 'Kleines Business', text: 'Danke, dass du Handarbeit unterstützt!' },
]

export function AboutD() {
  return (
    <section id="ueber-mich" className="bg-secondary/50 px-5 py-16 sm:py-24" aria-labelledby="ueber-mich-heading">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border lg:mx-0">
          <Image
            src="/images/ueber-mich.jpeg"
            alt="Any von PrinzessinWollhausen häkelt ein buntes Tuch – Handarbeit aus Ahrensburg in Arbeit"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Über mich
          </p>
          <h2
            id="ueber-mich-heading"
            className="mt-3 font-serif text-3xl font-medium text-foreground text-balance sm:text-4xl"
          >
            Ich bin Any – und das ist meine Leidenschaft
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground text-pretty">
            <p>
              Ich stricke und häkle seit vielen Jahren mit Leidenschaft. Aus
              dieser Leidenschaft ist PrinzessinWollhausen entstanden – mein
              kleines Handmade-Label aus Ahrensburg in Schleswig-Holstein, bei
              Hamburg.
            </p>
            <p>
              Ich wähle Garne und Muster mit viel Sorgfalt aus und lege großen
              Wert darauf, dass jedes Stück nicht nur schön, sondern auch
              hochwertig verarbeitet ist. Jeder Pulswärmer, jede Mütze und jede
              Decke entsteht in kleiner Stückzahl von Hand – deshalb ist jedes
              Stück ein Unikat.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4">
            {badges.map((badge) => (
              <li key={badge.title} className="flex gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-3.5 w-3.5 text-primary" />
                </span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-wide text-foreground">
                    {badge.title}
                  </span>
                  <span className="block text-sm leading-snug text-muted-foreground">
                    {badge.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
