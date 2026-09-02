import { faq, site } from '@/lib/site'

export function FaqA() {
  return (
    <section id="fragen" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            05 — Häufige Fragen
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            Gut zu wissen, bevor du bestellst
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Kurz und klar beantwortet: Was ich anbiete, wo du kaufst und wie
            deine Bestellung zu dir kommt. Noch Fragen? Schreib mir gern über
            Etsy oder Instagram.
          </p>
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-7 text-base font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-berry-deep"
          >
            Zum Etsy-Shop
          </a>
        </div>

        <div className="divide-y divide-foreground/10 border-y border-foreground/10">
          {faq.map((item, index) => (
            <details key={item.question} className="faq-item group" open={index === 0}>
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-5 text-left">
                <h3 className="font-serif text-xl text-foreground sm:text-2xl">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="faq-chevron flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="pb-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
