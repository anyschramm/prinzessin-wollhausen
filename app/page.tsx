import type { Metadata } from 'next'
import { buildHomeMetadata } from '@/lib/seo'
import { HomeJsonLd } from '@/components/json-ld'
import { Hero } from '@/components/hero'
import { Offerings } from '@/components/offerings'
import { Gallery } from '@/components/gallery'
import { About } from '@/components/about'
import { FindMe } from '@/components/find-me'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = buildHomeMetadata()

export default function Page() {
  return (
    <>
      <HomeJsonLd />
      <main className="min-h-screen bg-background">
        <Hero />
        <Offerings />
        <Gallery />
        <About />
        <FindMe />
        <Faq />
        <SiteFooter />
      </main>
    </>
  )
}
