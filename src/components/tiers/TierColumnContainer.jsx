import React from "react";
import TierColumn from "./TierColumn";
import { useQuery } from "@tanstack/react-query";
import { fetchTierData } from "../../api/players";
import { GamemodeList } from "../../constants/gamemode";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../tokens.stylex";

function TierColumnContainer({ selectedMode }) {
  if (!GamemodeList.includes(selectedMode)) return;

  const { data: playerData } = useQuery({
    queryFn: () => fetchTierData(selectedMode),
    queryKey: ["players", selectedMode],
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });

  return (
    <div {...stylex.props(styles.container)}>
      <TierColumn players={playerData?.tier1s} />
      <div {...stylex.props(styles.border)} />
      <TierColumn players={playerData?.tier2s} />
      <div {...stylex.props(styles.border)} />
      <TierColumn players={playerData?.tier3s} />
      <div {...stylex.props(styles.border)} />
      <TierColumn players={playerData?.tier4s} />
      <div {...stylex.props(styles.border)} />
      <TierColumn players={playerData?.tier5s} />
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
