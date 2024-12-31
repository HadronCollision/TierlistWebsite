import { Color } from "../constants/Color";

const TierRow = ({ ign, rank, country, onShowModal }) => {
  const styles = {
    width: "15vw",
    backgroundColor: rank === "high" ? Color.highTier : Color.lowTier,
    margin: "8px 0",
    padding: "8px",
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "18px",
    borderLeft: `4px solid ${country === "pk" ? "green" : "orange"}`,
  };

  return (
    <div style={styles} onClick={() => onShowModal((val) => !val)}>
      {ign}
    </div>
  );
};

export default TierRow;
