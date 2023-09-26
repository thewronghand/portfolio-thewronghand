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
      boxShadow: {
        "y-shadow": "0 4px 4px -1px rgba(0, 0, 0, 0.06)",
        "first-shadow":
          "0 4px 4px -1px rgba(0, 0, 0, 0.06), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
