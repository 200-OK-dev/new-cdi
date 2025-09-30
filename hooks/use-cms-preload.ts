'use client'

import { useEffect, useRef } from 'react'
import { apiClient, CMSNewsItem } from '@/lib/api-client'

// Cache global compartido entre componentes
interface CacheEntry {
  data: CMSNewsItem[] | null
  timestamp: number | null
  isLoading: boolean
  error: Error | null
}

const cmsCache: CacheEntry = {
  data: null,
  timestamp: null,
  isLoading: false,
  error: null
}

const CACHE_DURATION = 3 * 60 * 1000 // 3 minutos de cache

export function useCMSPreload() {
  const hasStartedRef = useRef(false)

  useEffect(() => {
    // Solo ejecutar una vez por sesión del navegador
    if (hasStartedRef.current) return
    hasStartedRef.current = true

    const preloadCMS = async () => {
      // Verificar si ya tenemos datos válidos en cache
      const now = Date.now()
      const cacheIsValid = cmsCache.timestamp &&
        (now - cmsCache.timestamp) < CACHE_DURATION

      if (cacheIsValid || cmsCache.isLoading) {
        console.log('✅ CMS ya pre-cargado o en progreso')
        return
      }

      try {
        cmsCache.isLoading = true
        cmsCache.error = null
        console.log('🚀 Iniciando pre-carga del CMS desde home...')

        // Llamada para "calentar" el servicio y cachear datos
        const data = await apiClient.fetchNews()

        // Actualizar cache global
        cmsCache.data = data
        cmsCache.timestamp = now

        console.log(`✅ CMS pre-cargado exitosamente: ${data.length} noticias`)
      } catch (error) {
        console.warn('⚠️ Error en pre-carga del CMS:', error)
        cmsCache.error = error as Error
      } finally {
        cmsCache.isLoading = false
      }
    }

    // Iniciar pre-carga después de 0.5 segundos para no afectar el home
    const timer = setTimeout(preloadCMS, 500)

    return () => clearTimeout(timer)
  }, [])

  return {
    getCachedData: () => cmsCache.data,
    getCacheStatus: () => ({
      isLoading: cmsCache.isLoading,
      error: cmsCache.error,
      lastUpdate: cmsCache.timestamp
    }),
    isCacheValid: () => {
      const now = Date.now()
      return cmsCache.timestamp && (now - cmsCache.timestamp) < CACHE_DURATION
    },
    clearCache: () => {
      cmsCache.data = null
      cmsCache.timestamp = null
      cmsCache.isLoading = false
      cmsCache.error = null
    }
  }
}

// Hook para acceder a los datos pre-cargados desde otros componentes
export function usePreloadedCMS() {
  return {
    getCachedNews: () => cmsCache.data,
    isCacheValid: () => {
      const now = Date.now()
      return cmsCache.timestamp && (now - cmsCache.timestamp) < CACHE_DURATION
    },
    getCacheInfo: () => ({
      hasData: !!cmsCache.data,
      isLoading: cmsCache.isLoading,
      lastUpdate: cmsCache.timestamp,
      dataCount: cmsCache.data?.length || 0
    })
  }
}