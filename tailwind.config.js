module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 1s infinite",
      },
      keyframes: {
        rotate: {
          "0%, 100%": {
            transform: "rotate(7deg)",
          },
          "50%": {
            transform: "rotate(-7deg)",
          },
        },
      },
      colors: {},
    },
  },
  plugins: [],
};
