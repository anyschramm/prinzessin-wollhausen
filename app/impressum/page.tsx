import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Impressum · PrinzessinWollhausen',
  description: 'Impressum und Angaben gemäß § 5 DDG.',
}

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <section>
        <h2 className="font-serif text-xl text-foreground">
          Angaben gemäß § 5 DDG
        </h2>
        <p className="mt-3">
          Annette Schramm
          <br />
          Pappelweg 48b
          <br />
          22949 Ammersbek
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-foreground">
          Kontakt
        </h2>
        <p className="mt-3">
          E-Mail:{' '}
          <a
            href="mailto:PrinzessinWollhausen@gmail.com"
            className="underline transition-colors hover:text-primary"
          >
            PrinzessinWollhausen@gmail.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-foreground">
          Umsatzsteuer
        </h2>
        <p className="mt-3">
          Umsatzsteuer-Identifikationsnummer:
          <br />
          30/181/05582
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-foreground">
          Verantwortlich für den Inhalt
        </h2>
        <p className="mt-3">
          Annette Schramm
          <br />
          Pappelweg 48b
          <br />
          22949 Ammersbek
        </p>
      </section>
    </LegalPage>
  )
}
