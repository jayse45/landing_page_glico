module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f5faff",
          100: "#f5f5f5",
          600: "#777e88",
          700: "#545961",
          800: "#383b40",
          "50_01": "#f5f9ff",
          "600_01": "#838383",
        },
        blue_gray: {
          50: "#eaedf2",
          100: "#cbcfd5",
          900: "#343330",
          "100_01": "#cbcfd6",
          "100_02": "#d9d9d9",
          "900_01": "#1d2639",
        },
        red: { 50: "#ffeaea", 700: "#e61c23" },
        black: {
          900: "#000000",
          "900_1e": "#0000001e",
          "900_49": "#00000049",
          "900_0a": "#0000000a",
        },
        deep_purple: { A700_14: "#3300ff14", A200: "#9747ff", A700: "#3300ff" },
        purple: { 800: "#6627a6" },
        orange: { 50: "#fcf3d6" },
        indigo: {
          600: "#39539d",
          800: "#234092",
          900: "#0a205f",
          "800_30": "#23409230",
        },
        white: { A700: "#ffffff" },
      },
      fontFamily: { montserrat: "Montserrat" },
      backgroundImage: {
        gradient: "linear-gradient(33deg ,#0a205f,#6627a6,#23409230)",
        gradient1: "linear-gradient(34deg ,#00000049,#00000049)",
      },
      boxShadow: {
        bs1: "0px 8px  14px 0px #0000001e",
        bs: "0px 12px  24px 0px #0000000a",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
