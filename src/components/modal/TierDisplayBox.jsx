import React from "react";
import { Color } from "../../constants/color";

const iconUrls = {
  sword: "https://mctiers.io/assets/sword-9023278f.svg",
  nethpot: "https://mctiers.io/assets/neth_pot-07e18fb6.svg",
  crystal: "https://mctiers.io/assets/vanilla-38455c89.svg",
  diapot: "https://mctiers.io/assets/pot-5ade81ba.svg",
  axe: "https://mctiers.io/assets/axe-09fbd7d8.svg",
  uhc: "https://mctiers.io/assets/uhc-05be850e.svg",
  smp: "https://mctiers.io/assets/smp-72ce94df.svg",
};

const TierDisplayBox = ({ type, orientation, tier }) => {
  const iconUrl = iconUrls[type.split("-")[1]];

  return (
    <div style={styles.container} className={type}>
      {orientation === "left" ? (
        <>
          <IconWrapper iconUrl={iconUrl} />
          <TextWrapper tier={tier} />
        </>
      ) : (
        <>
          <TextWrapper tier={tier} />
          <IconWrapper iconUrl={iconUrl} />
        </>
      )}
    </div>
  );
};

const IconWrapper = ({ iconUrl }) => (
  <div style={styles.iconWrapper}>
    <img src={iconUrl} style={styles.icon} />
  </div>
);
const TextWrapper = ({ tier }) => (
  <div style={styles.textWrapper}>
    <p style={styles.text}>{tier}</p>
  </div>
);

const styles = {
  container: {
    position: "absolute",
    height: "60px",
    width: "120px",
    display: "flex",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  },
  iconWrapper: {
    width: "50%",
    backgroundColor: "#555",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    width: "50%",
    backgroundColor: Color.lowTier,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "transparent",
    margin: 0,
  },
  icon: {
    height: "48px",
    width: "48px",
    objectFit: "contain",
    backgroundColor: "#555",
  },
};

export default TierDisplayBox;
