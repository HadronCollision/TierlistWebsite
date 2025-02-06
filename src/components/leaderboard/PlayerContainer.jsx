import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { colors } from "../../tokens.stylex";

const PlayerContainer = ({ player, index, setModalState }) => {
  const [hover, setHover] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <m.span
        {...stylex.props(styles.playerCell)}
        whileTap={{ scale: 0.99 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() =>
          setModalState({
            show: true,
            player: { ign: player, country: "pk" },
          })
        }
      >
        <span
          {...stylex.props(
            hover ? [styles.index, styles.indexActive] : styles.index
          )}
        >
          #{index + 1}
          <img
            src={`https://render.crafty.gg/2d/head/${player}`}
            {...stylex.props(styles.skin)}
          />
        </span>
        {player}
      </m.span>
    </LazyMotion>
  );
};

const styles = stylex.create({
  playerCell: {
    width: "100%",
    height: "80px",
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.secondary,
    margin: "4px 0px",
    borderRadius: "24px",
    fontFamily: "Poppins",
    fontSize: "28px",
    cursor: "pointer",
  },
  index: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    width: "140px",
    borderRadius: "24px",
    backgroundColor: colors.tertiary,
    fontFamily: "Russo One",
    fontSize: "32px",
    marginRight: "8px",
    transition: "0.2s",
  },
  indexActive: {
    width: "150px",
  },
  skin: {
    height: "64px",
    width: "64px",
    borderRadius: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  },
});

export default PlayerContainer;
