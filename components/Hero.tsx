'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      className="relative h-screen overflow-hidden border-b flex items-center" 
      style={{backgroundColor: 'oklch(0.9911 0 0)'}}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center opacity-90"
        style={{backgroundImage: `url('/bg.svg')`}}
      ></div>
           
      {/* Centered content */}
      <div className="container mx-auto relative z-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full"
        >
          {/* Desktop: Two-column grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left column - text */}
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
              <Link href="/nosotros" className="cursor-pointer">
                <Button variant="default">¿Qué es CDI?</Button>
              </Link>
            </div>
                            
            {/* Right column - image */}
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

          {/* Mobile: Vertical layout */}
          <div className="flex flex-col lg:hidden h-full justify-center items-center text-center space-y-8">
            {/* Top logo on mobile */}
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
            
            {/* Text and button below on mobile */}
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
                <Link href="/nosotros">
                  <Button variant="default">¿Qué es CDI?</Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
