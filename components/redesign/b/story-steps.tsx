import { HeartIcon, YarnIcon } from '@/components/redesign/shared/icons'

const steps = [
  {
    Icon: YarnIcon,
    title: 'Garn mit Sorgfalt gewählt',
    text: 'Ich suche weiche, langlebige Garne in Farben aus, die gute Laune machen – von Beere bis Senfgelb.',
  },
  {
    Icon: HeartIcon,
    title: 'Masche für Masche von Hand',
    text: 'Jedes Stück entsteht in meiner kleinen Werkstatt in Ahrensburg – ohne Maschine, ohne Serie.',
  },
  {
    Icon: GiftIcon,
    title: 'Liebevoll verpackt zu dir',
    text: 'Hübsch eingepackt und aus Deutschland verschickt – bereit zum Verschenken oder Selbstfreuen.',
  },
]

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M5 12v8h14v-8M12 8v12M12 8c-1.5-3-5-3-5-1s3 1.5 5 1zm0 0c1.5-3 5-3 5-1s-3 1.5-5 1z" />
    </svg>
  )
}

export function StorySteps() {
  return (
    <section aria-labelledby="story-heading" className="px-5 pb-8 pt-6 sm:px-8 sm:pt-10">
      <div className="mx-auto max-w-6xl">
        <h2 id="story-heading" className="text-center font-serif text-3xl text-foreground text-balance sm:text-4xl">
          Vom Wollknäuel zum Lieblingsstück
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(({ Icon, title, text }, index) => (
            <li key={title} className="relative rounded-3xl bg-card p-7 shadow-card">
              <span className="absolute -top-4 left-7 rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-wide text-primary-foreground">
                Schritt {index + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-soft text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
