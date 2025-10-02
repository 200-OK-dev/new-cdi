"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';
import { getFeaturedNews } from '@/app/noticias-y-actualidad/news';
import type { NewsItem } from '@/app/noticias-y-actualidad/types';
import { Calendar, ArrowRight } from 'lucide-react';

const FeaturedNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    const loadFeaturedNews = async () => {
      try {
        const featuredNews = await getFeaturedNews();
        setNews(featuredNews.slice(0, 3)); // Máximo 3 noticias
      } catch (error) {
        console.error('Error loading featured news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedNews();
  }, []);

  // Variantes de animación
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

  // Si no hay noticias destacadas, no mostrar el componente
  if (!isLoading && news.length === 0) {
    return null;
  }

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
            <h2 className="text-4xl font-bold text-custom-red mb-6">
              NOTICIAS<br />
              DESTACADAS
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Mantente al día con las últimas novedades y logros de nuestra comunidad.
            </p>
            <Link href="/noticias-y-actualidad">
              <span className="text-custom-cyan hover:text-custom-cyan-dark font-semibold text-sm inline-flex items-center gap-2">
                Ver todas las noticias <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>

          {/* Tarjetas de noticias - lado derecho */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={gridVariants}
          >
            {isLoading ? (
              // Skeleton loader
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full animate-pulse">
                  <div className="w-full h-48 bg-gray-200" />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="h-4 bg-gray-200 rounded mb-2 w-1/3" />
                    <div className="h-6 bg-gray-200 rounded mb-2" />
                    <div className="h-4 bg-gray-200 rounded mb-4" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))
            ) : (
              news.map((newsItem, index) => {
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
                        src={newsItem.image || "/placeholder.svg"}
                        alt={newsItem.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        width={400}
                        height={250}
                      />
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full ${newsItem.categoryColor} text-white text-xs font-medium`}>
                        {newsItem.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                        <Calendar className="w-3 h-3" />
                        {new Date(newsItem.date + 'T00:00:00').toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <h3 className="text-gray-900 font-semibold text-lg mb-2 line-clamp-2">
                        {newsItem.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-0 flex-grow line-clamp-3">
                        {newsItem.summary}
                      </p>
                      <div className="mt-4">
                        <span className="text-custom-cyan hover:text-custom-cyan-dark font-semibold text-sm">
                          Leer más →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );

                return (
                  <div key={newsItem.id} className="group h-full">
                    <Link
                      href={`/noticias-y-actualidad/${newsItem.slug}`}
                      passHref
                      className="cursor-pointer block h-full no-underline"
                    >
                      {cardContent}
                    </Link>
                  </div>
                );
              })
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
