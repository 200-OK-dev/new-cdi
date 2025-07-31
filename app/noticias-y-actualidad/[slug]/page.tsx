import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { getNewsBySlug, getRelatedNews } from "@/app/noticias-y-actualidad/news"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params
  const news = getNewsBySlug(slug)

  if (!news) {
    notFound()
  }

  const relatedNews = getRelatedNews(news.id, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <Link href="/noticias" className="hover:text-foreground transition-colors">
          Noticias
        </Link>
        <span>/</span>
        <span className="text-foreground truncate">{news.title}</span>
      </nav>

      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/noticias-y-actualidad">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a noticias
          </Link>
        </Button>
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto">
       {/* Hero Image */}
<div className="mb-8">
  <Image
    src={news.image || "/placeholder.svg"}
    alt={news.title}
    width={2000}      // Usa el tamaño real de tu imagen
    height={1125}     // Mantén la proporción original
    className="w-full h-64 md:h-96 object-cover rounded-lg border"
    quality={95}      // Mejora la calidad
    priority          // Carga prioritaria para imagen principal
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  />
</div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge className={`${news.categoryColor} text-white border-0`}>{news.category}</Badge>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(news.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {news.readTime}
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <User className="w-4 h-4 mr-1" />
              {news.author}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{news.title}</h1>

          <p className="text-lg text-muted-foreground leading-relaxed">{news.summary}</p>
        </div>

        <Separator className="mb-8" />

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: news.content }} />

        {/* Share Buttons - Now below content */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Compartir esta noticia
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button variant="outline" className="flex-1 min-w-[160px] justify-start bg-transparent" asChild>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://cdi.cl/noticias/${news.slug}`)}`} target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </a>
              </Button>
              <Button variant="outline" className="flex-1 min-w-[160px] justify-start bg-transparent" asChild>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://cdi.cl/noticias/${news.slug}`)}&text=${encodeURIComponent(news.title)}`} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </a>
              </Button>
              <Button variant="outline" className="flex-1 min-w-[160px] justify-start bg-transparent" asChild>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://cdi.cl/noticias/${news.slug}`)}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tags */}
        <div className="mb-8 pt-8 border-t border-border">
          <h3 className="text-sm font-semibold text-foreground mb-3">Etiquetas:</h3>
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Related News - Now below everything */}
        {relatedNews.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Noticias Relacionadas</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedNews.map((relatedItem) => (
                <Link key={relatedItem.id} href={`/noticias/${relatedItem.slug}`} className="block group">
                  <div className="space-y-3">
                    <Image
                      src={relatedItem.image || "/placeholder.svg"}
                      alt={relatedItem.title}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded border"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedItem.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(relatedItem.date).toLocaleDateString("es-ES")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}