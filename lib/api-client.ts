const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://cmsexpress.onrender.com'

export interface CMSNewsItem {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  category: string
  image: string | null
  videoUrl?: string
  slug: string
  tags: string[]
  featured?: boolean
  publishedAt: string
  createdAt: string
  updatedAt: string
  metadata: {
    readTime: number
    wordCount: number
    views: number
  }
}

export class ApiClient {
  private baseURL: string

  constructor() {
    this.baseURL = API_URL
  }

  async fetchNews(useCache: boolean = true, featured?: boolean): Promise<CMSNewsItem[]> {
    try {
      const cacheConfig = useCache
        ? { next: { revalidate: 180 } } // 3 minutos de cache
        : { next: { revalidate: 0 } }  // Sin cache

      const url = featured !== undefined
        ? `${this.baseURL}/api/news?featured=${featured}`
        : `${this.baseURL}/api/news`

      const response = await fetch(url, {
        ...cacheConfig,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        console.warn(`API fetch failed: ${response.status}`)
        return []
      }

      const data = await response.json()
      console.log(`📡 CMS fetch completado: ${data.length} noticias${featured ? ' destacadas' : ''}`)
      return data
    } catch (error) {
      console.error('Error fetching news from CMS:', error)
      return []
    }
  }

  async fetchFeaturedNews(useCache: boolean = true): Promise<CMSNewsItem[]> {
    return this.fetchNews(useCache, true)
  }
}

export const apiClient = new ApiClient()