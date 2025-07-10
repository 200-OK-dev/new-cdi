import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import { getNewsBySlug, getRelatedNews } from "../news"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface NewsDetailPageProps {
  params: { slug: string }
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const news = getNewsBySlug(params.slug)

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
        <Link href="/noticias-y-actualidad" className="hover:text-foreground transition-colors">
          Noticias
        </Link>
        <span>/</span>
        <span className="text-foreground truncate">{news.title}</span>
      </nav>

      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/noticias">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a noticias
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hero Image */}
          <div className="mb-8">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg border"
                priority
              />
            </div>
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
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: news.content }} />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3">Etiquetas:</h3>
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Share Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Compartir
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </CardContent>
          </Card>

          {/* Related News */}
          {relatedNews.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Noticias Relacionadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedNews.map((relatedItem) => (
                  <Link key={relatedItem.id} href={`/noticias/${relatedItem.slug}`} className="block group">
                    <div className="flex space-x-3">
                      <img
                        src={relatedItem.image || "/placeholder.svg"}
                        alt={relatedItem.title}
                        className="w-16 h-16 object-cover rounded border flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
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

          {/* Call to Action */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-foreground">¡Únete a Nuestra Causa!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Ayúdanos a seguir generando impacto positivo en las comunidades.
              </p>
              <div className="space-y-2">
                <Button className="w-full">Donar Ahora</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Ser Voluntario
                </Button>
                <Button variant="ghost" className="w-full">
                  Suscribirse
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
