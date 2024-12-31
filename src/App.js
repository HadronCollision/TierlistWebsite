import React, { useState } from "react";
import "./App.css";
import TierHeader from "./components/TierHeader";
import TierColumn from "./components/TierColumn";
import { playerData } from "./components/DummyData";
import { Color } from "./constants/Color";
import TierDetailsModal from "./components/TierModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

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
        <TierColumn onShowModal={setShowModal} players={playerData.tier1s} />
        <div style={styles.border} />
        <TierColumn onShowModal={setShowModal} players={playerData.tier2s} />
        <div style={styles.border} />
        <TierColumn onShowModal={setShowModal} players={playerData.tier3s} />
        <div style={styles.border} />
        <TierColumn onShowModal={setShowModal} players={playerData.tier4s} />
        <div style={styles.border} />
        <TierColumn onShowModal={setShowModal} players={playerData.tier5s} />
      </div>
      {showModal && <TierDetailsModal onShowModal={setShowModal} />}
    </div>
  );
};

export default App;
