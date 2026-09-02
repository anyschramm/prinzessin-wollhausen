import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Die Redesign-Vorschauen unter /redesign sind bewusst nicht enthalten
// (noindex), damit kein Duplicate Content zur Startseite entsteht.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/impressum`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/datenschutz`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
