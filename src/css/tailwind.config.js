module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#395241",
        footer: "#374756",
        footerInner: "#6B8065",
        banner: "#F3EEE2",
        rings: "#D9D9D9",
        neutral3: "#2B3035",
        transactions: "#D4CEBD",
        neutral8: "#E6E6E6",
        slate: {
          900: "#101D2D",
        },
        blue: {
          500: "#5696FF",
          600: "#2174EA",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "playfair-display": ["sans", "serif"],
        "primary-display": ["Poppins"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.01em" }],
        "3xl": ["2rem", { lineHeight: "1.3125", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "6xl": ["4rem", { lineHeight: "1.1562", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/forms"),
  ],
};
