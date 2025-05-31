import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Varela_Round } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { FooterSection } from "@/components/footer-section"
import { NavFullWidth } from "@/components/Nav"

const inter = Inter({ subsets: ["latin"] })

const varelaRound = Varela_Round({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-varela-round',
})

export const metadata: Metadata = {
  title: "CDI Chile",
  description: "ONG CDI Chile",
  generator: '2000k.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${varelaRound.variable} font-varela-round`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NavFullWidth />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  )
}