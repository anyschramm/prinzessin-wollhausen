import type { CSSProperties } from 'react'
import type { Product } from '@/lib/site'

/**
 * Inline-Styles für Produktbilder: Position und leichter Zoom, damit
 * eingebrannte Bildtexte (z. B. Social-Media-Wasserzeichen) nicht sichtbar sind.
 * Der Zoom nutzt `transform`, Tailwinds `scale-*`-Hover-Effekte (CSS `scale`)
 * bleiben davon unberührt.
 */
export function productImageStyle(
  product: Pick<Product, 'imagePosition' | 'imageScale'>,
): CSSProperties | undefined {
  const style: CSSProperties = {}
  if (product.imagePosition) style.objectPosition = product.imagePosition
  if (product.imageScale) style.transform = `scale(${product.imageScale})`
  return Object.keys(style).length ? style : undefined
}
