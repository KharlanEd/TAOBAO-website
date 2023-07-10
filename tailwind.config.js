/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
    },
    colors: {
      "bg-container": "#251B37",
      "bg-section": "#372948",
      title: "#FFCACA",
      "title-light": "#FFF",
      "title-white": "#FFFFFF",
      "title-black": "#000000",
      "button-pay": "#FCA3A3",
      "violet-light-dark": "#675082",
      "violet-dark": "#251B37",

      "dark-pink": "#F16060",
    },
    boxShadow: {
      "button-pay": "0px 0px 21px 11px rgba(241, 96, 96, 0.50);",
    },

    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      heading: ["Philosopher"],
    },
    extend: {},
  },
  plugins: [],
};
