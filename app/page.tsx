"use client"

import React from 'react'
import { CommunitySection } from "@/components/community-section"
import { Hero } from "@/components/Hero"
import CardsHome from "@/components/CardsHome"
import GoogleTestimonials from "@/components/GoogleTestimonials"
import { Aliados } from '@/components/Aliados'



export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Resto del contenido */}
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cards Section */}
        <CardsHome />

        {/* Aliados Section */}
        <Aliados />

       
      
        {/* Charts Section
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
        </section> */}

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