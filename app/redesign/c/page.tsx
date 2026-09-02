import type { Metadata } from 'next'
import { buildHomeMetadata } from '@/lib/seo'
import { HomeJsonLd } from '@/components/redesign/shared/json-ld'
import { HeaderC } from '@/components/redesign/c/header'
import { HeroC } from '@/components/redesign/c/hero'
import { CategoriesC } from '@/components/redesign/c/categories'
import { BestsellersC } from '@/components/redesign/c/bestsellers'
import { HowItWorksC } from '@/components/redesign/c/how-it-works'
import { TrustC } from '@/components/redesign/c/trust'
import { ReviewsC } from '@/components/redesign/c/reviews'
import { AboutC } from '@/components/redesign/c/about'
import { FaqC } from '@/components/redesign/c/faq'
import { FinalCtaC } from '@/components/redesign/c/final-cta'
import { FooterC } from '@/components/redesign/c/footer'

export const metadata: Metadata = buildHomeMetadata({
  path: '/redesign/c',
  preview: true,
  titleSuffix: 'Variante C',
})

export default function RedesignCPage() {
  return (
    <>
      <HomeJsonLd pagePath="/redesign/c" />
      <HeaderC />
      <main className="min-h-screen bg-background">
        <HeroC />
        <CategoriesC />
        <BestsellersC />
        <HowItWorksC />
        <TrustC />
        <ReviewsC />
        <AboutC />
        <FaqC />
        <FinalCtaC />
      </main>
      <FooterC />
    </>
  )
}
