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
          country === "pk" && styles.countryPk,
          country === "in" && styles.countryIn,
          country === "oth" && styles.countryOc
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
    height: "34px",
    width: "19vw",
    minWidth: "215px",
    margin: "2px 0",
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
  oth: {
    borderLeft: `3px solid ${colors.loader}`,
  },
  ign: {
    paddingHorizontal: "8px",
  },
  country: {
    height: "34px",
    width: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.2s",
    overflow: "hidden",
    textWrap: "none",
  },
  countryHover: {
    width: "5vh",
    paddingRight: "2px",
    fontFamily: "Roboto Mono",
    fontWeight: "bold",
  },
  countryPk: {
    backgroundColor: "rgba(95, 158, 110, 0.3)",
  },
  countryIn: {
    backgroundColor: "rgba(217, 130, 59, 0.3)",
  },
  countryOc: {
    backgroundColor: colors.tertiary,
  },
});

export default TierRow;
