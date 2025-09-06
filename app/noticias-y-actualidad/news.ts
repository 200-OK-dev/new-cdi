import { apiClient, CMSNewsItem } from '@/lib/api-client'

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

export const newsData: NewsItem[] = [],
    relatedNews: ["2"],
  },
  {
    id: "2",
    slug: "lanzamiento-fondo-cdi-te-impulsa-acti-huechuraba",
    title: "Se lanza el Fondo Concursable CDI Te Impulsa en alianza con ACTI y la Municipalidad de Huechuraba",
    summary: "Más de 30 emprendedores egresados del curso Digitalízate podrán acceder a apoyo económico, acompañamiento y herramientas prácticas para fortalecer sus negocios a través de este nuevo fondo concursable.",
    content: `
<div class="youtube-video" data-video-id="NdxnXFz52FQ" data-video-title="Lanzamiento Fondo CDI Te Impulsa"></div>

<p>El pasado jueves 21 de agosto, en el restaurante Rustiko de Huechuraba, se realizó el lanzamiento del <strong>Fondo Concursable CDI Te Impulsa</strong>, en colaboración con la <strong>Asociación Chilena de Empresas de Tecnologías de Información (ACTI)</strong> y la <strong>Municipalidad de Huechuraba</strong>.</p>

<p>Este fondo permitirá que más de 30 emprendedores y emprendedoras egresados del curso <strong>Digitalízate: Redes Sociales para Emprender</strong> puedan acceder a apoyo económico, acompañamiento y herramientas prácticas para fortalecer sus negocios y dar un paso más en el desarrollo de sus proyectos.</p>

<h3>Una alianza público–privada que potencia el emprendimiento local</h3>
<p>El evento contó con la presencia de autoridades municipales como los concejales <strong>Jorge Arancibia, Bárbara Plaza, Fresia Hernández, Genaro Román, Javiera Jiménez y María Kaelin</strong>, junto a <strong>Isabel Labbé</strong>, Encargada del Departamento Laboral, además de <strong>Valeska Tapia y María José Pérez</strong>. Por parte de ACTI asistió <strong>Diego Cooper</strong>, Líder de Alianzas, reforzando el compromiso del sector privado con la promoción del emprendimiento y la capacitación digital.</p>

<p>La jornada también incluyó una masterclass a cargo de <strong>Nicolás Jara (@jarascript)</strong>, cofundador y CEO de AlFondo, quien guió a los participantes en la construcción de modelos de negocio. El taller se desarrolló en un ambiente participativo, donde los emprendedores compartieron ideas y proyectaron nuevas oportunidades para sus iniciativas.</p>

<h3>¿Qué es el Fondo CDI Te Impulsa?</h3>
<p>El <strong>Fondo CDI Te Impulsa</strong> es una iniciativa de CDI Chile que busca apoyar a emprendedores que han sido parte de sus programas de formación en CDI Chile. A través de este fondo, se entrega <strong>financiamiento directo, herramientas de gestión y acompañamiento</strong>, con el objetivo de que los participantes puedan aplicar lo aprendido en sus cursos y potenciar el crecimiento de sus negocios con propósito.</p>

<p>Desde su creación en 2020, el Fondo ha beneficiado a cientos de emprendedores en distintas comunas del país, consolidándose como una plataforma de articulación entre el sector público, privado y la sociedad civil. Esta alianza en Huechuraba refuerza el compromiso de trabajar colaborativamente para abrir nuevas oportunidades a emprendedores locales y seguir impulsando el desarrollo económico con impacto social.</p>
    `,
    image: "/noticias/noticia2.webp",
    category: "Financiamiento",
    categoryColor: "bg-green-500",
    date: "2025-08-21",
    author: "CDI Chile",
    readTime: "3 min",
    tags: ["fondo concursable", "emprendimiento", "ACTI", "huechuraba", "financiamiento", "alianza público-privada"],
    relatedNews: ["1"],
  },
]

export async function getRelatedNews(newsId: string, limit = 3): Promise<NewsItem[]> {
  const currentNews = await getNewsById(newsId)
  if (!currentNews) return []

  const allNews = await getAllNews()
  
  // If current news has related news specified, use those
  if (currentNews.relatedNews && currentNews.relatedNews.length > 0) {
    return currentNews.relatedNews
      .map((id) => allNews.find(news => news.id === id))
      .filter(Boolean)
      .slice(0, limit) as NewsItem[]
  }
  
  // Otherwise, return news from same category or similar tags
  return allNews
    .filter(news => 
      news.id !== newsId && 
      (news.category === currentNews.category || 
       news.tags.some(tag => currentNews.tags.includes(tag)))
    )
    .slice(0, limit)
}

// Transform CMS news to NewsItem format
function transformCMSNews(cmsNews: CMSNewsItem): NewsItem {
  return {
    id: `cms-${cmsNews.id}`,
    slug: cmsNews.slug || 'sin-slug',
    title: cmsNews.title || 'Sin título',
    summary: cmsNews.summary || 'Sin resumen',
    content: cmsNews.content || 'Sin contenido',
    image: cmsNews.image || '/placeholder.svg',
    category: cmsNews.category || 'General',
    categoryColor: getCategoryColor(cmsNews.category || 'General'),
    date: cmsNews.fechaCreacion ? cmsNews.fechaCreacion.split('T')[0] : new Date().toISOString().split('T')[0],
    author: cmsNews.author || 'Autor desconocido',
    readTime: calculateReadTime(cmsNews.content || ''),
    tags: Array.isArray(cmsNews.tags) ? cmsNews.tags : [],
    relatedNews: [],
  }
}

// Get category color based on category name
function getCategoryColor(category: string): string {
  const colors: { [key: string]: string } = {
    'Emprendimiento': 'bg-cyan-500',
    'Financiamiento': 'bg-green-500',
    'Educación': 'bg-blue-500',
    'Tecnología': 'bg-purple-500',
    'Comunidad': 'bg-orange-500',
  }
  return colors[category] || 'bg-gray-500'
}

// Calculate reading time based on content length
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(' ').length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min`
}

// Get static news immediately
export function getStaticNews(): NewsItem[] {
  return newsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Fetch dynamic news only
export async function getDynamicNews(): Promise<NewsItem[]> {
  try {
    const cmsNews = await apiClient.fetchNews()
    return cmsNews.map(transformCMSNews)
  } catch (error) {
    console.error('Error fetching dynamic news:', error)
    return []
  }
}

// Fetch and combine all news (static + dynamic)
export async function getAllNews(): Promise<NewsItem[]> {
  try {
    // Fetch dynamic news from CMS
    const cmsNews = await apiClient.fetchNews()
    const transformedCMSNews = cmsNews.map(transformCMSNews)
    
    // Combine static and dynamic news
    const allNews = [...transformedCMSNews, ...newsData]
    
    // Sort by date (newest first)
    return allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error combining news:', error)
    // Fallback to static news only
    return newsData
  }
}

export async function getPaginatedNews(page = 1, limit = 6) {
  const allNews = await getAllNews()
  
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedData = allNews.slice(startIndex, endIndex)

  return {
    news: paginatedData,
    totalPages: Math.ceil(allNews.length / limit),
    currentPage: page,
    hasNextPage: endIndex < allNews.length,
    hasPrevPage: page > 1,
  }
}

export async function getNewsById(id: string): Promise<NewsItem | undefined> {
  const allNews = await getAllNews()
  return allNews.find((news) => news.id === id)
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
  const allNews = await getAllNews()
  return allNews.find((news) => news.slug === slug)
}
