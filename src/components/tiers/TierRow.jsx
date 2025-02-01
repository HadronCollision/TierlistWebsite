import { useState } from "react";
import { useModal } from "../../context/modalContext";
import * as m from "motion/react-m";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const TierRow = ({ player }) => {
  const { setModalState } = useModal();
  const { ign, rank, country } = player;
  const [hover, setHover] = useState(false);

  const showModal = (player) => {
    setModalState({ show: true, player: player });
  };

  return (
    <m.li
      {...stylex.props(styles.base, styles[rank.pos], styles[country])}
      onClick={() => showModal(player)}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {ign}
    </m.li>
  );
};

const styles = stylex.create({
  base: {
    width: "15vw",
    minWidth: "240px",
    margin: "4px 0",
    padding: "8px",
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "18px",
    listStyle: "none",
    color: "#ececec",
  },
  high: {
    backgroundColor: colors.primary,
  },
  low: {
    backgroundColor: colors.secondary,
  },
  pk: {
    borderLeft: `4px solid green`,
  },
  in: {
    borderLeft: `4px solid orange`,
  },
});

export default TierRow;
