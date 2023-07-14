/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/src/images/WhiteBg.jpg')",
        header: "url('/src/images/Innovationm.jpg')",
        todo: "url('/src/images/TodoListImg.png')",
        chat: "url('/src/images/ChatTalkerImg.png')",
      },
      fontFamily: {
        GenSenRounded: ["GenSenRounded", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
