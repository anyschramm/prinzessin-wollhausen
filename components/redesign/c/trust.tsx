import { trustSignals } from '@/lib/site'

function TrustGlyph({ index, className }: { index: number; className?: string }) {
  const paths = [
    'M7 3c0 3 3 4 3 7s-3 4-3 7M12 3c0 3 3 4 3 7s-3 4-3 7M17 3c0 3 3 4 3 7s-3 4-3 7',
    'M12 3l2.5 5.5L20 9l-4.5 4 1.2 6L12 16l-4.7 3 1.2-6L4 9l5.5-.5z',
    'M3 9h18v3H3zM5 12v8h14v-8M12 9v11M12 9C10 6 6 6 6 8s4 1 6 1zm0 0c2-3 6-3 6-1s-4 1-6 1z',
    'M12 21c-4-3-7-6-7-10a7 7 0 0114 0c0 4-3 7-7 10zM12 4v7M8.5 8l3.5 3 3.5-3',
    'M4 20l4-12 4 8 4-10 4 14M3 20h18',
    'M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10zM9.5 11.5l1.5 1.5 3.5-3.5',
  ]
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d={paths[index % paths.length]} />
    </svg>
  )
}

export function TrustC() {
  return (
    <section id="vertrauen" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Warum handgemacht?</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Sechs gute Gründe für ein Stück von PrinzessinWollhausen
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((item, index) => (
            <li key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-soft text-primary">
                <TrustGlyph index={index} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
