/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1280px',
      
    },
    colors: {
      'bg-container': '#251B37',
      'title': '#FFCACA',
    },
    fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Philosopher', 'sans-serif'],
      },
    extend: {},
  },
  plugins: [],
  
}

