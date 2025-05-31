'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function NoticiasYActualidad() {
  return (
    <main className="flex flex-col items-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold mb-6">Noticias y Actualidad</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Esta página reemplaza a "Primitives" y puede contener información sobre la fundación, misión, visión, equipo, etc.
        </p>

        <div className="bg-card rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestra historia</h2>
          <p className="text-muted-foreground mb-4">
            UI primitives are the foundational building blocks of our design system. They provide 
            accessible, unstyled components that you can customize to match your design needs.
          </p>
          <Button className="mt-2">Conoce más</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-card rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-medium mb-3">Buttons</h3>
            <p className="text-muted-foreground mb-4">
              Interactive elements that trigger actions throughout the interface.
            </p>
            <div className="flex gap-2">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-card rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-medium mb-3">Form Elements</h3>
            <p className="text-muted-foreground mb-4">
              Input components for collecting user data and feedback.
            </p>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Text input example" 
                className="w-full px-3 py-2 border rounded-md"
              />
              <Button className="w-full">Submit</Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
