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

export const newsData: NewsItem[] = [
  {
    "id": "5c337782-c1a2-4406-8a31-400edfcf4c22",
    "slug": "mujeres-que-florecen",
    "title": "Mujeres que florecen",
    "summary": "Así fue la ceremonia de cierre del curso de formación para emprendedoras impulsado por Euromonitor y CDI Chile.",
    "content": "<div class=\"youtube-video\" data-video-id=\"1QECMFIARlw\" data-video-title=\"Video de YouTube\"></div>\n\n<p style=\"text-align: left;\">Este Martes 5 de Agosto se realizó la ceremonia de cierre del curso Gestión Estratégica para Redes Sociales, para emprendedoras, una iniciativa impulsada por <strong>Euromonitor International</strong> en alianza con <strong>CDI Chile</strong>, que tuvo como objetivo fortalecer las habilidades digitales y el desarrollo de negocios liderados por mujeres.</p><p style=\"text-align: left;\">El encuentro comenzó con un saludo inicial y un emotivo video que recopiló momentos vividos durante el curso, destacando la transformación personal y profesional de las participantes.</p><p style=\"text-align: left;\">Durante la jornada, <strong>Eugenio Vergara</strong>, director ejecutivo de CDI Chile, destacó el compromiso de ambas organizaciones con la generación de oportunidades reales para mujeres emprendedoras, especialmente aquellas que enfrentan barreras de acceso a la tecnología y a espacios de formación.</p><p style=\"text-align: left;\">La facilitadora del curso, <strong>Kervy Escobar</strong>, también entregó palabras de cierre reconociendo el esfuerzo, la entrega y la comunidad que se generó entre las participantes:</p><p style=\"text-align: left;\"><em>“Este grupo fue más que una clase. Fue un jardín que floreció con fuerza, cariño y propósito”.</em></p><h3 style=\"text-align: left;\"><strong>Testimonios que inspiran</strong></h3><p style=\"text-align: left;\">Uno de los momentos más emocionantes de la ceremonia fue el testimonio de <strong>Valeria Velmar</strong>, emprendedora participante del taller:</p><p style=\"text-align: left;\"><em>“Llegué al curso con miedo, con bloqueo total. Estuve a punto de abandonar, pero gracias a la profe Kervy y al apoyo de mis compañeras, hoy me siento empoderada, con más herramientas y un propósito claro. Estoy en mi segunda etapa de vida, y este espacio me ayudó a reconectar con mi ikigai. Fue solo un mes, pero crecí muchísimo”.</em></p><p style=\"text-align: left;\">Desde Euromonitor, <strong>Ximena Contardo</strong>, Office Manager de la empresa, compartió unas sentidas palabras en representación del equipo:</p><p style=\"text-align: left;\"><em>“Esta es la primera vez que trabajamos con CDI, y sinceramente ha sido una experiencia preciosa. Nos emociona ver lo que han logrado en tan poco tiempo. En Euromonitor creemos profundamente en el poder de la educación y en compartir conocimientos para impulsar a otras personas. Gracias por permitirnos ser parte de este proceso.”</em></p><h3 style=\"text-align: left;\"><strong>Un paso más hacia la autonomía</strong></h3><p style=\"text-align: left;\">La ceremonia concluyó con la presentación del fondo “<strong>CDI te impulsa</strong>”, una oportunidad de apoyo directo para las participantes que deseen seguir fortaleciendo sus proyectos.</p>",
    "image": "/noticias/mujeres-que-florecen.webp",
    "category": "Emprendimiento",
    "categoryColor": "bg-cyan-500",
    "date": "2025-09-07",
    "author": "CDI Chile",
    "readTime": "2 min",
    "tags": [
      "mujeres"
    ],
    "relatedNews": []
  },
  {
    "id": "1",
    "slug": "emprende-conectada-formacion-digital-huechuraba",
    "title": "Lanzamos 'Emprende Conectad@': formación digital para mujeres líderes de Huechuraba",
    "summary": "Nueva iniciativa que busca potenciar los negocios de mujeres mayores de 40 años, entregando herramientas digitales, estratégicas y de liderazgo para avanzar hacia la autonomía económica.",
    "content": "\n    <h2>Transformación digital para emprendedoras</h2>\n<p>El 30 de julio se dio inicio al programa <strong>Emprende Conectad@</strong>, una iniciativa enmarcada en el programa Conectadas de la Municipalidad de Huechuraba y desarrollada en colaboración con <strong>Claro Chile, Travesía100 y CDI Chile.</strong> Este proyecto busca potenciar los negocios de mujeres mayores de 40 años, entregando <strong>herramientas digitales, estratégicas y de liderazgo para avanzar hacia la autonomía económica.</strong></p>\n\n<p>La sesión de lanzamiento, realizada de forma online, convocó a más de 130 emprendedoras, junto a autoridades municipales, representantes de Claro y equipos de Travesía100 y CDI Chile.</p>\n\n<h3>Un compromiso municipal con el emprendimiento femenino</h3>\n<blockquote>\"Esto no es solo una capacitación o un taller. Es una herramienta concreta para fortalecer negocios y generar liderazgo. Mujeres valientes, perseverantes y creativas, que día a día empujan sus sueños\"</blockquote>\n<p>expresó el alcalde Maximiliano Luksic, destacando el compromiso del municipio con el programa Conectadas.</p>\n\n<h3>80 horas de formación integral</h3>\n<p>Durante las 80 horas de formación, las participantes aprenderán a <strong>construir una marca con propósito, posicionarse en redes sociales, utilizar inteligencia artificial, crear contenido digital, preparar un pitch y formalizar sus negocios,</strong> entre otros temas clave para su crecimiento.</p>\n\n<h3>Alianza estratégica para el cambio</h3>\n<p><em>\"Para Claro Chile, es un orgullo ser parte de este programa. Más que un curso, es un proceso de transformación personal y profesional. Queremos acompañarlas más allá de la formación, escuchar sus historias y apoyar sus avances\"</em>, señaló Christopher Bitting, jefe de sostenibilidad de Claro Chile.</p>\n\n<p><em>\"Esta es una alianza virtuosa. Desde Travesía100 acompañamos a personas de 50 y más en procesos de transformación, y junto a CDI hemos unido saberes para apoyar con sentido y propósito a estas emprendedoras\"</em>, afirmó Olga Urra, directora ejecutiva de Travesía100, destacando que serán personas mayores quienes también acompañarán este proceso formativo.</p>\n\n<h3>Historias que inspiran</h3>\n<p>Uno de los momentos más emotivos del lanzamiento lo protagonizó Marisol Panat Banda, una de las participantes del programa:</p>\n\n<blockquote>\"Espero conectarme, de verdad. No tengo otro ingreso que no sea mi emprendimiento, y mi plan es tener un huerto en casa. Me comprometo a terminar el curso, a postular a proyectos y formalizarme, porque yo quiero crecer y ser autónoma económicamente\"</blockquote>\n\n<p>compartió Marisol Panat-Banda, una de las participantes, desde su puesto de venta frente a un banco, mientras asistía a la sesión online. <em>\"Mi compromiso no es con Claro ni con el municipio. Es conmigo misma, porque yo soy una mujer que sí se la puede\".</em></p>\n\n<h3>Oportunidades de financiamiento</h3>\n<p>Además de la formación, el programa incluye la posibilidad de postular al fondo concursable CDI Te Impulsa, que entrega apoyo económico y estratégico a los emprendimientos más destacados y comprometidos con la aplicación de lo aprendido.</p>\n\n<p>Emprende Conectad@ es un ejemplo concreto de cómo la colaboración entre lo público, lo privado y la sociedad civil puede abrir caminos de transformación real para mujeres que hoy están haciendo crecer sus negocios desde la experiencia, el talento y la determinación.</p>\n    ",
    "image": "/noticias/noticia1.webp",
    "category": "Emprendimiento",
    "categoryColor": "bg-cyan-500",
    "date": "2025-07-30",
    "author": "Municipalidad de Huechuraba",
    "readTime": "4 min",
    "tags": [
      "emprendimiento",
      "mujeres",
      "digital",
      "huechuraba",
      "formación"
    ],
    "relatedNews": [
      "2"
    ]
  },
  {
    "id": "2",
    "slug": "lanzamiento-fondo-cdi-te-impulsa-acti-huechuraba",
    "title": "Se lanza el Fondo Concursable CDI Te Impulsa en alianza con ACTI y la Municipalidad de Huechuraba",
    "summary": "Más de 30 emprendedores egresados del curso Digitalízate podrán acceder a apoyo económico, acompañamiento y herramientas prácticas para fortalecer sus negocios a través de este nuevo fondo concursable.",
    "content": "\n<div class=\"youtube-video\" data-video-id=\"NdxnXFz52FQ\" data-video-title=\"Lanzamiento Fondo CDI Te Impulsa\"></div>\n\n<p>El pasado jueves 21 de agosto, en el restaurante Rustiko de Huechuraba, se realizó el lanzamiento del <strong>Fondo Concursable CDI Te Impulsa</strong>, en colaboración con la <strong>Asociación Chilena de Empresas de Tecnologías de Información (ACTI)</strong> y la <strong>Municipalidad de Huechuraba</strong>.</p>\n\n<p>Este fondo permitirá que más de 30 emprendedores y emprendedoras egresados del curso <strong>Digitalízate: Redes Sociales para Emprender</strong> puedan acceder a apoyo económico, acompañamiento y herramientas prácticas para fortalecer sus negocios y dar un paso más en el desarrollo de sus proyectos.</p>\n\n<h3>Una alianza público–privada que potencia el emprendimiento local</h3>\n<p>El evento contó con la presencia de autoridades municipales como los concejales <strong>Jorge Arancibia, Bárbara Plaza, Fresia Hernández, Genaro Román, Javiera Jiménez y María Kaelin</strong>, junto a <strong>Isabel Labbé</strong>, Encargada del Departamento Laboral, además de <strong>Valeska Tapia y María José Pérez</strong>. Por parte de ACTI asistió <strong>Diego Cooper</strong>, Líder de Alianzas, reforzando el compromiso del sector privado con la promoción del emprendimiento y la capacitación digital.</p>\n\n<p>La jornada también incluyó una masterclass a cargo de <strong>Nicolás Jara (@jarascript)</strong>, cofundador y CEO de AlFondo, quien guió a los participantes en la construcción de modelos de negocio. El taller se desarrolló en un ambiente participativo, donde los emprendedores compartieron ideas y proyectaron nuevas oportunidades para sus iniciativas.</p>\n\n<h3>¿Qué es el Fondo CDI Te Impulsa?</h3>\n<p>El <strong>Fondo CDI Te Impulsa</strong> es una iniciativa de CDI Chile que busca apoyar a emprendedores que han sido parte de sus programas de formación en CDI Chile. A través de este fondo, se entrega <strong>financiamiento directo, herramientas de gestión y acompañamiento</strong>, con el objetivo de que los participantes puedan aplicar lo aprendido en sus cursos y potenciar el crecimiento de sus negocios con propósito.</p>\n\n<p>Desde su creación en 2020, el Fondo ha beneficiado a cientos de emprendedores en distintas comunas del país, consolidándose como una plataforma de articulación entre el sector público, privado y la sociedad civil. Esta alianza en Huechuraba refuerza el compromiso de trabajar colaborativamente para abrir nuevas oportunidades a emprendedores locales y seguir impulsando el desarrollo económico con impacto social.</p>\n    ",
    "image": "/noticias/noticia2.webp",
    "category": "Financiamiento",
    "categoryColor": "bg-green-500",
    "date": "2025-08-21",
    "author": "CDI Chile",
    "readTime": "3 min",
    "tags": [
      "fondo concursable",
      "emprendimiento",
      "ACTI",
      "huechuraba",
      "financiamiento",
      "alianza público-privada"
    ],
    "relatedNews": [
      "1"
    ]
  }
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
