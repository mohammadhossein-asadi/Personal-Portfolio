/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xss: { max: "475px" },
        xxs: { max: "620px" },
      },
    },
  },
  plugins: [],
};
