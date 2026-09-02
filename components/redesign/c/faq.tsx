import { faq } from '@/lib/site'

export function FaqC() {
  return (
    <section id="fragen" className="border-t border-border bg-card px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Häufige Fragen</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Fragen & Antworten rund um PrinzessinWollhausen
          </h2>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {faq.map((item) => (
            <details key={item.question} className="faq-item group rounded-2xl border border-border bg-background">
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left">
                <h3 className="text-lg font-bold text-foreground">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="faq-chevron flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-soft text-primary transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 text-base leading-relaxed text-muted-foreground text-pretty">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
