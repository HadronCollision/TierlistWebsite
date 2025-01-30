import React from "react";
import TierDisplayBox from "./TierDisplayBox";
import { GamemodeList } from "../../constants/gamemode";
import { BeatLoader } from "react-spinners";

const TierDisplayBoxContainer = ({ rank }) => {
  const formatTier = (tier) => {
    if (!rank)
      return (
        <BeatLoader
          color="#aaa"
          style={{ backgroundColor: "transparent" }}
          size="8px"
        />
      );

    if (!tier?.pos) return "-";

    return `${tier.pos.slice(0, 1).toUpperCase()}T${tier.tier}`;
  };
  //prettier-ignore
  return (
      <div style={styles.container}>
        {GamemodeList.map((mode, index) => (
          <TierDisplayBox type={`tier-${mode}`} tier={formatTier(rank?.[mode])} key={index} />
        ))}
      </div>
    );
};

const styles = {
  container: {
    position: "absolute",
    transform: "translate(-60px, -30px)",
  },
};

export default TierDisplayBoxContainer;
