import React from "react";
import { Color } from "../../constants/color";
import TierHeading from "./TierHeading";

const TierHeader = () => {
  console.log("TierHeader render");
  return (
    <div className="audiowide-regular" style={styles.header}>
      <TierHeading>Tier 1</TierHeading>
      <div />
      <TierHeading>Tier 2</TierHeading>
      <div />
      <TierHeading>Tier 3</TierHeading>
      <div />
      <TierHeading>Tier 4</TierHeading>
      <div />
      <TierHeading>Tier 5</TierHeading>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: Color.headerColor,
    padding: "12px 0",
    cusor: "pointer",
  },
};

export default TierHeader;
