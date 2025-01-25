import React, { useEffect, useState } from "react";
import "./App.css";
import TierHeader from "./components/TierHeader";
import GamemodeHeader from "./components/GamemodeHeader";
import TierColumnContainer from "./components/TierColumnContainer";
import { useModal } from "./context/modalContext";
import Font from "react-font";
import TierModal from "./components/modal/TierModal";
import { useParams } from "react-router";

const App = () => {
  const { modalState } = useModal();
  const [selectedMode, setSelectedMode] = useState("sword");
  const { mode } = useParams();

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

export default App;
