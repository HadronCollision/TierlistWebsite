import React, { useEffect } from "react";
import { Color } from "../../constants/color";
import { NavLink, useLocation } from "react-router";
import { useSelectedMode } from "../../context/selectedModeContext";

//prettier-ignore
const gamemodes = [
  { src: "https://mctiers.io/assets/overall-ca77dd12.svg", label: "Overall", id: "overall", route: "/ranking/overall" },
  { src: "https://mctiers.io/assets/sword-9023278f.svg", label: "Sword", id: "sword", route: "/tiers/sword" },
  { src: "https://mctiers.io/assets/neth_pot-07e18fb6.svg", label: "Netherite Pot", id: "nethpot", route: "/tiers/nethpot"},
  { src: "https://mctiers.io/assets/vanilla-38455c89.svg", label: "Crystal", id: "crystal", route: "/tiers/crystal" },
  { src: "https://mctiers.io/assets/pot-5ade81ba.svg", label: "Diamond Pot", id: "diapot", route: "/tiers/diapot" },
  { src: "https://mctiers.io/assets/axe-09fbd7d8.svg", label: "Axe & Shield", id: "axe", route: "/tiers/axe" },
  { src: "https://mctiers.io/assets/uhc-05be850e.svg", label: "UHC Kit", id: "uhc", route: "/tiers/uhc" },
  { src: "https://mctiers.io/assets/smp-72ce94df.svg", label: "SMP Kit", id: "smp", route: "/tiers/smp"},
];

const GamemodeHeader = () => {
  const { pathname } = useLocation();

  const { selectedMode, setSelectedMode } = useSelectedMode();

  useEffect(() => {
    setSelectedMode(pathname.split("/")[2] || "overall");
  }, []);

  const animationStyles = {
    modal: { transform: "translateY(-3px)", transition: "0.3s" },
    button: {
      ...styles.button,
      backgroundColor: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.gamemodeContainer}>
        {gamemodes.map((gamemode, index) => {
          const isSelected = selectedMode === gamemode.id;
          return (
            <div
              style={isSelected ? animationStyles.modal : {}}
              key={gamemode.route}
            >
              <NavLink
                style={isSelected ? animationStyles.button : styles.button}
                onClick={() => setSelectedMode(gamemode.id)}
                to={gamemode.route}
                key={index}
              >
                <img src={gamemode.src} style={styles.icon} />
                {/* {gamemode.label} */}
              </NavLink>
            </div>
          );
        })}
      </div>
      {/* prettier-ignore */}
      <div style={styles.subhumanContainer}>
        <div style={selectedMode === "subhuman" ? animationStyles.modal : {}}>
          <NavLink
            style={selectedMode === "subhuman" ? animationStyles.button : styles.button}
            onClick={() => setSelectedMode("subhuman")}
            to={`/ranking/subhuman`}
          >
            <img src="https://cdn.discordapp.com/emojis/1330875974526697482.webp?size=48" style={styles.icon} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    margin: "8px",
  },
  gamemodeContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: "12px",
    backgroundColor: Color.backgroundColor,
  },
  subhumanContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
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
  },
  icon: {
    height: "80%",
    backgroundColor: "transparent",
  },
};

export default GamemodeHeader;
