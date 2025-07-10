import { getPaginatedNews } from "./news"
import { NewsCard } from "@/components/news-card"
import { NewsPagination } from "@/components/news-pagination"

interface NewsPageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const resolvedSearchParams = await searchParams
  const currentPage = Number(resolvedSearchParams.page) || 1
  const { news, totalPages, hasNextPage, hasPrevPage } = getPaginatedNews(currentPage, 6)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Noticias y Actualizaciones</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Mantente informado sobre nuestras últimas iniciativas, logros y el impacto que estamos generando en las
          comunidades que servimos.
        </p>
      </div>

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