import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Psicóloga [Nome]. Todos os direitos reservados.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-primary">Política de Privacidade</a> | <a href="#" className="hover:text-primary">Termos de Uso</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
