const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://cmsexpress.onrender.com'

export interface CMSNewsItem {
  id: string
  title: string
  content: string
  summary: string
  author: string
  category: string
  categoryColor: string
  image: string | null
  videoYoutube?: string
  youtubeId?: string
  date: string
  readTime: string
  fechaCreacion: string
  fechaActualizacion: string
  slug: string
  tags: string[]
  relatedNews: string[]
}

export class ApiClient {
  private baseURL: string

  constructor() {
    this.baseURL = API_URL
  }

  async fetchNews(): Promise<CMSNewsItem[]> {
    try {
      const response = await fetch(`${this.baseURL}/api/news`, {
        next: { revalidate: 0 }, // No cache - always fetch fresh data
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        console.warn(`API fetch failed: ${response.status}`)
        return []
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching news from CMS:', error)
      return []
    }
  }
}

export const apiClient = new ApiClient()