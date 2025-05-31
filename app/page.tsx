"use client"

import React from 'react'
import Image from 'next/image'

import { Button } from "@/components/ui/button"

import { CommunitySection } from "@/components/community-section"
import { motion } from "framer-motion"
import { Chart1 } from "@/components/charts/chart1"
import { Chart2 } from "@/components/charts/chart2"
import { Chart3 } from "@/components/charts/chart3"
import CardsHome from "@/components/CardsHome"
import GoogleTestimonials from "@/components/GoogleTestimonials"
import { Aliados } from '@/components/Aliados'
import { VerticalInfiniteScroll } from "@/components/Vertical-Infinite-Scroll"

// Datos de ejemplo para el componente VerticalInfiniteScroll
const cdiImages = [
  {
    id: "1",
    src: "/verticalimg/cdiimg1.jpg",
    alt: "CDI Chile - 25 años transformando vidas - Emprender es un camino sin atajos",
  },
  {
    id: "2",
    src: "/verticalimg/cdiimg2.jpg",
    alt: "CDI Chile - Programa de capacitaciones tecnológicas",
  },
  {
    id: "3",
    src: "/verticalimg/cdiimg3.jpg",
    alt: "CDI Chile - Impacto en la comunidad",
  },
  {
    id: "4",
    src: "/verticalimg/cdiimg4.jpg",
    alt: "CDI Chile - Aliados estratégicos",
  },
  {
    id: "5",
    src: "/verticalimg/cdiimg5.jpg",
    alt: "CDI Chile - Testimonios de graduados",
  },
  {
    id: "6",
    src: "/verticalimg/cdiimg6.jpg",
    alt: "CDI Chile - Aliados estratégicos",
  },
  {
    id: "7",
    src: "/verticalimg/cdiimg7.jpg",
    alt: "CDI Chile - Testimonios de graduados",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 100vh en desktop */}
      <section className="relative h-screen overflow-hidden border-b flex items-center" 
         style={{backgroundColor: 'oklch(0.9911 0 0)'}}>
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center opacity-90"
          style={{backgroundImage: `url('/bg.svg')`}}
        ></div>
             
        {/* Contenido del hero centrado verticalmente */}
        <div className="container mx-auto relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full"
          >
            {/* Desktop: Grid de dos columnas */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center h-full">
              {/* Columna de texto (izquierda) */}
              <div className="ml-6 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  <span className="text-custom-yellow">25 años</span>{' '}
                  <span className="text-gray-900">transformando</span>{' '}
                  <span className="text-custom-green">vidas</span>{' '}
                  <span className="text-gray-900">a través de la</span>{' '}
                  <span className="text-custom-cyan">tecnología</span>{' '}
                  <span className="text-gray-900">en</span>{' '}
                  <span className="text-custom-purple">Chile</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  <span>30 años</span>{' '}
                  <span>en el</span>{' '}
                  <span>mundo</span>.
                </p>
                <div>
                  <Button variant="default">Llamado a la acción</Button>
                </div>
              </div>
                               
              {/* Columna de imagen (derecha) */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src="/cdi25.png"
                    alt="CDI Logo"
                    width={600}
                    height={400}
                    className="w-full max-w-xl h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Móvil: Layout vertical centrado */}
            <div className="flex flex-col lg:hidden h-full justify-center items-center text-center space-y-8">
              {/* Logo arriba en móvil */}
              <div className="order-1">
                <Image
                  src="/cdi25.png"
                  alt="CDI Logo"
                  width={320}
                  height={213}
                  className="w-80 h-auto object-contain mx-auto"
                  priority
                />
              </div>
              
              {/* Texto y botón abajo en móvil */}
              <div className="order-2 space-y-6 max-w-lg">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  <span className="text-custom-yellow">25 años</span>{' '}
                  <span className="text-gray-900">transformando</span>{' '}
                  <span className="text-custom-red">vidas</span>{' '}
                  <span className="text-gray-900">a través de la</span>{' '}
                  <span className="text-custom-cyan">tecnología</span>{' '}
                  <span className="text-gray-900">en</span>{' '}
                  <span className="text-custom-purple">Chile</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <span className="text-gray-900">30 años</span>{' '}
                  <span className="text-gray-900">en el</span>{' '}
                  <span className="text-gray-900">mundo</span>.
                </p>
                <div>
                  <Button variant="default">Llamado a la acción</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resto del contenido */}
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cards Section */}
        <CardsHome />

        {/* Aliados Section */}
        <Aliados />

        {/* Infinite Scroll Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl text-custom-yellow text-extra-bold">
              Emprender es...
            </h2>
           
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Columna 1 - Velocidad normal - Siempre visible */}
  <div className="">
    <VerticalInfiniteScroll images={cdiImages} speed={35} />
  </div>
  
  {/* Columna 2 - Velocidad más lenta - Oculta en móvil */}
  <div className="hidden md:block">
    <VerticalInfiniteScroll images={cdiImages.slice().reverse()} speed={35} />
  </div>
  
  {/* Columna 3 - Velocidad más rápida - Oculta en móvil */}
  <div className="hidden lg:block">
    {/* <h3 className="text-lg font-semibold mb-4 text-center text-foreground">Comunidad</h3> */}
    <VerticalInfiniteScroll images={cdiImages} speed={35} />
  </div>
</div>
        </section>
      
        {/* Charts Section */}
        <section className="py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-custom-green text-extra-bold mb-4">
              Charts Section
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Empresas de todos los tamaños confían en nosotros para impulsar su crecimiento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Chart1 />
            <Chart2 />
            <Chart3 />
          </div>
        </section>

        {/* Community Section */}
        <CommunitySection />
   
        {/* Testimonials Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 pb-12">
          <GoogleTestimonials 
            title="Lo que dicen nuestros beneficiarios"
            subtitle="Testimonios reales de personas que han experimentado nuestro impacto"
            autoPlay={true}
            autoPlayInterval={5000}
          />
          </div>
        </section>
      </div>
    </div>
  )
}