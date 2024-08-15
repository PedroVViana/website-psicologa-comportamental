import React from 'react';
import { FaPhoneAlt, FaCalendarAlt, FaHandshake, FaSmile } from 'react-icons/fa';
import howItWorksImg from '../assets/how-it-works.png'; // Substitua pelo caminho da sua imagem

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 px-6 md:px-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative">
          Como Funciona
          <div className="absolute inset-x-0 -bottom-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 rounded-full opacity-20 blur-xl -z-10"></div>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-12">
          {/* Imagem Representativa */}
          <div className="md:w-1/2 flex justify-center mb-12 md:mb-0">
            <img
              src={howItWorksImg} // Usando a imagem importada
              alt="Como Funciona"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
          {/* Etapas do Atendimento */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="space-y-10">
              <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6">
                <div className="p-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 rounded-full shadow-lg flex items-center justify-center mb-6 md:mb-0">
                  <FaPhoneAlt className="text-yellow-700 text-4xl" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Agendamento</h3>
                  <p className="text-gray-600">
                    Entre em contato conosco por telefone ou e-mail para agendar sua sessão. Escolha um horário que melhor se adapte à sua agenda. As sessões podem ser realizadas online ou presencialmente.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6">
                <div className="p-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 rounded-full shadow-lg flex items-center justify-center mb-6 md:mb-0">
                  <FaCalendarAlt className="text-yellow-700 text-4xl" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sessão</h3>
                  <p className="text-gray-600">
                    Durante a sessão, abordamos suas preocupações e trabalhamos juntos para encontrar soluções e estratégias eficazes. Pode ser realizada online ou presencialmente.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6">
                <div className="p-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 rounded-full shadow-lg flex items-center justify-center mb-6 md:mb-0">
                  <FaHandshake className="text-yellow-700 text-4xl" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Acompanhamento</h3>
                  <p className="text-gray-600">
                    Após a sessão, faremos um acompanhamento para verificar seu progresso e ajustar qualquer plano conforme necessário.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6">
                <div className="p-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 rounded-full shadow-lg flex items-center justify-center mb-6 md:mb-0">
                  <FaSmile className="text-yellow-700 text-4xl" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Satisfação</h3>
                  <p className="text-gray-600">
                    Seu bem-estar é nossa prioridade. Nosso objetivo é garantir que você se sinta satisfeito e apoiado em todo o processo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
