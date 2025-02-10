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
    width: "19vw",
    minWidth: "215px",
    margin: "4px 0",
    padding: "8px 10px",
    cursor: "pointer",
    fontSize: "18px",
    listStyle: "none",
    color: "#ececec",
  },
  high: {
    backgroundColor: {
      default: colors.secondary,
      ":hover": "#302a28",
    },
  },
  low: {
    backgroundColor: {
      default: colors.primary,
      ":hover": "#23201e",
    },
  },
  pk: {
    borderLeft: `3px solid green`,
  },
  in: {
    borderLeft: `3px solid orange`,
  },
});

export default TierRow;
