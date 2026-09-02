import { site } from '@/lib/site'
import { EtsyIcon } from '@/components/redesign/shared/icons'

/** Feste Kaufleiste am unteren Bildschirmrand – nur auf Smartphones. */
export function MobileCtaB() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur sm:hidden">
      <a
        href={site.etsyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary text-base font-bold text-primary-foreground shadow-soft"
      >
        <EtsyIcon className="h-5 w-5" />
        Zum Etsy-Shop – Unikate entdecken
      </a>
    </div>
  )
}
