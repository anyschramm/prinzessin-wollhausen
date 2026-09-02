const items = [
  'Handgestrickt & gehäkelt',
  'Jedes Stück ein Unikat',
  'Liebevoll verpackt',
  'Made in Schleswig-Holstein',
  'Kleines Familienlabel',
]

export function TrustBarA() {
  return (
    <section aria-label="Unsere Versprechen" className="border-y border-foreground/10 bg-cream-deep/60">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-sm font-semibold tracking-wide text-foreground/80 sm:px-8">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
