"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { getFeaturedNews } from '@/app/noticias-y-actualidad/news';
import type { NewsItem } from '@/app/noticias-y-actualidad/types';
import { ArrowRight } from 'lucide-react';
import { NewsCard } from '@/components/news-card';

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
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: isMounted && isDesktop ? -20 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMounted && isDesktop ? 0.6 : 0,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: isMounted && isDesktop ? 30 : 0
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: isMounted && isDesktop ? 0.5 : 0,
        delay: isMounted && isDesktop ? 0.2 + (index * 0.1) : 0,
        ease: "easeOut"
      }
    })
  };

  // Si no hay noticias destacadas, no mostrar el componente
  if (!isLoading && news.length === 0) {
    return null;
  }

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header - Centrado arriba */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <h2 className="text-4xl font-bold text-custom-red mb-4">
            NOTICIAS DESTACADAS
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Mantente al día con las últimas novedades y logros de nuestra comunidad.
          </p>
          <Link href="/noticias-y-actualidad">
            <span className="text-custom-cyan hover:text-custom-cyan-dark font-semibold text-sm inline-flex items-center gap-2 transition-colors">
              Ver todas las noticias <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

        {/* Grid de noticias - 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton loader
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-muted h-48 rounded-t-lg mb-4"></div>
                <div className="bg-muted h-4 rounded mb-2"></div>
                <div className="bg-muted h-4 rounded w-3/4"></div>
              </div>
            ))
          ) : (
            news.map((newsItem, index) => (
              <motion.div
                key={newsItem.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                custom={index}
              >
                <NewsCard news={newsItem} />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
