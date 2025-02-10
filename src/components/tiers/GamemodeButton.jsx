import React from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import { NavLink } from "react-router";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";

const GamemodeButton = ({ gamemode, isSelected, onClick }) => (
  <div {...stylex.props(isSelected ? styles.modalActive : {})}>
    <NavLink
      {...stylex.props(
        isSelected ? [styles.button, styles.buttonActive] : styles.button
      )}
      onClick={onClick}
      to={gamemode.route}
    >
      <img src={gamemode.src} {...stylex.props(styles.icon)} />
    </NavLink>
    {isSelected && (
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ y: 0, backgroundColor: colors.tertiary }}
          animate={{ y: 4, backgroundColor: colors.loader }}
          transition={{ duration: 0.3 }}
          {...stylex.props(styles.underline)}
        />
      </LazyMotion>
    )}
  </div>
);

const styles = stylex.create({
  button: {
    textDecoration: "none",
    backgroundColor: colors.secondary,
    height: "48px",
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "18px",
    fontSize: "18px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
  },
  buttonActive: {
    backgroundColor: colors.tertiary,
  },
  modalActive: {
    transform: "translateY(-3px)",
    transition: "0.25s",
  },
  icon: {
    height: "80%",
    backgroundColor: "transparent",
  },
  underline: {
    position: "absolute",
    left: "16px",
    right: "16px",
    bottom: 0,
    height: "2px",
    borderRadius: "1px",
    backgroundColor: colors.loader,
  },
});

export default React.memo(GamemodeButton);
