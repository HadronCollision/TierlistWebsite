import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router";
import { useSelectedMode } from "../../context/selectedModeContext";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import GamemodeButton from "./GamemodeButton";

//prettier-ignore
const gamemodes = [
  { src: "https://mctiers.com/tier_icons/sword.svg", label: "Sword", id: "sword", route: "/tiers/sword" },
  { src: "https://mctiers.com/tier_icons/nethop.svg", label: "Netherite Pot", id: "nethpot", route: "/tiers/nethpot"},
  { src: "https://mctiers.com/tier_icons/vanilla.svg", label: "Crystal", id: "crystal", route: "/tiers/crystal" },
  { src: "https://mctiers.com/tier_icons/pot.svg", label: "Diamond Pot", id: "diapot", route: "/tiers/diapot" },
  { src: "https://mctiers.com/tier_icons/axe.svg", label: "Axe & Shield", id: "axe", route: "/tiers/axe" },
  { src: "https://mctiers.com/tier_icons/uhc.svg", label: "UHC Kit", id: "uhc", route: "/tiers/uhc" },
  { src: "https://mctiers.com/tier_icons/smp.svg", label: "SMP Kit", id: "smp", route: "/tiers/smp"},
];

const GamemodeHeader = () => {
  const { selectedMode, setSelectedMode } = useSelectedMode();
  const { pathname } = useLocation();

  useEffect(() => {
    setSelectedMode(pathname);
  }, [pathname]);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.gamemodeContainer)}>
        <GamemodeButton
          isSelected={selectedMode.startsWith("/leaderboard/")}
          onClick={() => setSelectedMode("/leaderboard/overall")}
          gamemode={{
            src: "https://mctiers.com/tier_icons/overall.svg",
            id: "leaderboard",
            route: "/leaderboard/overall",
          }}
        />
        {gamemodes.map((gamemode, index) => {
          return (
            <GamemodeButton
              gamemode={gamemode}
              isSelected={selectedMode === gamemode.route}
              onClick={useCallback(() => setSelectedMode(gamemode.route), [])}
              key={index}
            />
          );
        })}
      </div>
      <div {...stylex.props(styles.subhumanContainer)}>
        <GamemodeButton
          isSelected={selectedMode === "/subhuman"}
          onClick={() => setSelectedMode("subhuman")}
          gamemode={{
            src: "https://cdn.discordapp.com/emojis/1330875974526697482.webp?size=48",
            id: "subhuman",
            route: "/subhuman",
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
    margin: "8px 16px",
  },
  gamemodeContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: "12px",
  },
  subhumanContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
});

export default GamemodeHeader;
