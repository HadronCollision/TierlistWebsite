import React from "react";
import { BarLoader } from "react-spinners";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

function SplashScreen() {
  return (
    <div {...stylex.props(styles.base)}>
      <BarLoader color={colors.loader} />
    </div>
  );
}

const styles = stylex.create({
  base: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: colors.backgroundColor,
    zIndex: 1000,
  },
});

export default SplashScreen;
