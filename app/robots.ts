import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Die Redesign-Vorschauen unter /redesign tragen ein noindex-Meta-Tag und
// verweisen kanonisch auf "/". Ein Crawl-Verbot ist dafür nicht nötig.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
