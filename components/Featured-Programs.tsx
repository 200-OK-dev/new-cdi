import React from 'react';

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Empleo y Emprendimiento Juvenil",
      image: "/api/placeholder/300/400"
    },
    {
      id: 2,
      title: "Protección y Movilización Juvenil",
      image: "/api/placeholder/300/400"
    },
    {
      id: 3,
      title: "Nuestros Bosques y Paisajes",
      image: "/api/placeholder/300/400"
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
              A través de nuestros programas{' '}
              <span className="font-semibold text-custom-cyan">buscamos reducir las desigualdades</span>{' '}
              de la región, generando mejores oportunidades de vida para personas y comunidades vulnerables.
            </p>
          </div>

          {/* Tarjetas de programas - lado derecho */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl leading-tight">
                      {program.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPrograms;