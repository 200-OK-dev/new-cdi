'use client'

import { motion } from 'framer-motion'

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

// Función helper para extraer el ID del video de YouTube
export function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  return match ? match[1] : null
}

// Componente para videos de YouTube
export const YouTubeEmbed = ({ videoId, title, className }: YouTubeEmbedProps) => {
  return (
    <motion.div 
      className={`my-8 ${className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="relative aspect-video w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || "Video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </motion.div>
  )
}