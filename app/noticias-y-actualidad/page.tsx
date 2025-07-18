'use client'

import { getPaginatedNews } from "./news"
import { NewsCard } from "@/components/news-card"
import { NewsPagination } from "@/components/news-pagination"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"

export default function NewsPage() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const { news, totalPages, hasNextPage, hasPrevPage } = getPaginatedNews(currentPage, 6)

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

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {news.map((newsItem) => (
          <NewsCard key={newsItem.id} news={newsItem} />
        ))}
      </div>

      {/* Pagination */}
      <NewsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
    </div>
  )
}