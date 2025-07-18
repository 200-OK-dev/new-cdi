// programas-y-proyectos/data.ts

import { ProgramaData, ProyectoData } from './types';

export type { ProgramaData, ProyectoData } from './types';

export const programasData: Record<string, ProgramaData> = {

  "red-impacta-data": {
    slug: "red-impacta-data",
    title: "Red Impacta Data",
    shortDescription: "Pasantías con propósito para fortalecer el uso estratégico de datos en organizaciones sociales. Conectamos a mujeres formadas en análisis de datos con organizaciones que necesitan fortalecer sus capacidades.",
    category: "Datos y Tecnología Social",
    beneficiarios: "ONGs y Mujeres Migrantes",
    color: "#10B981", // Verde esmeralda
    icon: "BarChart3",
    fullContent: {
      hero: {
        title: "Pasantías con propósito para fortalecer el uso estratégico de datos en organizaciones sociales",
        subtitle: "",
        description: "**Datos con Impacto Social** es un proyecto colaborativo entre dos programas de CDI CHILE: **la Red Impacta Data** con **TechSoup**, que conecta a mujeres formadas en análisis de datos con organizaciones sociales que necesitan fortalecer sus capacidades en esta área.\n\nA través de pasantías prácticas, las participantes acompañan a las organizaciones en la revisión, organización y análisis de su información, ayudándolas a tomar mejores decisiones basadas en datos y aportando valor a sus procesos de gestión e impacto."
      },

      sections: [
        {
          title: "",
          content: "",
          type: "video",
          videoUrl: "https://www.youtube.com/watch?v=x-RmEJ-U2o8"
        },
        {
          title: "¿Cómo funciona?",
          content: "Nuestro proceso está diseñado como una línea de tiempo que genera impacto real:",
          type: "list",
          items: [
            "Mujeres que forman parte de la Red Impacta Data —muchas de ellas migrantes y egresadas de nuestros bootcamps— postulan a pasantías breves, diseñadas para resolver desafíos reales de organizaciones sociales.",
            "Cada pasantía es acompañada por un equipo técnico que garantiza el aprendizaje mutuo, la calidad del proceso y el enfoque ético del uso de los datos.",
            "Las organizaciones participantes reciben un apoyo concreto en el uso de su información, y las pasantes ganan experiencia aplicada y valiosa proyección profesional."
          ]
        },
        {
          title: "",
          content: "**Los datos no solo son cifras, sino una herramienta poderosa para el cambio social cuando están en manos de quienes conocen los territorios, viven las desigualdades y tienen la motivación de transformar.**",
          type: "highlight"
        },
        {
          title: "Nuestro Impacto",
          content: "Resultados que transforman:",
          type: "list",
          items: [
            "✅ +30 Organizaciones sociales con procesos más informados",
            "✅ Mujeres migrantes desarrollando experiencia y confianza profesional",
            "✅ Conexiones reales entre datos, personas y propósitos"
          ]
        },
        {
          title: "Conoce la experiencia de Policlínico El Salto",
          content: "",
          type: "video",
          videoUrl: "https://www.youtube.com/watch?v=YU_xHL62hTo&t=37s"
        },
        {
          title: "¿Quieres participar?",
          content: "Hay múltiples formas de ser parte de esta iniciativa:\n\n• ¿Tienes una organización social y quieres recibir apoyo con tus datos?\n• ¿Eres parte de la Red Impacta Data y te interesa una pasantía?\n• ¿Quieres apoyar esta iniciativa desde tu institución?\n\n**Escríbenos a correo@cdichile.org**\n\nO síguenos en nuestras redes para conocer las próximas convocatorias",
          type: "text"
        }
      ],
      stats: {
        number: "+30",
        description: "organizaciones sociales con procesos más informados"
      },
      cta: {
        text: "Contáctanos para participar",
        link: "mailto:correo@cdichile.org"
      },
      banner: {
        leftImage: "/programas-y-proyectos/DATA-ANALYSIS.png",
        rightImage: "/programas-y-proyectos/SOCIAL-IMPACT.png",
        mainText: "Datos + Propósito",
        subText: "transformando organizaciones sociales",
        statNumber: "+30",
        statLabel: "organizaciones impactadas",
        backgroundColor: "#10B981",
        position: "after-section-1"
      }
    }
  },
  "habilidades-digitales": {  // ← Clave corregida con guión
    slug: "habilidades-digitales",
    title: "Habilidades digitales para el emprendimiento y la empleabilidad",
    shortDescription: "Tecnología y formación para fortalecer trayectorias laborales y emprendedoras. Entregamos herramientas digitales concretas a personas que quieren mejorar su empleabilidad o fortalecer sus emprendimientos.",
    category: "Formación Digital",
    beneficiarios: "Emprendedores y Trabajadores",
    color: "#7C3AED", // Color violeta/púrpura
    icon: "Target",
    fullContent: {
      hero: {
        title: "Habilidades digitales para el emprendimiento y la empleabilidad",
        subtitle: "Tecnología y formación para fortalecer trayectorias laborales y emprendedoras",
        description: "Este programa busca entregar herramientas digitales concretas a personas que quieren mejorar su empleabilidad, fortalecer sus emprendimientos o abrir nuevas oportunidades económicas. A través de cursos, pasantías, asesorías y espacios formativos, conectamos a participantes con el mundo digital desde una perspectiva práctica, inclusiva y con foco en el impacto social que logramos con el apoyo de instituciones públicas y privadas."
      },
      sections: [
        {
          title: "Nuestros enfoques",
          content: "Trabajamos desde cuatro pilares fundamentales:",
          type: "list",
          items: [
            "**Formación digital aplicada**: Cursos prácticos que conectan directamente con oportunidades reales del mercado laboral y emprendedor.",
            "**Apoyo al emprendimiento formal**: Acompañamiento especializado para la formalización y crecimiento de negocios.",
            "**Enfoque de género y diversidad**: Programas específicos que abordan las brechas digitales con perspectiva inclusiva.",
            "**Alianzas público-privadas**: Colaboración estratégica con instituciones que amplifican el impacto social."
          ]
        },
        {
          title: "Proyectos que forman parte del programa",
          content: "**🔹 Tránsfórmate** - *Con Walmart Chile*: Formación digital para negocios formalizados. **+1.900 participantes** (Desde 2020)\n\n**🔹 Emprende y Aprende** - *Con AFP Capital*: Educación financiera y digital para independientes. **+270 personas** (Desde 2022)\n\n**🔹 Mujeres y Tecnología** - *Con Banco de Chile*: Formación digital para mujeres que buscan nuevas oportunidades. **+170 personas** (Desde 2022)\n\n**🔹 Inclusión y Diversidad** - *Con Empresas SB*: Cursos con foco en empleabilidad e inclusión. **+1.000 personas** (Desde 2017)\n\n**🔹 POETA** - *Con Trust for the Americas*: Inclusión digital con foco en empleo y emprendimiento. **+5.000 personas** (Desde 2021)",
          type: "text"
        },
        {
          title: "Impacto en números",
          content: "En **CDI Chile** creemos que las **habilidades digitales son el puente hacia nuevas oportunidades**. No se trata solo de enseñar tecnología, sino de **abrir caminos**, construir confianza y generar impacto real en las vidas de las personas que participan de nuestros programas.",
          type: "highlight"
        }
      ],
      stats: {
        number: "+8.000",
        description: "personas formadas en todo Chile"
      },
      cta: {
        text: "Contáctanos",
        link: "/contacto" // O la ruta que tengas para contacto
      },
      banner: {
        leftImage: "/programasyproyectos/ALIANZA.png",
        rightImage: "/programasyproyectos/PARTICIPANTES.png",
        mainText: "5 alianzas activas",
        subText: "impulsando oportunidades digitales",
        statNumber: "+8.000",
        statLabel: "personas formadas",
        position: "after-section-1"
      }
    }
  },
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
      },
      banner: {
        leftImage: "/programasyproyectos/ALIANZA.png",
        rightImage: "/programasyproyectos/PARTICIPANTES.png",
        mainText: "16 años conectando",
        subText: "tecnología con propósito social",
        statNumber: "5.000+",
        statLabel: "organizaciones beneficiadas",
        position: "after-section-1"
      }
    }
  }


};

export const proyectosData: Record<string, ProyectoData> = {

  "emprende-y-aprende": {
    slug: "emprende-y-aprende",
    title: "Emprende y Aprende",
    shortDescription: "Proyecto desarrollado por CDI Chile en alianza con AFP Capital, que entrega herramientas concretas a personas emprendedoras, especialmente mujeres, para fortalecer sus capacidades digitales y avanzar hacia la formalización.",
    partner: "AFP Capital",
    duration: "Desde 2022",
    color: "#8B5CF6", // Color violeta
    icon: "Target",
    fullContent: {
      hero: {
        title: "Emprende y Aprende",
        subtitle: "Herramientas digitales para emprendedoras con propósito",
        description: "**Emprende y Aprende** es un proyecto desarrollado por **CDI Chile** en alianza con **AFP Capital**, que entrega herramientas concretas a personas emprendedoras, especialmente mujeres, para fortalecer sus capacidades digitales, mejorar la visibilidad de sus negocios y avanzar hacia la formalización.\n\nA través de una metodología práctica, cercana y aplicada, el proyecto acompaña el desarrollo de microemprendimientos que enfrentan barreras de acceso a formación, redes y herramientas digitales."
      },
      sections: [
        {
          title: "",
          content: "",
          type: "video",
          videoUrl: "https://www.youtube.com/watch?v=LhCtoRYnK18"
        },
        {
          title: "¿A quién está dirigido?",
          content: "El proyecto está enfocado en:",
          type: "list",
          items: [
            "**Mujeres emprendedoras** con negocios en etapa inicial o en desarrollo.",
            "**Trabajadoras independientes** que buscan mejorar su gestión y comunicación digital.",
            "**Personas que no necesariamente cuentan con formación previa**, pero quieren proyectar sus negocios con más estrategia."
          ]
        },
        {
          title: "¿Qué incluye el proyecto?",
          content: "**Emprende y Aprende** entrega herramientas concretas para construir una marca con propósito, comunicar con claridad su valor, y usar redes sociales como canales efectivos para visibilizar y posicionar el negocio.\n\nEl eje formativo es el curso **Gestión Estratégica de Redes Sociales**, que se complementa con sesiones de mentoría, clases especiales y apoyo en la aplicación de tecnologías digitales, incluyendo el uso de **inteligencia artificial generativa** como herramienta creativa.",
          type: "text"
        },
        {
          title: "Una alianza con propósito",
          content: "**Emprende y Aprende** se ejecuta a través de la **franquicia tributaria SENCE**, lo que permite a empresas como **AFP Capital** convertir su inversión en capacitación en un proyecto de alto impacto social.\n\n**CDI Chile** diseña e implementa esta formación con metodologías accesibles, enfoque de género y acompañamiento humano, generando oportunidades reales de desarrollo económico y digital para mujeres emprendedoras de todo Chile.",
          type: "highlight"
        }
      ],
      stats: {
        number: "+270",
        description: "personas beneficiadas desde 2022"
      },
      cta: {
        text: "Contáctanos para participar",
        link: "/contacto"
      },
      banner: {
        leftImage: "/programasyproyectos/ALIANZA.png",
        rightImage: "/programasyproyectos/PARTICIPANTES.png",
        mainText: "Alianza estratégica",
        subText: "impulsando emprendimiento femenino",
        statNumber: "+270",
        statLabel: "emprendedoras formadas",
        backgroundColor: "#8B5CF6",
        position: "after-section-1"
      }
    }
  },

  transformate: {
    slug: "transformate",
    title: "Transfórmate",
    shortDescription: "Un programa de formación para emprendedoras formales, desarrollado junto a Walmart Chile, que busca fortalecer sus negocios a través del acceso a herramientas digitales y redes de apoyo.",
    partner: "Walmart Chile",
    duration: "12 meses",
    color: "#60A5FA",
    icon: "Users",
    fullContent: {
      hero: {
        title: "Transfórmate",
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
      },
      // Ejemplo de banner para Tránsfórmate
      banner: {
        leftImage: "/images/banners/icons/hands.svg", // Como en tu imagen de ejemplo
        rightImage: "/images/banners/icons/people-group.svg", // Como en tu imagen de ejemplo
        mainText: "4 años de alianza",
        subText: "impulsando emprendimientos",
        statNumber: "1945",
        statLabel: "participantes",
        backgroundColor: "#8B5CF6", // Color diferente al del proyecto si quieres
        position: "after-video" // Se mostrará después del video de YouTube
      }
    }
  },
  "inclusion-y-diversidad": {
    slug: "inclusion-y-diversidad",
    title: "Inclusión y Diversidad",
    shortDescription: "Formación digital con propósito para promover el acceso laboral de personas históricamente excluidas. Desarrollado junto a Empresas SB desde 2017.",
    partner: "Empresas SB",
    duration: "8 años",
    color: "#F59E0B", // Color ámbar
    icon: "Users",
    fullContent: {
      hero: {
        title: "Inclusión y Diversidad - Empresas SB",
        subtitle: "Formación digital con propósito para promover el acceso laboral de personas históricamente excluidas",
        description: "Desde 2017, **Empresas SB** y **CDI Chile** impulsan el programa **Inclusión y Diversidad**, una iniciativa que entrega herramientas concretas a personas migrantes, mayores de 50 años y miembros de la comunidad LGBTQIA+ para ampliar sus oportunidades laborales y mejorar su calidad de vida."
      },
      sections: [
        {
          title: "",
          content: "",
          type: "video",
          videoUrl: "https://www.youtube.com/watch?v=B7nYovo2VZQ&t"
        },
        {
          title: "Nuestra Metodología",
          content: "A través de formaciones 100% online, con acompañamiento cercano y enfoque práctico, el programa entrega herramientas clave para desenvolverse en el entorno laboral chileno, fortalecer la autoconfianza y ampliar redes de apoyo.",
          type: "text"
        },
        {
          title: "¿Qué incluye la formación?",
          content: "Los contenidos se estructuran en módulos que combinan habilidades técnicas y personales, conectadas con las áreas de interés de Empresas SB:",
          type: "list",
          items: [
            "**Atención al cliente, calidad de servicio y neuroventas**: Herramientas prácticas para destacar en el área comercial.",
            "**Apresto laboral y derechos en el mundo del trabajo**: Conocimientos fundamentales sobre el mercado laboral chileno.",
            "**Fundamentos de dermocosmética para asesorías en tienda**: Capacitación especializada en productos de belleza y cuidado personal.",
            "**Presentación personal y estilo profesional**: Desarrollo de habilidades blandas para el ámbito laboral.",
            "**Masterclasses especializadas**: Herramientas digitales, redes profesionales y estrategias de venta.",
            "**Visitas a tiendas**: Experiencias prácticas que permiten conocer de cerca el ambiente laboral real."
          ]
        },
        {
          title: "8 años impulsando trayectorias",
          content: "El programa **Inclusión y Diversidad** ha transformado vidas desde 2017, consolidando un modelo de formación accesible, emocionalmente significativo y orientado al empleo digno y sostenible. Es un ejemplo concreto de cómo una empresa puede asumir su rol en la inclusión laboral y generar valor compartido.",
          type: "highlight"
        },
        {
          title: "Una alianza con impacto real",
          content: "Este programa se ejecuta a través de la **franquicia tributaria SENCE**, lo que permite a **Empresas SB** canalizar su inversión en capacitación hacia acciones de alto valor social. **CDI Chile** se encarga del diseño metodológico, la formación y el seguimiento post programa, asegurando una experiencia transformadora para cada participante.",
          type: "text"
        },
        {
          title: "¿Tu empresa quiere ser parte?",
          content: "¿Tu empresa quiere ser parte de un modelo que genera oportunidades reales?\n\n**Hablemos y construyamos juntos una alianza con propósito.**",
          type: "text"
        }
      ],
      stats: {
        number: "+1.000",
        description: "personas formadas desde 2017"
      },
      cta: {
        text: "Contáctanos para crear una alianza",
        link: "/contacto"
      },
      banner: {
        leftImage: "/programas-y-proyectos/INCLUSION.png",
        rightImage: "/programas-y-proyectos/DIVERSIDAD.png",
        mainText: "8 años de alianza",
        subText: "promoviendo inclusión laboral",
        statNumber: "+1.000",
        statLabel: "personas beneficiadas",
        backgroundColor: "#F59E0B",
        position: "after-section-2"
      }
    }
  }
};