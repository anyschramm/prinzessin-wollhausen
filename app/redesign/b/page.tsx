import type { Metadata } from 'next'
import { buildHomeMetadata } from '@/lib/seo'
import { HomeJsonLd } from '@/components/redesign/shared/json-ld'
import { HeaderB } from '@/components/redesign/b/header'
import { HeroB } from '@/components/redesign/b/hero'
import { StorySteps } from '@/components/redesign/b/story-steps'
import { ProductsB } from '@/components/redesign/b/products'
import { GiftB } from '@/components/redesign/b/gift'
import { GalleryB } from '@/components/redesign/b/gallery'
import { LetterB } from '@/components/redesign/b/letter'
import { TestimonialsB } from '@/components/redesign/b/testimonials'
import { FaqB } from '@/components/redesign/b/faq'
import { ClosingB } from '@/components/redesign/b/closing'
import { FooterB } from '@/components/redesign/b/footer'
import { MobileCtaB } from '@/components/redesign/b/mobile-cta'

export const metadata: Metadata = buildHomeMetadata({
  path: '/redesign/b',
  preview: true,
  titleSuffix: 'Variante B',
})

export default function RedesignBPage() {
  return (
    <div className="relative">
      <HomeJsonLd pagePath="/redesign/b" />
      <HeaderB />
      <main className="min-h-screen bg-background">
        <HeroB />
        <StorySteps />
        <ProductsB />
        <GiftB />
        <GalleryB />
        <LetterB />
        <TestimonialsB />
        <FaqB />
        <ClosingB />
      </main>
      <FooterB />
      <MobileCtaB />
    </div>
  )
}
