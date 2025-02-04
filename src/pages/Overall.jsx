import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import { motion } from "motion/react";

function Overall() {
  const [selectedButton, setSelectedButton] = useState("overall");
  return (
    <div {...stylex.props(styles.buttonContainer)}>
      <div {...stylex.props(styles.buttonWrapper)}>
        {["overall", "top10"].map((button) => (
          <div
            {...stylex.props(
              selectedButton === button ? styles.buttonActive : styles.button
            )}
            onClick={() => setSelectedButton(button)}
          >
            {selectedButton === button && (
              <motion.div
                layoutId="underline"
                {...stylex.props(styles.underline)}
              ></motion.div>
            )}
            {button.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = stylex.create({
  buttonContainer: {
    marginTop: "16px",
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
    padding: "2px 0",
    marginHorizontal: "16px",
    borderRadius: "8px",
    fontFamily: "Audiowide",
    cursor: "pointer",
  },
  buttonActive: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "10vw",
    padding: "2px 0",
    marginHorizontal: "16px",
    borderRadius: "8px",
    fontFamily: "Audiowide",
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

export default Overall;
