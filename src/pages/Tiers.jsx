import React, { useEffect } from "react";
import "../index.css";
import TierHeader from "../components/tiers/TierHeader";
import TierColumnContainer from "../components/tiers/TierColumnContainer";
import { useModal } from "../context/modalContext";
import TierModal from "../components/modal/TierModal";
import { Navigate, useParams } from "react-router";
import { useSelectedMode } from "../context/selectedModeContext";
import GamemodeHeader from "../components/tiers/GamemodeHeader";
import { GamemodeList } from "../constants/gamemode";

const Tiers = () => {
  const { modalState } = useModal();
  const { selectedMode } = useSelectedMode();
  const { mode } = useParams();

  if (!GamemodeList.includes(mode)) return <Navigate to="/" />;

  return (
    <div>
      <GamemodeHeader />
      <TierHeader />
      <TierColumnContainer selectedMode={selectedMode} />

      {modalState.show && <TierModal />}
    </div>
  );
};

export default Tiers;
