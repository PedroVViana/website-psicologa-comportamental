import React from 'react';
import bg2 from '..//assets/bg2.png';
import iconIndividual from '../assets/icon-individual.png';
import iconCasal from '../assets/icon-casal.png';
import iconFamiliar from '../assets/icon-familiar.png';

// Componente para cada Card de Serviço
const ServiceCard = ({ icon, title, description, gradientFrom, gradientVia, gradientTo, iconBgColor }) => (
  <div className="relative bg-white p-8 rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-105 hover:rotate-3 hover:shadow-3xl group">
    <div
      className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} via-${gradientVia} to-${gradientTo} opacity-20 rounded-lg`}
    ></div>
    <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src={icon}
          alt={title}
          className="w-44 h-44 rounded-full mb-6 shadow-lg transform transition-transform duration-500`" // Aumentado para w-44 h-44
        />
      <h3 className="text-3xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-lg mb-4 text-gray-800">{description}</p>
    </div>
  </div>
);

// Seção de Serviços
const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen py-20 px-4 md:px-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-12">
          Serviços Oferecidos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <ServiceCard
            icon={iconIndividual}
            title="Terapia Individual"
            description="Apoio para enfrentar desafios pessoais."
            gradientFrom="yellow-100"
            gradientVia="yellow-200"
            gradientTo="yellow-300"
            iconBgColor="yellow-700"
          />
          <ServiceCard
            icon={iconCasal}
            title="Terapia de Casal"
            description="Fortaleça o relacionamento com seu parceiro(a)."
            gradientFrom="green-100"
            gradientVia="green-200"
            gradientTo="green-300"
            iconBgColor="green-700"
          />
          <ServiceCard
            icon={iconFamiliar}
            title="Terapia Familiar"
            description="Melhore a dinâmica familiar e a comunicação."
            gradientFrom="blue-100"
            gradientVia="blue-200"
            gradientTo="blue-300"
            iconBgColor="blue-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
