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