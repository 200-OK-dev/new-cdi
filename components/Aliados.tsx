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
      className="py-16 px-4 md:px-6 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Título fuera del banner */}
        <div className="text-center mb-12">
        <h3 className="text-3xl md:text-5xl text-extra-bold text-custom-orange">
            <span className="block">Transformamos realidades</span>
            <span className="block">junto a aliados que creen en la innovación social</span>
        </h3>
        </div>
        
        {/* Container para el banner animado */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-20 items-center"
            animate={{
              x: [0, `-${100 / 3}%`],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Duración más lenta para mejor visualización
                ease: "linear",
              },
            }}
            style={{
              width: `${infiniteLogos.length * 320}px`, // Ancho fijo para cada logo
            }}
          >
            {infiniteLogos.map((logo, index) => (
              <motion.div
                key={`${logo.alt}-${index}`}
                className="flex-shrink-0 w-72 h-48 flex items-center justify-center p-4 rounded-lg"
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
                    sizes="288px"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradientes para el efecto de fade en los bordes */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background dark:from-background to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background dark:from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </motion.section>
  );
};