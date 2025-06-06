'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  // Definir las palabras con sus respectivas clases de color
  const titleWords = [
    { text: "25", className: "text-custom-yellow" },
    { text: "años", className: "text-custom-yellow" },
    { text: "transformando", className: "text-custom-background" },
    { text: "vidas", className: "text-custom-green" },
    { text: "a", className: "text-custom-background" },
    { text: "través", className: "text-custom-background" },
    { text: "de", className: "text-custom-background" },
    { text: "la", className: "text-custom-background" },
    { text: "tecnología", className: "text-custom-cyan" },
    { text: "en", className: "text-custom-background" },
    { text: "Chile", className: "text-custom-red" }
  ];

  // Variantes de animación para el contenedor y las palabras
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 * i }
    })
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section 
      className="relative min-h-screen border-b flex items-center py-16 mb-32 lg:py-20"
      style={{backgroundColor: 'oklch(0.9911 0 0)'}}
    >
      {/* Background video - Desktop */}
      <div className="absolute inset-0 z-0 w-full h-full hidden lg:block">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={(e) => {
            // Fallback a imagen si falla el video
            e.currentTarget.style.display = 'none';
            const nextSibling = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (nextSibling) {
              nextSibling.style.display = 'block';
            }
          }}
        >
          <source src="/hero24fps.webm" type="video/webm" />
        </video>
        
        {/* Fallback SVG Desktop (oculto por defecto) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/bg.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            display: 'none'
          }}
        />
        
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Background video - Mobile */}
      <div className="absolute inset-0 z-0 w-full h-full block lg:hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={(e) => {
            // Fallback a imagen si falla el video
            e.currentTarget.style.display = 'none';
            const nextSibling = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (nextSibling) {
              nextSibling.style.display = 'block';
            }
          }}
        >
          <source src="/herovertical.webm" type="video/webm" />
        </video>
        
        {/* Fallback SVG Mobile (oculto por defecto) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url('/bgm.svg')`,
            display: 'none'
          }}
        />
        
        {/* Overlay para móvil */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
           
      {/* Centered content con mejor spacing */}
      <div className="container mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full"
        >
          {/* Desktop: Two-column grid con mejor spacing */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left column - text con background para legibilidad */}
            <div className="ml-6 space-y-6 relative">
             
              
              <div className="relative z-10">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex flex-wrap">
                    {titleWords.map((word, index) => (
                      <motion.span
                        key={index}
                        variants={child}
                        className={`inline-block mr-2 mb-1 ${word.className}`}
                      >
                        {word.text}
                      </motion.span>
                    ))}
                  </div>
                </motion.h1>
                <motion.p 
                  className="text-lg text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <span>30 años</span>{' '}
                  <span>en el</span>{' '}
                  <span>mundo</span>.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  
                </motion.div>
              </div>
            </div>
                            
            {/* Right column - image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <Image
                  src="/cdi25.png"
                  alt="CDI Logo"
                  width={600}
                  height={400}
                  className="w-full max-w-xl h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Mobile: Vertical layout con video de fondo */}
          <div className="flex flex-col lg:hidden min-h-[90vh] justify-center items-center text-center space-y-8 py-8">
            {/* Top logo on mobile */}
            <motion.div 
              className="order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/cdi25.png"
                alt="CDI Logo"
                width={320}
                height={213}
                className="w-80 h-auto object-contain mx-auto"
                priority
              />
            </motion.div>
            
            {/* Text and button below on mobile */}
            <div className="order-2 space-y-6 max-w-lg">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold tracking-tighter"
                variants={container}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap justify-center">
                  {titleWords.map((word, index) => (
                    <motion.span
                      key={index}
                      variants={child}
                      className={`inline-block mr-2 mb-1 ${word.text === "vidas" ? "text-custom-red" : word.className}`}
                    >
                      {word.text}
                    </motion.span>
                  ))}
                </div>
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <span>30 años</span>{' '}
                <span>en el</span>{' '}
                <span>mundo</span>.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}