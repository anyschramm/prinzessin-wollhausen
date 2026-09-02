import { faq, site } from '@/lib/site'

/**
 * Fragen und Antworten kommen aus lib/site und sind identisch mit dem
 * FAQPage-JSON-LD, damit sichtbarer Inhalt und strukturierte Daten übereinstimmen.
 */
export function Faq() {
  return (
    <section id="fragen" className="bg-secondary/50 px-5 py-16 sm:py-24" aria-labelledby="fragen-heading">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Häufige Fragen
          </p>
          <h2
            id="fragen-heading"
            className="mt-3 font-serif text-3xl font-medium text-foreground text-balance sm:text-4xl"
          >
            Gut zu wissen, bevor du bestellst
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
            Kurz und klar beantwortet: Was ich anbiete, wo du kaufst, wie
            verschickt wird und wie du deine Wollsachen pflegst. Noch Fragen?
            Schreib mir gern über Etsy oder Instagram.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faq.map((item, index) => (
            <details
              key={item.question}
              className="faq-item group rounded-2xl border border-border bg-card"
              open={index === 0}
            >
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left">
                <h3 className="font-serif text-xl text-foreground sm:text-2xl">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="faq-chevron flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground text-pretty">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Alle Preise, Farben und die aktuelle Verfügbarkeit findest du im{' '}
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Etsy-Shop
          </a>
          .
        </p>
      </div>
    </section>
  )
}
