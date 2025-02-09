import React, { useState } from "react";
import Buttons from "./Buttons";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import PlayerContainer from "./PlayerContainer";

function GamemodeLeaderboard({ country, players }) {
  const [selectedMode, setSelectedMode] = useState("sword");

  return (
    <div>
      <Buttons
        buttons={[
          "sword",
          "netherite pot",
          "crystal",
          "diamond pot",
          "axe & shield",
          "uhc kit",
          "smp kit",
        ]}
        selectedButton={selectedMode}
        setSelectedButton={setSelectedMode}
        layoutId={country}
      />
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.subContainer)}>
          <div {...stylex.props(styles.title)}>
            <img
              src={
                country === "pak"
                  ? `https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg`
                  : `https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg`
              }
              {...stylex.props(styles.flag)}
            />
            TOP 10 BEST {selectedMode.toUpperCase()} PLAYERS
          </div>
          <div {...stylex.props(styles.playerContainer)}>
            {players.map((player, i) => (
              <PlayerContainer
                ign={player.ign}
                rank={player.rank}
                index={i}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.textColor,
    marginBottom: "32px",
    marginHorizontal: "48px",
  },
  subContainer: {
    width: "80%",
    backgroundColor: colors.primary,
    padding: "12px",
    borderRadius: "48px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    alignItems: "center",
    fontFamily: "Russo One",
    fontSize: "20px",
    height: "32px",
    marginBottom: "8px",
    userSelect: "none",
  },
  playerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  flag: {
    height: "100%",
    borderRadius: "4px",
  },
});

export default GamemodeLeaderboard;
