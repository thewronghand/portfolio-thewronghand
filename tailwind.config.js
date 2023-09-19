/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1530px",
        "4xl": "1850px",
        "5xl": "2000px",
        "6xl": "2300px",
      },
    },
  },
  plugins: [],
};
