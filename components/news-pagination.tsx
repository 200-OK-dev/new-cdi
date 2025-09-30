import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewsPaginationProps {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export function NewsPagination({ currentPage, totalPages, hasNextPage, hasPrevPage }: NewsPaginationProps) {
  const generatePageNumbers = () => {
    const pages = []
    const showPages = 5 // Número de páginas a mostrar

    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2))
    const endPage = Math.min(totalPages, startPage + showPages - 1)

    // Ajustar si estamos cerca del final
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  if (totalPages <= 1) return null

  const pageNumbers = generatePageNumbers()

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-muted-foreground">
        Página {currentPage} de {totalPages}
      </div>

      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        {hasPrevPage ? (
          <Button variant="outline" size="sm" asChild>
            <Link href={`/noticias-y-actualidad?page=${currentPage - 1}`}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </Link>
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="w-4 h-4 mr-1" />
            Anterior
          </Button>
        )}

        {/* Page Numbers */}
        <div className="hidden sm:flex items-center space-x-1">
          {pageNumbers.map((pageNum) => (
            <Button
              key={pageNum}
              variant={pageNum === currentPage ? "default" : "outline"}
              size="sm"
              asChild={pageNum !== currentPage}
            >
              {pageNum === currentPage ? (
                <span>{pageNum}</span>
              ) : (
                <Link href={`/noticias-y-actualidad?page=${pageNum}`}>{pageNum}</Link>
              )}
            </Button>
          ))}
        </div>

        {/* Next Button */}
        {hasNextPage ? (
          <Button variant="outline" size="sm" asChild>
            <Link href={`/noticias-y-actualidad?page=${currentPage + 1}`}>
              Siguiente
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled>
            Siguiente
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        )}
      </div>
    </div>
  )
}
