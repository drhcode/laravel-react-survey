/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};