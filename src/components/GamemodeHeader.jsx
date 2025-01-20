import React from "react";
import { Color } from "../constants/Color";

const GamemodeHeader = () => {
  //prettier-ignore
  const gamemodes = [
  { src: "https://mctiers.com/assets/sword-9023278f.svg", label: "Sword" },
  { src: "https://mctiers.com/assets/neth_pot-07e18fb6.svg", label: "Netherite Pot"},
  { src: "https://mctiers.com/assets/vanilla-38455c89.svg", label: "Crystal" },
  { src: "https://mctiers.com/assets/pot-5ade81ba.svg", label: "Diamond Pot" },
  { src: "https://mctiers.com/assets/axe-09fbd7d8.svg", label: "Axe & Shield" },
  { src: "https://mctiers.com/assets/uhc-05be850e.svg", label: "UHC Kit" },
  { src: "https://mctiers.com/assets/smp-72ce94df.svg", label: "SMP Kit" },
];

  return (
    <div style={styles.container}>
      {gamemodes.map((gamemode, index) => (
        <div key={index} className="gamemode-button" style={styles.button}>
          <img src={gamemode.src} style={styles.icon} alt="icon" />
          {gamemode.label}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: Color.backgroundColor,
    margin: "10px 0",
  },
  button: {
    cursor: "pointer",
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
