/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004ea4', // Main brand color
          hover: '#003d83', // Darker shade for hover
        },
        secondary: {
          DEFAULT: '#d2b589', // Secondary brand color
          hover: '#c5a676', // Darker shade for hover
        },
      },
    },
  },
  plugins: [],
} 