import { site, testimonials } from '@/lib/site'
import { StarIcon } from '@/components/redesign/shared/icons'

export function TestimonialsA() {
  return (
    <section
      id="stimmen"
      aria-labelledby="stimmen-heading"
      className="border-y border-foreground/10 bg-cream-deep/60 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            04 — Kundenstimmen
          </p>
          <h2 id="stimmen-heading" className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            Das sagen Kundinnen auf Etsy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Jede Bewertung ist ein kleines Dankeschön für viele Stunden
            Handarbeit – und die schönste Bestätigung für mich.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={index} className="flex flex-col border-t border-foreground/15 pt-6">
              <div className="flex gap-1 text-mustard" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-serif text-xl italic leading-relaxed text-foreground/90">
                „{item.quote}“
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-foreground">
                {item.name}
                <span className="block font-normal text-muted-foreground">{item.detail}</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center">
          <a
            href={`${site.etsyUrl}#reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 border-b-2 border-primary pb-1 text-base font-semibold text-primary transition-colors hover:text-berry-deep"
          >
            Alle Bewertungen im Etsy-Shop lesen
            <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>
    </section>
  )
}
