module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      PermanentMarker: ["Permanent Marker"],
    },
    extend: {
      fontFamily: {
        PermanentMarker: ["Permanent Marker"],
      },
      width: {
        "double-screen": "200%",
      },
      rotate: {
        "-45/2": "-22.5deg",
      },
      dropShadow: {
        "dark-blue-solid-10": "-0.66rem 0.66rem 0px #172757",
        "dark-blue-solid-5": "-0.33rem 0.33rem 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ["hover", "focus"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
