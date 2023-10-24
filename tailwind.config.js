/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ECF2F5",
        "btn-yellow": "#F6B945",
        "btn-blue": "#0067AC",
        "btn-dark-grey": "#5F6368",
        "btn-light-grey": "#A7ADAF",
        "btn-green": "#07C776",
        "btn-red": "#E10000",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        nunitoSans: ["Nunito Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
