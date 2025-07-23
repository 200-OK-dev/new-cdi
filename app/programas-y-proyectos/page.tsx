"use client"
import { motion } from 'framer-motion';
import { ArrowRight, Users, Code, Target, Lightbulb, Globe, BookOpen, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { programasData, proyectosData } from './data';

export default function ProgramasYProyectos() {
  // Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardHover = {
    rest: {
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const iconMap = {
    Code: Code,
    Users: Users,
    BookOpen: BookOpen,
    Globe: Globe,
    Target: Target,
    Lightbulb: Lightbulb,
    BarChart3: BarChart3,
  };

  // Convertir datos a arrays para el renderizado
  const programas = Object.values(programasData);
  const proyectos = Object.values(proyectosData);

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-2xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="text-custom-cyan">Nuestros</span>{" "}
            <span className="text-foreground">Programas y Proyectos</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Conoce nuestras iniciativas diseñadas para impulsar la transformación digital 
            y la inclusión tecnológica en Chile, adaptadas a las necesidades de las comunidades.
          </motion.p>
        </motion.section>

        {/* Programas Section */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
              Nuestros Programas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              En CDI Chile trabajamos a través de programas estratégicos que agrupan diversos proyectos e 
              iniciativas, adaptados a las necesidades de las comunidades.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {programas.map((programa) => {
              const IconComponent = iconMap[programa.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={programa.slug}
                  className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Link href={`/programas-y-proyectos/programa/${programa.slug}`}>
                    <motion.div variants={cardHover}>
                      {/* Header con línea de color */}
                      <div className="h-2" style={{ backgroundColor: programa.color }}></div>
                      
                      <div className="p-8">
                        {/* Icon y Category */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="p-3 rounded-full text-white" style={{ backgroundColor: programa.color }}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <span className="text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                            {programa.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-orange-500 transition-colors">
                            {programa.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {programa.shortDescription}
                          </p>

                          <div className="pt-4 border-t border-border">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Users className="w-4 h-4 mr-2" />
                              <span className="font-medium">Dirigido a:</span>
                              <span className="ml-2">{programa.beneficiarios}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action */}
                        <div className="mt-6 pt-4">
                          <div className="flex items-center text-orange-500 hover:text-orange-600 font-medium group-hover:translate-x-1 transition-transform">
                            Saber más
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Proyectos Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div className="mb-12" variants={fadeInUp}>
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
              Nuestros Proyectos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Desarrollamos proyectos específicos con socios públicos y privados, adaptando nuestras 
              metodologías para impactar positivamente en emprendimientos y trayectorias laborales en todo Chile.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {proyectos.map((proyecto) => {
              const IconComponent = iconMap[proyecto.icon as keyof typeof iconMap] || Target;
              return (
                <motion.div
                  key={proyecto.slug}
                  className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <Link href={`/programas-y-proyectos/proyecto/${proyecto.slug}`}>
                    <motion.div variants={cardHover}>
                      {/* Header con línea de color */}
                      <div className="h-2" style={{ backgroundColor: proyecto.color }}></div>
                      
                      <div className="p-8">
                        {/* Icon y Partner */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="p-3 rounded-full text-white" style={{ backgroundColor: proyecto.color }}>
                            {typeof proyecto.icon === 'string' ? (
                              <IconComponent className="w-8 h-8" />
                            ) : (
                              proyecto.icon
                            )}
                          </div>
                          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {proyecto.partner}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-orange-500 transition-colors">
                            {proyecto.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {proyecto.shortDescription}
                          </p>

                          <div className="pt-4 border-t border-border">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Target className="w-4 h-4 mr-2" />
                              <span className="font-medium">Duración:</span>
                              <span className="ml-2">{proyecto.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action */}
                        <div className="mt-6 pt-4">
                          <div className="flex items-center text-orange-500 hover:text-orange-600 font-medium group-hover:translate-x-1 transition-transform">
                            Ver detalles
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto bg-background rounded-3xl border-border shadow-lg p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              ¿Quieres ser parte de nuestros programas?
            </h3>
            <p className="text-xl mb-8 text-foreground max-w-2xl mx-auto">
              Únete a nuestras iniciativas y contribuye a la transformación digital de Chile
            </p>
            <Link href="/contacto" className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors">
              Contáctanos
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}