import React from "react";

function TierModal({ onShowModal }) {
  console.log("mango");
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
      backgroundColor: "white",
    },
  };
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalBody}>
        <button onClick={() => onShowModal(false)}>MEGA</button>
      </div>
    </div>
  );
}

export default TierModal;
