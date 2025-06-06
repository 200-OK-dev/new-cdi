// programas-y-proyectos/[tipo]/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { programasData, proyectosData } from '../../data';
import DetailPageClient from './DetailPageClient';

interface PageProps {
  params: Promise<{
    tipo: 'programa' | 'proyecto';
    slug: string;
  }>;
}

export default async function DetallePage({ params }: PageProps) {
  // Esperar a que params se resuelva
  const { tipo, slug } = await params;
   
  // Obtener datos según el tipo
  const data = tipo === 'programa' 
    ? programasData[slug]
    : proyectosData[slug];

  // Si no existe, mostrar 404
  if (!data) {
    notFound();
  }

  return <DetailPageClient data={data} tipo={tipo} />;
}

// Generar páginas estáticas para todos los programas y proyectos
export async function generateStaticParams() {
  const programaParams = Object.keys(programasData).map((slug) => ({
    tipo: 'programa' as const,
    slug,
  }));

  const proyectoParams = Object.keys(proyectosData).map((slug) => ({
    tipo: 'proyecto' as const,
    slug,
  }));

  return [...programaParams, ...proyectoParams];
}