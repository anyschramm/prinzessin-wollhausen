import { site, testimonials } from '@/lib/site'
import { StarIcon } from '@/components/redesign/shared/icons'

export function TestimonialsB() {
  return (
    <section id="stimmen" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Kundenstimmen</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            Was Kundinnen auf Etsy sagen
          </h2>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={index} className="flex flex-col">
              <blockquote className="relative flex-1 rounded-3xl rounded-bl-md bg-card p-7 shadow-card">
                <div className="flex gap-1 text-mustard" aria-label="5 von 5 Sternen">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-relaxed text-foreground/90">„{item.quote}“</p>
              </blockquote>
              <p className="mt-4 pl-4 text-sm font-bold text-foreground">
                {item.name}
                <span className="block font-normal text-muted-foreground">{item.detail}</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center">
          <a
            href={`${site.etsyUrl}#reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-primary/30 px-6 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Alle Bewertungen auf Etsy lesen
          </a>
        </p>
      </div>
    </section>
  )
}
