/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        metropolis: ["Metropolis", "sans-serif"],
        Pristina: ["Pristina", "sans-serif"],
      },
      colors: {
        primary: colors.gray,
        secondary: colors.slate,
      },
      colors: {
        schooldekho: {
          50: "#f1f4ff",
          100: "#e5e8ff",
          200: "#ced5ff",
          300: "#a7b0ff",
          400: "#767eff",
          500: "#3f40ff",
          600: "#2418ff",
          700: "#1307fa",
          800: "#0f05d2",
          900: "#0e06ac",
          950: "#010066",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
  daisyui: {
    themes: ["light"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};
