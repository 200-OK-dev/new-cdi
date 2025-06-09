// GoogleTestimonials.tsx
// Componente estático para mostrar testimonios predefinidos

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// ========================================
// TIPOS Y CONFIGURACIÓN
// ========================================

interface ProcessedReview {
  id: string;
  reviewer: {
    name: string;
    photo: string | null;
    initials: string;
  };
  rating: number;
  comment: string;
  date: string;
}

interface GoogleTestimonialsProps {
  title?: string;
  subtitle?: string;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// ========================================
// TESTIMONIOS ESTÁTICOS
// ========================================

const TESTIMONIALS: ProcessedReview[] = [
  {
    id: 'testimonial-1',
    reviewer: {
      name: 'Alberta García',
      photo: null,
      initials: 'AG'
    },
    rating: 5,
    comment: 'Excelente oportunidad de aprendizaje, muy buenos profes, me encantó que haya sido en línea por qué nos abrió una oportunidad para los que no vivimos en Santiago, me encantó el contenido y me va a ser muy útil, bueno más bien ya me está sirviendo, gracias acnur y cdi',
    date: 'Hace 3 meses'
  },
  {
    id: 'testimonial-2',
    reviewer: {
      name: 'Anabell Rodríguez Fernández',
      photo: null,
      initials: 'AR'
    },
    rating: 5,
    comment: 'Super recomendable este curso, los profes maravillosos, motivadores aprendí un montón de ellos y ya aplicando todo lo aprendido mil gracias espero ver muchos de los compañeros en las redes siendo exitosos en sus marcas... bendiciones para todos',
    date: 'Hace 3 meses'
  },
  {
    id: 'testimonial-3',
    reviewer: {
      name: 'Sueños de Azúcar Chile',
      photo: null,
      initials: 'SA'
    },
    rating: 5,
    comment: 'Super enriquecedora excelente aporte de conocimientos para seguir avanzando en nuestro emprendimiento y en lo personal profesores con los más altos estándares fe conocimiento empatía felicitaciones. Son gran equipo espero con ansias...',
    date: 'Hace 3 meses'
  },
  {
    id: 'testimonial-4',
    reviewer: {
      name: 'Carmen Canelo',
      photo: null,
      initials: 'CC'
    },
    rating: 5,
    comment: 'Excelente el curso muy enriquecedor, las herramientas que nos han entregado son de bastante provecho, agradecida con los profesores por la buena vibra y el buen desarrollo de todos los temas, y a Cdi chile y Acnur por tan grata oportunidad.',
    date: 'Hace 3 meses'
  }
];

// ========================================
// COMPONENTES UI
// ========================================

interface ReviewerAvatarProps {
  reviewer: {
    name: string;
    photo: string | null;
    initials: string;
  };
  size?: 'sm' | 'md' | 'lg';
}

const ReviewerAvatar: React.FC<ReviewerAvatarProps> = ({ reviewer, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg'
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700`}
      style={{
        backgroundImage: reviewer.photo ? `url(${reviewer.photo})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {!reviewer.photo && <span>{reviewer.initials}</span>}
    </div>
  );
};

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const stars = Array(5).fill(0).map((_, i) => (
    <Star 
      key={i} 
      className={`${sizeClasses[size]} ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
    />
  ));

  return <div className="flex gap-1">{stars}</div>;
};

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

const GoogleTestimonials: React.FC<GoogleTestimonialsProps> = ({ 
  title = "Lo que dicen nuestros Participantes",
  subtitle = "Testimonios reales de personas que han experimentado nuestro impacto",
  className = "",
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play del carrusel
  useEffect(() => {
    if (!autoPlay || TESTIMONIALS.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentReview = TESTIMONIALS[currentIndex];

  return (
    <motion.div 
      className={`space-y-6 ${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {/* Header Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl text-custom-cyan text-extra-bold mb-4">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">{subtitle}</p>
      </motion.div>
      
      {/* Carousel Container */}
      <motion.div 
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex items-stretch gap-8">
          
          {/* Left Info Panel - Same height as testimonial card */}
          <motion.div 
            className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ONG CDI Chile</h3>
              <p className="text-sm text-gray-600 mb-4">
                Puma 1180, Recoleta - If Blanco Recoleta, 8420200 Santiago, Región Metropolitana, Chile
              </p>
              
              {/* Rating Display */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">5.0</span>
                <div className="flex gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">111 opiniones</p>
            </div>
          </motion.div>

          {/* Right Testimonial Card */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Card className="bg-white border border-gray-200 shadow-sm h-full">
                <div className="p-8 h-full flex flex-col justify-center">
                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <ReviewerAvatar reviewer={currentReview.reviewer} size="lg" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {currentReview.reviewer.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={currentReview.rating} size="md" />
                        <span className="text-sm text-gray-500">{currentReview.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comment */}
                  <div className="relative flex-1">
                    <Quote className="absolute -left-2 -top-2 text-gray-200 w-8 h-8" />
                    <p className="text-gray-700 leading-relaxed text-base pl-6">
                      {currentReview.comment}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Arrows - Desktop */}
            {TESTIMONIALS.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-full bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </>
            )}
          </motion.div>
        </div>

        {/* Mobile/Tablet Layout - Stacked */}
        <div className="lg:hidden space-y-6">
          
          {/* Info Panel - Mobile */}
          <motion.div 
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ONG CDI Chile</h3>
              <p className="text-sm text-gray-600 mb-4">
                Puma 1180, Recoleta - If Blanco Recoleta, 8420200 Santiago, Región Metropolitana, Chile
              </p>
              
              {/* Rating Display */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">5.0</span>
                <div className="flex gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">111 opiniones</p>
            </div>
          </motion.div>

          {/* Testimonial Card - Mobile */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Card className="bg-white border border-gray-200 shadow-sm">
                <div className="p-6">
                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <ReviewerAvatar reviewer={currentReview.reviewer} size="lg" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {currentReview.reviewer.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={currentReview.rating} size="md" />
                        <span className="text-sm text-gray-500">{currentReview.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comment */}
                  <div className="relative">
                    <Quote className="absolute -left-2 -top-2 text-gray-200 w-8 h-8" />
                    <p className="text-gray-700 leading-relaxed text-base pl-6">
                      {currentReview.comment}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Arrows - Mobile */}
            {TESTIMONIALS.length > 1 && (
              <div className="flex justify-between items-center mt-4 px-4">
                <button
                  onClick={goToPrevious}
                  className="bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="bg-white border border-gray-300 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        {TESTIMONIALS.length > 1 && (
          <motion.div 
            className="flex justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-cyan-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default GoogleTestimonials;