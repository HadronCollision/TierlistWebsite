import React from "react";
import TierRow from "./TierRow";
import { BeatLoader } from "react-spinners";
import * as m from "motion/react-m";
import { domAnimation, LazyMotion } from "motion/react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

const TierColumn = ({ players, isLoading }) => {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.ul
          {...stylex.props(styles.default)}
          key={JSON.stringify(players)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          {players?.map((player) => (
            <TierRow player={player} key={player.ign} />
          ))}
          <div {...stylex.props(styles.placeholder)}></div>

          {isLoading && (
            <BeatLoader
              color={colors.loader}
              {...stylex.props(styles.loader)}
            />
          )}
        </m.ul>
      </LazyMotion>
    </>
  );
};

const styles = stylex.create({
  default: {
    margin: 0,
    padding: 0,
  },
  placeholder: {
    width: "19vw",
    minWidth: "215px",
  },
  loader: {
    textAlign: "center",
    marginTop: "50px",
  },
});

export default TierColumn;
