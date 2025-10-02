'use client'

import { getAllNews } from "./news"
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

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)

      try {
        const limit = 12 // 12 noticias por página
        const startIndex = (currentPage - 1) * limit
        const endIndex = startIndex + limit

        // Load all news (includes static + CMS with smart caching)
        const allNews = await getAllNews()
        const paginatedNews = allNews.slice(startIndex, endIndex)

        setNewsData({
          news: paginatedNews,
          totalPages: Math.ceil(allNews.length / limit),
          hasNextPage: endIndex < allNews.length,
          hasPrevPage: currentPage > 1,
        })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [currentPage]) // Solo dependencia de currentPage

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
        <div className="flex justify-center items-center py-20">
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-muted rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
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
    <Suspense fallback={
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Noticias y Actualizaciones</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente informado sobre nuestras últimas iniciativas, logros y el impacto que estamos generando en las comunidades que servimos.
          </p>
        </div>
        <div className="flex justify-center items-center py-20">
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-muted rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    }>
      <NewsContent />
    </Suspense>
  )
}