import Image from 'next/image'
import { site } from '@/lib/site'
import { EtsyIcon } from '@/components/redesign/shared/icons'

export function ClosingB() {
  return (
    <section aria-labelledby="closing-heading" className="px-5 pb-24 pt-4 sm:px-8 sm:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-berry-deep text-primary-foreground shadow-soft">
        <Image
          src="/images/g-regenbogen.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-2xl px-6 py-16 text-center sm:px-10 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-soft">Bereit zum Kuscheln?</p>
          <h2 id="closing-heading" className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-5xl">
            Such dir dein Lieblingsstück aus – bevor es jemand anderes tut.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85 text-pretty">
            Jedes Stück gibt es nur ein einziges Mal. Alle aktuell verfügbaren
            Unikate findest du in meinem Etsy-Shop.
          </p>
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-9 text-lg font-bold text-primary shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-rose-soft"
          >
            <EtsyIcon className="h-5 w-5" />
            Zum Etsy-Shop
          </a>
        </div>
      </div>
    </section>
  )
}
