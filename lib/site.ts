/**
 * Zentrale Fakten und Inhalte der Marke PrinzessinWollhausen.
 * Wird von der Startseite, den Metadaten und den JSON-LD-Daten (SEO/GEO)
 * gemeinsam genutzt, damit alle Angaben konsistent bleiben.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prinzessin-wollhausen.vercel.app'
).replace(/\/$/, '')

export const site = {
  name: 'PrinzessinWollhausen',
  tagline: 'Handmade with love',
  makerName: 'Any',
  makerLegalName: 'Annette Schramm',
  email: 'PrinzessinWollhausen@gmail.com',
  city: 'Ahrensburg',
  region: 'Schleswig-Holstein',
  country: 'Deutschland',
  countryCode: 'DE',
  foundingCity: 'Ahrensburg, Schleswig-Holstein',
  etsyUrl: 'https://prinzessinwollhausen.etsy.com',
  instagramUrl: 'https://www.instagram.com/prinzessinwollhausen',
  instagramHandle: '@prinzessinwollhausen',
  pinterestUrl: 'https://www.pinterest.com/prinzessinwollhausen',
  logo: '/images/logo.jpeg',
  ogImage: '/images/shop-collage.jpeg',
} as const

export type Product = {
  slug: string
  name: string
  /** Kurzbeschreibung für Karten */
  short: string
  /** Ausführliche, eigenständige Beschreibung (GEO: zitierfähige Aussage) */
  description: string
  image: string
  alt: string
  category: string
  giftHint: string
}

export const products: Product[] = [
  {
    slug: 'pulswaermer',
    name: 'Pulswärmer',
    short: 'Handgestrickte Stulpen mit Norweger-, Herz- und Tulpenmustern.',
    description:
      'Handgestrickte Pulswärmer von PrinzessinWollhausen halten Handgelenke und Hände warm und lassen die Finger frei. Jedes Paar wird in Ahrensburg von Hand gestrickt – mit klassischen Norwegermustern, Rauten, Herzchen oder Tulpen und einem feinen Zackenrand.',
    image: '/images/pulswaermer.jpeg',
    alt: 'Handgestrickte Pulswärmer mit rot-weißem Norwegermuster an den Händen einer Frau',
    category: 'Accessoires',
    giftHint: 'Das Lieblingsgeschenk für kalte Tage',
  },
  {
    slug: 'muetzen',
    name: 'Mützen',
    short: 'Weiche, warme Rippenmützen in fröhlichen Farben.',
    description:
      'Die handgestrickten Mützen von PrinzessinWollhausen sind aus weichem Garn im Rippenmuster gestrickt, angenehm warm und in kräftigen Farben wie Rot, Pink, Senfgelb und Beere erhältlich. Jede Mütze ist ein Einzelstück.',
    image: '/images/muetzen.jpeg',
    alt: 'Vier handgestrickte Mützen in Rot, Pink, Senfgelb und Beere auf einem Schaffell',
    category: 'Accessoires',
    giftHint: 'Wärmt Kopf und Herz',
  },
  {
    slug: 'stirnbaender',
    name: 'Stirnbänder',
    short: 'Zarte Strick-Stirnbänder für Übergangszeit und Winter.',
    description:
      'Handgestrickte Stirnbänder von PrinzessinWollhausen halten die Ohren warm, ohne die Frisur zu verdecken – ideal für Herbst, Winter und Frühling. Wie alle Stücke werden sie in Ahrensburg von Hand gefertigt.',
    image: '/images/g-collage.jpeg',
    alt: 'Verschiedene handgestrickte Stulpen und Stirnbänder in Gelb, Rosa, Beere und Braun',
    category: 'Accessoires',
    giftHint: 'Für den Spaziergang an der frischen Luft',
  },
  {
    slug: 'decken',
    name: 'Decken',
    short: 'Gehäkelte Granny-Square-Decken mit Blütenmotiven.',
    description:
      'Die gehäkelten Decken von PrinzessinWollhausen bestehen aus vielen einzelnen Granny Squares mit Blütenmotiven, die von Hand zusammengefügt werden. Eine Decke besteht aus bis zu 247 einzelnen Quadraten und ist ein Kuschelstück für Jahrzehnte.',
    image: '/images/decke.jpeg',
    alt: 'Bunte gehäkelte Granny-Square-Decke mit Blütenmuster über einer weißen Kommode',
    category: 'Wohnen',
    giftHint: 'Ein Erbstück zum Einkuscheln',
  },
  {
    slug: 'lesezeichen',
    name: 'Lesezeichen',
    short: 'Gehäkelte Blumen-Lesezeichen als kleines Mitbringsel.',
    description:
      'Gehäkelte Lesezeichen von PrinzessinWollhausen sind kleine Blüten mit Blatt und Schlaufe, die jedes Buch schmücken. Sie kommen auf einer Karte mit Grußtext und eignen sich als Mitbringsel, Geschenkbeilage oder Dankeschön.',
    image: '/images/lesezeichen.jpeg',
    alt: 'Gehäkeltes rosa Blumen-Lesezeichen mit grünem Blatt auf einer Grußkarte',
    category: 'Kleine Geschenke',
    giftHint: 'Das perfekte Mitbringsel für Leseratten',
  },
]

export const faq = [
  {
    question: 'Was bietet PrinzessinWollhausen an?',
    answer:
      'PrinzessinWollhausen ist ein kleines Handmade-Label aus Ahrensburg in Schleswig-Holstein. Ich, Any, stricke und häkle von Hand Pulswärmer, Mützen, Stirnbänder, Decken und Lesezeichen. Jedes Stück ist ein Unikat und wird in kleiner Stückzahl gefertigt.',
  },
  {
    question: 'Wo kann ich die Produkte von PrinzessinWollhausen kaufen?',
    answer:
      'Alle verfügbaren Stücke findest du in meinem Etsy-Shop unter prinzessinwollhausen.etsy.com. Dort siehst du aktuelle Preise, Farben und Verfügbarkeit und kannst sicher über Etsy bezahlen.',
  },
  {
    question: 'Sind die Produkte wirklich handgemacht?',
    answer:
      'Ja. Jedes Stück wird von mir persönlich in Ahrensburg von Hand gestrickt oder gehäkelt – ohne Maschinenfertigung und ohne Massenproduktion. Deshalb gleicht kein Stück exakt dem anderen.',
  },
  {
    question: 'Eignen sich die Stücke als Geschenk?',
    answer:
      'Sehr gut. Pulswärmer, Mützen und Lesezeichen sind beliebte Geschenke zu Geburtstagen, Weihnachten oder einfach als Dankeschön. Jede Bestellung wird liebevoll verpackt und ist direkt bereit zum Verschenken.',
  },
  {
    question: 'Wie wird versendet und wie lange dauert es?',
    answer:
      'Der Versand erfolgt aus Deutschland über meinen Etsy-Shop. Vorrätige Unikate verschicke ich in der Regel innerhalb weniger Werktage. Die genauen Versandzeiten, Kosten und Optionen findest du bei jedem Artikel auf Etsy.',
  },
  {
    question: 'Wie pflege ich handgestrickte Wollsachen richtig?',
    answer:
      'Handgestrickte Stücke am besten per Hand in lauwarmem Wasser mit Wollwaschmittel waschen, nicht wringen und liegend trocknen lassen. So bleiben Form und Farben lange schön.',
  },
  {
    question: 'Wer steckt hinter PrinzessinWollhausen?',
    answer:
      'Hinter PrinzessinWollhausen steht Any aus Ahrensburg bei Hamburg. Aus ihrer langjährigen Leidenschaft fürs Stricken und Häkeln ist das kleine Label entstanden. Sie wählt Garne und Muster selbst aus und fertigt jedes Stück persönlich.',
  },
]
