import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useSelectedMode } from "../../context/selectedModeContext";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import GamemodeButton from "./GamemodeButton";

//prettier-ignore
const gamemodes = [
  { src: "https://mctiers.com/assets/overall-ca77dd12.svg", label: "Overall", id: "overall", route: "/ranking/overall" },
  { src: "https://mctiers.com/assets/sword-9023278f.svg", label: "Sword", id: "sword", route: "/tiers/sword" },
  { src: "https://mctiers.com/assets/neth_pot-07e18fb6.svg", label: "Netherite Pot", id: "nethpot", route: "/tiers/nethpot"},
  { src: "https://mctiers.com/assets/vanilla-38455c89.svg", label: "Crystal", id: "crystal", route: "/tiers/crystal" },
  { src: "https://mctiers.com/assets/pot-5ade81ba.svg", label: "Diamond Pot", id: "diapot", route: "/tiers/diapot" },
  { src: "https://mctiers.com/assets/axe-09fbd7d8.svg", label: "Axe & Shield", id: "axe", route: "/tiers/axe" },
  { src: "https://mctiers.com/assets/uhc-05be850e.svg", label: "UHC Kit", id: "uhc", route: "/tiers/uhc" },
  { src: "https://mctiers.com/assets/smp-72ce94df.svg", label: "SMP Kit", id: "smp", route: "/tiers/smp"},
];

const GamemodeHeader = () => {
  const { pathname } = useLocation();
  const { selectedMode, setSelectedMode } = useSelectedMode();

  useEffect(() => {
    setSelectedMode(pathname.split("/")[2] || "overall");
  }, []);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.gamemodeContainer)}>
        {gamemodes.map((gamemode, index) => {
          return (
            <GamemodeButton
              gamemode={gamemode}
              isSelected={selectedMode === gamemode.id}
              onClick={() => setSelectedMode(gamemode.id)}
              key={index}
            />
          );
        })}
      </div>
      <div {...stylex.props(styles.subhumanContainer)}>
        <GamemodeButton
          isSelected={selectedMode === "subhuman"}
          onClick={() => setSelectedMode("subhuman")}
          gamemode={{
            src: "https://cdn.discordapp.com/emojis/1330875974526697482.webp?size=48",
            route: "/ranking/subhuman",
          }}
        />
      </div>
    </div>
  );
};

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: "8px",
  },
  gamemodeContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: "12px",
    backgroundColor: colors.backgroundColor,
  },
  subhumanContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
});

export default GamemodeHeader;
