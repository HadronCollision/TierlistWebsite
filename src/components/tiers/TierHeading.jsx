import { Color } from "../../constants/color";

const TierHeading = ({ children }) => {
  return <p style={styles}>{children}</p>;
};

const styles = {
  width: "15vw",
  textAlign: "center",
  borderRadius: "5px",
  backgroundColor: Color.headerColor,
  fontFamily: "Audiowide",
  fontSize: "36px",
  fontWeight: "bold",
  cursor: "default",
  userSelect: "none",
};

export default TierHeading;
