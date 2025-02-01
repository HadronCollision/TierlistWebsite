import React from "react";
import TierDisplayBox from "./TierDisplayBox";
import { GamemodeList } from "../../constants/gamemode";
import * as stylex from "@stylexjs/stylex";

const TierDisplayBoxContainer = ({ rank }) => {
  return (
    <div {...stylex.props(styles.container)}>
      {GamemodeList.map((mode, index) => (
        <TierDisplayBox type={`tier-${mode}`} tier={rank?.[mode]} key={index} />
      ))}
    </div>
  );
};

const styles = stylex.create({
  container: {
    position: "absolute",
    transform: "translate(-40px, 0px)",
  },
});

export default TierDisplayBoxContainer;
