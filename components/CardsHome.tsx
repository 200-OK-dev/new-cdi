import { Target, Lightbulb, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from '@/components/ui/card';

export default function CardsHome() {
  return (
    <>
      {/* Quiénes somos */}
      <section className="py-16 md:py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl text-custom-red text-extra-bold mb-4">Quiénes Somos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde 1995, transformando comunidades a través de la democratización tecnológica. 
            Una historia de evolución desde la inclusión digital hasta el empoderamiento ciudadano global.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 - Nuestra Historia */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8 will-change-transform"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full md:w-1/2">
              <Card className="bg-custom-orange dark:bg-custom-orange/50 border-none">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-3 text-white">Nuestra Historia</h3>
                  <p className="text-white">
                    Fundados en Brasil en 1995 como iniciativa pionera para democratizar el acceso a las tecnologías de la información en comunidades de Río de Janeiro.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="w-full md:w-1/2 md:order-first">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold mb-3">Legado de Transformación</h4>
                <p className="text-muted-foreground">
                  Desde nuestros inicios, hemos evolucionado de la inclusión digital al empoderamiento ciudadano, expandiendo nuestro impacto a través de una red internacional de organizaciones aliadas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Filosofía Integral */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8 will-change-transform"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold mb-3">Filosofía Integral</h4>
                <p className="text-muted-foreground">
                  Adoptamos un modelo de generación de valor que incluye la perspectiva individual (YO), el colectivo/comunidad (NOSOTROS) y el impacto sistémico (TODOS NOSOTROS).
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Card className="bg-custom-yellow dark:bg-custom-yellow/50 border-none">
                <CardContent className="p-8">
                  <Lightbulb className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-3 text-white">Soluciones Multi-Stakeholders</h3>
                  <p className="text-white">
                    Creemos que los problemas sistémicos y complejos solo pueden resolverse involucrando diferentes actores y adoptando un pensamiento multilateral.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Card 3 - Contexto Actual */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8 will-change-transform"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-full md:w-1/2">
              <Card className="bg-custom-green dark:bg-custom-green/50 border-none">
                <CardContent className="p-8">
                  <Zap className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-3 text-white">Contexto Actual</h3>
                  <p className="text-white">
                    Reconocemos que vivimos en tiempos de crisis profundas donde las instituciones tradicionales enfrentan desafíos de legitimidad y la tecnología emerge como catalizador de transformación.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="w-full md:w-1/2 md:order-first">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold mb-3">Poder de las Conexiones</h4>
                <p className="text-muted-foreground">
                  La lógica de red transforma cómo la sociedad se organiza. La globalización, migración y ciudadanía digital potencian las conexiones individuales para crear movimientos transformadores.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Visión Transformadora */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8 will-change-transform"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold mb-3">Nueva Ciudadanía</h4>
                <p className="text-muted-foreground">
                  Promovemos una nueva conciencia para una nueva ciudadanía. La estructura de red se convierte en el ADN cultural de nuestra era, revolucionando formas de actuar y crear oportunidades.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Card className="bg-custom-cyan dark:bg-custom-cyan/50 border-none">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-3 text-white">Uso Ético de la Tecnología</h3>
                  <p className="text-white">
                    Creemos que el uso ético y ciudadano de la tecnología puede potenciar las posibilidades de acción y creación para un impacto positivo mundial.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}