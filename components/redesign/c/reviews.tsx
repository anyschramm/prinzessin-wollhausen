import { site, testimonials } from '@/lib/site'
import { EtsyIcon, StarIcon } from '@/components/redesign/shared/icons'

export function ReviewsC() {
  return (
    <section id="bewertungen" className="border-y border-border bg-card px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Bewertungen</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Das sagen Kundinnen auf Etsy
            </h2>
          </div>
          <a
            href={`${site.etsyUrl}#reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-base font-bold text-primary hover:underline"
          >
            <EtsyIcon className="h-4 w-4" />
            Alle Bewertungen auf Etsy lesen
          </a>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={index} className="flex flex-col rounded-2xl border border-border bg-background p-6">
              <div className="flex gap-0.5 text-mustard" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                „{item.quote}“
              </blockquote>
              <p className="mt-4 text-sm font-bold text-foreground">
                {item.name}
                <span className="block font-normal text-muted-foreground">{item.detail}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
