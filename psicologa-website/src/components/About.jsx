import React from 'react';
import psicologaImage from '../assets/psicologa.png';

const About = () => {
  const handleClick = () => {
    window.open('https://wa.me/5511999999999', '_blank'); // Substitua pelo seu número do WhatsApp
  };

  return (
    <section id="about" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative group">
            <img
              src={psicologaImage}
              alt="Psicóloga"
              className="rounded-lg shadow-lg w-full h-auto max-w-xs md:max-w-md lg:max-w-lg transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
          </div>
        </div>
        {/* Texto e Informações */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">Sobre Mim</h2>
          <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Sou uma psicóloga com anos de experiência em ajudar pessoas a superarem seus desafios emocionais e a viverem vidas mais plenas e satisfatórias. Com uma formação sólida e um histórico de sucesso, estou aqui para oferecer suporte especializado e orientação personalizada.
          </p>
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">Formações e Experiência</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl shadow-lg">
                  🎓
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Formação em Psicologia</h4>
                  <p className="text-gray-700">Universidade Federal de São Paulo</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl shadow-lg">
                  📚
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Especialização em Terapias Cognitivo-Comportamentais</h4>
                  <p className="text-gray-700">Instituto de Terapias Avançadas</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl shadow-lg">
                  👩‍⚕️
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Anos de Experiência</h4>
                  <p className="text-gray-700">Mais de 10 anos ajudando clientes a alcançar seus objetivos pessoais e profissionais.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Botão CTA */}
          <div className="text-center">
            <button
              onClick={handleClick}
              className="bg-green-500 text-white text-base md:text-lg font-semibold py-3 px-4 md:px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              Entre em Contato pelo WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
