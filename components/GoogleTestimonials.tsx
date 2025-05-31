// GoogleTestimonials.jsx
// Componente completo para mostrar testimonios de Google My Business
// Incluye: API integration, caching, error handling, fallback testimonials

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@chakra-ui/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// ========================================
// 1. CONFIGURACIÓN Y TIPOS
// ========================================

interface CacheItem {
  data: ProcessedReview[];
  timestamp: number;
}

interface Review {
  reviewId: string;
  authorName: string;
  profilePhotoUrl: string | null;
  starRating: number;
  comment: string;
  reviewCreateTime: string;
}

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

interface GoogleResponse {
  reviews: Review[];
  nextPageToken?: string;
}

interface UseGoogleReviewsResponse {
  reviews: ProcessedReview[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  isAuthenticated: boolean;
}

interface GoogleTestimonialsProps {
  locationName?: string;
  title?: string;
  subtitle?: string;
  enabled?: boolean;
  showRefreshButton?: boolean;
  className?: string;
  useFallback?: boolean;
  showErrorMessage?: boolean;
  // Nuevas props para el carrusel
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// ========================================
// 2. CONFIGURACIÓN Y CONSTANTES
// ========================================

const CACHE_DURATION = 30 * 60 * 1000; // 30 minutos
const FILTER_CONFIG = {
  minStars: 4,
  minCommentLength: 10,
  maxCommentLength: 500,
  recentMonths: 12,
  maxReviews: 10
};

// Testimonios estáticos como fallback
const FALLBACK_TESTIMONIALS: ProcessedReview[] = [
  {
    id: 'fallback-1',
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
    id: 'fallback-2',
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
    id: 'fallback-3',
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
    id: 'fallback-4',
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
// 3. SERVICIO DE CACHÉ
// ========================================

class ReviewsCache {
  private cache: Map<string, CacheItem> = new Map();

  set(key: string, data: ProcessedReview[]): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key: string): CacheItem | null {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > CACHE_DURATION) {
      this.cache.delete(key);
      return null;
    }

    return item;
  }

  clear(key: string): void {
    this.cache.delete(key);
  }
}

const reviewsCache = new ReviewsCache();

// ========================================
// 4. SERVICIO DE GOOGLE MY BUSINESS
// ========================================

class GoogleAuthClient {
  private clientId: string;
  private clientSecret: string;
  private redirectUri: string;

  constructor() {
    this.clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
    this.clientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET || '';
    this.redirectUri = process.env.REACT_APP_REDIRECT_URI || '';
  }

  async authenticate(): Promise<string> {
    // Implementar la lógica de autenticación
    return '';
  }
}

class GoogleMyBusinessService {
  private authClient: GoogleAuthClient | null = null;
  private isInitialized: boolean = false;

  async initialize(): Promise<void> {
    this.authClient = new GoogleAuthClient();
    this.isInitialized = true;
  }

  async authenticate(): Promise<string> {
    if (!this.isInitialized) {
      await this.initialize();
    }
    if (!this.authClient) {
      throw new Error('Auth client not initialized');
    }
    return this.authClient.authenticate();
  }

  async getLocationReviews(accessToken: string, locationName: string): Promise<GoogleResponse> {
    try {
      const response = await fetch(
        `https://mybusiness.googleapis.com/v4/${locationName}/reviews?pageSize=50&orderBy=updateTime desc`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { reviews: data.reviews || [] };
    } catch (error) {
      console.error('Error obteniendo reviews:', error);
      throw error;
    }
  }
}

const googleService = new GoogleMyBusinessService();

// ========================================
// 5. PROCESAMIENTO DE REVIEWS
// ========================================

const processReviews = (response: GoogleResponse): ProcessedReview[] => {
  const reviews = response.reviews || [];
  
  return reviews
    .filter((review) => review.starRating >= FILTER_CONFIG.minStars)
    .filter((review) => {
      if (!review.comment) return false;
      const commentLength = review.comment.trim().length;
      return commentLength >= FILTER_CONFIG.minCommentLength && 
             commentLength <= FILTER_CONFIG.maxCommentLength;
    })
    .filter((review) => {
      const reviewDate = new Date(review.reviewCreateTime);
      const cutoffDate = new Date();
      cutoffDate.setMonth(cutoffDate.getMonth() - FILTER_CONFIG.recentMonths);
      return reviewDate >= cutoffDate;
    })
    .sort((a, b) => {
      const dateA = new Date(a.reviewCreateTime);
      const dateB = new Date(b.reviewCreateTime);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, FILTER_CONFIG.maxReviews)
    .map((review): ProcessedReview => ({
      id: review.reviewId,
      rating: review.starRating,
      comment: review.comment.trim(),
      date: new Date(review.reviewCreateTime).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      reviewer: {
        name: review.authorName,
        photo: review.profilePhotoUrl,
        initials: review.authorName
          ? review.authorName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()
          : 'UV'
      }
    }));
};

// ========================================
// 6. HOOK PERSONALIZADO
// ========================================

const useGoogleReviews = (locationName: string | null, enabled: boolean = true, useFallback: boolean = true): UseGoogleReviewsResponse => {
  const [reviews, setReviews] = useState<ProcessedReview[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const fetchReviews = async () => {
    if (!enabled || !locationName) {
      if (useFallback) {
        setReviews(FALLBACK_TESTIMONIALS);
      }
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const cached = reviewsCache.get(locationName);
      if (cached) {
        setReviews(cached.data);
        return;
      }

      const accessToken = await googleService.authenticate();
      const response = await googleService.getLocationReviews(accessToken, locationName);
      const processed = processReviews(response);
      
      reviewsCache.set(locationName, processed);
      setReviews(processed);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError('Error al obtener los testimonios. Mostrando testimonios destacados.');
      
      if (useFallback) {
        setReviews(FALLBACK_TESTIMONIALS);
      } else {
        setReviews([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [locationName, enabled]);

  const refetch = async () => {
    if (locationName) {
      reviewsCache.clear(locationName);
      await fetchReviews();
    }
  };

  return {
    reviews,
    loading,
    error,
    refetch,
    isAuthenticated
  };
};

// ========================================
// 7. COMPONENTES UI
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
    <div className={`relative ${sizeClasses[size]} rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700`}
         style={{
           backgroundImage: reviewer.photo ? `url(${reviewer.photo})` : undefined,
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
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
// 8. COMPONENTE PRINCIPAL CON CARRUSEL
// ========================================

const GoogleTestimonials: React.FC<GoogleTestimonialsProps> = ({ 
  locationName,
  title = "Lo que dicen nuestros beneficiarios",
  subtitle = "Testimonios reales de personas que han experimentado nuestro impacto",
  enabled = true,
  showRefreshButton = false,
  className = "",
  useFallback = true,
  showErrorMessage = false,
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const { reviews, loading, error, refetch } = useGoogleReviews(locationName || null, enabled, useFallback);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play del carrusel
  useEffect(() => {
    if (!autoPlay || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, reviews.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!reviews.length && !useFallback) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg">
        <p className="text-sm">No hay testimonios disponibles.</p>
      </div>
    );
  }

  const currentReview = reviews[currentIndex];

  return (
    <div className={`space-y-6 ${className}`}>
    {/* Header Section */}
    <div className="text-center">
      <h2 className="text-3xl md:text-5xl text-custom-purple text-extra-bold mb-4">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">{subtitle}</p>
    </div>
    
    {/* Error Message */}
    {error && showErrorMessage && (
      <div className="p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg">
        <p className="text-sm">{error}</p>
      </div>
    )}
    
    {/* Carousel Container */}
    <div className="relative max-w-6xl mx-auto">
      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex items-stretch gap-8">
        
        {/* Left Info Panel - Same height as testimonial card */}
        <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-center">
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
        </div>

        {/* Right Testimonial Card */}
        <div className="flex-1 relative">
          {currentReview && (
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
          )}

          {/* Navigation Arrows - Desktop */}
          {reviews.length > 1 && (
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
        </div>
      </div>

      {/* Mobile/Tablet Layout - Stacked */}
      <div className="lg:hidden space-y-6">
        
        {/* Info Panel - Mobile */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
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
        </div>

        {/* Testimonial Card - Mobile */}
        <div className="relative">
          {currentReview && (
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
          )}

          {/* Navigation Arrows - Mobile */}
          {reviews.length > 1 && (
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
        </div>
      </div>

      {/* Dots Indicator */}
      {reviews.length > 1 && (
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-cyan-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
    
    {/* Refresh Button */}
    {showRefreshButton && (
      <div className="text-center">
        <Button 
          onClick={refetch}
          colorScheme="blue"
          size="sm"
          variant="outline"
        >
          Refrescar testimonios
        </Button>
      </div>
    )}
  </div>
);
};

export default GoogleTestimonials;