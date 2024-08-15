/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF', // Roxo
        secondary: '#F5A623', // Laranja
        background: '#F4F4F4', // Cinza claro
        'primary-dark': '#357ABD', // Azul mais escuro
        'secondary-dark': '#E57F27', // Laranja mais escuro
        textPrimary: '#333333',   // Cinza Escuro
        textSecondary: '#666666', // Cinza Médio
      },
      boxShadow: {
        'text-light': '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.3)',
        'text-heavy': '0 2px 4px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        fontCard: '22px',
        fontCardSM: '18px',
      }
    },
  },
  plugins: [
    // Adiciona o plugin para sombra de texto
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.4)',
        },
      }, ['responsive', 'hover']);
    }
  ],
}
