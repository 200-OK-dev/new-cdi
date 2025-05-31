"use client"

import { motion } from "framer-motion";
import Image from 'next/image';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
  return (
    <motion.section 
      className="py-16 px-4 md:px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            
            <h3 className="text-3xl md:text-5xl text-extra-bold text-custom-orange">
              Empresas y Organizaciones líderes confían en nosotros
            </h3>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {logos.map((logo, index) => (
                <motion.div 
                  key={index}
                  className="relative w-full h-20 flex items-center justify-center p-2 rounded-lg hover:bg-muted/20 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image 
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain filter dark:brightness-90 dark:contrast-110"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};