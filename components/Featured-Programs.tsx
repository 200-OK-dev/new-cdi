import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';

const FeaturedPrograms = () => {
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

  const programs = [
    {
      id: 1,
      title: "TechSoup",
      description: "A través de este programa, facilitamos tecnología donada o con descuentos para organizaciones sin fines de lucro, permitiéndoles maximizar su impacto digital.",
      image: "", // Imagen eliminada para mejorar rendimiento
      link: "/programas-y-proyectos"
    },
    {
      id: 2,
      title: "Habilidades digitales para el emprendimiento y la empleabilidad",
      description: "Capacitamos en habilidades digitales a emprendedores, jefas de hogar y personas vulnerables para mejorar sus oportunidades laborales y económicas a través de alianzas público-privadas.",
      image: "" // Imagen eliminada para mejorar rendimiento
    },
    {
      id: 3,
      title: "OTEC CDI Chile",
      description: "Nuestra OTEC ofrece cursos de calidad que transforman vidas mediante el aprendizaje digital y el desarrollo de habilidades laborales.",
      image: "" // Imagen eliminada para mejorar rendimiento
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
    <div className="bg-background pt-8 pb-8">
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
            <h2 className="text-4xl font-bold text-custom-yellow mb-6">
              NUESTROS<br />
              PROGRAMAS
            </h2>
            <p className="text-foreground text-lg leading-relaxed">
              En CDI Chile trabajamos a través de programas estratégicos que agrupan diversos proyectos e iniciativas, adaptadas a las necesidades de las comunidades.
            </p>
          </motion.div>
          
          {/* Tarjetas de programas - lado derecho */}
          <motion.div 
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={gridVariants}
          >
            {programs.map((program, index) => {
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
                    {program.image && (
                      <Image
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-0 flex-grow">
                      {program.description}
                    </p>
                    {program.link && (
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
                <div key={program.id} className="group h-full">
                  {program.link ? (
                    <Link
                      href={program.link}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
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

export default FeaturedPrograms;