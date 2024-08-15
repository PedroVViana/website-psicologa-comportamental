import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-2 md:px-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
        <div className="space-y-6">
          {/* Pergunta 1 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-6 px-8 bg-white text-gray-900 font-semibold text-lg rounded-lg shadow-xl transition-transform duration-300 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => toggleAnswer(0)}
            >
              <span>Como funciona a primeira consulta?</span>
              {activeIndex === 0 ? (
                <FaChevronUp className="text-yellow-700 text-2xl transition-transform transform rotate-180" />
              ) : (
                <FaChevronDown className="text-yellow-700 text-2xl transition-transform transform rotate-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === 0 ? 'max-h-screen p-6' : 'max-h-0'}`}
            >
              <p className="text-gray-700 text-lg">
                A primeira consulta geralmente é uma sessão de avaliação onde discutimos suas preocupações, objetivos e história pessoal. Isso ajuda a entender suas necessidades e a planejar o melhor caminho para o tratamento.
              </p>
            </div>
          </div>

          {/* Pergunta 2 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-6 px-8 bg-white text-gray-900 font-semibold text-lg rounded-lg shadow-xl transition-transform duration-300 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => toggleAnswer(1)}
            >
              <span>Quais são os tipos de terapia oferecidos?</span>
              {activeIndex === 1 ? (
                <FaChevronUp className="text-yellow-700 text-2xl transition-transform transform rotate-180" />
              ) : (
                <FaChevronDown className="text-yellow-700 text-2xl transition-transform transform rotate-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === 1 ? 'max-h-screen p-6' : 'max-h-0'}`}
            >
              <p className="text-gray-700 text-lg">
                Oferecemos uma variedade de abordagens terapêuticas, incluindo terapia cognitivo-comportamental (TCC), terapia psicodinâmica, e terapia de aceitação e compromisso (ACT). Podemos discutir a abordagem que melhor se adapta às suas necessidades.
              </p>
            </div>
          </div>

          {/* Pergunta 3 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-6 px-8 bg-white text-gray-900 font-semibold text-lg rounded-lg shadow-xl transition-transform duration-300 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => toggleAnswer(2)}
            >
              <span>Como posso marcar uma consulta?</span>
              {activeIndex === 2 ? (
                <FaChevronUp className="text-yellow-700 text-2xl transition-transform transform rotate-180" />
              ) : (
                <FaChevronDown className="text-yellow-700 text-2xl transition-transform transform rotate-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === 2 ? 'max-h-screen p-6' : 'max-h-0'}`}
            >
              <p className="text-gray-700 text-lg">
                Você pode marcar uma consulta através do nosso site ou entrando em contato diretamente pelo telefone ou e-mail fornecidos. Após o contato, nossa equipe fornecerá todos os detalhes necessários.
              </p>
            </div>
          </div>

          {/* Pergunta 4 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-6 px-8 bg-white text-gray-900 font-semibold text-lg rounded-lg shadow-xl transition-transform duration-300 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => toggleAnswer(3)}
            >
              <span>Qual é a duração das sessões?</span>
              {activeIndex === 3 ? (
                <FaChevronUp className="text-yellow-700 text-2xl transition-transform transform rotate-180" />
              ) : (
                <FaChevronDown className="text-yellow-700 text-2xl transition-transform transform rotate-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === 3 ? 'max-h-screen p-6' : 'max-h-0'}`}
            >
              <p className="text-gray-700 text-lg">
                As sessões geralmente duram entre 50 e 60 minutos. A duração pode variar dependendo do tipo de terapia e das necessidades individuais do paciente.
              </p>
            </div>
          </div>

          {/* Pergunta 5 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-6 px-8 bg-white text-gray-900 font-semibold text-lg rounded-lg shadow-xl transition-transform duration-300 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => toggleAnswer(4)}
            >
              <span>Qual é a política de cancelamento de consultas?</span>
              {activeIndex === 4 ? (
                <FaChevronUp className="text-yellow-700 text-2xl transition-transform transform rotate-180" />
              ) : (
                <FaChevronDown className="text-yellow-700 text-2xl transition-transform transform rotate-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === 4 ? 'max-h-screen p-6' : 'max-h-0'}`}
            >
              <p className="text-gray-700 text-lg">
                Se precisar cancelar uma consulta, por favor avise com pelo menos 24 horas de antecedência. Cancelamentos realizados com menos de 24 horas de antecedência podem estar sujeitos a uma taxa de cancelamento.
              </p>
            </div>
          </div>

          {/* Pergunta 6 */}
          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-6 px-8 bg-white text-gray-900 font-semibold text-lg rounded-lg shadow-xl transition-transform duration-300 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => toggleAnswer(5)}
            >
              <span>Qual é o valor das consultas?</span>
              {activeIndex === 5 ? (
                <FaChevronUp className="text-yellow-700 text-2xl transition-transform transform rotate-180" />
              ) : (
                <FaChevronDown className="text-yellow-700 text-2xl transition-transform transform rotate-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === 5 ? 'max-h-screen p-6' : 'max-h-0'}`}
            >
              <p className="text-gray-700 text-lg">
                O valor das consultas pode variar de acordo com a especialidade do psicólogo e o tempo de sessão. Entre em contato conosco para obter informações detalhadas sobre preços e possíveis planos de pagamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
