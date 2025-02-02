import { colors } from "../../tokens.stylex";

const TierHeading = ({ children }) => {
  return <p style={styles}>{children}</p>;
};

const styles = {
  width: "15vw",
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
};

export default TierHeading;
