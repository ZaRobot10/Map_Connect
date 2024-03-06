/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        midnightblue: "#220f5a",
        gray: {
          "100": "#85818d",
          "200": "#0c0c0c",
        },
        thistle: "rgba(193, 189, 226, 0.4)",
        slateblue: "#464ccf",
        silver: "#cec8c8",
        snow: "#fffcfc",
        mediumblue: "#1920c9",
        darkblue: "#1627bd",
      },
      spacing: {},
      fontFamily: {
        abeezee: "ABeeZee",
        "jockey-one": "'Jockey One'",
        jomhuria: "Jomhuria",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      "11xl": "30px",
      "6xl": "25px",
      "16xl": "35px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};