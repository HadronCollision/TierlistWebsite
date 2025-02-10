import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import { useModal } from "../../context/modalContext";

const PlayerContainer = ({ ign, rank, index, isLoading }) => {
  const { setModalState } = useModal();
  const [hover, setHover] = useState(false);

  if (isLoading) return <span {...stylex.props(styles.skeletonLoader)} />;

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

const shimmer = stylex.keyframes({
  "0%": { backgroundPosition: "200% 0" },
  "100%": { backgroundPosition: "-200% 0" },
});

const styles = stylex.create({
  skeletonLoader: {
    width: "100%",
    height: "70px",
    margin: "4px 0px",
    background: `linear-gradient(90deg, ${colors.secondary} 25%, #322A25 50%, ${colors.secondary} 75%)`,
    backgroundSize: "200% 100%",
    borderRadius: "24px",
    animationName: shimmer,
    animationDuration: "2s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    position: "relative",

    "::before": {
      content: "",
      position: "absolute",
      borderRadius: "16px",
      width: "100px",
      height: "60px",
      top: "50%",
      left: "8px",
      background: colors.tertiary,
      transform: "translateY(-50%)",
    },
    "::after": {
      content: "",
      position: "absolute",
      borderRadius: "12px",
      width: "70px",
      height: "40px",
      top: "50%",
      right: "16px",
      background: colors.tertiary,
      transform: "translateY(-50%)",
    },
  },
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
    backgroundColor: " #c9a03c",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  silverIndex: {
    backgroundColor: " #b5b5b5",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  bronzeIndex: {
    backgroundColor: " #9c6b3f",
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
