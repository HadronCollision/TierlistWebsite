import React from "react";
import { BeatLoader } from "react-spinners";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const iconUrls = {
  sword: "/icons/sword.png",
  nethpot: "/icons/nethpot.png",
  crystal: "/icons/crystal.png",
  diapot: "/icons/diapot.png",
  axe: "/icons/axe.png",
  uhc: "/icons/uhc.png",
  smp: "/icons/smp.png",
};

const formatTier = (tier) => {
  if (!tier?.pos) return "-";
  return `${tier.pos.slice(0, 1).toUpperCase()}T${tier.tier}`;
};

const TierDisplayBox = ({ type, tier, isLoading }) => {
  if (isLoading)
    return (
      <div {...stylex.props(styles.container, styles[type.split("-")[1]])}>
        <BeatLoader color={colors.loader} size="12px" />
      </div>
    );

  const iconUrl = iconUrls[type.split("-")[1]];

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        {...stylex.props(styles.container, styles[type.split("-")[1]])}
      >
        <div {...stylex.props(styles.iconWrapper)}>
          <img src={iconUrl} {...stylex.props(styles.icon)} />
        </div>
        <div {...stylex.props(styles.textWrapper)}>
          <p {...stylex.props(styles.text)}>{formatTier(tier)}</p>
        </div>
      </m.div>
    </LazyMotion>
  );
};

const styles = stylex.create({
  container: {
    position: "absolute",
    height: "80px",
    width: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "40px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
    backgroundColor: colors.secondary,
  },
  iconWrapper: {
    height: "50%",
    width: "100%",
    backgroundColor: colors.tertiary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    height: "50%",
    width: "100%",
    backgroundColor: colors.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.textColor,
    fontFamily: "Varela Round",
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "transparent",
    userSelect: "none",
    margin: 0,
  },
  icon: {
    height: "85%",
    width: "auto",
    backgroundColor: colors.tertiary,
  },
  sword: {
    transform: "translate(200px, -120px)",
  },
  nethpot: {
    transform: "translate(220px, 10px)",
  },
  crystal: {
    transform: "translate(150px, 130px)",
  },
  diapot: {
    transform: "translate(0px, 190px)",
  },
  axe: {
    transform: "translate(-150px, 130px)",
  },
  uhc: {
    transform: "translate(-220px, 10px)",
  },
  smp: {
    transform: "translate(-200px, -120px)",
  },
});

export default TierDisplayBox;
