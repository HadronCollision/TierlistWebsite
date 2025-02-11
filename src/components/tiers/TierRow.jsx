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
      <span
        {...stylex.props(
          styles.country,
          hover && styles.countryHover,
          country === "pk" ? styles.countryPk : styles.countryIn
        )}
      >
        {country.toUpperCase()}
      </span>
      <span {...stylex.props(styles.ign)}>{ign}</span>
    </m.li>
  );
};

const styles = stylex.create({
  base: {
    height: "5vh",
    width: "19vw",
    minWidth: "215px",
    margin: "4px 0",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "18px",
    listStyle: "none",
    color: "#ececec",
    position: "relative",
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
    borderLeft: `3px solid ${colors.green}`,
  },
  in: {
    borderLeft: `3px solid ${colors.orange}`,
  },
  ign: {
    paddingHorizontal: "8px",
  },
  country: {
    height: "5vh",
    width: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(95, 158, 110, 0.3)",
    // borderRadius: "0 12px 12px 0",
    transition: "0.2s",
    overflow: "hidden",
  },
  countryHover: {
    width: "4.5vh",
    paddingRight: "2px",
    fontWeight: "bold",
  },
  countryPk: {
    backgroundColor: "rgba(95, 158, 110, 0.3)",
  },
  countryIn: {
    backgroundColor: "rgb(217, 130, 59, 0.3)",
  },
});

export default TierRow;
