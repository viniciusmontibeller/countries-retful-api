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
        'dark-bg': 'hsl(var(--dark-mode-background))',
        'light-bg': 'hsl(var(--light-mode-background))',
        'light-text': 'hsl(var(--light-mode-text))',
        'light-inputs': 'hsl(var(--light-mode-input))',
        'dark-elements': 'hsl(var(--dark-mode-elements))',
        'dark-text-n-light-elements': 'hsl(var(--dark-mode-text-n-light-mode-elements))'
      },
      fontFamily: {
        nunito: ['Nunito-Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

