"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Copy, Check } from "lucide-react"
import { Separator } from "./ui/separator"
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

export function FooterSection() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4 text-foreground">CDI Chile</h3>
            <p className="text-muted-foreground text-sm mb-4">
              <span className="block">25 años transformando vidas</span>
              <span className="block">a través de la tecnología</span>
              <span className="block">en Chile.</span>
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">Navegación</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/quienes-somos" className="hover:text-foreground">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/cdi-capacitaciones" className="hover:text-foreground">
                  CDI Capacitaciones
                </Link>
              </li>
              <li>
                <Link href="/aliados" className="hover:text-foreground">
                  Aliados
                </Link>
              </li>

              <li>
                <Link href="/impacto" className="hover:text-foreground">
                  Impacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">Redes Sociales</h4>
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start h-8 px-2 text-muted-foreground hover:text-foreground"
                asChild
              >
                <Link href="https://www.facebook.com/CDIChile" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start h-8 px-2 text-muted-foreground hover:text-foreground"
                asChild
              >
                <Link href="https://www.instagram.com/cdichile" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start h-8 px-2 text-muted-foreground hover:text-foreground"
                asChild
              >
                <Link href="https://www.linkedin.com/school/ongcdichile/?originalSubdomain=cl" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start h-8 px-2 text-muted-foreground hover:text-foreground"
                asChild
              >
                <Link href="https://www.youtube.com/@ongcdichile7907" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start h-8 px-2 text-muted-foreground hover:text-foreground"
                asChild
              >
                <Link href="https://twitter.com/cdichile" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span>contacto@cdichile.org</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 ml-2 text-muted-foreground hover:text-foreground"
                        onClick={() => copyToClipboard("contacto@cdichile.org")}
                      >
                        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? "¡Copiado!" : "Copiar email"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li>+56 9 5130 3647</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>
        <Separator className="mb-6" />
        <div className="text-xs text-muted-foreground/70">
          <p>© 2025 CDI Chile.</p>
          <p>Sitio Hecho por <a href="https://2000k.dev" target="_blank" rel="noopener noreferrer">2000k.dev</a></p>
        </div>
      </div>
    </footer>
  )
}
