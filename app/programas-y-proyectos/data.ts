// programas-y-proyectos/data.ts

export interface ProgramaData {
    slug: string;
    title: string;
    shortDescription: string;
    category: string;
    beneficiarios: string;
    color: string;
    icon: string;
    fullContent: {
      hero: {
        title: string;
        subtitle: string;
        description: string;
      };
      sections: Array<{
        title: string;
        content: string;
        type: 'text' | 'list' | 'highlight';
        items?: string[];
      }>;
      stats?: {
        number: string;
        description: string;
      };
      cta: {
        text: string;
        link: string;
      };
    };
  }
  
  export interface ProyectoData {
    slug: string;
    title: string;
    shortDescription: string;
    partner: string;
    duration: string;
    color: string;
    icon: string;
    fullContent: {
      hero: {
        title: string;
        subtitle: string;
        description: string;
      };
      sections: Array<{
        title: string;
        content: string;
        type: 'text' | 'list' | 'highlight';
        items?: string[];
      }>;
      stats?: {
        number: string;
        description: string;
      };
      cta: {
        text: string;
        link: string;
      };
    };
  }
  
  export const programasData: Record<string, ProgramaData> = {
    techsoup: {
      slug: "techsoup",
      title: "TechSoup",
      shortDescription: "A través de este programa, facilitamos tecnología donada a con descuentos para organizaciones sin fines de lucro, permitiéndoles maximizar su impacto digital.",
      category: "Tecnología",
      beneficiarios: "ONGs y Fundaciones",
      color: "#4EC4CF",
      icon: "Code",
      fullContent: {
        hero: {
          title: "TechSoup Chile",
          subtitle: "Tecnología con propósito para las ONG",
          description: "En un mundo cada vez más digital, las organizaciones sociales necesitan herramientas efectivas, accesibles y pensadas para su realidad. TechSoup Chile nace justamente para eso: acercar la tecnología a las organizaciones sin fines de lucro, impulsando su transformación digital y fortaleciendo su impacto social."
        },
        sections: [
          {
            title: "Nuestra Misión",
            content: "Una red internacional presente en más de 200 países, que en Chile es desarrollado a través de CDI Chile, para que las ONG chilenas puedan acceder a productos y servicios tecnológicos a precios preferenciales y con acompañamiento especializado.",
            type: "text"
          },
          {
            title: "¿Qué hacemos?",
            content: "Ayudamos a las organizaciones sociales a:",
            type: "list",
            items: [
              "**Acceder a tecnología con propósito**: entregamos licencias y herramientas digitales con grandes descuentos o gratuitas para que las ONG puedan profesionalizar su gestión.",
              "**Capacitarse con cursos especializados**: a través de nuestra plataforma TechSoup Courses, ofrecemos formaciones prácticas, pensadas para la realidad de las organizaciones chilenas.",
              "**Conectar con una comunidad activa**: en nuestro **Club TechSoup Chile**, a través de WhatsApp, las organizaciones comparten recursos, se informan y se apoyan mutuamente en su camino digital.",
              "**Medir su impacto con datos**: desarrollamos iniciativas para que las ONG comprendan y utilicen sus datos estratégicamente para comunicar impacto, optimizar recursos y tomar decisiones, como el Entrenamiento en Vivo de Power BI."
            ]
          },
          {
            title: "Datos con Impacto Social",
            content: "Este programa desarrollado por TechSoup Chile junto a Red Impacta Data tiene como objetivo fortalecer a las organizaciones sin fines de lucro en su camino hacia la transformación digital mediante el **uso estratégico de los datos**. Con apoyo de mujeres migrantes formadas en análisis y visualización de datos, se crean dashboards personalizados para que las ONG puedan ver y comunicar su impacto en tiempo real. Porque los datos no solo son números: **son historias de cambio, claridad y confianza**.",
            type: "highlight"
          },
          {
            title: "Nuestro Compromiso",
            content: "En CDI Chile creemos firmemente que **la tecnología es una herramienta de transformación social**. No se trata solo de digitalizar procesos, sino de **fortalecer el propósito**, optimizar recursos y llegar más lejos con el mismo compromiso de siempre.",
            type: "text"
          }
        ],
        stats: {
          number: "5.000+",
          description: "organizaciones acompañadas desde 2008 en todo Chile"
        },
        cta: {
          text: "Visita techsoup.cl",
          link: "https://techsoup.cl"
        }
      }
    }
  };
  
  export const proyectosData: Record<string, ProyectoData> = {
    transformate: {
      slug: "transformate",
      title: "Tránsfórmate",
      shortDescription: "Un programa de formación para emprendedoras formales, desarrollado junto a Walmart Chile, que busca fortalecer sus negocios a través del acceso a herramientas digitales y redes de apoyo.",
      partner: "Walmart Chile",
      duration: "12 meses",
      color: "#ED3129",
      icon: "",
      fullContent: {
        hero: {
          title: "Tránsfórmate",
          subtitle: "Emprender es un desafío constante: adaptarse, aprender y avanzar",
          description: "Este programa nace para apoyar a quienes ya dieron el paso de formalizar su negocio, entregándoles herramientas concretas, asesoría personalizada y una comunidad que impulsa."
        },
        sections: [
          {
            title: "Sobre el Programa",
            content: "**Tránsfórmate** es un proyecto de formación impulsado por **CDI Chile** en alianza con **Walmart Chile**, como parte de su **Ruta del Emprendimiento**. Está dirigido a personas emprendedoras con negocios formalizados, que buscan mejorar sus habilidades digitales, proyectar su crecimiento y conectar con nuevas oportunidades.",
            type: "text"
          },
          {
            title: "¿Qué ofrece el programa?",
            content: "Te acompañamos en tu crecimiento empresarial con:",
            type: "list",
            items: [
              "**Capacitación práctica en herramientas digitales**: Aprenderás sobre redes sociales, ventas online, inteligencia artificial aplicada al negocio, diseño digital y más.",
              "**Asesoría y acompañamiento estratégico**: Contarás con mentorías personalizadas para aplicar lo aprendido a tu emprendimiento real.",
              "**Red de apoyo entre emprendedores**: Un espacio para compartir experiencias, generar redes y crecer junto a otros que viven desafíos similares.",
              "**Certificación**: Al finalizar, recibirás una certificación respaldada por SENCE, **CDI Chile** y **Walmart Chile**."
            ]
          },
          {
            title: "Ruta del Emprendimiento Walmart Chile",
            content: "**Tránsfórmate** forma parte de la **Ruta del Emprendimiento de Walmart Chile**, una iniciativa que busca potenciar a pequeños negocios con formación, visibilidad y oportunidades reales de crecimiento. En conjunto con **CDI Chile**, llevamos esta experiencia formativa a distintas regiones del país.",
            type: "highlight"
          }
        ],
        cta: {
          text: "Ver video del programa",
          link: "https://www.youtube.com/watch?v=P9agKQxUjVM"
        }
      }
    }
  };