/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      backgroundImage: {
        Gradient: "radial-gradient(circle closest-corner at 50% 0%,hsl(213, 19%, 18%) 0%,hsl(213, 19%, 14%) 100%)"
      },
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        darkBlueLight: "hsl(213, 19%, 20%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
      },
      width: {
        99: "25.625rem",
        88: "22rem"
      },
      height: {
        99: "25.625rem"
      },
    },
  },
  plugins: [],
};
