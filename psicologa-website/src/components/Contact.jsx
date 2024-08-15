import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-2 md:px-16 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 relative">
      <div className="absolute inset-x-0 top-0 -z-10 opacity-30 blur-xl bg-gradient-to-r from-yellow-200 to-yellow-300"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative">
          Entre em Contato
          <div className="absolute inset-x-0 -bottom-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 rounded-full opacity-30 blur-xl -z-10"></div>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Formulário de Contato */}
          <form className="md:w-1/2 p-8 bg-white rounded-lg shadow-2xl border border-gray-200 space-y-6 transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-4">Formulário de Contato</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Nome</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow shadow-sm hover:border-yellow-400" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow shadow-sm hover:border-yellow-400" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Mensagem</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow shadow-sm hover:border-yellow-400" rows="4"></textarea>
            </div>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-transform transform hover:scale-105">Enviar</button>
          </form>
          {/* Informações de Contato */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-2xl border border-gray-200 space-y-6 transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-4">Informações de Contato</h3>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-yellow-600 text-3xl mr-4" />
              <p className="text-gray-700">Rua Exemplo, 123 - Cidade, Estado</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-yellow-600 text-3xl mr-4" />
              <p className="text-gray-700">(11) 1234-5678</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-yellow-600 text-3xl mr-4" />
              <p className="text-gray-700">exemplo@psicologa.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
