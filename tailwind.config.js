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
      title: "#FFCACA",
      "title-light": "#FFF",
      "button-pay": "#FCA3A3",
      "violet-light-dark": "#675082",
    },
    boxShadow: {
      "button-pay": "0px 0px 21px 11px rgba(241, 96, 96, 0.50);",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      heading: ["Philosopher", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
