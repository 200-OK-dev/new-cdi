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
    slug: "nueva-campana-educacion-rural",
    title: "Nueva Campaña de Educación en Zonas Rurales",
    summary:
      "Lanzamos una iniciativa para llevar educación de calidad a comunidades rurales remotas, beneficiando a más de 500 niños.",
    content: `
      <h2>Un Compromiso con la Educación Rural</h2>
      <p>Nuestra organización ha lanzado una ambiciosa campaña para transformar la educación en zonas rurales remotas. Esta iniciativa representa un paso significativo hacia la equidad educativa en nuestro país.</p>
      
      <h3>Objetivos de la Campaña</h3>
      <p>La campaña tiene como objetivo principal garantizar que todos los niños, independientemente de su ubicación geográfica, tengan acceso a una educación de calidad. Trabajaremos directamente con 15 comunidades rurales durante los próximos dos años.</p>
      
      <blockquote>"La educación es el arma más poderosa que puedes usar para cambiar el mundo. Estamos comprometidos a llevar esta herramienta a cada rincón de nuestro territorio."</blockquote>
      
      <h3>Impacto Esperado</h3>
      <p>Esperamos beneficiar directamente a más de 500 niños y niñas, proporcionándoles materiales educativos, capacitación docente y infraestructura básica necesaria para el aprendizaje.</p>
      
      <p>La implementación incluye la construcción de aulas temporales, distribución de tablets educativas y programas de formación para maestros locales.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    category: "Educación",
    categoryColor: "bg-blue-500",
    date: "2024-01-15",
    author: "María González",
    readTime: "5 min",
    tags: ["educación", "rural", "campaña"],
    relatedNews: ["2", "3", "4"],
  },
  {
    id: "2",
    slug: "voluntarios-construccion-viviendas",
    title: "100 Voluntarios Construyen Viviendas Dignas",
    summary:
      "Un grupo de voluntarios dedicó su fin de semana a construir casas para familias en situación de vulnerabilidad.",
    content: `
      <h2>Solidaridad en Acción</h2>
      <p>Durante el pasado fin de semana, más de 100 voluntarios se unieron para construir viviendas dignas para familias que lo necesitan. Esta jornada de trabajo comunitario demuestra el poder de la solidaridad.</p>
      
      <h3>Familias Beneficiadas</h3>
      <p>Cinco familias recibieron nuevas viviendas completamente equipadas con servicios básicos. Cada casa fue diseñada pensando en las necesidades específicas de cada familia.</p>
      
      <p>Los voluntarios trabajaron desde el amanecer hasta el atardecer, demostrando un compromiso excepcional con la causa social.</p>
      
      <h3>Próximas Jornadas</h3>
      <p>Debido al éxito de esta iniciativa, planeamos organizar jornadas similares cada mes, con el objetivo de construir 50 viviendas durante este año.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    category: "Vivienda",
    categoryColor: "bg-green-500",
    date: "2024-01-10",
    author: "Carlos Rodríguez",
    readTime: "4 min",
    tags: ["voluntarios", "vivienda", "construcción"],
    relatedNews: ["1", "3", "5"],
  },
  {
    id: "3",
    slug: "programa-alimentacion-escolar",
    title: "Programa de Alimentación Escolar Alcanza 1000 Niños",
    summary:
      "Nuestro programa de alimentación escolar se expande y ahora beneficia a mil niños en 20 escuelas diferentes.",
    content: `
      <h2>Nutrición para el Aprendizaje</h2>
      <p>El programa de alimentación escolar ha alcanzado un hito importante: ahora beneficia a 1000 niños en 20 escuelas de diferentes regiones del país.</p>
      
      <h3>Menús Balanceados</h3>
      <p>Cada comida está cuidadosamente planificada por nutricionistas para garantizar que los niños reciban todos los nutrientes necesarios para su desarrollo y aprendizaje.</p>
      
      <blockquote>"Un niño bien alimentado es un niño que puede concentrarse en aprender y soñar con un futuro mejor."</blockquote>
      
      <h3>Impacto en el Rendimiento</h3>
      <p>Los maestros reportan mejoras significativas en la concentración y el rendimiento académico de los estudiantes desde la implementación del programa.</p>
      
      <p>Además, hemos observado una reducción del 30% en el ausentismo escolar en las escuelas participantes.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    category: "Alimentación",
    categoryColor: "bg-orange-500",
    date: "2024-01-08",
    author: "Ana Martínez",
    readTime: "3 min",
    tags: ["alimentación", "escolar", "nutrición"],
    relatedNews: ["1", "2", "4"],
  },
  {
    id: "4",
    slug: "capacitacion-emprendimiento-mujeres",
    title: "Capacitación en Emprendimiento para Mujeres Rurales",
    summary: "50 mujeres de comunidades rurales reciben formación en emprendimiento y desarrollo de microempresas.",
    content: `
      <h2>Empoderamiento Económico Femenino</h2>
      <p>Cincuenta mujeres de comunidades rurales han completado exitosamente nuestro programa de capacitación en emprendimiento, adquiriendo las herramientas necesarias para crear sus propias microempresas.</p>
      
      <h3>Módulos de Formación</h3>
      <p>El programa incluyó módulos sobre planificación de negocios, marketing digital, gestión financiera y desarrollo de productos. Cada participante desarrolló un plan de negocio personalizado.</p>
      
      <h3>Historias de Éxito</h3>
      <p>Ya tenemos las primeras historias de éxito: tres participantes han lanzado sus negocios de productos artesanales y dos han iniciado servicios de catering local.</p>
      
      <blockquote>"Este programa me dio la confianza y las herramientas que necesitaba para hacer realidad mi sueño de tener mi propio negocio." - Testimonio de participante</blockquote>
      
      <p>Planeamos expandir este programa a más comunidades durante el próximo trimestre.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    category: "Emprendimiento",
    categoryColor: "bg-purple-500",
    date: "2024-01-05",
    author: "Laura Fernández",
    readTime: "4 min",
    tags: ["emprendimiento", "mujeres", "capacitación"],
    relatedNews: ["2", "5", "6"],
  },
  {
    id: "5",
    slug: "reforestacion-parque-nacional",
    title: "Jornada de Reforestación en Parque Nacional",
    summary: "Voluntarios plantan 2000 árboles nativos en una jornada de conservación ambiental en el Parque Nacional.",
    content: `
      <h2>Compromiso con el Medio Ambiente</h2>
      <p>En una jornada histórica de conservación ambiental, más de 200 voluntarios se unieron para plantar 2000 árboles nativos en el Parque Nacional, contribuyendo significativamente a la restauración del ecosistema local.</p>
      
      <h3>Especies Nativas</h3>
      <p>Se plantaron especies autóctonas cuidadosamente seleccionadas por biólogos especializados, incluyendo ceibas, guayacanes y robles, todas fundamentales para el equilibrio del ecosistema.</p>
      
      <h3>Impacto Ambiental</h3>
      <p>Estos 2000 nuevos árboles ayudarán a:</p>
      <ul>
        <li>Capturar aproximadamente 40 toneladas de CO2 anualmente</li>
        <li>Proporcionar hábitat para especies locales</li>
        <li>Prevenir la erosión del suelo</li>
        <li>Mejorar la calidad del aire y agua</li>
      </ul>
      
      <blockquote>"Cada árbol plantado hoy es una inversión en el futuro de nuestro planeta y las generaciones venideras."</blockquote>
      
      <p>Esta iniciativa forma parte de nuestro compromiso de plantar 10,000 árboles durante este año.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    category: "Medio Ambiente",
    categoryColor: "bg-emerald-500",
    date: "2024-01-03",
    author: "Roberto Silva",
    readTime: "5 min",
    tags: ["reforestación", "medio ambiente", "conservación"],
    relatedNews: ["3", "4", "6"],
  },
  {
    id: "6",
    slug: "clinica-movil-atencion-medica",
    title: "Clínica Móvil Lleva Atención Médica a Zonas Remotas",
    summary:
      "Nuestra clínica móvil inicia recorridos mensuales para brindar atención médica gratuita en comunidades alejadas.",
    content: `
      <h2>Salud al Alcance de Todos</h2>
      <p>La nueva clínica móvil de nuestra organización ha comenzado sus recorridos mensuales, llevando atención médica gratuita y de calidad a comunidades remotas que tradicionalmente han tenido acceso limitado a servicios de salud.</p>
      
      <h3>Servicios Ofrecidos</h3>
      <p>La clínica móvil está equipada con tecnología médica moderna y ofrece:</p>
      <ul>
        <li>Consultas médicas generales</li>
        <li>Exámenes de laboratorio básicos</li>
        <li>Vacunación</li>
        <li>Control prenatal</li>
        <li>Medicina preventiva</li>
      </ul>
      
      <h3>Primer Recorrido</h3>
      <p>En su primer mes de operación, la clínica móvil atendió a 150 pacientes en 5 comunidades diferentes, realizando consultas, exámenes y proporcionando medicamentos esenciales.</p>
      
      <blockquote>"Por primera vez en años, pudimos recibir atención médica sin tener que viajar horas hasta la ciudad. Es un alivio enorme para nuestras familias." - Testimonio de beneficiario</blockquote>
      
      <h3>Próximos Destinos</h3>
      <p>El cronograma incluye visitas a 15 comunidades durante los próximos tres meses, con el objetivo de establecer un programa de atención médica regular y sostenible.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    category: "Salud",
    categoryColor: "bg-red-500",
    date: "2024-01-01",
    author: "Dr. Patricia López",
    readTime: "6 min",
    tags: ["salud", "clínica móvil", "atención médica"],
    relatedNews: ["1", "3", "5"],
  },
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
