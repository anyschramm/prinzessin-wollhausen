import type { Metadata } from 'next'
import { buildHomeMetadata } from '@/lib/seo'
import { HomeJsonLd } from '@/components/redesign/shared/json-ld'
import { HeaderA } from '@/components/redesign/a/header'
import { HeroA } from '@/components/redesign/a/hero'
import { TrustBarA } from '@/components/redesign/a/trust-bar'
import { CollectionA } from '@/components/redesign/a/collection'
import { CraftA } from '@/components/redesign/a/craft'
import { AboutA } from '@/components/redesign/a/about'
import { TestimonialsA } from '@/components/redesign/a/testimonials'
import { FaqA } from '@/components/redesign/a/faq'
import { CtaBandA } from '@/components/redesign/a/cta-band'
import { FooterA } from '@/components/redesign/a/footer'

export const metadata: Metadata = buildHomeMetadata({
  path: '/redesign/a',
  preview: true,
  titleSuffix: 'Variante A',
})

export default function RedesignAPage() {
  return (
    <>
      <HomeJsonLd pagePath="/redesign/a" />
      <HeaderA />
      <main className="min-h-screen bg-background">
        <HeroA />
        <TrustBarA />
        <CollectionA />
        <CraftA />
        <AboutA />
        <TestimonialsA />
        <FaqA />
        <CtaBandA />
      </main>
      <FooterA />
    </>
  )
}
