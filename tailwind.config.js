/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      opacity: {
        5: "0.05",
      },
      keyframes: {
        bottomLine: {},
      },
      backdropBlur: {
        custom: "3px",
      },
    },
  },
  plugins: [],
};
