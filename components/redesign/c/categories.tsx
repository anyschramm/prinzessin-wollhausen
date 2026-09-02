import Image from 'next/image'
import { products, site } from '@/lib/site'
import { productImageStyle } from '@/components/redesign/shared/product-image'

export function CategoriesC() {
  return (
    <section id="kategorien" className="border-y border-border bg-card px-4 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Das Sortiment</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Was suchst du heute?
            </h2>
          </div>
          <a
            href={site.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1 text-base font-bold text-primary hover:underline"
          >
            Alles im Etsy-Shop ansehen <span aria-hidden="true">→</span>
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <li key={product.slug}>
              <a
                href={site.etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    style={productImageStyle(product)}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between gap-2 px-4 py-3">
                  <h3 className="text-base font-bold text-foreground">{product.name}</h3>
                  <span aria-hidden="true" className="text-etsy transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
