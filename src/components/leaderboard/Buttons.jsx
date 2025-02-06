import React from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex.js";
import { LazyMotion } from "motion/react";
import * as m from "motion/react-m";

const loadFeatures = () =>
  import("../../motionFeatures.js").then((res) => res.default);

function Buttons({ selectedButton, setSelectedButton }) {
  return (
    <div {...stylex.props(styles.buttonContainer)}>
      <div {...stylex.props(styles.buttonWrapper)}>
        {["overall", "top 10"].map((button, i) => (
          <div
            {...stylex.props(styles.button)}
            onClick={() => setSelectedButton(button)}
            key={i}
          >
            <LazyMotion features={loadFeatures}>
              {selectedButton === button && (
                <m.div
                  layoutId="underline"
                  {...stylex.props(styles.underline)}
                ></m.div>
              )}
            </LazyMotion>
            {button.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = stylex.create({
  buttonContainer: {
    marginVertical: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.textColor,
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: "8px 0",
    borderRadius: "25px",
  },
  button: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "10vw",
    minWidth: "125px",
    padding: "2px 0",
    marginHorizontal: "16px",
    borderRadius: "8px",
    fontFamily: "Russo One",
    cursor: "pointer",
  },
  underline: {
    position: "absolute",
    left: "12px",
    right: "12px",
    height: "100%",
    border: `2px solid ${colors.tertiary}`,
    borderRadius: "16px",
  },
});

export default Buttons;
