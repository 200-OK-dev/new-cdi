"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ScrollImage {
  id: string
  src: string
  alt: string
}

interface VerticalInfiniteScrollProps {
  images: ScrollImage[]
  speed?: number
  className?: string
}

export function VerticalInfiniteScroll({ images, speed = 30, className = "" }: VerticalInfiniteScrollProps) {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicamos las imágenes para crear el efecto infinito
  const duplicatedImages = [...images, ...images]

  return (
    <div className={`relative h-[100vh] overflow-hidden ${className}`}>
      <div
        className="flex flex-col gap-4 animate-scroll-vertical"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedImages.map((image, index) => (
          <Card
            key={`${image.id}-${index}`}
            className="flex-shrink-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-[500px]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Gradientes para efecto de fade */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  )
}
