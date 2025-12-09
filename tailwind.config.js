/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Define 'serif' para incluir Playfair Display para compatibilidade
        serif: ['Playfair Display', 'serif'],
        // Define 'garamond' para a nova fonte solicitada
        garamond: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};