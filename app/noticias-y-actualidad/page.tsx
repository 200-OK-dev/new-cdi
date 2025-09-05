'use client'

import { getStaticNews, getDynamicNews } from "./news"
import { NewsCard } from "@/components/news-card"
import { NewsPagination } from "@/components/news-pagination"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { NewsItem } from "./types"

function NewsContent() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
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
  const [loadingDynamic, setLoadingDynamic] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      setLoadingDynamic(true)
      
      try {
        // 1. Mostrar noticias estáticas INMEDIATAMENTE
        const staticNews = getStaticNews()
        const limit = 6
        const startIndex = (currentPage - 1) * limit
        const endIndex = startIndex + limit
        const initialPaginatedStatic = staticNews.slice(startIndex, endIndex)
        
        setNewsData({
          news: initialPaginatedStatic,
          totalPages: Math.ceil(staticNews.length / limit),
          hasNextPage: endIndex < staticNews.length,
          hasPrevPage: currentPage > 1,
        })
        setLoading(false) // Quita skeleton loading
        
        // 2. Luego cargar dinámicas y combinar
        const dynamicNews = await getDynamicNews()
        const allNews = [...dynamicNews, ...staticNews]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        
        const finalPaginated = allNews.slice(startIndex, endIndex)
        
        setNewsData({
          news: finalPaginated,
          totalPages: Math.ceil(allNews.length / limit),
          hasNextPage: endIndex < allNews.length,
          hasPrevPage: currentPage > 1,
        })
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoadingDynamic(false)
      }
    }

    fetchNews()
  }, [currentPage])

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
          {[...Array(6)].map((_, i) => (
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
          {/* Loading indicator for dynamic news */}
          {loadingDynamic && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
              📡 Cargando noticias más recientes desde el CMS...
            </div>
          )}
          
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