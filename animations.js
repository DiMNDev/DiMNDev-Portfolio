module.exports = function ({ addUtilities }) {
  const newUtilities = {
    ".buttonPulse": {
      animation: "pulsing 1.2s ease-out infinite",
    },
    "@keyframes pulsing": {
      "0%": { transform: "scale(1)", opacity: "0" },
      "50%": { opacity: ".4" },
      "100%": { transform: "scale(1.3)", opacity: "0" },
    },
  };
  addUtilities(newUtilities, ["responsive", "hover"]);
};
