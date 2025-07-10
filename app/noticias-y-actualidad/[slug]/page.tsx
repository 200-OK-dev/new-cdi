import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import { getNewsBySlug, getRelatedNews } from "../news"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const news = getNewsBySlug(slug)

  if (!news) {
    notFound()
  }

  // Rest of your component code remains the same
  const relatedNews = getRelatedNews(slug, 3)

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="pl-0 hover:bg-transparent">
          <Link href="/noticias-y-actualidad" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver a noticias
          </Link>
        </Button>
      </div>

      <article className="mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{news.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(news.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{news.readTime} min de lectura</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{news.author}</span>
              </div>
            </div>

            {news.image && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="prose max-w-none">
              {news.content}
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-wrap gap-2 mb-6">
                {news.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Compartir:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://cdi.cl/noticias-y-actualidad/${news.slug}`)}`} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://cdi.cl/noticias-y-actualidad/${news.slug}`)}&text=${encodeURIComponent(news.title)}`} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://cdi.cl/noticias-y-actualidad/${news.slug}`)}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Noticias relacionadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedNews.map((item) => (
                  <div key={item.slug} className="border-b pb-4 last:border-0 last:pb-0">
                    <Link href={`/noticias-y-actualidad/${item.slug}`} className="block group">
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(item.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </div>
  )
}