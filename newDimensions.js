module.exports = function ({ addUtilities }) {
  const newUtilities = {
    ".perspective": {
      perspective: "3000px",
      //for 2xl: You need to make variants for all breakpoints
      "max-width": "1440px",
      "max-height": "800px",
      width: "100%",
      height: "800px",
    },
    ".card-3d": {
      "transform-style": "preserve-3d",
      position: "absolute",
    },
    ".left-3d": {
      transform: "rotateY(-40deg) translateX(-800px) translateZ(-1rem)",
      zIndex: "-1",
      height: "auto",
      width: "25%",
    },
    ".right-3d": {
      transform: "rotateY(40deg) translateX(800px) translateZ(-1rem)",
      zIndex: "-1",
      height: "auto",
      width: "25%",
    },
    ".center-3d": {
      transform: "rotateY(0deg) translateX(0px) translateZ(1rem)",
      height: "fit-content",
      zIndex: "1",
      width: "55%",
    },
    ".left-3d-m": {
      transform: "rotateY(-35deg) translateX(-500px) translateZ(-1rem)",
      zIndex: "-1",
      height: "auto",
      width: "20%",
    },
    ".right-3d-m": {
      transform: "rotateY(35deg) translateX(500px) translateZ(-1rem)",
      zIndex: "-1",
      height: "fit-content",
      width: "20%",
    },
    ".center-3d-m": {
      height: "fit-content",
      zIndex: "1",
      width: "25%",
    },
    ".grannyShift": {
      transition: "all .4s ease-out",
    },
  };
  addUtilities(newUtilities, ["responsive", "hover"]);
};
