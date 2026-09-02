import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Redesign-Vorschau · PrinzessinWollhausen',
  description: 'Vier Varianten für die Startseite von PrinzessinWollhausen im Vergleich.',
  robots: { index: false, follow: false },
}

const variants = [
  {
    href: '/redesign/a',
    letter: 'A',
    name: 'Editorial & elegant',
    summary:
      'Ruhige Magazin-Optik mit großer Serifen-Typografie, viel Weißraum und feinen Linien. Nummerierte Kapitel (Kollektion, Handwerk, Über mich, Kundenstimmen, Fragen), Bild-im-Bild-Hero und dunkelrote Abschluss-Sektion.',
    strengths: ['Wertig & zeitlos', 'Sehr gut lesbar', 'Hochwertigkeit statt Schnäppchen'],
    accent: 'bg-berry-deep',
  },
  {
    href: '/redesign/b',
    letter: 'B',
    name: 'Warm & gemütlich (Storytelling)',
    summary:
      'Vollflächiges Hero-Bild mit Wellen-Übergängen, runde Karten und Pill-Buttons. Erzählt die Geschichte vom Wollknäuel zum Lieblingsstück, hat einen eigenen Geschenke-Bereich, einen persönlichen Brief von Any und eine feste Kaufleiste auf dem Smartphone.',
    strengths: ['Emotional & persönlich', 'Geschenk-Fokus', 'Mobile Kaufleiste'],
    accent: 'bg-rose',
  },
  {
    href: '/redesign/c',
    letter: 'C',
    name: 'Klar & verkaufsstark (Shop-first)',
    summary:
      'Klare, kräftige Sans-Serif-Überschriften, Etsy-orange Kaufbuttons, Vorteilsleiste, Kategorie-Kacheln, Bestseller-Karten mit „Unikat · nur 1×“-Badge, 3-Schritte-Bestellung, sechs Vertrauensgründe und zweispaltige FAQ.',
    strengths: ['Maximale Klick-Rate zu Etsy', 'Schnelle Orientierung', 'Viele Vertrauenssignale'],
    accent: 'bg-etsy',
  },
  {
    href: '/redesign/d',
    letter: 'D',
    name: 'SEO/GEO-optimiert – gleiches Design, nur Ergänzungen',
    summary:
      'Kein Redesign: Aufbau, Farben und Sektionen der aktuellen Startseite bleiben unverändert. Ergänzt werden nur eine sichtbare H1 mit Produkt-Unterzeile, ausführlichere Alt-Texte, Vertrauens-Microcopy, ein FAQ-Bereich vor dem Footer sowie vollständige Metadaten und JSON-LD.',
    strengths: ['Vertrautes Design', 'Nur Ergänzungen', 'Schnell live'],
    accent: 'bg-sage',
  },
]

export default function RedesignIndexPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Zur aktuellen Startseite
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Vorschau</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground text-balance sm:text-5xl">
          Vier Varianten für die neue Startseite
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          A, B und C sind vollständige Redesigns mit denselben Inhalten
          (Sortiment, Über Any, Kundenstimmen, FAQ), denselben SEO-Metadaten und
          denselben strukturierten Daten – sie unterscheiden sich in Aufbau,
          Stimmung und Kaufführung. Variante D behält das aktuelle Design bei und
          ergänzt nur die SEO/GEO-Bausteine. Die aktuelle Startseite bleibt
          unverändert, bis eine Variante ausgewählt ist.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {variants.map((variant) => (
            <li key={variant.href}>
              <Link
                href={variant.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-0.5"
              >
                <div className={`flex h-32 items-center justify-center ${variant.accent} text-primary-foreground`}>
                  <span className="font-serif text-7xl">{variant.letter}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-2xl text-foreground">{variant.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{variant.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {variant.strengths.map((s) => (
                      <li key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-primary">
                    Variante {variant.letter} ansehen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-14 rounded-2xl border border-border bg-secondary/50 p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-foreground">Was alle Varianten gemeinsam haben</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
            <li>• Mehrfache „Zum Etsy-Shop“-Links (A–C als Buttons in Header, Hero, Produkten, Abschluss; D wie bisher plus Textlinks)</li>
            <li>• Vertrauenssignale: handgemacht, Unikat, liebevoll verpackt, Made in Germany, kleines Label</li>
            <li>• A–C: Platzhalter für echte Etsy-Bewertungen (vor Livegang austauschen)</li>
            <li>• Ein einziges H1, saubere Überschriften-Hierarchie, beschreibende Alt-Texte</li>
            <li>• Vollständige Metadaten: Titel, Beschreibung, Keywords, Open Graph, Twitter Card, Canonical</li>
            <li>• JSON-LD: Store/LocalBusiness, Person (Any), ItemList mit Produkten, FAQPage, WebSite</li>
            <li>• FAQ-Bereich mit natürlichen Fragen (Was? Wo kaufen? Handgemacht? Geschenk? Versand?)</li>
            <li>• sitemap.xml und robots.txt für die gesamte Website</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
