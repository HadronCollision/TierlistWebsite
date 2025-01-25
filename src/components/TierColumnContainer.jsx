import React from "react";
import { Color } from "../constants/color";
import TierColumn from "./TierColumn";
import { useQuery } from "@tanstack/react-query";
import { fetchTierData } from "../api/players";

function TierColumnContainer({ selectedMode }) {
  const { data: playerData, isLoading } = useQuery({
    queryFn: () => fetchTierData(selectedMode),
    queryKey: ["players", selectedMode],
    staleTime: 0,
  });

  return (
    <div style={styles.container}>
      <TierColumn players={playerData?.tier1s} loading={isLoading} />
      <div style={styles.border} />
      <TierColumn players={playerData?.tier2s} loading={isLoading} />
      <div style={styles.border} />
      <TierColumn players={playerData?.tier3s} loading={isLoading} />
      <div style={styles.border} />
      <TierColumn players={playerData?.tier4s} loading={isLoading} />
      <div style={styles.border} />
      <TierColumn players={playerData?.tier5s} loading={isLoading} />
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
