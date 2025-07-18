# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `npm run dev` (Next.js with Turbopack enabled)
- **Build**: `npm run build` 
- **Production**: `npm start`
- **Lint**: `npm run lint`

## Architecture Overview

This is a Next.js 15 application for CDI Chile, a Chilean NGO focused on digital empowerment and technology education. The site showcases their programs, projects, news, and organizational information.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Theme**: next-themes for dark/light mode

### Key Directories

- `app/` - Next.js App Router pages and layouts
  - `programas-y-proyectos/` - Dynamic routing for programs and projects with data-driven content
  - `noticias-y-actualidad/` - News section with dynamic slug-based routing
  - `nosotros/`, `contacto/`, `impacto/` - Static organizational pages
- `components/` - Reusable React components
  - `ui/` - shadcn/ui component library
  - Root-level components for sections (Hero, Nav, Footer, etc.)
- `lib/` - Utility functions (primarily `utils.ts` with Tailwind class merging)
- `hooks/` - Custom React hooks
- `public/` - Static assets including images for teams, partners, and projects

### Content Management

**Programs & Projects**: Content is managed through TypeScript data files:
- `app/programas-y-proyectos/data.ts` - Contains structured data for all programs and projects
- `app/programas-y-proyectos/types.ts` - TypeScript interfaces for content structure
- Dynamic routing: `/programas-y-proyectos/[tipo]/[slug]` where `tipo` is "programas" or "proyectos"

**News**: Content managed in `app/noticias-y-actualidad/news.ts` with HTML content support and pagination

### Component Architecture

- **Layout**: Global layout in `app/layout.tsx` with navigation, theme provider, and footer
- **Navigation**: Responsive nav component with mobile menu (`components/Nav.tsx`)
- **UI System**: Consistent design system using shadcn/ui with Tailwind classes
- **Theme**: Dark/light mode support with theme switcher component

### Custom Fonts
Uses VAG Rounded font family (Light, Bold, Black) loaded from `/public/fonts/` alongside Google Fonts (Varela Round)

### Content Structure
Programs and projects follow a structured format with:
- Hero sections with title/subtitle/description
- Multiple content sections (text, lists, highlights, videos)
- Statistics display
- Call-to-action buttons
- Custom banner configurations

### Development Notes
- Uses TypeScript throughout
- Client components marked with `'use client'` directive
- Responsive design with mobile-first approach
- SEO optimized with comprehensive meta tags
- Image optimization with Next.js Image component