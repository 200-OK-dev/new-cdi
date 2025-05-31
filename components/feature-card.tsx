"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="p-6 h-full">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  )
}
