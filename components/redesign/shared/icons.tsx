type IconProps = { className?: string }

export function EtsyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M9.16 3.1v6.36c0 .16.06.24.23.24.62 0 1.86.06 2.46-.02.42-.06.7-.36.86-.9.09-.3.2-.83.24-1.06h.63c-.02.35-.1 2-.1 2.72 0 .7.08 2.06.1 2.36h-.63c-.06-.28-.16-.72-.24-1-.16-.55-.4-.88-.86-.94-.6-.08-1.84-.03-2.46-.03-.17 0-.23.09-.23.24v5.05c0 1.05.44 1.5 1.66 1.5h2.2c1.36 0 2.02-.5 2.9-2.4.22-.5.5-1.13.63-1.44l.6.1c-.08.4-.5 3.1-.6 3.72 0 0-2.6-.06-3.7-.06H8.44c-1.24 0-2.5.06-3.44.06v-.6c1.12-.12 1.53-.2 1.53-1.1 0-.35.02-1.4.02-3.65V8.05c0-2.24-.02-3.3-.02-3.65 0-.9-.4-.98-1.53-1.1v-.6c.94 0 2.2.06 3.44.06h4.36c1.1 0 3.06-.1 3.42-.1.02.5.16 2.7.24 3.34l-.58.08c-.18-.53-.42-1.24-.72-1.63-.44-.58-1.06-.94-2.02-.94H9.94c-.6 0-.78.06-.78.6z" />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function PinterestIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.19-.8 1.2-5.1 1.2-5.1s-.3-.62-.3-1.53c0-1.43.83-2.5 1.86-2.5.88 0 1.3.66 1.3 1.45 0 .88-.56 2.2-.85 3.42-.24 1.02.51 1.85 1.52 1.85 1.82 0 3.22-1.92 3.22-4.7 0-2.46-1.76-4.18-4.28-4.18-2.92 0-4.63 2.19-4.63 4.45 0 .88.34 1.82.76 2.34.08.1.1.19.07.29-.08.32-.26 1.02-.29 1.16-.05.19-.15.23-.35.14-1.3-.6-2.11-2.5-2.11-4.02 0-3.27 2.38-6.28 6.86-6.28 3.6 0 6.4 2.57 6.4 6 0 3.58-2.26 6.46-5.39 6.46-1.05 0-2.04-.55-2.38-1.19l-.65 2.47c-.23.9-.87 2.03-1.3 2.72.98.3 2.02.47 3.1.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  )
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 21s-6.7-4.35-9.5-8.28C.6 9.9 1.4 6.3 4.4 5.2c2-.73 4 .1 5.1 1.7l.5.75.5-.75c1.1-1.6 3.1-2.43 5.1-1.7 3 1.1 3.8 4.7 1.9 7.52C18.7 16.65 12 21 12 21z" />
    </svg>
  )
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.5l2.95 6.27 6.85.84-5.05 4.72 1.3 6.79L12 17.77l-6.05 3.35 1.3-6.79L2.2 9.61l6.85-.84L12 2.5z" />
    </svg>
  )
}

export function YarnIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="11" cy="12" r="8" />
      <path d="M4.5 8.5c3.5 1 7 1 12 0M3.6 13.5c4 1.2 9 1.2 14 0M6 18.5c3 .8 7 .8 10 0M19 12l3 9" />
    </svg>
  )
}
