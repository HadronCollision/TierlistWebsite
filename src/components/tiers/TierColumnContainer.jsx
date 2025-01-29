import React from "react";
import { Color } from "../../constants/color";
import TierColumn from "./TierColumn";
import { useQuery } from "@tanstack/react-query";
import { fetchTierData } from "../../api/players";
import { GamemodeList } from "../../constants/gamemode";

function TierColumnContainer({ selectedMode }) {
  if (!GamemodeList.includes(selectedMode)) return;

  const { data: playerData } = useQuery({
    queryFn: () => fetchTierData(selectedMode),
    queryKey: ["players", selectedMode],
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });

  return (
    <div style={styles.container}>
      <TierColumn players={playerData?.tier1s} />
      <div style={styles.border} />
      <TierColumn players={playerData?.tier2s} />
      <div style={styles.border} />
      <TierColumn players={playerData?.tier3s} />
      <div style={styles.border} />
      <TierColumn players={playerData?.tier4s} />
      <div style={styles.border} />
      <TierColumn players={playerData?.tier5s} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: Color.backgroundColor,
    height: "100%",
  },
  border: {
    border: `2px solid ${Color.headerColor}`,
    margin: 0,
    padding: 0,
    height: "100vh",
  },
};

export default TierColumnContainer;
