import React from "react";
import "../index.css";
import TierHeader from "../components/tiers/TierHeader";
import TierColumnContainer from "../components/tiers/TierColumnContainer";
import { Navigate, useParams } from "react-router";
import { useSelectedMode } from "../context/selectedModeContext";
import GamemodeHeader from "../components/tiers/GamemodeHeader";
import { GamemodeList } from "../constants/gamemode";

const Tiers = () => {
  const { selectedMode } = useSelectedMode();
  const { mode } = useParams();

  if (!GamemodeList.includes(mode)) return <Navigate to="/" />;

  return (
    <div>
      <GamemodeHeader />
      <TierHeader />
      <TierColumnContainer selectedMode={selectedMode} />
    </div>
  );
};

export default Tiers;
