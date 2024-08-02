/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Mode
        "background-primary": "#ffffff",
        "background-secondary": "#f7f7f7",
        "text-primary": "#333333",
        "text-secondary": "#666666",
        "accent-start": "#c471f5",
        "accent-end": "#fa71cd",
        primary: "#a855f7",
        "border-primary": "#e0e0e0",
        "divider-primary": "#dcdcdc",

        // Dark Mode
        "dark-background-primary": "#121212",
        "dark-background-secondary": "#1f1f1f",
        "dark-text-primary": "#e0e0e0",
        "dark-text-secondary": "#b0b0b0",
        "dark-border-primary": "#333333",
        "dark-divider-primary": "#444444",
      },
      backgroundImage: {
        "login-custom": "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
      },
    },
  },
  plugins: [],
};
