import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full z-30 px-10 py-4 transition-colors duration-300 ease-in-out ${
        scrolling ? 'bg-secondary text-white' : 'bg-white text-secondary'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Psicóloga [Nome]</div> {/* Diminuído de text-3xl para text-2xl */}

        {/* Menu para desktop */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="hover:transition-transform duration-300 ease-in-out transform hover:scale-110 text-lg font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:transition-transform duration-300 ease-in-out transform hover:scale-110 text-lg font-medium"
          >
            Serviços
          </a>
          <a
            href="#about"
            className="hover:transition-transform duration-300 ease-in-out transform hover:scale-110 text-lg font-medium"
          >
            Sobre
          </a>
          <a
            href="#testimonials"
            className="hover:transition-transform duration-300 ease-in-out transform hover:scale-110 text-lg font-medium"
          >
            Depoimentos
          </a>
          <a
            href="#contact"
            className="hover:transition-transform duration-300 ease-in-out transform hover:scale-110 text-lg font-medium"
          >
            Contato
          </a>
        </nav>

        {/* Botão para agendar sessão - desktop */}
        <a
          href="#contact"
          className={`hidden md:inline-block px-6 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 ${
            scrolling ? 'bg-white text-secondary hover:bg-gray-100' : 'bg-secondary text-white hover:bg-orange-700'
          }`}
        >
          Agende uma Sessão
        </a>

        {/* Botão toggle para menu mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center focus:outline-none"
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={faTimes}
              className="w-8 h-8 text-current transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="w-8 h-8 text-current transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          )}
        </button>
      </div>

      {/* Menu para mobile */}
      {isOpen && (
        <nav
          className={`md:hidden p-6 absolute top-full left-0 shadow-lg w-full z-20 transition-transform transform translate-y-0 duration-300 ease-in-out ${
            scrolling ? 'bg-secondary text-white' : 'bg-white text-secondary'
          }`}
        >
          <a
            href="#home"
            className="block text-xl py-2 border-b border-gray-700 hover:transition-transform duration-300 ease-in-out transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-xl py-2 border-b border-gray-700 hover:transition-transform duration-300 ease-in-out transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            Serviços
          </a>
          <a
            href="#about"
            className="block text-xl py-2 border-b border-gray-700 hover:transition-transform duration-300 ease-in-out transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            Sobre
          </a>
          <a
            href="#testimonials"
            className="block text-xl py-2 border-b border-gray-700 hover:transition-transform duration-300 ease-in-out transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            Depoimentos
          </a>
          <a
            href="#contact"
            className="block text-xl py-2 border-b border-gray-700 hover:transition-transform duration-300 ease-in-out transform hover:translate-x-2"
            onClick={toggleMenu}
          >
            Contato
          </a>
          <a
            href="#contact"
            className={`block text-center py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 mt-4 ${
              scrolling ? 'bg-white text-secondary hover:bg-gray-100' : 'bg-secondary text-white hover:bg-orange-700'
            }`}
          >
            Agende uma Sessão
          </a>
        </nav>
      )}
    </motion.header>
  );
};

export default Header;
