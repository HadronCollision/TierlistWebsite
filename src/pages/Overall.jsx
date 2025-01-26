import React from "react";
import GamemodeHeader from "../components/GamemodeHeader";
import Font from "react-font";
import { useSelectedMode } from "../context/selectedModeContext";

function Overall() {
  const { selectedMode, setSelectedMode } = useSelectedMode();

  return (
    <Font family="Roboto">
      <GamemodeHeader
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
      />
      <div>MANGO</div>
    </Font>
  );
}

export default Overall;
