import { purchaseSteps, site } from '@/lib/site'

export function HowItWorksC() {
  return (
    <section aria-labelledby="how-heading" className="bg-berry-deep px-4 py-14 text-primary-foreground sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-soft">So einfach geht's</p>
            <h2 id="how-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              In drei Schritten zu deinem Unikat
            </h2>
          </div>
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-base font-bold text-primary transition-colors hover:bg-rose-soft"
          >
            Jetzt bei Etsy stöbern
          </a>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {purchaseSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-white/15 bg-white/10 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-extrabold text-primary">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-primary-foreground/85">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
