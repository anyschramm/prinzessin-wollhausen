/**
 * Weicher Wellen-Übergang zwischen zwei Abschnitten.
 * `fill` ist die Farbe des *folgenden* Abschnitts.
 */
export function WaveB({ className = '', fill = 'fill-background', flip = false }: { className?: string; fill?: string; flip?: boolean }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block h-10 w-full sm:h-16 ${fill} ${flip ? 'rotate-180' : ''}`}
      >
        <path d="M0,48 C240,88 480,8 720,40 C960,72 1200,24 1440,52 L1440,80 L0,80 Z" />
      </svg>
    </div>
  )
}
