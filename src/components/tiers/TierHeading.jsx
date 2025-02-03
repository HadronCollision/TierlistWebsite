import { colors } from "../../tokens.stylex";
import * as stylex from "@stylexjs/stylex";

const TierHeading = ({ children }) => {
  return <p {...stylex.props(styles.base)}>{children}</p>;
};

const styles = stylex.create({
  base: {
    width: "18vw",
    textAlign: "center",
    borderRadius: "5px",
    color: colors.textColor,
    backgroundColor: colors.headerColor,
    fontFamily: "Audiowide",
    fontSize: "36px",
    fontWeight: "bold",
    cursor: "default",
    userSelect: "none",
    margin: 0,
  },
});

export default TierHeading;
