/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/src/images/WhiteBg.jpg')",
        header: "url('/src/images/Innovation.jpg')",
        todo: "url('/src/images/TodoListImg.png')",
        chat: "url('/src/images/ChatTalkerImg.png')",
        meme: "url('/src/images/memeGenerator.png')",
        ptt: "url('/src/images/pttCrawlerImg.png')",
        nba: "url('/src/images/VisualizeNBADataImg.png')",
        ntu: "url('/src/images/NTULogo.png')",
        hex: "url('/src/images/HexLogo.png')",
        mrhost: "url('/src/images/MrhostLogo.png')",
        shanfu: "url('/src/images/ShanFuLogo.png')",
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
      rotate: {
        "-45": "-45deg",
      },
    },
  },
  plugins: [],
};
