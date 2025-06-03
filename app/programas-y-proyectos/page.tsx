import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Programas y Proyectos | CDI Chile',
  description: 'Descubre nuestros programas y proyectos en CDI Chile. Conoce cómo estamos transformando la educación digital en el país.'
};

export default function ProgramasYProyectos() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-custom-orange mb-6">
            Nuestros Programas y Proyectos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce nuestras iniciativas diseñadas para impulsar la transformación digital y la inclusión tecnológica en Chile.
          </p>
        </section>

        {/* Sección de Programas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-custom-cyan">Programas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Programa de Educación Digital',
                description: 'Iniciativas educativas para el desarrollo de competencias digitales en diferentes comunidades.',
                link: '#'
              },
              {
                title: 'Capacitación Docente',
                description: 'Formación para educadores en herramientas y metodologías digitales innovadoras.',
                link: '#'
              },
              {
                title: 'Inclusión Digital',
                description: 'Proyectos enfocados en reducir la brecha digital en comunidades vulnerables.',
                link: '#'
              }
            ].map((programa, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{programa.title}</h3>
                <p className="text-muted-foreground mb-4">{programa.description}</p>
                <Link href={programa.link}>
                  <Button variant="outline">Saber más</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Proyectos Destacados */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-custom-cyan">Proyectos Destacados</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Escuelas Conectadas',
                description: 'Conectividad y herramientas digitales para escuelas en zonas rurales.',
                year: '2024',
                link: '#'
              },
              {
                title: 'Mujeres en la Tecnología',
                description: 'Programa de mentoría y capacitación para mujeres en carreras STEM.',
                year: '2023',
                link: '#'
              },
              {
                title: 'Comunidades Digitales',
                description: 'Implementación de centros tecnológicos comunitarios en todo el país.',
                year: '2023',
                link: '#'
              }
            ].map((proyecto, index) => (
              <div key={index} className="border-b pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{proyecto.title}</h3>
                    <p className="text-muted-foreground mt-1">{proyecto.description}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{proyecto.year}</span>
                </div>
                <div className="mt-4">
                  <Link href={proyecto.link} className="text-custom-orange hover:underline">
                    Ver detalles del proyecto →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center bg-muted/30 p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">¿Quieres saber más sobre nuestros programas?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctanos para obtener más información sobre cómo puedes ser parte de nuestros programas o colaborar con nuestros proyectos.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-custom-orange hover:bg-custom-orange/90">
              Contáctanos
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
