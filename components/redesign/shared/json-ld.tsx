import { buildHomeJsonLd } from '@/lib/structured-data'

export function HomeJsonLd({ pagePath = '/' }: { pagePath?: string }) {
  const data = buildHomeJsonLd(pagePath)
  return (
    <script
      type="application/ld+json"
      // JSON.stringify-Ausgabe; "<" wird escaped, damit kein HTML eingeschleust werden kann.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
