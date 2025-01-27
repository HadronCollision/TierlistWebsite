import React, { useEffect } from "react";
import "../index.css";
import TierHeader from "../components/tiers/TierHeader";
import TierColumnContainer from "../components/tiers/TierColumnContainer";
import { useModal } from "../context/modalContext";
import Font from "react-font";
import TierModal from "../components/modal/TierModal";
import { useParams } from "react-router";
import { useSelectedMode } from "../context/selectedModeContext";
import GamemodeHeader from "../components/tiers/GamemodeHeader";

const Tiers = () => {
  const { modalState } = useModal();
  const { selectedMode, setSelectedMode } = useSelectedMode();
  const { mode } = useParams();

  useEffect(() => {
    setSelectedMode(mode);
  }, [mode]);

  return (
    <Font family="Roboto" style={{ width: "100vw", minWidth: "1200px" }}>
      <GamemodeHeader />
      <TierHeader />
      <TierColumnContainer selectedMode={selectedMode} />

      {modalState.show && <TierModal />}
    </Font>
  );
};

export default Tiers;
