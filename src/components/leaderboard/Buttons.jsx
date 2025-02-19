import React from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex.js";
import { LazyMotion } from "motion/react";
import * as m from "motion/react-m";

const loadFeatures = () =>
  import("../../motionFeatures.js").then((res) => res.default);

const Buttons = ({
  buttons,
  selectedButton,
  setSelectedButton,
  onClick,
  layoutId,
}) => {
  return (
    <div {...stylex.props(styles.buttonContainer)}>
      <div {...stylex.props(styles.buttonWrapper)}>
        {buttons.map((button, i) => (
          <div
            {...stylex.props(styles.button)}
            onClick={() => {
              setSelectedButton(button.id);
              if (onClick) onClick(button.id);
            }}
            key={i}
          >
            <LazyMotion features={loadFeatures}>
              {selectedButton === button.id && (
                <m.div
                  layoutId={layoutId}
                  {...stylex.props(styles.underline)}
                ></m.div>
              )}
            </LazyMotion>
            {button.label.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = stylex.create({
  buttonContainer: {
    marginVertical: "8px",
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
    padding: "8px 8px",
    borderRadius: "16px",
    border: `1px solid ${colors.secondary}`,
  },
  button: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "10vw",
    minWidth: "144px",
    padding: "2px 0",
    borderRadius: "8px",
    fontFamily: "Russo One",
    cursor: "pointer",
    userSelect: "none",
  },
  underline: {
    position: "absolute",
    left: "0px",
    right: "0px",
    height: "120%",
    border: `2px solid ${colors.loader}`,
    borderRadius: "16px",
  },
});

export default Buttons;
