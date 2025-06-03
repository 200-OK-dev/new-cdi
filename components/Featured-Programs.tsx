import React from 'react';
import Link from 'next/link';

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "TechSoup",
      description: "A través de este programa, facilitamos tecnología donada o con descuentos para organizaciones sin fines de lucro, permitiéndoles maximizar su impacto digital.",
      image: "/api/placeholder/400/200",
      link: "/programas-y-proyectos"
    },
    {
      id: 2,
      title: "Habilidades digitales para el emprendimiento y la empleabilidad",
      description: "Capacitamos en habilidades digitales a emprendedores, jefas de hogar y personas vulnerables para mejorar sus oportunidades laborales y económicas a través de alianzas público-privadas.",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "OTEC CDI Chile",
      description: "Nuestra OTEC ofrece cursos de calidad que transforman vidas mediante el aprendizaje digital y el desarrollo de habilidades laborales.",
      image: "/api/placeholder/400/200"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-20 items-start">
          
          {/* Texto principal - lado izquierdo */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-custom-yellow mb-6">
              NUESTROS<br />
              PROGRAMAS
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              En CDI Chile trabajamos a través de programas estratégicos que agrupan diversos proyectos e iniciativas, adaptadas a las necesidades de las comunidades.
            </p>
          </div>

          {/* Tarjetas de programas - lado derecho */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => {
              const cardContent = (
                <div className="bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 transform group-hover:-translate-y-1 overflow-hidden flex flex-col h-full">
                  <div className="relative w-full h-48">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-0 flex-grow">
                      {program.description}
                    </p>
                    {program.link && (
                       <div className="mt-4">
                         <span className="text-custom-cyan hover:text-custom-cyan-dark font-semibold text-sm">
                           Saber más →
                         </span>
                       </div>
                    )}
                  </div>
                </div>
              );

              return (
                <div key={program.id} className="group h-full">
                  {program.link ? (
                    <Link
                      href={program.link}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer block h-full no-underline"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div className="cursor-default h-full">{cardContent}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPrograms;