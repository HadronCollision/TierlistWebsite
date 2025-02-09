import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import { useModal } from "../../context/modalContext";

const PlayerContainer = ({ ign, rank, index }) => {
  const { setModalState } = useModal();
  const [hover, setHover] = useState(false);

  return (
    <span
      {...stylex.props(styles.playerCell)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() =>
        setModalState({
          show: true,
          player: { ign, country: "pk" },
        })
      }
    >
      <span
        {...stylex.props(
          hover ? [styles.index, styles.indexActive] : styles.index,
          index === 0 && styles.goldIndex,
          index === 1 && styles.silverIndex,
          index === 2 && styles.bronzeIndex
        )}
      >
        #{index + 1}
        <img
          src={`https://render.crafty.gg/2d/head/${ign}`}
          {...stylex.props(styles.skin)}
        />
      </span>
      <span {...stylex.props(styles.playerTextContainer)}>
        {ign}
        {rank && <span {...stylex.props(styles.rankText)}>{rank}</span>}
      </span>
    </span>
  );
};

const styles = stylex.create({
  playerCell: {
    width: "100%",
    height: "70px",
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
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    width: "150px",
    borderRadius: "24px",
    backgroundColor: colors.tertiary,
    fontFamily: "Russo One",
    fontSize: "32px",
    marginRight: "8px",
    paddingHorizontal: "2px",
    transition: "0.2s",
  },
  goldIndex: {
    backgroundColor: " #D6AF36",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  silverIndex: {
    backgroundColor: " #A7A7AD",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  bronzeIndex: {
    backgroundColor: " #A77044",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  indexActive: {
    width: "160px",
  },
  skin: {
    height: "58px",
    width: "58px",
    borderRadius: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  },
  playerTextContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  rankText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "18px",
    backgroundColor: colors.primary,
    borderRadius: "16px",
    width: "100px",
    height: "50px",
  },
});

export default PlayerContainer;
