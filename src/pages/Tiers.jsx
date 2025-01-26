import React, { useEffect, useState } from "react";
import "../index.css";
import TierHeader from "../components/TierHeader";
import GamemodeHeader from "../components/GamemodeHeader";
import TierColumnContainer from "../components/TierColumnContainer";
import { useModal } from "../context/modalContext";
import Font from "react-font";
import TierModal from "../components/modal/TierModal";
import { useParams } from "react-router";
import { useSelectedMode } from "../context/selectedModeContext";

const Tiers = () => {
  const { modalState } = useModal();
  const { mode } = useParams();
  // const [selectedMode, setSelectedMode] = useState(mode);
  const { selectedMode, setSelectedMode } = useSelectedMode();

  useEffect(() => {
    setSelectedMode(mode);
  }, [mode]);

  return (
    <div style={{ minWidth: "1200px" }}>
      <Font family="Roboto">
        <GamemodeHeader
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />

        <Font family="Audiowide">
          <TierHeader />
        </Font>

        <TierColumnContainer selectedMode={selectedMode} />

        {modalState.show && <TierModal />}
      </Font>
    </div>
  );
};

export default Tiers;
