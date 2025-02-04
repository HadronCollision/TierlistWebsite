import React from "react";
import { BeatLoader } from "react-spinners";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const iconUrls = {
  sword: "https://mctiers.io/assets/sword-9023278f.svg",
  nethpot: "https://mctiers.io/assets/neth_pot-07e18fb6.svg",
  crystal: "https://mctiers.io/assets/vanilla-38455c89.svg",
  diapot: "https://mctiers.io/assets/pot-5ade81ba.svg",
  axe: "https://mctiers.io/assets/axe-09fbd7d8.svg",
  uhc: "https://mctiers.io/assets/uhc-05be850e.svg",
  smp: "https://mctiers.io/assets/smp-72ce94df.svg",
};

const formatTier = (tier) => {
  if (!tier?.pos) return "-";
  return `${tier.pos.slice(0, 1).toUpperCase()}T${tier.tier}`;
};

const TierDisplayBox = ({ type, tier, isLoading }) => {
  if (isLoading)
    return (
      <div
        className={type}
        style={{ ...cssStyles.container, backgroundColor: colors.secondary }}
      >
        <BeatLoader
          color={colors.loader}
          style={cssStyles.loader}
          size="12px"
        />
      </div>
    );

  const iconUrl = iconUrls[type.split("-")[1]];

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className={type}
        style={cssStyles.container}
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

const cssStyles = {
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
  },
  loader: {
    backgroundColor: colors.secondary,
    display: "flex",
  },
};

const styles = stylex.create({
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
    color: "#ffffff",
    fontFamily: "Varela Round",
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "transparent",
    userSelect: "none",
    margin: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.tertiary,
  },
  loader: {
    backgroundColor: colors.secondary,
    display: "flex",
  },
});

export default TierDisplayBox;
