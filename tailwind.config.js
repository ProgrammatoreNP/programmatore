/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "login-bg-gradient-start": "#c471f5",
        "login-bg-gradient-end": "#fa71cd",
      },
      backgroundImage: {
        "login-custom": "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
      },
    },
  },
  plugins: [],
};
