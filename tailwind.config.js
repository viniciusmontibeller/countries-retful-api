/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background-color), 1)',
        text: 'hsl(var(--text-color), 1)',
        element: 'hsl(var(--element-color), 1)',
        input: 'hsl(var(--input-color), 1)',
      },
      fontFamily: {
        nunito: ['Nunito-Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

