'use client'

import Link from "next/link";
import { useState } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/programas-y-proyectos", label: "Programas y Proyectos" },
  { href: "/impacto", label: "Impacto" },
  { href: "/aliados", label: "Aliados" },
  { href: "/contacto", label: "Contacto" },
];

export function NavFullWidth() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo a la izquierda */}
<div className="flex-shrink-0">
  <Link href="/" className="flex items-center space-x-2">
  <Image
  src="/cdi25.png"
  alt="Cdi Chile"
  width={1566}
  height={400}
  priority
  className="h-10 w-[156px]"
/>
  </Link>
</div>
        {/* Links centrados - solo visibles en desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center space-x-6">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Controles a la derecha */}
        <div className="flex items-center space-x-2">
          <ThemeSwitcher />
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/20 md:hidden" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-16 right-0 w-64 bg-background shadow-lg border-l flex flex-col p-6 min-h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end mb-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium py-2 transition-colors hover:text-primary border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}