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

type HomeMetadataOptions = {
  /** Pfad der Seite, z. B. "/" oder "/redesign/a" */
  path: string
  /**
   * Vorschau-Varianten werden nicht indexiert und verweisen kanonisch auf die
   * Startseite, damit kein Duplicate Content entsteht. Wird eine Variante
   * zur echten Startseite, einfach `preview: false` setzen.
   */
  preview?: boolean
  titleSuffix?: string
}

export function buildHomeMetadata({
  path,
  preview = false,
  titleSuffix,
}: HomeMetadataOptions): Metadata {
  const title = titleSuffix ? `${homeTitle} – ${titleSuffix}` : homeTitle
  const canonical = preview ? '/' : path

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description: homeDescription,
    keywords: homeKeywords,
    authors: [{ name: site.makerName, url: SITE_URL }],
    creator: site.name,
    publisher: site.name,
    alternates: { canonical },
    robots: preview
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-image-preview': 'large' },
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
