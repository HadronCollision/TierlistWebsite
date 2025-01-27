import { Text } from "react-font";
import { Color } from "../../constants/color";

const TierHeading = ({ children }) => {
  return (
    <Text family="Audiowide" style={styles}>
      {children}
    </Text>
  );
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
