"use client"

import React from 'react'
import { CommunitySection } from "@/components/community-section"
import { Hero } from "@/components/Hero"
import GoogleTestimonials from "@/components/GoogleTestimonials"
import { Aliados } from '@/components/Aliados'
import FeaturedPrograms from '@/components/Featured-Programs'
import FeaturedProjects from '@/components/Featured-Projects'
import { useCMSPreload } from '@/hooks/use-cms-preload'


export default function Home() {
  // Activar pre-carga del CMS desde que el usuario llega al home
  useCMSPreload()
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Resto del contenido */}
      <div className="container mx-auto px-4 relative z-10">
        
       
        {/* Featured Programs Section */}
        <FeaturedPrograms />
        
        {/* Featured Projects Section */}
        <FeaturedProjects />
        {/* Aliados Section */}
        <Aliados />
        {/* Community Section */}
        <CommunitySection />
   
        {/* Testimonials Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 pb-12">
          <GoogleTestimonials 
            title="Lo que dicen nuestros Participantes"
            subtitle="Testimonios reales de personas que han experimentado nuestro impacto"
            autoPlay={true}
            autoPlayInterval={10000}
          />
          </div>
        </section>
      </div>
    </div>
  )
} 