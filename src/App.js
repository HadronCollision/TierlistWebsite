import React, { useState } from "react";
import "./App.css";
import TierHeader from "./components/TierHeader";
import TierColumn from "./components/TierColumn";
import { playerData } from "./components/DummyData";
import { Color } from "./constants/Color";
import TierDetailsModal from "./components/TierModal";
import { ModalProvider, useModal } from "./context/modalContext";

const App = () => {
  const { modalState, setModalState } = useModal();

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-evenly",
      backgroundColor: Color.backgroundColor,
      height: "100%",
    },
    border: { border: `2px solid ${Color.headerColor}`, margin: 0, padding: 0 },
  };

  return (
    <div>
      <TierHeader />
      <div style={styles.container}>
        <TierColumn players={playerData.tier1s} />
        <div style={styles.border} />
        <TierColumn players={playerData.tier2s} />
        <div style={styles.border} />
        <TierColumn players={playerData.tier3s} />
        <div style={styles.border} />
        <TierColumn players={playerData.tier4s} />
        <div style={styles.border} />
        <TierColumn players={playerData.tier5s} />
      </div>
      {modalState.show && <TierDetailsModal />}
    </div>
  );
};

export default App;
