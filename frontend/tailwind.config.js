/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',   // Example, define your colors
        secondary: '#2563eb'
      }
    },
  },
  plugins: [],
};
