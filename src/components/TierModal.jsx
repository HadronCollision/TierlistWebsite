import React from "react";
import { Color } from "../constants/Color";
import { useModal } from "../context/modalContext";

function TierModal() {
  const { modalState, setModalState } = useModal();
  const { ign, rank, country } = modalState.player;

  const styles = {
    modalOverlay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      height: "100vh",
      width: "100vw",
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalBody: {
      height: "500px",
      width: "500px",
      borderRadius: "250px",
      backgroundColor: Color.lowTier,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    skinImage: { backgroundColor: Color.lowTier },
    ignText: {
      backgroundColor: Color.lowTier,
      fontSize: "20px",
      fontWeight: "bold",
    },
  };

  return (
    <div
      style={styles.modalOverlay}
      onClick={() => setModalState({ ...modalState, show: false })}
    >
      <div style={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <p style={styles.ignText}>{ign}</p>
        <img
          src={`https://render.crafty.gg/3d/full/${ign}`}
          alt="Player Skin"
          style={styles.skinImage}
        />
      </div>
    </div>
  );
}

export default TierModal;
