function Heart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 21s-6.7-4.35-9.5-8.28C.6 9.9 1.4 6.3 4.4 5.2c2-.73 4 .1 5.1 1.7l.5.75.5-.75c1.1-1.6 3.1-2.43 5.1-1.7 3 1.1 3.8 4.7 1.9 7.52C18.7 16.65 12 21 12 21z" />
    </svg>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mx-auto flex h-28 w-28 flex-col items-center justify-center rounded-full border border-primary/50 sm:h-32 sm:w-32">
        <Heart className="mb-1 h-4 w-4 text-primary" />
        <span className="font-serif text-lg leading-none text-foreground sm:text-xl">
          Prinzessin
        </span>
        <span className="font-serif text-lg leading-none text-foreground sm:text-xl">
          Wollhausen
        </span>
        <span className="mt-2 text-[0.6rem] uppercase tracking-[0.25em] text-primary/80">
          Handmade with love
        </span>
      </div>
    </div>
  )
}

export { Heart }
