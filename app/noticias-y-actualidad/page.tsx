'use client'

import { getStaticNews, getAllNews } from "./news"
import { NewsCard } from "@/components/news-card"
import { NewsPagination } from "@/components/news-pagination"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { NewsItem } from "./types"
import { usePreloadedCMS } from "@/hooks/use-cms-preload"

function NewsContent() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const { getCachedNews, isCacheValid, getCacheInfo } = usePreloadedCMS()
  const [newsData, setNewsData] = useState<{
    news: NewsItem[]
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }>({
    news: [],
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)

      try {
        // 1. First load static news immediately
        const staticNews = getStaticNews()
        const limit = 12 // Aumentado de 6 a 12 noticias por página
        const startIndex = (currentPage - 1) * limit
        const endIndex = startIndex + limit
        const initialPaginatedStatic = staticNews.slice(startIndex, endIndex)

        setNewsData({
          news: initialPaginatedStatic,
          totalPages: Math.ceil(staticNews.length / limit),
          hasNextPage: endIndex < staticNews.length,
          hasPrevPage: currentPage > 1,
        })
        setLoading(false)

        // 2. Load all news (will automatically use pre-loaded cache if available)
        const cacheInfo = getCacheInfo()
        console.log('📊 Cache info:', cacheInfo)

        const allNews = await getAllNews() // This handles all cache logic internally
        const finalPaginated = allNews.slice(startIndex, endIndex)

        setNewsData({
          news: finalPaginated,
          totalPages: Math.ceil(allNews.length / limit),
          hasNextPage: endIndex < allNews.length,
          hasPrevPage: currentPage > 1,
        })
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }

    fetchNews()
  }, [currentPage]) // Solo dependencia de currentPage para evitar loops

  const { news, totalPages, hasNextPage, hasPrevPage } = newsData

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight mb-4"
          variants={fadeInUp}
        >
          Noticias y Actualizaciones
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Mantente informado sobre nuestras últimas iniciativas, logros y el impacto que estamos generando en las
          comunidades que servimos.
        </motion.p>
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <div className="bg-gray-200 h-4 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      )}

      {/* News Grid */}
      {!loading && (
        <>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {news.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
        </>
      )}

      {/* Pagination */}
      {!loading && (
        <NewsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
      )}
    </div>
  )
}

export default function NewsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center">Cargando noticias...</div>}>
      <NewsContent />
    </Suspense>
  )
}