import { SITE_URL, faq, products, site } from './site'

/**
 * JSON-LD (schema.org) für SEO und GEO. Die Objekte referenzieren sich über
 * stabile @id-Werte, damit Suchmaschinen und KI-Assistenten Marke, Macherin,
 * Produkte und FAQ als zusammengehörige Entitäten erkennen.
 */

const ids = {
  store: `${SITE_URL}/#store`,
  person: `${SITE_URL}/#any`,
  website: `${SITE_URL}/#website`,
  webpage: `${SITE_URL}/#webpage`,
  products: `${SITE_URL}/#produkte`,
  faq: `${SITE_URL}/#faq`,
}

const abs = (path: string) => `${SITE_URL}${path}`

export function buildHomeJsonLd(pagePath = '/') {
  const pageUrl = abs(pagePath === '/' ? '' : pagePath)

  const person = {
    '@type': 'Person',
    '@id': ids.person,
    name: site.makerName,
    alternateName: site.makerLegalName,
    jobTitle: 'Strick- und Häkeldesignerin',
    description:
      'Any ist die Gründerin von PrinzessinWollhausen und fertigt in Ahrensburg (Schleswig-Holstein) handgestrickte und gehäkelte Accessoires.',
    worksFor: { '@id': ids.store },
    homeLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: site.countryCode,
      },
    },
    sameAs: [site.instagramUrl, site.pinterestUrl, site.etsyUrl],
  }

  const store = {
    '@type': ['Store', 'LocalBusiness', 'Organization'],
    '@id': ids.store,
    name: site.name,
    alternateName: site.displayName,
    slogan: site.tagline,
    description:
      'PrinzessinWollhausen ist ein kleines Handmade-Label aus Ahrensburg in Schleswig-Holstein. Any strickt und häkelt von Hand Pulswärmer, Mützen, Stirnbänder, Decken und Lesezeichen – jedes Stück ein Unikat. Verkauf über den Etsy-Shop.',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: abs(site.logo),
      width: 975,
      height: 938,
    },
    image: abs(site.ogImage),
    email: site.email,
    founder: { '@id': ids.person },
    foundingLocation: {
      '@type': 'Place',
      name: site.foundingCity,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    areaServed: {
      '@type': 'Country',
      name: site.country,
    },
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Zahlung über Etsy (PayPal, Kreditkarte, Klarna, Sofortüberweisung)',
    priceRange: '€€',
    knowsAbout: [
      'Stricken',
      'Häkeln',
      'Pulswärmer',
      'Mützen',
      'Stirnbänder',
      'Granny-Square-Decken',
      'Lesezeichen',
      'Handarbeit',
    ],
    makesOffer: products.map((p) => ({
      '@type': 'Offer',
      itemOffered: { '@id': `${SITE_URL}/#produkt-${p.slug}` },
      url: site.etsyUrl,
      availability: 'https://schema.org/LimitedAvailability',
      seller: { '@id': ids.store },
    })),
    sameAs: [site.etsyUrl, site.instagramUrl, site.pinterestUrl],
  }

  const productList = {
    '@type': 'ItemList',
    '@id': ids.products,
    name: 'Handgemachte Produkte von PrinzessinWollhausen',
    description:
      'Sortiment des Handmade-Labels PrinzessinWollhausen: handgestrickte Pulswärmer, Mützen und Stirnbänder sowie gehäkelte Decken und Lesezeichen.',
    numberOfItems: products.length,
    itemListElement: products.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `${SITE_URL}/#produkt-${p.slug}`,
        name: `Handgemachte ${p.name} – PrinzessinWollhausen`,
        description: p.description,
        image: abs(p.image),
        category: p.category,
        brand: { '@type': 'Brand', name: site.name },
        manufacturer: { '@id': ids.store },
        material: 'Wolle / Garn',
        isHandmade: true,
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Fertigung',
            value: 'Handgestrickt bzw. handgehäkelt in Ahrensburg, Deutschland',
          },
          {
            '@type': 'PropertyValue',
            name: 'Einzelstück',
            value: 'Unikat',
          },
        ],
        offers: {
          '@type': 'Offer',
          url: site.etsyUrl,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/LimitedAvailability',
          itemCondition: 'https://schema.org/NewCondition',
          seller: { '@id': ids.store },
        },
      },
    })),
  }

  const faqPage = {
    '@type': 'FAQPage',
    '@id': ids.faq,
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const website = {
    '@type': 'WebSite',
    '@id': ids.website,
    url: SITE_URL,
    name: site.name,
    inLanguage: 'de-DE',
    publisher: { '@id': ids.store },
  }

  const webpage = {
    '@type': 'WebPage',
    '@id': ids.webpage,
    url: pageUrl || SITE_URL,
    name: 'PrinzessinWollhausen – Handgemachte Unikate aus Ahrensburg',
    inLanguage: 'de-DE',
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.store },
    primaryImageOfPage: abs(site.ogImage),
    mainEntity: { '@id': ids.store },
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [store, person, productList, faqPage, website, webpage],
  }
}
