import { useState } from "react";
import { Color } from "../../constants/color";
import { useModal } from "../../context/modalContext";
import * as m from "motion/react-m";

const TierRow = ({ player }) => {
  const { setModalState } = useModal();
  const { ign, rank, country } = player;
  const [hover, setHover] = useState(false);
  const color = country === "pk" ? "green" : "orange";

  const showModal = (player) => {
    setModalState({ show: true, player: player });
  };

  const styles = {
    width: "15vw",
    minWidth: "240px",
    backgroundColor: rank.pos === "high" ? Color.primary : Color.secondary,
    margin: "4px 0",
    padding: "8px",
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "18px",
    borderLeft: `4px solid ${color}`,
    listStyle: "none",
    transition: "0.1s",
  };

  return (
    <m.li
      style={styles}
      onClick={() => showModal(player)}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {ign}
    </m.li>
  );
};

export default TierRow;
