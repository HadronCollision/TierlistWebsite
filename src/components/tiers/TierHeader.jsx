import React from "react";
import { Color } from "../../constants/color";
import TierHeading from "./TierHeading";
import Font from "react-font";

const TierHeader = () => {
  return (
    <Font family="Audiowide">
      <div style={styles.header}>
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
    </Font>
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
