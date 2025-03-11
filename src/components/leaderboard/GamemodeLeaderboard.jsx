import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import PlayerContainer from "./PlayerContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchLeaderboardData } from "../../api/API";

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject;
  });

const GamemodeLeaderboard = ({ country }) => {
  const [selectedMode, setSelectedMode] = useState("sword");
  const [players, setPlayers] = useState({
    sword: Array(10).fill(""),
    nethpot: Array(10).fill(""),
    crystal: Array(10).fill(""),
    diapot: Array(10).fill(""),
    axe: Array(10).fill(""),
    uhc: Array(10).fill(""),
    smp: Array(10).fill(""),
  });
  const [imageLoading, setImageLoading] = useState(true);

  const { data, isFetching } = useQuery({
    queryFn: () => fetchLeaderboardData(`${country}lb`),
    queryKey: ["leaderboard", country],
    staleTime: 300_000,
    gcTime: 300_000,
  });

  useEffect(() => {
    if (data) {
      setPlayers(data);

      const images = [
        ...data.sword.map((p) => `https://render.crafty.gg/2d/head/${p.ign}`),
        ...data.nethpot.map((p) => `https://render.crafty.gg/2d/head/${p.ign}`),
        ...data.crystal.map((p) => `https://render.crafty.gg/2d/head/${p.ign}`),
        ...data.diapot.map((p) => `https://render.crafty.gg/2d/head/${p.ign}`),
        ...data.axe.map((p) => `https://render.crafty.gg/2d/head/${p.ign}`),
        ...data.uhc.map((p) => `https://render.crafty.gg/2d/head/${p.ign}`),
        ...data.smp.map((p) => `https://render.crafty.gg/2d/head/${p.ign}`),
      ];

      Promise.all(images.map(loadImage))
        .then(() => {
          setImageLoading(false);
        })
        .catch(() => {
          setImageLoading(false);
        });
    }
  }, [data]);

  return (
    <div>
      <Buttons
        buttons={[
          { label: "SWORD", id: "sword" },
          { label: "NETHERITE POT", id: "nethpot" },
          { label: "CRYSTAL", id: "crystal" },
          { label: "DIAMOND POT", id: "diapot" },
          { label: "AXE & SHIELD", id: "axe" },
          { label: "UHC KIT", id: "uhc" },
          { label: "SMP KIT", id: "smp" },
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
            {players[selectedMode].map((player, i) => (
              <PlayerContainer
                ign={player.ign}
                country={country}
                rank={player.rank}
                index={i}
                isLoading={isFetching}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
    minWidth: "1060px",
    backgroundColor: colors.primary,
    padding: "12px",
    borderRadius: "32px",
    border: `1px solid ${colors.secondary}`,
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
