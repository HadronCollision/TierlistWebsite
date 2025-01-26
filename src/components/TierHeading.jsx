import { Color } from "../constants/color";

const TierHeading = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

const styles = {
  width: "15vw",
  textAlign: "center",
  borderRadius: "5px",
  backgroundColor: Color.headerColor,
  fontSize: "36px",
  fontWeight: "bold",
  cursor: "default",
  userSelect: "none",
};

export default TierHeading;
