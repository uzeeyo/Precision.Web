/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,tsx,ts}",
    "./components/**/*.{html,js,tsx,ts}",
  ],

  theme: {
    extend: {
      colors: {
        navy: "#0C233F",
        "navy-dark": "#040B14",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
