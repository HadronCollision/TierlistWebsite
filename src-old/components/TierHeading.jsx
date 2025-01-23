import { Color } from "../constants/Color";

const TierHeading = ({ children }) => {
  const styles = {
    width: "15vw",
    textAlign: "center",
    borderRadius: "5px",
    backgroundColor: Color.headerColor,
    fontSize: "36px",
    fontWeight: "bold",
  };

  return (
    <div style={styles} className="audiowide-regular">
      {children}
    </div>
  );
};

export default TierHeading;
