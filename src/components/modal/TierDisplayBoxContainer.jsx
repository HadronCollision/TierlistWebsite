import React from "react";
import TierDisplayBox from "./TierDisplayBox";
import { GamemodeList } from "../../constants/gamemode";

const TierDisplayBoxContainer = ({ rank }) => {
  return (
    <div style={styles.container}>
      {GamemodeList.map((mode, index) => (
        <TierDisplayBox type={`tier-${mode}`} tier={rank?.[mode]} key={index} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: "absolute",
    transform: "translate(-40px, 0px)",
  },
};

export default TierDisplayBoxContainer;
