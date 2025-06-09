// components/StatsBanner.tsx
"use client"
import { motion } from 'framer-motion';
import { BannerConfig } from '../app/programas-y-proyectos/data';

interface StatsBannerProps {
  config: BannerConfig;
  fallbackColor: string; // Color del programa/proyecto como fallback
}

export const StatsBanner = ({ config, fallbackColor }: StatsBannerProps) => {
  const backgroundColor = config.backgroundColor || fallbackColor;

  return (
    <motion.div 
      className="my-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div 
        className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
        style={{ backgroundColor }}
      >
        {/* Versión Desktop */}
        <div className="hidden md:flex items-center justify-between p-8">
          {/* Imagen izquierda */}
          <div className="flex-shrink-0">
            <img 
              src={config.leftImage} 
              alt="Decoración izquierda" 
              className="w-48 h-48 object-contain"
            />
          </div>

          {/* Contenido central */}
          <div className="flex-1 text-center mx-8">
            <div className="text-white">
              <p className="text-xl font-bold mb-1">{config.mainText}</p>
              {config.subText && (
                <p className="text-sm opacity-90 mb-4">{config.subText}</p>
              )}
              <div className="text-5xl font-bold mb-2">{config.statNumber}</div>
              <p className="text-base opacity-90">{config.statLabel}</p>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="flex-shrink-0">
            <img 
              src={config.rightImage} 
              alt="Decoración derecha" 
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* Versión Mobile */}
        <div className="md:hidden p-6">
          <div className="text-center text-white">
            {/* Imágenes en fila */}
            <div className="flex justify-center items-center gap-6 mb-6">
              <img 
                src={config.leftImage} 
                alt="Decoración izquierda" 
                className="w-16 h-16 object-contain"
              />
              <img 
                src={config.rightImage} 
                alt="Decoración derecha" 
                className="w-16 h-16 object-contain"
              />
            </div>
            
            {/* Contenido */}
            <p className="text-lg font-bold mb-1">{config.mainText}</p>
            {config.subText && (
              <p className="text-sm opacity-90 mb-4">{config.subText}</p>
            )}
            <div className="text-4xl font-bold mb-2">{config.statNumber}</div>
            <p className="text-sm opacity-90">{config.statLabel}</p>
          </div>
        </div>

        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4 w-24 h-24 rounded-full border-2 border-white"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-2 border-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white"></div>
        </div>
      </div>
    </motion.div>
  );
};