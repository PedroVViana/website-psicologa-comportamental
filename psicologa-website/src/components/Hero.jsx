import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen py-4 flex flex-col lg:flex-row items-center px-6 lg:px-12 lg:py-24 bg-white">
      {/* Sobreposição para contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 opacity-30"></div>
      
      {/* Conteúdo centralizado */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto z-10">
        {/* Texto e botão */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 lg:order-1"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight text-shadow">
            Encontre o equilíbrio emocional com apoio profissional
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 text-shadow">
            Psicóloga especializada em terapia cognitivo-comportamental, dedicada a ajudá-lo a alcançar o bem-estar duradouro.
          </p>
          <a
            href="#contact"
            className="bg-secondary text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-dark w-fit"
          >
            Agende uma Consulta
          </a>
        </motion.div>
        
        {/* Imagem de Hero à direita */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 max-w-lg lg:max-w-xl mt-12 lg:mt-0 transform scale-95 lg:order-2"
        >
          <img src={heroImage} alt="Imagem de Hero" className="w-full h-auto object-cover" />
        </motion.div>
      </div>

      {/* Ajustes para mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .relative {
            flex-direction: column-reverse;
          }
          .flex-1 {
            margin-top: -6%; /* Ajuste da sobreposição */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
