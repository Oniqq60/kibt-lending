/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2563EB',
            hover: '#1D4ED8'
          },
          accent: '#10B981',
          dark: '#0F172A'
        },
        container: {
          center: true,
          padding: '1.5rem',
        }
      },
    },
    plugins: [],
  }