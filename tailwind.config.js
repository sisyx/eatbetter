/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        main:"#60B159",
        mainHover:"#3D6F39"
      }
    },
  },
  plugins: [],
};
