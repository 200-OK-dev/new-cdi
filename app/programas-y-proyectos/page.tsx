"use client"

import FeaturedPrograms from '@/components/Featured-Programs';
import FeaturedProjects from '@/components/Featured-Projects';
import { motion } from 'framer-motion';

// Variantes de animación
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
const fadeIn = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};
// Contenedor para animaciones secuenciales
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export default function ProgramasYProyectos() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.section 
           className="text-center mb-16"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           variants={container}
         >
          <motion.h1 className="text-4xl md:text-6xl font-bold text-custom-orange mb-6"
          variants={fadeInUp}>
            Nuestros Programas y Proyectos
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto"
          variants={fadeInUp}>
            Conoce nuestras iniciativas diseñadas para impulsar la transformación digital y la inclusión tecnológica en Chile.
          </motion.p>
        </motion.section>

       {/* Featured Programs Section */}
       <FeaturedPrograms />

       {/* Featured Projects Section */}
       <FeaturedProjects />

        
      </div>
    </main>
  );
}
