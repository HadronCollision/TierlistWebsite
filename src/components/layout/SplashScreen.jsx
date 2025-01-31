import React from "react";
import { BarLoader } from "react-spinners";
import { Color } from "../../constants/color";

function SplashScreen() {
  return (
    <div style={styles.container}>
      <BarLoader color={Color.loader} width="10vw" />
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "black",
  },
};

export default SplashScreen;
