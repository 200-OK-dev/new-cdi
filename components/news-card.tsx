import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { NewsItem } from "../app/noticias-y-actualidad/news"

interface NewsCardProps {
  news: NewsItem
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className={`${news.categoryColor} text-white border-0`}>{news.category}</Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(news.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {news.readTime}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {news.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{news.summary}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-primary/5 group-hover:border-primary/30 transition-colors bg-transparent"
        >
          <Link href={`/noticias-y-actualidad/${news.slug}`}>
            Leer más
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
