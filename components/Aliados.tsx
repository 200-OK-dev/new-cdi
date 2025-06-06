"use client"
import { motion } from "framer-motion";
import Image from 'next/image';

const logos = [
  { src: "/Aliados/ACTI-LOGO.png", alt: "ACTI" },
  { src: "/Aliados/OAS_Seal_ESP_Principal_.gif", alt: "OEA" },
  { src: "/Aliados/UNHCR.png", alt: "ACNUR" },
  { src: "/Aliados/Walmart_Chile.png", alt: "Walmart Chile" },
  { src: "/Aliados/afp_capital.png", alt: "AFP Capital" },
  { src: "/Aliados/emprepolis.jpg", alt: "Emprepolis" },
  { src: "/Aliados/empresassb.png", alt: "Empresas SB" },
  { src: "/Aliados/euromonitor.png", alt: "Euromonitor" },
  { src: "/Aliados/huechuraba.png", alt: "Huechuraba" },
  { src: "/Aliados/microsoft.png", alt: "Microsoft" },
  { src: "/Aliados/quilicura.png", alt: "Quilicura" },
  { src: "/Aliados/trust.png", alt: "Trust" },
];

export const Aliados = () => {
  // Triplicamos los logos para asegurar un loop continuo
  const infiniteLogos = [...logos, ...logos, ...logos];

  return (
    <motion.section 
      className="py-12 md:py-16 px-4 overflow-hidden bg-background w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Título */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-yellow">
            <span className="block">Transformamos realidades</span>
            <span className="block">junto a aliados que creen en la innovación social</span>
          </h3>
        </div>
        
        {/* Container para el banner animado */}
        <div className="relative w-full py-6 md:py-8">
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-12 lg:gap-20 items-center"
              animate={{
                x: [0, '-100%'] // Movemos solo el 50% para hacer la animación más rápida
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15, // Ajustamos la duración
                  ease: "linear",
                },
              }}
            >
              {infiniteLogos.map((logo, index) => (
                <motion.div
                  key={`${logo.alt}-${index}`}
                  className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 h-32 sm:h-40 md:h-44 lg:h-48 flex items-center justify-center p-2 sm:p-3 md:p-4 rounded-lg"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain filter dark:brightness-90 dark:contrast-110"
                      sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, 18rem"
                      priority={index < 6} // Priorizar carga de las primeras imágenes
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradientes para el efecto de fade en los bordes */}
            <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-background dark:from-background to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-background dark:from-background to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};