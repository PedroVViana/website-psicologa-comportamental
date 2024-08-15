import React from 'react';
import anxietyIcon from '../assets/anxiety.png'; // Substitua com o caminho dos seus ícones
import depressionIcon from '../assets/depression.png';
import relationshipsIcon from '../assets/relationships.png';
import stressIcon from '../assets/stress.png';

const Specialties = () => {
  return (
    <section id="specialties" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 opacity-20 blur-3xl"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center relative">
          Especialidades
          <div className="absolute -inset-x-4 -bottom-4 -z-10 bg-gradient-to-r from-yellow-100 to-red-100 rounded-full opacity-50 blur-3xl"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Card de Ansiedade */}
          <div className="relative group">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-110 hover:shadow-3xl hover:rotate-1 group-hover:opacity-100">
              <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mb-6 relative z-10">
                <img src={anxietyIcon} alt="Ansiedade" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Ansiedade</h3>
              <p className="text-gray-600">Tratamento e manejo de transtornos de ansiedade para promover bem-estar e equilíbrio.</p>
              <a href="#contact" className="mt-4 font-bold text-blue-500 hover:underline">Saiba mais</a>
            </div>
            <div className="absolute inset-0 bg-blue-100 opacity-20 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"></div>
          </div>

          {/* Card de Depressão */}
          <div className="relative group">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-110 hover:shadow-3xl hover:rotate-1 group-hover:opacity-100">
              <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mb-6 relative z-10">
                <img src={depressionIcon} alt="Depressão" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">Depressão</h3>
              <p className="text-gray-600">Apoio especializado para lidar com sintomas depressivos e promover a recuperação.</p>
              <a href="#contact" className="mt-4 font-bold text-green-500 hover:underline">Saiba mais</a>
            </div>
            <div className="absolute inset-0 bg-green-100 opacity-20 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"></div>
          </div>

          {/* Card de Relacionamentos */}
          <div className="relative group">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-110 hover:shadow-3xl hover:rotate-1 group-hover:opacity-100">
              <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center mb-6 relative z-10">
                <img src={relationshipsIcon} alt="Relacionamentos" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">Relacionamentos</h3>
              <p className="text-gray-600">Orientação e suporte para melhorar relacionamentos interpessoais e familiares.</p>
              <a href="#contact" className="mt-4 font-bold text-yellow-500 hover:underline">Saiba mais</a>
            </div>
            <div className="absolute inset-0 bg-yellow-100 opacity-20 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"></div>
          </div>

          {/* Card de Estresse */}
          <div className="relative group">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-110 hover:shadow-3xl hover:rotate-1 group-hover:opacity-100">
              <div className="w-20 h-20 bg-red-200 rounded-full flex items-center justify-center mb-6 relative z-10">
                <img src={stressIcon} alt="Estresse" className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">Estresse</h3>
              <p className="text-gray-600">Estratégias para gerenciar e reduzir o estresse no dia a dia e promover o bem-estar.</p>
              <a href="#contact" className="mt-4 font-bold text-red-500 hover:underline">Saiba mais</a>
            </div>
            <div className="absolute inset-0 bg-red-100 opacity-20 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
