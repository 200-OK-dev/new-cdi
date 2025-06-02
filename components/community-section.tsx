"use client"
import { motion } from "framer-motion"
import type React from "react"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, MessageCircle, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function CommunitySection() {
  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6 md:w-6 md:h-6" />,
      title: "Instagram",
      description: "",
      href: "https://www.instagram.com/cdichile",
      color: "text-pink-600",
      bgColor: "bg-white/50 dark:bg-white",
      borderColor: "border-custom-red border-opacity-50",
      cardBgColor: "bg-background",
    },
    {
      icon: <Facebook className="w-6 h-6 md:w-6 md:h-6" />,
      title: "Facebook",
      description: "",
      href: "https://www.facebook.com/CDIChile",
      color: "text-blue-600",
      bgColor: "bg-white/50 dark:bg-white",
      borderColor: "border-custom-orange border-opacity-50",
      cardBgColor: "bg-background",
    },
    {
      icon: <Youtube className="w-6 h-6 md:w-6 md:h-6" />,
      title: "YouTube",
      description: "",
      href: "https://www.youtube.com/@ongcdichile7907",
      color: "text-red-600",
      bgColor: "bg-white/50 dark:bg-white",
      borderColor: "border-custom-yellow border-opacity-50",
      cardBgColor: "bg-background",
    },
    {
      icon: <MessageCircle className="w-6 h-6 md:w-6 md:h-6" />,
      title: "WhatsApp",
      description: "",
      href: "https://www.whatsapp.com/channel/0029Vb5TEQmHAdNW4ZsZlH1t",
      color: "text-green-600",
      bgColor: "bg-white/50 dark:bg-white",
      borderColor: "border-custom-green border-opacity-50",
      cardBgColor: "bg-background",
    },
    {
      icon: <Twitter className="w-6 h-6 md:w-6 md:h-6" />,
      title: "Twitter",
      description: "",
      href: "https://twitter.com/CDIChile",
      color: "text-sky-600",
      bgColor: "bg-white/50 dark:bg-white",
      borderColor: "border-custom-cyan border-opacity-50",
      cardBgColor: "bg-background",
    },
    {
      icon: <Linkedin className="w-6 h-6 md:w-6 md:h-6" />,
      title: "LinkedIn",
      description: "",
      href: "https://www.linkedin.com/school/ongcdichile/?originalSubdomain=cl",
      color: "text-blue-700",
      bgColor: "bg-slate-200 dark:bg-white",
      borderColor: "border-blue-700 border-opacity-50",
      cardBgColor: "bg-background",
    },
  
  ]

  return (
    <section className="py-16 md:py-24 dark:bg-background">
      <div className="container px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl text-custom-cyan text-extra-bold mb-4">Únete a Nuestra Comunidad</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
            Conecta con personas comprometidas con la transformación social. Comparte ideas, obtén apoyo y contribuye al
            cambio.
          </p>

          {/* Grid más compacto en desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => (
              <Link
                key={social.title}
                href={social.href}
                className="block group aspect-square"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialCard {...social} delay={index * 0.1} />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

type SocialCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  color: string
  bgColor: string
  cardBgColor?: string
  borderColor?: string
  delay?: number
}

function SocialCard({ icon, title, description, color, bgColor, cardBgColor, borderColor, delay = 0 }: SocialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full w-full"
    >
      <Card
        className={`h-full w-full border-2 ${borderColor || 'border-transparent'} shadow-md hover:shadow-xl transition-all duration-100 group-hover:border-opacity-100 ${cardBgColor || ""}`}
        style={cardBgColor ? { backgroundColor: "" } : {}}
      >
        <CardContent className="p-3 md:p-4 lg:p-3 text-center h-full flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center flex-1">
            <div
              className={`inline-flex p-2 md:p-2 lg:p-2 rounded-full ${bgColor} mb-2 md:mb-3 lg:mb-2 group-hover:scale-110 transition-transform duration-100`}
            >
              <div className={color}>{icon}</div>
            </div>
            <h3 className="font-bold text-sm md:text-base lg:text-sm mb-1 md:mb-2 text-foreground">{title}</h3>
            <p className="text-xs md:text-sm lg:text-xs text-black dark:text-white leading-relaxed line-clamp-3">{description}</p>
          </div>

          {/* Indicador de enlace */}
          <div className="mt-2 md:mt-3 lg:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
            <span
              className={`text-xs font-medium ${color.replace("text-", "text-")} flex items-center justify-center gap-1`}
            >
              Visitar
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}