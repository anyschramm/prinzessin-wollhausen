import { Hero } from '@/components/hero'
import { Offerings } from '@/components/offerings'
import { Gallery } from '@/components/gallery'
import { About } from '@/components/about'
import { FindMe } from '@/components/find-me'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Offerings />
      <Gallery />
      <About />
      <FindMe />
      <SiteFooter />
    </main>
  )
}
