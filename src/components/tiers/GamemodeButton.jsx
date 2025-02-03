import React from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import { NavLink } from "react-router";

function GamemodeButton({ gamemode, isSelected, onClick }) {
  return (
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
    </div>
  );
}

const styles = stylex.create({
  button: {
    cursor: "pointer",
    textDecoration: "none",
    backgroundColor: colors.secondary,
    height: "48px",
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "24px",
    fontSize: "18px",
  },
  buttonActive: {
    backgroundColor: colors.tertiary,
  },
  modalActive: {
    transform: "translateY(-3px)",
    transition: "0.3s",
  },
  icon: {
    height: "80%",
    backgroundColor: "transparent",
  },
});

export default GamemodeButton;
