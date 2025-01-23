import React from "react";
import { playerData } from "./DummyData";
import { Color } from "../constants/Color";
import TierColumn from "./TierColumn";

function TierColumnContainer() {
  return (
    <div style={styles.container}>
      <TierColumn players={playerData.tier1s} />
      <div style={styles.border} />
      <TierColumn players={playerData.tier2s} />
      <div style={styles.border} />
      <TierColumn players={playerData.tier3s} />
      <div style={styles.border} />
      <TierColumn players={playerData.tier4s} />
      <div style={styles.border} />
      <TierColumn players={playerData.tier5s} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: Color.backgroundColor,
    height: "100%",
  },
  border: {
    border: `2px solid ${Color.headerColor}`,
    margin: 0,
    padding: 0,
  },
};

export default TierColumnContainer;
