import type { Metadata } from 'next'
import { buildHomeMetadata } from '@/lib/seo'
import { HomeJsonLd } from '@/components/redesign/shared/json-ld'
import { HeroD } from '@/components/redesign/d/hero'
import { OfferingsD } from '@/components/redesign/d/offerings'
import { GalleryD } from '@/components/redesign/d/gallery'
import { AboutD } from '@/components/redesign/d/about'
import { FindMeD } from '@/components/redesign/d/find-me'
import { FaqD } from '@/components/redesign/d/faq'
import { FooterD } from '@/components/redesign/d/footer'

export const metadata: Metadata = buildHomeMetadata({
  path: '/redesign/d',
  preview: true,
  titleSuffix: 'Variante D',
})

/**
 * Variante D: die aktuelle Startseite 1:1 – nur um SEO/GEO-Ergänzungen
 * erweitert (Metadaten, JSON-LD, sichtbare H1, FAQ, Alt-Texte, Microcopy).
 */
export default function RedesignDPage() {
  return (
    <>
      <HomeJsonLd pagePath="/redesign/d" />
      <main className="min-h-screen bg-background">
        <HeroD />
        <OfferingsD />
        <GalleryD />
        <AboutD />
        <FindMeD />
        <FaqD />
        <FooterD />
      </main>
    </>
  )
}
