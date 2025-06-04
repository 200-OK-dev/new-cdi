import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronRight } from "lucide-react"

export default function QuienesSomos() {
  return (
    <div className="min-h-screen">
      

      <main>
         {/* Hero Section */}
         <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold mb-6">
              Transformamos vidas a través de la democratización tecnológica y el empoderamiento ciudadano.
            </h1>
            <p className="text-muted-foreground mb-10">
              Somos una organización con 30 años de experiencia global y 25 años en Chile, dedicada a promover 
              la inclusión digital y el uso ético de la tecnología para crear un impacto positivo en el mundo.
            </p>
          </div>
          <Card className="bg-white border border-border/20 shadow-sm max-w-4xl mx-auto mb-16">
            <CardContent className="p-8 md:p-12 lg:p-16">
              <Image
                src="/cdi25.png"
                alt="CDI Chile - 25 años transformando vidas"
                width={1200}
                height={600}
                className="rounded-md object-contain w-full h-auto"
              />
            </CardContent>
          </Card>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-muted-foreground italic mb-6">
              Nuestro objetivo es democratizar el acceso a las tecnologías de la información y promover 
              una nueva conciencia ciudadana que utilice la tecnología de manera ética para generar 
              transformaciones sociales positivas.
            </p>
            <p className="text-muted-foreground/70 text-sm">Equipo CDI Chile</p>
          </div>

          {/* Team Section */}
          <div className="max-w-5xl mx-auto mb-20">
            {/* First Row - 4 members */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { name: 'Eugenio Vergara', position: 'Co Fundador y Director Ejecutivo', image: '/Equipo/Eugenio Vergara - Co Fundador y Director Ejecutivo.png' },
                { name: 'Carolina Escobar', position: 'Directora de Operación', image: '/Equipo/Carolina Escobar - Directora de Operación.png' },
                { name: 'Liss Falcón', position: 'Directora de Programas y Proyectos', image: '/Equipo/Liss Falcón - Directora de Programas y Proyectos.png' },
                { name: 'Marcy Cortez', position: 'Directora de Alianzas y Fundraising', image: '/Equipo/Marcy Cortez Paredes- Directora de Alianzas y Fundraising.png' },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-base font-medium">{member.name.split(' ')[0]}<br/>{member.name.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </div>
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
                <div key={index} className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-base font-medium">{member.name.split(' ')[0]}<br/>{member.name.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </div>
              ))}
            </div>

            {/* Third Row - 3 members */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'Jocelyn Olivares', position: 'Encargada Comunicación Digital', image: '/Equipo/Jocelyn Olivares - Encargada Comunicación Digital.png' },
                { name: 'Macarena Contreras', position: 'Coordinadora de Administración', image: '/Equipo/Macarena Contreras - Coordinadora de Administración.png' },
                { name: 'Nataly Cueto', position: 'Coordinadora de Convocatoria', image: '/Equipo/Nataly Cueto - Coordinadora de Convocatoria.png' }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-base font-medium">{member.name.split(' ')[0]}<br/>{member.name.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        

        {/* Timeline Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10">Nuestra historia de transformación</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="relative mb-16 pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 bg-custom-green rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>
              <Card className="bg-transparent border-none aspect-video w-full max-w-md mb-4">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Fundación CDI en Brasil"
                    width={400}
                    height={240}
                    className="rounded object-cover"
                  />
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
              <Card className="bg-transparent border-none aspect-video w-full max-w-md mb-4">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Modelo YO-NOSOTROS-TODOS NOSOTROS"
                    width={400}
                    height={240}
                    className="rounded object-cover"
                  />
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
              <Card className="bg-transparent border-none aspect-video w-full max-w-md mb-4">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="Revolución tecnológica y transformación social"
                    width={400}
                    height={240}
                    className="rounded object-cover"
                  />
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

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros valores definen cómo transformamos el mundo</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Estos principios fundamentales guían cada una de nuestras acciones y nos permiten generar 
                un impacto real en las comunidades que servimos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Card className="bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-custom-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-custom-green rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-custom-green">Democratización Tecnológica</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Creemos que el acceso a la tecnología es un derecho fundamental. Trabajamos para eliminar 
                    las barreras que impiden el acceso equitativo a las herramientas digitales.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-custom-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-custom-cyan rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-custom-cyan">Pensamiento Multi-stakeholders</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Los problemas sistémicos requieren soluciones colaborativas. Involucramos diferentes 
                    actores sociales para abordar desafíos complejos con perspectivas diversas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-custom-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-custom-purple rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-custom-purple">Empoderamiento Ciudadano</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fortalecemos las capacidades individuales y colectivas para que las personas 
                    se conviertan en protagonistas de su propio desarrollo y transformación social.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-custom-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-custom-red rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-custom-red">Uso Ético de la Tecnología</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Promovemos el uso responsable y ético de las tecnologías digitales, 
                    priorizando el bienestar humano y el impacto social positivo.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-custom-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-custom-orange rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-custom-orange">Innovación Social</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Desarrollamos soluciones creativas e innovadoras que abordan problemas sociales 
                    complejos, aprovechando el poder transformador de las redes y conexiones.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-custom-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-custom-yellow rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-custom-yellow">Impacto Sistémico</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Buscamos generar cambios que trasciendan lo individual para crear transformaciones 
                    estructurales que beneficien a comunidades enteras y a la sociedad en general.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}