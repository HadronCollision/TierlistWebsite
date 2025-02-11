import React from "react";
import TierColumn from "./TierColumn";
import { useQuery } from "@tanstack/react-query";
import { fetchTierData } from "../../api/players";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";
import { useSelectedMode } from "../../context/selectedModeContext";

function TierColumnContainer() {
  const { selectedMode } = useSelectedMode();
  const mode = selectedMode.split("/")[2];

  const { data: playerData, isLoading } = useQuery({
    queryFn: () => fetchTierData(mode),
    queryKey: ["players", mode],
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });

  return (
    <div {...stylex.props(styles.container)}>
      <TierColumn players={playerData?.tier1s} isLoading={isLoading} />
      <div {...stylex.props(styles.border)} />
      <TierColumn players={playerData?.tier2s} isLoading={isLoading} />
      <div {...stylex.props(styles.border)} />
      <TierColumn players={playerData?.tier3s} isLoading={isLoading} />
      <div {...stylex.props(styles.border)} />
      <TierColumn players={playerData?.tier4s} isLoading={isLoading} />
      <div {...stylex.props(styles.border)} />
      <TierColumn players={playerData?.tier5s} isLoading={isLoading} />
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: colors.backgroundColor,
    height: "100%",
  },
  border: {
    border: `2px solid ${colors.headerColor}`,
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

export default React.memo(TierColumnContainer);
