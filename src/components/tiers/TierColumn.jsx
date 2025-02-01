import React from "react";
import TierRow from "./TierRow";
import { BeatLoader } from "react-spinners";
import * as m from "motion/react-m";
import { domAnimation, LazyMotion } from "motion/react";
import { Color } from "../../constants/color";
import * as stylex from "@stylexjs/stylex";

const TierColumn = ({ players }) => {
  return (
    <>
      {players ? (
        <LazyMotion features={domAnimation}>
          <m.ul
            initial={{ opacity: 1 }}
            transition={{ duration: 1 }}
            {...stylex.props(styles.default)}
          >
            {players?.map((player) => (
              <TierRow player={player} key={player.ign} />
            ))}
            <div {...stylex.props(styles.placeholder)}></div>
          </m.ul>
        </LazyMotion>
      ) : (
        <BeatLoader color={Color.loader} {...stylex.props(styles.loader)} />
      )}
    </>
  );
};

const styles = stylex.create({
  default: {
    margin: 0,
    padding: 0,
  },
  placeholder: {
    width: "15vw",
    minWidth: "240px",
  },
  loader: {
    marginTop: "50px",
  },
});

export default TierColumn;
