"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Hook mejorado para manejar responsive
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Initial check
    checkIsDesktop();
    
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // For mobile, enable animations immediately after mount
  // Only disable animations initially if we're on desktop
  return { 
    isDesktop: isMounted ? isDesktop : false, 
    isMounted: true // Always consider mounted after first render
  };
};

export default function QuienesSomos() {
  const { isDesktop, isMounted } = useIsDesktop();

  // Variantes de animación optimizadas para móvil y escritorio
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: isMounted && isDesktop ? 60 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: isMounted ? (isDesktop ? 0.8 : 0.6) : 0,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { 
      opacity: 0 
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: isMounted ? (isDesktop ? 1 : 0.6) : 0,
        ease: "easeOut"
      }
    }
  };

  // Contenedor para animaciones secuenciales
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMounted ? (isDesktop ? 0.3 : 0.1) : 0,
        delayChildren: isMounted ? (isDesktop ? 0.2 : 0.1) : 0
      }
    }
  };
  
  return (
    <div className="min-h-screen">
      <main>
         {/* Hero Section - ANIMADO */}
         <motion.section 
           className="py-16 container mx-auto px-4"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           variants={container}
         >
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.h1 
              className="text-4xl font-bold mb-6"
              variants={fadeInUp}
            >
              Transformamos vidas a través de la democratización tecnológica y el empoderamiento ciudadano.
            </motion.h1>
            <motion.p 
              className="text-muted-foreground mb-10"
              variants={fadeInUp}
            >
              Somos una organización con 30 años de experiencia global y 25 años en Chile, dedicada a promover 
              la inclusión digital y el uso ético de la tecnología para crear un impacto positivo en el mundo.
            </motion.p>
          </div>

          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            variants={fadeInUp}
          >
            <Image
              src="/Equipo/cdiequipo.webp"
              alt="CDI Chile - 25 años transformando vidas"
              width={1200}
              height={600}
              priority
              className="rounded-md object-contain w-full h-auto"
            />
          </motion.div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p 
              className="text-muted-foreground italic mb-6"
              variants={fadeInUp}
            >
              Nuestro objetivo es democratizar el acceso a las tecnologías de la información y promover 
              una nueva conciencia ciudadana que utilice la tecnología de manera ética para generar 
              transformaciones sociales positivas.
            </motion.p>
            <motion.p 
              className="text-muted-foreground/70 text-sm"
              variants={fadeIn}
            >
              Equipo CDI Chile
            </motion.p>
          </div>

          {/* Team Section */}
          <motion.div 
            className="max-w-5xl mx-auto mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: isMounted ? (isDesktop ? 0.1 : 0.05) : 0,
                  delayChildren: isMounted ? (isDesktop ? 0.3 : 0.1) : 0
                }
              }
            }}
          >
            {/* First Row - 4 members */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { name: 'Eugenio Vergara', position: 'Co Fundador y Director Ejecutivo', image: '/Equipo/Eugenio Vergara - Co Fundador y Director Ejecutivo.png' },
                { name: 'Carolina Escobar', position: 'Directora de Operación', image: '/Equipo/Carolina Escobar - Directora de Operación.png' },
                { name: 'Liss Falcón', position: 'Directora de Programas y Proyectos', image: '/Equipo/Liss Falcón - Directora de Programas y Proyectos.png' },
                { name: 'Marcy Cortez Paredes', position: 'Directora de Alianzas y Fundraising', image: '/Equipo/Marcy Cortez Paredes- Directora de Alianzas y Fundraising.png' },
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={fadeInUp}
                  whileHover={(isMounted && isDesktop) ? { scale: 1.05 } : {}}
                  transition={(isMounted && isDesktop) ? { type: "spring", stiffness: 300 } : {}}
                >
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-base font-bold">{member.name.split(' ')[0]}<br/>{member.name.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 4 members */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { name: 'Diego Cooper', position: 'Director de Estrategia e Innovación', image: '/Equipo/Diego Cooper - Director de Estrategia e Innovación.png' },
                { name: 'Anyeli Mantilla', position: 'Coordinadora de Operaciones', image: '/Equipo/Anyeli Mantilla - Coordinadora de Operaciones.png' },
                { name: 'Daisy Campaña', position: 'Coordinadora de Finanzas y Administración', image: '/Equipo/Daisy Campaña - Coordinadora de FInanzas y Administración.png' },
                { name: 'Francisca Núñez', position: 'Coordinadora Programa TechSoup Chile', image: '/Equipo/Francisca Núñez - Coordinadora Programa TechSoup Chile.png' },
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={fadeInUp}
                  whileHover={(isMounted && isDesktop) ? { scale: 1.05 } : {}}
                  transition={(isMounted && isDesktop) ? { type: "spring", stiffness: 300 } : {}}
                >
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-base font-bold">{member.name.split(' ')[0]}<br/>{member.name.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </motion.div>
              ))}
            </div>

            {/* Third Row - 3 members */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'Jocelyn Olivares', position: 'Encargada Comunicación Digital', image: '/Equipo/Jocelyn Olivares - Encargada Comunicación Digital.png' },
                { name: 'Macarena Contreras', position: 'Coordinadora de Administración', image: '/Equipo/Macarena Contreras - Coordinadora de Administración.png' },
                { name: 'Nataly Cueto', position: 'Coordinadora de Convocatoria', image: '/Equipo/Nataly Cueto - Coordinadora de Convocatoria.png' }
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={fadeInUp}
                  whileHover={(isMounted && isDesktop) ? { scale: 1.05 } : {}}
                  transition={(isMounted && isDesktop) ? { type: "spring", stiffness: 300 } : {}}
                >
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-base font-bold">{member.name.split(' ')[0]}<br/>{member.name.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Timeline Section - SIN ANIMACIONES PARA EVITAR CONFLICTOS */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10">Nuestra historia de transformación</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="relative mb-16 pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 bg-custom-green rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <Card className="bg-custom-green/10 border-custom-green/20 aspect-video w-full max-w-md mb-4">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-custom-green rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">1995</span>
                    </div>
                    <p className="text-custom-green font-medium">Brasil - Fundación CDI</p>
                  </div>
                </CardContent>
              </Card>
              <h3 className="text-lg font-medium mb-2">1995 - Fundación en Brasil</h3>
              <p className="text-muted-foreground text-sm mb-2">
                El Comité para la Democratización de la Informática (CDI) fue fundado en Brasil como iniciativa 
                pionera para promover la democratización del acceso a las tecnologías de la información entre 
                habitantes de las comunidades de Río de Janeiro.
              </p>
              <Button variant="link" className="text-custom-green text-xs font-medium p-0 h-auto">
                Leer más <ChevronRight size={12} className="ml-1" />
              </Button>
            </div>

            <div className="relative mb-16 pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 bg-custom-cyan rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <Card className="w-20 h-20 bg-custom-cyan rounded mb-4 flex items-center justify-center border-none">
                <span className="font-bold text-white text-xs">CDI</span>
              </Card>
              <h3 className="text-lg font-medium mb-2">Expansión Internacional</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Con el apoyo de empresas y voluntarios, la organización abrió las primeras Escuelas de 
                Informática y Ciudadanía en diversas comunidades socialmente vulnerables, expandiendo 
                su impacto a nivel internacional.
              </p>
              <Button variant="link" className="text-custom-cyan text-xs font-medium p-0 h-auto">
                Leer más <ChevronRight size={12} className="ml-1" />
              </Button>
            </div>

            <div className="relative mb-16 pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 bg-custom-purple rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <Card className="bg-custom-purple/10 border-custom-purple/20 aspect-video w-full max-w-md mb-4">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-custom-purple font-bold text-2xl mb-2">YO</div>
                    <div className="text-custom-purple font-bold text-2xl mb-2">NOSOTROS</div>
                    <div className="text-custom-purple font-bold text-xl">TODOS NOSOTROS</div>
                  </div>
                </CardContent>
              </Card>
              <h3 className="text-lg font-medium mb-2">Desarrollo del Modelo Integral</h3>
              <p className="text-muted-foreground text-sm mb-2">
                CDI adoptó un modelo de generación de valor que incluye la perspectiva individual (YO), 
                el colectivo/la comunidad (NOSOTROS) y el impacto sistémico (TODOS NOSOTROS), 
                promoviendo soluciones multi-stakeholders.
              </p>
              <Button variant="link" className="text-custom-purple text-xs font-medium p-0 h-auto">
                Leer más <ChevronRight size={12} className="ml-1" />
              </Button>
            </div>

            <div className="relative mb-16 pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 bg-custom-yellow rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <Card className="w-20 h-20 bg-custom-yellow rounded mb-4 flex items-center justify-center border-none">
                <span className="font-bold text-black text-xs">25</span>
              </Card>
              <h3 className="text-lg font-medium mb-2">25 Años en Chile</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Celebramos 25 años de presencia en Chile, transformando vidas a través de la tecnología 
                y promoviendo el empoderamiento digital en comunidades de todo el país.
              </p>
              <Button variant="link" className="text-custom-yellow text-xs font-medium p-0 h-auto">
                Leer más <ChevronRight size={12} className="ml-1" />
              </Button>
            </div>

            <div className="relative mb-16 pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 bg-custom-red rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <Card className="bg-custom-red/10 border-custom-red/20 aspect-video w-full max-w-md mb-4">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-custom-red rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🚀</span>
                    </div>
                    <p className="text-custom-red font-medium">Transformación Digital</p>
                  </div>
                </CardContent>
              </Card>
              <h3 className="text-lg font-medium mb-2">Era de la Transformación Digital</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Reconociendo que vivimos en tiempos de crisis institucional, CDI se posiciona como 
                catalizador de cambio, aprovechando el poder de las conexiones y redes para crear 
                movimientos transformadores.
              </p>
              <Button variant="link" className="text-custom-red text-xs font-medium p-0 h-auto">
                Leer más <ChevronRight size={12} className="ml-1" />
              </Button>
            </div>

            <div className="relative mb-16 pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 bg-custom-green rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <Card className="w-20 h-20 bg-custom-green rounded mb-4 flex items-center justify-center border-none">
                <span className="font-bold text-white text-xs">2025</span>
              </Card>
              <h3 className="text-lg font-medium mb-2">Visión Futuro: Nueva Ciudadanía</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Promovemos una nueva conciencia para una nueva ciudadanía. Creemos que el uso ético 
                y ciudadano de la tecnología puede potenciar las posibilidades de acción y creación 
                para un impacto positivo mundial.
              </p>
              <Button variant="link" className="text-custom-green text-xs font-medium p-0 h-auto">
                Leer más <ChevronRight size={12} className="ml-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}