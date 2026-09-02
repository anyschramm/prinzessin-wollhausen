import type { Metadata } from 'next'
import { SITE_URL, site } from './site'

export const homeTitle =
  'PrinzessinWollhausen · Handgestrickte Pulswärmer, Mützen & Decken aus Ahrensburg'

export const homeDescription =
  'Handgemachte Unikate aus Ahrensburg: liebevoll gestrickte Pulswärmer, Mützen, Stirnbänder, gehäkelte Decken und Lesezeichen von Any. Jetzt im Etsy-Shop von PrinzessinWollhausen entdecken.'

export const homeKeywords = [
  'PrinzessinWollhausen',
  'PrinzessinWollhausen Etsy',
  'handgestrickte Pulswärmer',
  'Pulswärmer kaufen',
  'gestrickte Mützen handgemacht',
  'Stirnband gestrickt',
  'gehäkelte Decke Granny Squares',
  'gehäkeltes Lesezeichen',
  'Handmade Etsy Shop Deutschland',
  'Strickaccessoires Ahrensburg',
  'Handarbeit Schleswig-Holstein',
  'Unikat Geschenk handgemacht',
]

/** Vollständige, indexierbare Metadaten der Startseite (Canonical: "/"). */
export function buildHomeMetadata(): Metadata {
  const title = homeTitle
  const canonical = '/'

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description: homeDescription,
    keywords: homeKeywords,
    authors: [{ name: site.makerName, url: SITE_URL }],
    creator: site.name,
    publisher: site.name,
    alternates: { canonical },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      url: canonical,
      siteName: site.name,
      title,
      description: homeDescription,
      images: [
        {
          url: site.ogImage,
          width: 1080,
          height: 1080,
          alt: 'Bunte gehäkelte Granny-Square-Decken von PrinzessinWollhausen',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: homeDescription,
      images: [site.ogImage],
    },
  }
}
