module.exports = function ({ addUtilities }) {
  //newUtilities is not tailwind specific
  const newUtilities = {
    //This is our className
    ".poemPurple": {
      //These are the custom properties we will get when we call our class name
      color: "#500b67",
    },
  };
  addUtilities(newUtilities);
};
