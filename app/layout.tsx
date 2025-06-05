import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Varela_Round } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { FooterSection } from "@/components/Footer"
import { NavFullWidth } from "@/components/Nav"
import { vagRoundedLight, vagRoundedBold, vagRoundedBlack } from './fonts';

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-varela-round',
})

export const metadata: Metadata = {
  title: {
    default: 'CDI Chile - Transformando vidas a través de la tecnología',
    template: '%s | CDI Chile'
  },
  description: 'CDI Chile - 25 años transformando vidas a través de la tecnología. ONG dedicada al empoderamiento digital y capacitación tecnológica.',
  generator: '2000k.dev',
  metadataBase: new URL('https://cdichile.org'), // Cambia por tu dominio
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://cdichile.org', // Cambia por tu dominio
    title: 'CDI Chile - Transformando vidas a través de la tecnología',
    description: 'CDI Chile - 25 años transformando vidas a través de la tecnología. ONG dedicada al empoderamiento digital y capacitación tecnológica.',

    siteName: 'CDI Chile',
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CDIChile', // Opcional: tu handle de Twitter
    creator: '@CDIChile', // Opcional: tu handle de Twitter
    title: 'CDI Chile - Transformando vidas a través de la tecnología',
    description: 'CDI Chile - 25 años transformando vidas a través de la tecnología. Somos una ONG dedicada al empoderamiento digital.',
    images: ['/logo.png'], // Misma imagen que Open Graph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Metadatos adicionales
  keywords: [
    'CDI Chile',
    'inclusión digital',
    'tecnología',
    'educación',
    'ONG',
    'empoderamiento digital',
    'capacitación',
    'transformación social'
  ],
  authors: [{ name: 'CDI Chile' }],
  creator: 'CDI Chile',
  publisher: 'CDI Chile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Metadatos adicionales que no maneja automáticamente Next.js */}
        <meta name="description" content="CDI Chile - 25 años transformando vidas a través de la tecnología. ONG dedicada al empoderamiento digital y capacitación tecnológica." />
        <meta name="theme-color" content="#10B981" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${varelaRound.variable} ${vagRoundedLight.variable} ${vagRoundedBold.variable} ${vagRoundedBlack.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light"
          enableSystem={false} // Cambiar a false
        >
          <NavFullWidth />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  )
}