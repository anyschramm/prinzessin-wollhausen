import { faq } from '@/lib/site'

export function FaqB() {
  return (
    <section id="fragen" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Häufige Fragen</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            Alles, was du wissen möchtest
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Von „Wo kann ich kaufen?“ bis „Wie pflege ich Wolle?“ – hier findest
            du die Antworten. Und sonst: Schreib mir einfach.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faq.map((item, index) => (
            <details key={item.question} className="faq-item group rounded-3xl bg-card shadow-card" open={index === 0}>
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-5 px-6 py-4 text-left sm:px-8">
                <h3 className="text-lg font-bold text-foreground sm:text-xl">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="faq-chevron flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-soft text-primary transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-6 text-lg leading-relaxed text-muted-foreground text-pretty sm:px-8">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
