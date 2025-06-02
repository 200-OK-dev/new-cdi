// components/theme-switcher.tsx
"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-10 w-10">
        <div className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-10 w-10"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* Mostrar Moon en light mode */}
      <Moon 
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === 'dark' 
            ? 'rotate-90 scale-0 opacity-0' 
            : 'rotate-0 scale-100 opacity-100'
        }`} 
      />
      
      {/* Mostrar Sun en dark mode */}
      <Sun 
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === 'dark' 
            ? 'rotate-0 scale-100 opacity-100' 
            : 'rotate-90 scale-0 opacity-0'
        }`} 
      />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}