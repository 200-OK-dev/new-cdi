import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  // Hook para detectar si es desktop después de la hidratación
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Transfórmate",
      description: "Un programa de formación para emprendedoras formales, desarrollado junto a Walmart Chile, que busca fortalecer sus negocios a través del acceso a herramientas digitales y redes de apoyo.",
      image: "/programasyproyectos/transformate.webp",
      link: "/programas-y-proyectos/proyecto/transformate"
    },
    {
      id: 2,
      title: "Red Impacta Data",
      description: "Una red que promueve la participación de mujeres migrantes en el sector tecnológico y de datos. Es un espacio de encuentro y desarrollo profesional, buscando reducir brechas de género en el ecosistema de datos.",
      image: "/programasyproyectos/redimpactadata.webp"
    },
    {
      id: 3,
      title: "Emprendo y Aprendo",
      description: "Proyecto junto a AFP Capital, orientado a entregar herramientas digitales y apoyo al emprendimiento para trabajadores independientes y sus familias.",
      image: "/programasyproyectos/emprendoaprendo.webp"
    }
  ];

  // Variantes de animación condicionales
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: isMounted && isDesktop ? 50 : 0 
    },
    visible: (index: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        duration: isMounted && isDesktop ? 0.6 : 0,
        delay: isMounted && isDesktop ? 0.6 + (index * 0.2) : 0,
        ease: "easeOut"
      }
    })
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: isMounted && isDesktop ? -100 : 0 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: isMounted && isDesktop ? 0.8 : 0,
        delay: isMounted && isDesktop ? 0.2 : 0,
        ease: "easeOut"
      }
    }
  };

  const gridVariants = {
    hidden: { 
      opacity: 0, 
      x: isMounted && isDesktop ? 100 : 0 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: isMounted && isDesktop ? 0.8 : 0,
        delay: isMounted && isDesktop ? 0.4 : 0,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-background pt-8 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-20 items-start">
          
          {/* Texto principal - lado izquierdo */}
          <motion.div 
            className="lg:col-span-1 mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <h2 className="text-4xl font-bold text-custom-orange mb-6">
              NUESTROS<br />
              PROYECTOS
            </h2>
            <p className="text-foreground text-lg leading-relaxed">
              Desarrollamos proyectos específicos con socios públicos y privados, adaptando nuestras metodologías para impactar positivamente en emprendimientos y trayectorias laborales en todo Chile.
            </p>
          </motion.div>
          
          {/* Tarjetas de proyectos - lado derecho */}
          <motion.div 
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={gridVariants}
          >
            {projects.map((project, index) => {
              const cardContent = (
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 transform group-hover:-translate-y-1 overflow-hidden flex flex-col h-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  custom={index}
                  whileHover={isMounted && isDesktop ? { 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  } : {}}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-0 flex-grow">
                      {project.description}
                    </p>
                    {project.link && (
                      <div className="mt-4">
                        <span className="text-custom-cyan hover:text-custom-cyan-dark font-semibold text-sm">
                          Saber más →
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );

              return (
                <div key={project.id} className="group h-full">
                  {project.link ? (
                    <Link
                      href={project.link}
                      passHref
                     
                      className="cursor-pointer block h-full no-underline"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div className="cursor-default h-full">{cardContent}</div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;