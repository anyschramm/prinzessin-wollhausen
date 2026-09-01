import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung · PrinzessinWollhausen',
  description: 'Informationen zum Datenschutz gemäß DSGVO.',
}

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <section>
        <h2 className="font-serif text-xl text-foreground">
          1. Datenschutz auf einen Blick
        </h2>
        <p className="mt-3">
          Der Schutz deiner persönlichen Daten ist mir ein wichtiges Anliegen.
          Diese Website dient der Präsentation handgemachter Strick- und
          Häkelarbeiten. Personenbezogene Daten werden nur erhoben, soweit dies
          technisch notwendig ist. Nachfolgend informiere ich dich über Art,
          Umfang und Zweck der Verarbeitung personenbezogener Daten.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-foreground">
          2. Verantwortliche Stelle
        </h2>
        <p className="mt-3">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
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
          3. Hosting
        </h2>
        <p className="mt-3">
          Diese Website wird bei einem externen Dienstleister (Hoster)
          gehostet. Beim Aufruf der Website werden automatisch technische
          Informationen (sogenannte Server-Logfiles) erfasst, z. B. deine
          IP-Adresse, Browsertyp, Betriebssystem sowie Datum und Uhrzeit des
          Zugriffs. Diese Daten dienen der Sicherstellung eines
          störungsfreien Betriebs und der Sicherheit der Website. Die
          Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-foreground">
          4. Deine Rechte
        </h2>
        <p className="mt-3">
          Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung
          oder Löschung dieser Daten. Zudem steht dir ein Beschwerderecht bei
          der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen
          zum Thema Datenschutz kannst du dich jederzeit an mich wenden.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-foreground">
          5. Analyse-Tools
        </h2>
        <p className="mt-3">
          Diese Website nutzt Vercel Analytics zur anonymisierten Auswertung
          der Zugriffe. Dabei werden keine Cookies gesetzt und es findet keine
          Speicherung personenbezogener Daten einzelner Besucher statt. Die
          Auswertung dient ausschließlich der Verbesserung des Angebots.
        </p>
      </section>
    </LegalPage>
  )
}
