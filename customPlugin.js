module.exports = function ({ addUtilities }) {
  const newUtilities = {
    ".header-icons": {
      width: "30px",
      height: "30px",
      margin: "6px",
    },
    ".count": {
      fontWeight: "900",
      marginRight: "5px",
      color: "#fb1a1a",
    },
    ".skills-container": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    ".grad-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "74px",
      width: "74px",
      position: "relative",
      borderRadius: "50%",
      marginBottom: "5px",
    },
    ".logo-container": {
      position: "absolute",
      zIndex: "20",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    ".skills-logo": {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      marginBottom: "6px",
      marginTop: "6px",
      marginRight: "0px",
    },
    ".school-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "54px",
      width: "54px",
      position: "relative",
      borderRadius: "50%",
      marginBottom: "5px",
    },
    ".school-logo": {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginBottom: "6px",
      marginTop: "6px",
      marginRight: "0px",
    },
    // Define more utilities as needed
  };

  addUtilities(newUtilities, ["responsive", "hover"]);
};
