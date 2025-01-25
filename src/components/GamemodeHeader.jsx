import React, { useState } from "react";
import { Color } from "../constants/color";
import { NavLink } from "react-router";
import { motion } from "motion/react";

//prettier-ignore
const gamemodes = [
  { src: "https://mctiers.com/assets/sword-9023278f.svg", label: "Sword", id: "sword" },
  { src: "https://mctiers.com/assets/neth_pot-07e18fb6.svg", label: "Netherite Pot", id: "nethpot"},
  { src: "https://mctiers.com/assets/vanilla-38455c89.svg", label: "Crystal", id: "crystal" },
  { src: "https://mctiers.com/assets/pot-5ade81ba.svg", label: "Diamond Pot", id: "diapot" },
  { src: "https://mctiers.com/assets/axe-09fbd7d8.svg", label: "Axe & Shield", id: "axe" },
  { src: "https://mctiers.com/assets/uhc-05be850e.svg", label: "UHC Kit", id: "uhc" },
  { src: "https://mctiers.com/assets/smp-72ce94df.svg", label: "SMP Kit", id: "smp"},
];

const GamemodeHeader = ({ selectedMode, setSelectedMode }) => {
  return (
    <div style={styles.container}>
      {gamemodes.map((gamemode, index) => (
        <motion.div
          style={
            selectedMode === gamemode.id
              ? { transform: "translateY(-3px)", transition: "0.1s" }
              : { transform: "translateY(0px)", transition: "0.1s" }
          }
          key={gamemode.id}
        >
          <NavLink
            className="gamemode-button"
            style={{
              ...styles.button,
              backgroundColor:
                selectedMode === gamemode.id ? "a55" : Color.lowTier,
            }}
            onClick={() => setSelectedMode(gamemode.id)}
            to={`/tiers/${gamemode.id}`}
            key={index}
          >
            <img src={gamemode.src} style={styles.icon} alt="icon" />
            {gamemode.label}
          </NavLink>
        </motion.div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: Color.backgroundColor,
    margin: "20px 0",
  },
  button: {
    cursor: "pointer",
    textDecoration: "none",
    backgroundColor: Color.lowTier,
    height: "48px",
    width: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "24px",
    fontSize: "18px",
  },
  icon: {
    height: "80%",
    backgroundColor: "transparent",
    padding: "0px 8px",
  },
};

export default GamemodeHeader;
