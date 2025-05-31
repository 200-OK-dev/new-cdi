"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What developers are saying</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 italic text-muted-foreground">
                  "Radix has completely changed how I build components. The accessibility features built-in save me
                  countless hours of work."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div className="ml-3">
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">Senior Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 italic text-muted-foreground">
                  "The unstyled approach gives me complete freedom while ensuring all the complex accessibility work is
                  handled for me."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div className="ml-3">
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-sm text-muted-foreground">UI Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 italic text-muted-foreground">
                  "Our team's productivity skyrocketed after adopting Radix. We can focus on business logic instead of
                  reinventing UI primitives."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted"></div>
                  <div className="ml-3">
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Tech Lead</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
