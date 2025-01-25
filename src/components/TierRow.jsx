import { Color } from "../constants/color";
import { useModal } from "../context/modalContext";

const TierRow = ({ player }) => {
  const { setModalState } = useModal();
  const { ign, rank, country } = player;

  const showModal = (player) => {
    setModalState({ show: true, player: player });
  };

  const styles = {
    width: "15vw",
    minWidth: "240px",
    backgroundColor: rank === "high" ? Color.highTier : Color.lowTier,
    margin: "8px 0",
    padding: "8px",
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "18px",
    borderLeft: `4px solid ${country === "pk" ? "green" : "orange"}`,
  };

  return (
    <div style={styles} onClick={() => showModal(player)}>
      {ign}
    </div>
  );
};

export default TierRow;
