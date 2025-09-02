'use client'

import { YouTubeEmbed } from './youtube-embed'

interface NewsContentRendererProps {
  content: string
  className?: string
}

interface ContentPart {
  type: 'html' | 'youtube'
  content?: string
  videoId?: string
  title?: string
}

export function NewsContentRenderer({ content, className }: NewsContentRendererProps) {
  // Función para procesar el contenido y reemplazar marcadores de YouTube
  const processContent = (htmlContent: string): ContentPart[] => {
    // Buscar marcadores de YouTube
    const youtubeRegex = /<div class="youtube-video" data-video-id="([^"]+)"(?:\s+data-video-title="([^"]*)")?><\/div>/g
    const parts: ContentPart[] = []
    let lastIndex = 0
    let match

    while ((match = youtubeRegex.exec(htmlContent)) !== null) {
      // Agregar contenido antes del video
      if (match.index > lastIndex) {
        parts.push({
          type: 'html',
          content: htmlContent.slice(lastIndex, match.index)
        })
      }

      // Agregar el video
      parts.push({
        type: 'youtube',
        videoId: match[1],
        title: match[2] || 'Video'
      })

      lastIndex = match.index + match[0].length
    }

    // Agregar contenido restante
    if (lastIndex < htmlContent.length) {
      parts.push({
        type: 'html',
        content: htmlContent.slice(lastIndex)
      })
    }

    return parts
  }

  const contentParts = processContent(content)

  return (
    <div className={className}>
      {contentParts.map((part, index) => {
        // Solución 3: Type guard más explícito
        if (part.type === 'youtube' && typeof part.videoId === 'string') {
          return (
            <YouTubeEmbed
              key={index}
              videoId={part.videoId}
              title={part.title || 'Video'}
              className="my-6"
            />
          )
        } else if (part.type === 'html' && part.content) {
          return (
            <div
              key={index}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: part.content }}
            />
          )
        }
        return null
      })}
    </div>
  )
}