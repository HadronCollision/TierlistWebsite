import React from "react";
import { Color } from "../constants/color";
import { NavLink } from "react-router";

//prettier-ignore
const gamemodes = [
  { src: "https://mctiers.com/assets/overall-ca77dd12.svg", label: "Overall", id: "overall" },
  { src: "https://mctiers.com/assets/sword-9023278f.svg", label: "Sword", id: "sword" },
  { src: "https://mctiers.com/assets/neth_pot-07e18fb6.svg", label: "Netherite Pot", id: "nethpot"},
  { src: "https://mctiers.com/assets/vanilla-38455c89.svg", label: "Crystal", id: "crystal" },
  { src: "https://mctiers.com/assets/pot-5ade81ba.svg", label: "Diamond Pot", id: "diapot" },
  { src: "https://mctiers.com/assets/axe-09fbd7d8.svg", label: "Axe & Shield", id: "axe" },
  { src: "https://mctiers.com/assets/uhc-05be850e.svg", label: "UHC Kit", id: "uhc" },
  { src: "https://mctiers.com/assets/smp-72ce94df.svg", label: "SMP Kit", id: "smp"},
];

const GamemodeHeader = ({ selectedMode, setSelectedMode }) => {
  const animationStyles = {
    modal: { transform: "translateY(-3px)", transition: "0.25s" },
    button: {
      ...styles.button,
      backgroundColor: "#555",
    },
  };

  return (
    <div style={styles.container}>
      {gamemodes.map((gamemode, index) => {
        const isSelected = selectedMode === gamemode.id;
        return (
          <div
            style={isSelected ? animationStyles.modal : {}}
            key={gamemode.id}
          >
            <NavLink
              style={isSelected ? animationStyles.button : styles.button}
              onClick={() => setSelectedMode(gamemode.id)}
              to={`/tiers/${gamemode.id}`}
              key={index}
            >
              <img src={gamemode.src} style={styles.icon} alt="icon" />
              {/* {gamemode.label} */}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: Color.backgroundColor,
    margin: "10px 0",
  },
  button: {
    cursor: "pointer",
    textDecoration: "none",
    backgroundColor: Color.lowTier,
    height: "48px",
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "24px",
    fontSize: "18px",
    margin: "0 10px",
  },
  icon: {
    height: "80%",
    backgroundColor: "transparent",
    padding: "0px 8px",
  },
};

export default GamemodeHeader;
