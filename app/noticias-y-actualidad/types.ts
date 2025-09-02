export interface NewsItem {
  id: string
  slug: string
  title: string
  summary: string
  content: string
  image: string
  category: string
  categoryColor: string
  date: string
  author: string
  readTime: string
  tags: string[]
  relatedNews?: string[]
}