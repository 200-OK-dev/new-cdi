const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://cmsexpress.onrender.com'

export interface CMSNewsItem {
  id: string
  titulo: string
  contenido: string
  resumen: string
  autor: string
  categoria: string
  imagen: string
  videoUrl?: string
  fechaCreacion: string
  fechaModificacion: string
  slug: string
  tags: string[]
}

export class ApiClient {
  private baseURL: string

  constructor() {
    this.baseURL = API_URL
  }

  async fetchNews(): Promise<CMSNewsItem[]> {
    try {
      const response = await fetch(`${this.baseURL}/api/news`, {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
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