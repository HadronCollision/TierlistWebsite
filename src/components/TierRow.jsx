import { useState } from "react";
import { Color } from "../constants/color";
import { useModal } from "../context/modalContext";
import { AnimatePresence, motion } from "motion/react";

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
    backgroundColor: rank === "high" ? Color.highTier : Color.lowTier,
    margin: "8px 0",
    padding: "8px",
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "18px",
    borderLeft: `4px solid ${color}`,
    listStyle: "none",
    transition: "0.1s",
  };

  return (
    <motion.li
      style={styles}
      onClick={() => showModal(player)}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      transition={{ duration: 1 }}
    >
      {ign}
    </motion.li>
  );
};

export default TierRow;
