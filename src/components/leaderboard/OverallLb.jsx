import React, { useEffect, useState } from "react";
import PlayerContainer from "./PlayerContainer";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import { useQuery } from "@tanstack/react-query";
import { fetchLeaderboardData } from "../../api/API";

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject;
  });

const OverallLb = () => {
  const [players, setPlayers] = useState({
    pak: Array(10).fill(""),
    ind: Array(10).fill(""),
  });

  const [imageLoading, setImageLoading] = useState(true);

  const { data, isFetching } = useQuery({
    queryFn: () => fetchLeaderboardData("overall"),
    queryKey: ["leaderboard", "overall"],
    staleTime: 300_000,
    gcTime: 300_000,
  });

  useEffect(() => {
    if (data) {
      setPlayers(data);

      const images = [
        ...data.pak.map((ign) => `https://render.crafty.gg/2d/head/${ign}`),
        ...data.ind.map((ign) => `https://render.crafty.gg/2d/head/${ign}`),
      ];

      Promise.all([...images.map(loadImage)])
        .then(() => {
          setImageLoading(false);
          console.log("loaded");
        })
        .catch(() => {
          console.log("loaded with error");
          setImageLoading(false);
        });
    }
  }, [data]);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.subContainer, styles.leftSubContainer)}>
        <div {...stylex.props(styles.title)}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
            {...stylex.props(styles.flag)}
          />
          TOP 10 BEST PLAYERS FROM PAKISTAN
        </div>
        <div {...stylex.props(styles.playerContainer)}>
          {players.pak.map((ign, i) => (
            <PlayerContainer
              ign={ign}
              country="pak"
              index={i}
              isLoading={isFetching || imageLoading}
              key={i}
            />
          ))}
        </div>
      </div>

      <div {...stylex.props(styles.subContainer, styles.rightSubContainer)}>
        <div {...stylex.props(styles.title)}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            {...stylex.props(styles.flag)}
          />
          TOP 10 BEST PLAYERS FROM INDIA
        </div>
        <div {...stylex.props(styles.playerContainer)}>
          {players.ind.map((ign, i) => (
            <PlayerContainer
              ign={ign}
              country="ind"
              index={i}
              isLoading={isFetching || imageLoading}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    color: colors.textColor,
    marginBottom: "32px",
    marginHorizontal: "48px",
    border: `1px solid ${colors.secondary}`,
    borderRadius: "32px",
  },
  subContainer: {
    backgroundColor: colors.primary,
    padding: "12px",
    minWidth: "500px",
    width: "100%",
  },
  leftSubContainer: {
    borderRadius: "24px 0 0 24px",
  },
  rightSubContainer: {
    borderRadius: "0 24px 24px 0",
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

export default OverallLb;
