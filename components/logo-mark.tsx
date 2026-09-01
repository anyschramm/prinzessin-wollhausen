import Image from 'next/image'

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
      <Image
        src="/images/logo.jpeg"
        alt="PrinzessinWollhausen – Handmade with love"
        width={320}
        height={300}
        priority
        className="mx-auto h-36 w-auto mix-blend-multiply sm:h-44"
      />
    </div>
  )
}

export { Heart }
