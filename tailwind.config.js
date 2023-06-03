/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        title: ["var(--f-title)", "sans-serif"],
        paragraph: ['--f-paragraph: "Roboto", sans-serif'],
      },
    },
  },
  plugins: [],
};
