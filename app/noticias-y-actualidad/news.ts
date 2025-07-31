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
    id: "1",
    slug: "emprende-conectada-formacion-digital-huechuraba",
    title: "Lanzamos 'Emprende Conectad@': formación digital para mujeres líderes de Huechuraba",
    summary: "Nueva iniciativa que busca potenciar los negocios de mujeres mayores de 40 años, entregando herramientas digitales, estratégicas y de liderazgo para avanzar hacia la autonomía económica.",
    content: `
      <h2>Transformación digital para emprendedoras</h2>
      <p>El 30 de julio se dio inicio al programa <strong>Emprende Conectad@</strong>, una iniciativa enmarcada en el programa Conectadas de la Municipalidad de Huechuraba y desarrollada en colaboración con Claro Chile, Travesía100 y CDI Chile. Este proyecto busca potenciar los negocios de mujeres mayores de 40 años, entregando herramientas digitales, estratégicas y de liderazgo para avanzar hacia la autonomía económica.</p>
      
      <p>La sesión de lanzamiento, realizada de forma online, convocó a más de 130 emprendedoras, junto a autoridades municipales, representantes de Claro y equipos de Travesía100 y CDI Chile.</p>
      
      <h3>Un compromiso municipal con el emprendimiento femenino</h3>
      <blockquote>"Esto no es solo una capacitación o un taller. Es una herramienta concreta para fortalecer negocios y generar liderazgo. Mujeres valientes, perseverantes y creativas, que día a día empujan sus sueños."</blockquote>
      <p>Estas fueron las palabras del alcalde Maximiliano Luksic, destacando el compromiso del municipio con el programa Conectadas.</p>
      
      <h3>80 horas de formación integral</h3>
      <p>Durante las 80 horas de formación, las participantes aprenderán a construir una marca con propósito, posicionarse en redes sociales, utilizar inteligencia artificial, crear contenido digital, preparar un pitch y formalizar sus negocios, entre otros temas clave para su crecimiento.</p>
      
      <h3>Alianza estratégica para el cambio</h3>
      <p>Christopher Bitting, jefe de sostenibilidad de Claro Chile, expresó: <em>"Para Claro Chile, es un orgullo ser parte de este programa. Más que un curso, es un proceso de transformación personal y profesional. Queremos acompañarlas más allá de la formación, escuchar sus historias y apoyar sus avances."</em></p>
      
      <p>Olga Urra, directora ejecutiva de Travesía100, destacó la importancia de la colaboración: <em>"Esta es una alianza virtuosa. Desde Travesía100 acompañamos a personas de 50 y más en procesos de transformación, y junto a CDI hemos unido saberes para apoyar con sentido y propósito a estas emprendedoras."</em></p>
      
      <h3>Historias que inspiran</h3>
      <p>Uno de los momentos más emotivos del lanzamiento lo protagonizó Marisol Panat Banda, una de las participantes del programa, quien desde su puesto de venta frente a un banco compartió:</p>
      
      <blockquote>"Espero conectarme, de verdad. No tengo otro ingreso que no sea mi emprendimiento, y mi plan es tener un huerto en casa. Me comprometo a terminar el curso, a postular a proyectos y formalizarme, porque yo quiero crecer y ser autónoma económicamente. Mi compromiso no es con Claro ni con el municipio. Es conmigo misma, porque yo soy una mujer que sí se la puede."</blockquote>
      
      <h3>Oportunidades de financiamiento</h3>
      <p>Además de la formación, el programa incluye la posibilidad de postular al fondo concursable CDI Te Impulsa, que entrega apoyo económico y estratégico a los emprendimientos más destacados y comprometidos con la aplicación de lo aprendido.</p>
      
      <p><strong>Emprende Conectad@</strong> es un ejemplo concreto de cómo la colaboración entre lo público, lo privado y la sociedad civil puede abrir caminos de transformación real para mujeres que hoy están haciendo crecer sus negocios desde la experiencia, el talento y la determinación.</p>
    `,
    image: "/noticias/noticia1.webp",
    category: "Emprendimiento",
    categoryColor: "bg-purple-500",
    date: "2025-07-30",
    author: "Municipalidad de Huechuraba",
    readTime: "4 min",
    tags: ["emprendimiento", "mujeres", "digital", "huechuraba", "formación"],
    relatedNews: ["2", "3"],
  }
 
]

export function getNewsById(id: string): NewsItem | undefined {
  return newsData.find((news) => news.id === id)
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find((news) => news.slug === slug)
}

export function getRelatedNews(newsId: string, limit = 3): NewsItem[] {
  const currentNews = getNewsById(newsId)
  if (!currentNews || !currentNews.relatedNews) return []

  return currentNews.relatedNews
    .map((id) => getNewsById(id))
    .filter(Boolean)
    .slice(0, limit) as NewsItem[]
}

export function getPaginatedNews(page = 1, limit = 6) {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedData = newsData.slice(startIndex, endIndex)

  return {
    news: paginatedData,
    totalPages: Math.ceil(newsData.length / limit),
    currentPage: page,
    hasNextPage: endIndex < newsData.length,
    hasPrevPage: page > 1,
  }
}
