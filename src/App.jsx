import React, { useEffect, useState } from "react";
import "./App.css";
import TierHeader from "./components/TierHeader";
import GamemodeHeader from "./components/GamemodeHeader";
import TierColumnContainer from "./components/TierColumnContainer";
import TierDetailsModal from "./components/modal/TierModal";
import { useModal } from "./context/modalContext";
import Font from "react-font";

const App = () => {
  const { modalState } = useModal();
  const [selectedMode, setSelectedMode] = useState("sword");

  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => setInitialLoad(false), []);

  if (initialLoad) return <div>splash screen loading</div>;

  return (
    <div style={{ minWidth: "1200px" }}>
      <Font family="Roboto" onLoad={() => console.log("font loaded")}>
        <GamemodeHeader
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
        <Font family="Audiowide">
          <TierHeader />
        </Font>
        <TierColumnContainer
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
        {modalState.show && <TierDetailsModal />}
      </Font>
    </div>
  );
};

export default App;
