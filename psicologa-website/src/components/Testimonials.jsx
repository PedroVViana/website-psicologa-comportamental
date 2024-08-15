import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import clienteImage from '../assets/cliente1.png'; // Imagem do cliente

const testimonials = [
  {
    text: "A [Nome da Psicóloga] me ajudou a entender e superar meus medos. Sou muito grato por todo o apoio.",
    name: "Cliente 1",
  },
  {
    text: "O suporte oferecido foi fundamental para minha recuperação. Profissionalismo e empatia em um só lugar.",
    name: "Cliente 2",
  },
  {
    text: "Excelente atendimento! As sessões foram muito esclarecedoras e ajudaram a melhorar minha qualidade de vida.",
    name: "Cliente 3",
  },
  {
    text: "Recomendo fortemente! A [Nome da Psicóloga] tem um método incrível e muito eficaz.",
    name: "Cliente 4",
  },
  {
    text: "Uma experiência transformadora. Senti-me apoiado em cada etapa do processo. Muito obrigado!",
    name: "Cliente 5",
  },
  {
    text: "Profissional incrível e dedicada. Cada sessão foi um passo importante para minha evolução pessoal.",
    name: "Cliente 6",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative">
          Depoimentos
          <div className="absolute -inset-x-4 -bottom-4 bg-gradient-to-r from-green-200 to-green-300 rounded-full opacity-20 blur-xl"></div>
        </h2>

        {/* Swiper para telas menores */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            className="relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="p-4">
                <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-40 rounded-3xl"></div>
                  <img
                    src={clienteImage}
                    alt={`Cliente ${index + 1}`}
                    className="w-32 h-32 rounded-full mx-auto relative z-10 mb-6 border-4 border-white"
                  />
                  <p className="text-gray-800 mt-4 text-center relative z-10 text-lg font-semibold italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gray-900 font-semibold text-center mt-2 relative z-10 text-md">
                    {testimonial.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Exibe todos os depoimentos em telas grandes */}
        <div className="hidden md:flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-40 rounded-3xl"></div>
                <img
                  src={clienteImage}
                  alt={`Cliente ${index + 1}`}
                  className="w-32 h-32 rounded-full mx-auto relative z-10 mb-6 border-4 border-white"
                />
                <p className="text-gray-800 mt-4 text-center relative z-10 text-lg font-semibold italic">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-900 font-semibold text-center mt-2 relative z-10 text-md">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
