'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function Hero() {
  // Definir las palabras con sus respectivas clases de color
  const titleWords = [
    { text: "25", className: "text-custom-yellow" },
    { text: "años", className: "text-custom-yellow" },
    { text: "transformando", className: "text-gray-900" },
    { text: "vidas", className: "text-custom-green" },
    { text: "a", className: "text-gray-900" },
    { text: "través", className: "text-gray-900" },
    { text: "de", className: "text-gray-900" },
    { text: "la", className: "text-gray-900" },
    { text: "tecnología", className: "text-custom-cyan" },
    { text: "en", className: "text-gray-900" },
    { text: "Chile", className: "text-custom-purple" }
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
      className="relative h-screen overflow-hidden border-b flex items-center" 
      style={{backgroundColor: 'oklch(0.9911 0 0)'}}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center opacity-90"
        style={{backgroundImage: `url('/bg.svg')`}}
      ></div>
           
      {/* Centered content */}
      <div className="container mx-auto relative z-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full"
        >
          {/* Desktop: Two-column grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left column - text */}
            <div className="ml-6 space-y-6">
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
                className="text-lg text-muted-foreground"
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
                <Link href="/nosotros" className="cursor-pointer">
                  <Button variant="default">¿Qué es CDI?</Button>
                </Link>
              </motion.div>
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

          {/* Mobile: Vertical layout */}
          <div className="flex flex-col lg:hidden h-full justify-center items-center text-center space-y-8">
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
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <span className="text-gray-900">30 años</span>{' '}
                <span className="text-gray-900">en el</span>{' '}
                <span className="text-gray-900">mundo</span>.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <Link href="/nosotros">
                  <Button variant="default">¿Qué es CDI?</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}