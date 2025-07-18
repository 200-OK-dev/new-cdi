// programas-y-proyectos/[tipo]/[slug]/DetailPageClient.tsx
"use client"
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Users, Target, Code, BookOpen, Globe, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { ProgramaData, ProyectoData } from '../../data';
import { StatsBanner } from '../../../../components/StatsBanner';

interface DetailPageClientProps {
  data: ProgramaData | ProyectoData;
  tipo: 'programa' | 'proyecto';
}

const iconMap = {
  Code: Code,
  Users: Users,
  BookOpen: BookOpen,
  Globe: Globe,
  Target: Target,
  Lightbulb: Lightbulb,
};

// Función helper para extraer el ID del video de YouTube
function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
}

// Componente para videos de YouTube
const YouTubeEmbed = ({ videoId, title }: { videoId: string; title?: string }) => {
  return (
    <motion.div 
      className="my-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="relative aspect-video w-full max-w-4xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || "Video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default function DetailPageClient({ data, tipo }: DetailPageClientProps) {
  const IconComponent = iconMap[data.icon as keyof typeof iconMap] || Code;

  // Verificar si el CTA es un video de YouTube
  const youtubeVideoId = data.fullContent.cta.link ? extractYouTubeId(data.fullContent.cta.link) : null;

  // Función helper para renderizar el banner en la posición correcta
  const renderBannerAtPosition = (position: string) => {
    if (data.fullContent.banner?.position === position) {
      return (
        <StatsBanner 
          config={data.fullContent.banner} 
        />
      );
    }
    return null;
  };

  // Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Botón de regreso */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/programas-y-proyectos"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Programas y Proyectos
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          {/* Icono y tipo */}
          <motion.div variants={fadeInUp} className="flex items-center mb-6">
            <div 
              className="p-4 rounded-full text-white mr-4"
              style={{ backgroundColor: data.color }}
            >
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {tipo}
              </span>
              <div className="h-1 w-16 mt-1" style={{ backgroundColor: data.color }}></div>
            </div>
          </motion.div>

          {/* Título y subtítulo */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span style={{ color: data.color }}>{data.fullContent.hero.title}</span>
          </motion.h1>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground font-medium mb-8"
          >
            {data.fullContent.hero.subtitle}
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            {data.fullContent.hero.description}
          </motion.p>
        </motion.section>

        {/* Banner después del hero */}
        {renderBannerAtPosition('after-hero')}

        {/* Video de YouTube del CTA (si existe) */}
        {youtubeVideoId && (
          <YouTubeEmbed 
            videoId={youtubeVideoId} 
            title={data.fullContent.cta.text}
          />
        )}

        {/* Banner después del video */}
        {renderBannerAtPosition('after-video')}

        {/* Banner antes de las secciones */}
        {renderBannerAtPosition('before-sections')}

        {/* Contenido principal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {data.fullContent.sections.map((section, index) => (
            <div key={index}>
              <motion.section variants={fadeInUp}>
                {section.type === 'highlight' ? (
                  <div 
                    className="p-8 rounded-2xl text-white relative overflow-hidden"
                    style={{ backgroundColor: data.color }}
                  >
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                      <div 
                        className="text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ 
                          __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                        }}
                      />
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <IconComponent className="w-full h-full" />
                    </div>
                  </div>
                ) : section.type === 'video' ? (
                  // NUEVA SECCIÓN PARA VIDEOS
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {section.content}
                    </p>
                    {section.type === 'video' && section.videoUrl && extractYouTubeId(section.videoUrl) && (
                      <YouTubeEmbed 
                        videoId={extractYouTubeId(section.videoUrl)!} 
                        title={section.title}
                      />
                    )}
                  </div>
                ) : section.type === 'list' ? (
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {section.content}
                    </p>
                    <ul className="space-y-4">
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div 
                            className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"
                            style={{ backgroundColor: data.color }}
                          ></div>
                          <div 
                            className="text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ 
                              __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-foreground">
                      {section.title}
                    </h3>
                    <div 
                      className="text-lg leading-relaxed text-muted-foreground"
                      dangerouslySetInnerHTML={{ 
                        __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }}
                    />
                  </div>
                )}
              </motion.section>

              {/* Banner después de sección específica */}
              {renderBannerAtPosition(`after-section-${index}`)}
            </div>
          ))}
        </motion.div>

        {/* Banner antes de stats */}
        {renderBannerAtPosition('before-stats')}

        {/* Stats */}
        {data.fullContent.stats && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="bg-card border border-border rounded-2xl p-12">
              <div 
                className="text-6xl font-bold mb-4"
                style={{ color: data.color }}
              >
                {data.fullContent.stats.number}
              </div>
              <p className="text-xl text-muted-foreground">
                {data.fullContent.stats.description}
              </p>
            </div>
          </motion.section>
        )}

        {/* Banner antes del CTA */}
        {renderBannerAtPosition('before-cta')}

        {/* CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div 
            className="rounded-2xl p-12 text-white relative overflow-hidden"
            style={{ backgroundColor: data.color }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                {tipo === 'programa' 
                  ? "¿Eres parte de una ONG? ¡Súmate a nuestra comunidad y activa tu impacto!"
                  : "¿Quieres conocer más sobre este proyecto?"
                }
              </h3>
              
              {/* Solo mostrar el botón del CTA si NO es un video (ya que el video se muestra arriba) */}
              {!youtubeVideoId && (
                <a
                  href={data.fullContent.cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  {data.fullContent.cta.text}
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              )}

              {/* Si es un video, mostrar un texto diferente */}
              {youtubeVideoId && (
                <p className="text-white/90 text-lg">
                  ¡Mira el video completo arriba para conocer más detalles!
                </p>
              )}
            </div>
            <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
              <IconComponent className="w-full h-full" />
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}