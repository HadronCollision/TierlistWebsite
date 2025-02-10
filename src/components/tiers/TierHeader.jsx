import React from "react";
import TierHeading from "./TierHeading";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const TierHeader = () => {
  return (
    <div {...stylex.props(styles.header)}>
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

const styles = stylex.create({
  header: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: colors.headerColor,
    padding: "12px 0",
    border: `1px solid ${colors.secondary}`,
  },
});

export default TierHeader;
